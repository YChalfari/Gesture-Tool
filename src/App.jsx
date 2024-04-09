import GESTURES from "./gestures";
import "./App.css";

import { useState, useEffect, useCallback, useRef } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Hammer from "hammerjs";

const App = () => {
    const [gestures, setGestures] = useState(() => {
        const storedGestures = localStorage.getItem("gestures");
        return storedGestures ? JSON.parse(storedGestures) : [];
    });
    const [currentGestureGroup, setCurrentGestureGroup] = useState(null);

    useEffect(() => {
        localStorage.setItem("gestures", JSON.stringify(gestures));
    }, [gestures]);

    const addGesture = useCallback(
        (points) => {
            if (currentGestureGroup) {
                setGestures((prevGestures) =>
                    prevGestures.map((group) =>
                        group.name === currentGestureGroup.name
                            ? {
                                  ...group,
                                  gestures: [...group.gestures, points],
                              }
                            : group
                    )
                );
            } else {
                const newGroup = {
                    name: `custom_${gestures.length}`,
                    gestures: [points],
                };
                setGestures((prevGestures) => [...prevGestures, newGroup]);
                setCurrentGestureGroup(newGroup);
            }
            console.log(gestures);
        },
        [currentGestureGroup, gestures]
    );

    const addGroup = useCallback(
        (groupName) => {
            if (!gestures.some((group) => group.name === groupName)) {
                const newGroup = { name: groupName, gestures: [] };
                setGestures((prevGestures) => [...prevGestures, newGroup]);
                setCurrentGestureGroup(newGroup);
            }
        },
        [gestures]
    );

    const clearLocalStorage = () => {
        localStorage.removeItem("gestures");
        setGestures([]);
        setCurrentGestureGroup(null);
    };

    const saveGesturesAsFile = () => {
        const formattedGestures = JSON.stringify(gestures, null, 2);
        const blob = new Blob([formattedGestures], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "gestures.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/Gesture-Tool"
                    element={
                        <DrawPage
                            gestures={gestures}
                            addGesture={addGesture}
                            setCurrentGestureGroup={setCurrentGestureGroup}
                            currentGestureGroup={currentGestureGroup}
                            addGroup={addGroup}
                            clearLocalStorage={clearLocalStorage}
                            saveGesturesAsFile={saveGesturesAsFile}
                        />
                    }
                />
                <Route
                    path="/Gesture-Tool/visualize"
                    element={<VisualizationPage gestures={gestures} />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/Gesture-Tool" replace />}
                />
            </Routes>
        </div>
    );
};

export default App;

const DrawPage = ({
    gestures,
    addGesture,
    currentGestureGroup,
    setCurrentGestureGroup,
    addGroup,
    clearLocalStorage,
    saveGesturesAsFile,
}) => {
    const navigate = useNavigate();
    const onGesture = useCallback(
        (points) => {
            addGesture(points);
        },
        [addGesture]
    );

    const handleAddGroup = useCallback(
        (groupName) => {
            addGroup(groupName);
        },
        [addGroup]
    );

    const viewGestures = () => navigate("/Gesture-Tool/visualize");

    return (
        <div className="draw_page">
            <DrawGesture onGesture={onGesture} />
            <GroupSelection
                gestures={gestures}
                setCurrentGestureGroup={setCurrentGestureGroup}
                currentGestureGroup={currentGestureGroup}
                handleAddGroup={handleAddGroup}
            />
            <button style={{ marginTop: "10px" }} onClick={clearLocalStorage}>
                Clear Saved Gestures
            </button>
            <button
                style={{ marginTop: "10px", marginLeft: "10px" }}
                onClick={viewGestures}>
                View Gestures
            </button>
            <button
                style={{ marginTop: "10px", marginLeft: "10px" }}
                onClick={saveGesturesAsFile}>
                Save Gestures
            </button>
        </div>
    );
};
const DrawGesture = ({ onGesture }) => {
    const containerRef = useRef();

    return (
        <>
            <h1>Draw something</h1>
            <div
                ref={containerRef}
                className={"gesturePad__inner"}
                style={{ width: "400px", height: "400px" }}>
                <GestureRecorder
                    element={containerRef.current}
                    onGesture={onGesture}
                />
                <GesturePainter />
            </div>
        </>
    );
};

const GesturePainter = () => {
    const canvasRef = useRef(null);
    const isPaintingRef = useRef(false);

    const startPainting = useCallback(() => {
        isPaintingRef.current = true;
        const context = canvasRef.current.getContext("2d");
        context.lineWidth = 10;
        context.lineCap = "round";
        context.strokeStyle = "#5d14c0";
        context.beginPath();
    }, []);

    const endPainting = useCallback(() => {
        if (!isPaintingRef.current) {
            return;
        }
        isPaintingRef.current = false;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    }, []);

    const paint = useCallback(({ nativeEvent, touches }) => {
        if (!isPaintingRef.current) {
            return;
        }

        let x;
        let y;

        if (touches) {
            // Native mobile devices
            const { top, left } = canvasRef.current.getBoundingClientRect();
            x = touches[0].clientX - left;
            y = touches[0].clientY - top;
        } else {
            // Mouse browsers
            x = nativeEvent.offsetX;
            y = nativeEvent.offsetY;
        }

        const context = canvasRef.current.getContext("2d");
        context.lineTo(x, y);
        context.stroke();
    }, []);

    const handleTouchMove = useCallback(
        ({ touches }) => {
            if (!isPaintingRef.current) {
                return;
            }

            const { top, left, width, height } =
                canvasRef.current.getBoundingClientRect();
            const { clientX, clientY } = touches[0];

            if (
                // touch inside of canvas bounds
                clientX >= left &&
                clientX <= left + width &&
                clientY >= top &&
                clientY <= top + height
            ) {
                paint({ touches });
            } else {
                // touch outside of canvas bounds
                endPainting();
            }
        },
        [endPainting, paint]
    );

    return (
        <canvas
            ref={canvasRef}
            width={"400px"}
            height={"400px"}
            onMouseDown={startPainting}
            onTouchStart={startPainting}
            onMouseMove={paint}
            onTouchMove={handleTouchMove}
            onMouseUp={endPainting}
            onTouchEnd={endPainting}
            onMouseLeave={endPainting}
        />
    );
};

function GestureRecorder({ element, onGesture }) {
    useEffect(() => {
        const manager = new Hammer.Manager(element || document.body);
        manager.add(
            new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 })
        );
        let points;

        manager.on("panstart", (evt) => {
            points = [];
        });
        manager.on("panmove", (evt) => {
            points.push([evt.deltaX, evt.deltaY]);
        });
        manager.on("panend", (evt) => {
            if (!points || points.length === 0) {
                return;
            }

            // uncomment the following line to log the gesture array:
            // console.log(points.map((p) => `[${p.X}, ${p.Y}]`).join(","));
            if (onGesture) {
                onGesture(points);
            }
        });

        return () => {
            manager.destroy();
        };
    }, [element, onGesture]);

    return null;
}

const GroupSelection = ({
    gestures,
    setCurrentGestureGroup,
    currentGestureGroup,
    handleAddGroup,
}) => {
    const [newGroupName, setNewGroupName] = useState("");

    const selectGroup = (groupName) => {
        setCurrentGestureGroup(
            gestures.find((group) => group.name === groupName)
        );
    };

    const handleGroupNameChange = (event) => {
        setNewGroupName(event.target.value);
    };

    const handleAddGroupClick = () => {
        if (newGroupName.trim() !== "") {
            handleAddGroup(newGroupName.trim());
            setNewGroupName("");
        }
    };

    return (
        <div className="group-selection">
            <h2>Group Selection</h2>
            <select
                value={currentGestureGroup ? currentGestureGroup.name : ""}
                onChange={(e) => selectGroup(e.target.value)}>
                <option value="">Select a group...</option>
                {gestures.map((group) => (
                    <option key={group.name} value={group.name}>
                        {group.name}
                    </option>
                ))}
            </select>
            <div className="add-group">
                <input
                    type="text"
                    placeholder="Enter group name"
                    value={newGroupName}
                    onChange={handleGroupNameChange}
                />
                <button onClick={handleAddGroupClick}>Add Group</button>
            </div>
        </div>
    );
};

const VisualizationPage = ({ gestures }) => {
    const navigate = useNavigate();
    return (
        <div className="app flexColCenter">
            <h1>Unistroke Visualizer</h1>
            <button onClick={() => navigate("/Gesture-Tool")}>
                Back to Draw Page
            </button>
            {gestures?.map((group, i) => (
                <GroupContainer
                    group={group}
                    key={`group${i}`}
                    id={`group${i}`}
                />
            ))}
        </div>
    );
};
const GroupContainer = ({ group, id }) => {
    const [show, setShow] = useState(true);
    const toggleShow = () => {
        setShow(!show);
    };
    return (
        <div className="flexColCenter" onClick={toggleShow}>
            <h3>
                {group.name || "Unnamed"}{" "}
                <span className="collapseText">{show ? "hide" : "show"}</span>
            </h3>
            <div className="pointsContainer">
                {show
                    ? group.gestures.map((gesture, i) => (
                          <UnistrokeVisualizer
                              points={gesture}
                              key={`${id}${i}`}
                              id={`${id}${i}`}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};

const UnistrokeVisualizer = ({ points, id }) => {
    const [canvasSize, setCanvasSize] = useState({ width: 300, height: 300 });

    useEffect(() => {
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (points && points.length > 1) {
            const minX = Math.min(...points.map(([x]) => x));
            const minY = Math.min(...points.map(([, y]) => y));
            const maxX = Math.max(...points.map(([x]) => x));
            const maxY = Math.max(...points.map(([, y]) => y));

            const scale = Math.min(
                canvasSize.width / (maxX - minX),
                canvasSize.height / (maxY - minY)
            );

            ctx.beginPath();
            ctx.moveTo(
                (points[0][0] - minX) * scale,
                (points[0][1] - minY) * scale
            );
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(
                    (points[i][0] - minX) * scale,
                    (points[i][1] - minY) * scale
                );
            }
            ctx.stroke();
        }
    }, [points, canvasSize, id]);

    return (
        <canvas
            id={id}
            width={canvasSize.width}
            height={canvasSize.height}
            style={{ border: "3px solid yellow", backgroundColor: "white" }}
        />
    );
};
