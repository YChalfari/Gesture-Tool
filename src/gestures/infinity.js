const unistrokes = [
    [
        [4, 0],
        [6, 0],
        [9, -1],
        [11, -1],
        [13, -1],
        [17, -1],
        [21, -1],
        [27, 1],
        [36, 7],
        [45, 13],
        [55, 22],
        [64, 32],
        [69, 40],
        [74, 47],
        [77, 52],
        [80, 55],
        [82, 57],
        [85, 58],
        [89, 59],
        [95, 59],
        [104, 57],
        [113, 50],
        [122, 40],
        [130, 28],
        [135, 17],
        [137, 9],
        [138, 3],
        [137, -1],
        [134, -5],
        [127, -8],
        [118, -10],
        [109, -11],
        [101, -11],
        [95, -11],
        [92, -11],
        [88, -10],
        [80, -5],
        [66, 7],
        [50, 22],
        [36, 36],
        [25, 48],
        [18, 54],
        [15, 57],
        [13, 58],
        [11, 59],
        [7, 59],
        [1, 59],
        [-6, 60],
        [-13, 60],
        [-18, 59],
        [-22, 58],
        [-25, 56],
        [-27, 50],
        [-28, 41],
        [-28, 32],
        [-26, 23],
        [-23, 15],
        [-21, 10],
        [-19, 6],
        [-18, 3],
        [-17, 0],
        [-16, -2],
        [-16, -4],
        [-15, -6],
        [-14, -8],
        [-13, -10],
        [-12, -11],
        [-12, -11],
    ],
    [
        [0, -3],
        [0, -6],
        [0, -10],
        [0, -13],
        [0, -15],
        [0, -16],
        [2, -19],
        [6, -25],
        [13, -31],
        [19, -36],
        [23, -39],
        [25, -40],
        [26, -41],
        [26, -41],
        [27, -41],
        [28, -41],
        [31, -41],
        [36, -39],
        [40, -37],
        [45, -35],
        [48, -33],
        [50, -32],
        [51, -31],
        [52, -29],
        [53, -27],
        [56, -25],
        [58, -22],
        [61, -19],
        [64, -17],
        [65, -15],
        [67, -13],
        [70, -10],
        [73, -7],
        [77, -2],
        [80, 4],
        [84, 10],
        [87, 15],
        [90, 21],
        [92, 25],
        [94, 29],
        [96, 33],
        [98, 35],
        [99, 36],
        [99, 37],
        [100, 37],
        [102, 38],
        [104, 38],
        [108, 38],
        [113, 38],
        [118, 37],
        [122, 35],
        [126, 33],
        [129, 31],
        [132, 28],
        [135, 24],
        [137, 19],
        [139, 14],
        [140, 11],
        [141, 9],
        [142, 6],
        [142, 0],
        [143, -7],
        [144, -12],
        [144, -16],
        [144, -19],
        [144, -21],
        [144, -23],
        [142, -26],
        [141, -29],
        [139, -31],
        [137, -34],
        [136, -36],
        [135, -37],
        [133, -38],
        [131, -38],
        [129, -39],
        [125, -39],
        [122, -39],
        [118, -39],
        [115, -39],
        [112, -39],
        [109, -39],
        [107, -38],
        [105, -37],
        [102, -36],
        [99, -34],
        [95, -31],
        [92, -29],
        [89, -27],
        [86, -25],
        [84, -23],
        [81, -21],
        [77, -17],
        [72, -12],
        [68, -7],
        [64, -2],
        [62, 1],
        [60, 3],
        [59, 5],
        [57, 9],
        [54, 14],
        [51, 20],
        [47, 26],
        [45, 31],
        [43, 33],
        [42, 34],
        [42, 34],
        [41, 35],
        [40, 35],
        [39, 36],
        [38, 36],
        [35, 36],
        [32, 36],
        [28, 36],
        [23, 36],
        [19, 36],
        [15, 35],
        [12, 33],
        [10, 32],
        [9, 30],
        [8, 28],
        [7, 26],
        [6, 24],
        [5, 21],
        [4, 18],
        [3, 15],
        [2, 13],
        [1, 10],
        [0, 7],
        [-1, 5],
        [-2, 3],
        [-2, 1],
        [-3, -1],
        [-3, -2],
        [-3, -3],
        [-3, -4],
        [-3, -4],
        [-3, -5],
        [-3, -5],
        [-3, -5],
    ],
    [
        [3, -2],
        [10, -7],
        [19, -13],
        [28, -17],
        [38, -19],
        [45, -20],
        [51, -20],
        [55, -16],
        [59, -9],
        [63, -1],
        [68, 6],
        [73, 12],
        [77, 17],
        [81, 20],
        [85, 22],
        [87, 23],
        [90, 23],
        [93, 23],
        [98, 19],
        [104, 13],
        [108, 6],
        [112, 1],
        [113, -3],
        [114, -6],
        [114, -8],
        [112, -10],
        [109, -12],
        [103, -14],
        [97, -15],
        [90, -16],
        [81, -16],
        [72, -14],
        [67, -11],
        [61, -6],
        [57, -2],
        [51, 5],
        [45, 12],
        [38, 18],
        [33, 22],
        [30, 23],
        [27, 24],
        [23, 23],
        [15, 18],
        [7, 11],
        [0, 5],
        [-5, -1],
        [-7, -6],
        [-8, -9],
        [-8, -12],
        [-6, -14],
        [-4, -15],
    ],
    [
        [15, 0],
        [29, 1],
        [41, 2],
        [48, 4],
        [53, 7],
        [54, 9],
        [54, 13],
        [54, 18],
        [51, 28],
        [41, 41],
        [29, 54],
        [18, 65],
        [8, 73],
        [1, 78],
        [-3, 81],
        [-6, 82],
        [-8, 84],
        [-9, 86],
        [-9, 88],
        [-10, 92],
        [-10, 97],
        [-9, 104],
        [-6, 109],
        [-1, 114],
        [3, 116],
        [8, 116],
        [12, 117],
        [18, 115],
        [25, 110],
        [31, 103],
        [35, 96],
        [39, 88],
        [40, 81],
        [40, 74],
        [37, 67],
        [30, 58],
        [22, 49],
        [13, 40],
        [4, 31],
        [-1, 24],
        [-6, 16],
        [-9, 9],
        [-11, 1],
        [-12, -8],
        [-12, -15],
        [-11, -18],
    ],
    [
        [3, 0],
        [8, 0],
        [16, 0],
        [26, 0],
        [36, 0],
        [45, 0],
        [55, 0],
        [64, 1],
        [72, 3],
        [76, 5],
        [79, 8],
        [81, 10],
        [82, 11],
        [82, 13],
        [82, 14],
        [81, 16],
        [80, 20],
        [77, 24],
        [74, 28],
        [71, 32],
        [68, 35],
        [64, 37],
        [60, 40],
        [53, 43],
        [45, 47],
        [36, 50],
        [26, 53],
        [17, 57],
        [9, 61],
        [3, 65],
        [-1, 69],
        [-4, 72],
        [-6, 77],
        [-7, 82],
        [-9, 87],
        [-9, 93],
        [-9, 97],
        [-9, 100],
        [-9, 102],
        [-8, 104],
        [-5, 107],
        [1, 112],
        [10, 117],
        [20, 124],
        [31, 130],
        [39, 133],
        [44, 135],
        [47, 136],
        [50, 137],
        [54, 136],
        [59, 133],
        [64, 128],
        [69, 123],
        [71, 119],
        [73, 115],
        [73, 112],
        [73, 109],
        [73, 106],
        [71, 103],
        [68, 100],
        [64, 96],
        [60, 93],
        [56, 88],
        [50, 82],
        [44, 76],
        [38, 71],
        [33, 67],
        [29, 62],
        [25, 57],
        [22, 53],
        [20, 49],
        [18, 46],
        [17, 43],
        [16, 42],
        [15, 40],
        [14, 37],
        [13, 32],
        [12, 27],
        [11, 21],
        [10, 16],
        [10, 12],
        [9, 9],
        [9, 8],
        [9, 7],
        [9, 6],
        [9, 6],
        [9, 5],
        [9, 5],
        [9, 5],
        [9, 4],
        [9, 4],
        [9, 3],
        [9, 3],
        [9, 3],
    ],
    [
        [8, 0],
        [28, -4],
        [58, -10],
        [88, -13],
        [111, -14],
        [126, -15],
        [136, -15],
        [142, -14],
        [145, -11],
        [148, -8],
        [150, -4],
        [152, 1],
        [154, 6],
        [155, 11],
        [156, 15],
        [156, 17],
        [155, 19],
        [152, 21],
        [144, 24],
        [133, 29],
        [116, 35],
        [92, 45],
        [66, 55],
        [45, 64],
        [31, 71],
        [20, 78],
        [14, 83],
        [9, 87],
        [6, 91],
        [4, 96],
        [1, 101],
        [-1, 107],
        [-2, 113],
        [-2, 121],
        [-2, 129],
        [-2, 137],
        [0, 145],
        [4, 152],
        [7, 155],
        [13, 158],
        [22, 160],
        [39, 161],
        [66, 156],
        [97, 145],
        [126, 132],
        [145, 123],
        [157, 117],
        [164, 112],
        [167, 110],
        [168, 109],
        [168, 109],
        [168, 108],
        [167, 105],
        [163, 98],
        [158, 91],
        [152, 83],
        [146, 75],
        [139, 69],
        [131, 64],
        [120, 62],
        [108, 61],
        [95, 60],
        [82, 59],
        [71, 58],
        [61, 57],
        [53, 56],
        [45, 54],
        [38, 52],
        [34, 50],
        [30, 48],
        [26, 46],
        [22, 43],
        [17, 40],
        [13, 36],
        [9, 34],
        [7, 32],
        [7, 29],
        [6, 28],
        [6, 26],
        [6, 23],
        [6, 21],
        [6, 19],
        [6, 17],
        [6, 15],
        [6, 14],
        [6, 12],
        [7, 11],
        [7, 10],
        [8, 9],
        [9, 8],
        [9, 7],
        [10, 7],
        [10, 7],
    ],
    [
        [-4, -8],
        [-10, -12],
        [-16, -16],
        [-21, -20],
        [-24, -22],
        [-26, -23],
        [-27, -23],
        [-29, -23],
        [-31, -23],
        [-33, -23],
        [-35, -21],
        [-39, -17],
        [-45, -12],
        [-51, -5],
        [-57, 2],
        [-63, 10],
        [-67, 17],
        [-69, 25],
        [-71, 31],
        [-71, 37],
        [-72, 42],
        [-72, 47],
        [-69, 53],
        [-61, 61],
        [-48, 69],
        [-33, 77],
        [-20, 83],
        [-9, 85],
        [-1, 87],
        [3, 86],
        [6, 84],
        [8, 77],
        [11, 67],
        [14, 56],
        [17, 43],
        [20, 30],
        [22, 18],
        [23, 8],
        [24, 1],
        [24, -3],
        [25, -6],
        [27, -8],
        [30, -10],
        [34, -13],
        [39, -16],
        [43, -19],
        [47, -20],
        [49, -20],
        [50, -20],
        [51, -20],
        [53, -20],
        [57, -18],
        [62, -14],
        [67, -8],
        [73, -2],
        [77, 4],
        [79, 8],
        [80, 11],
        [81, 14],
        [81, 16],
        [81, 19],
        [80, 22],
        [77, 26],
        [75, 29],
        [73, 32],
        [72, 34],
        [70, 36],
        [68, 37],
        [66, 39],
        [63, 40],
        [61, 41],
        [58, 41],
        [55, 41],
        [51, 41],
        [47, 41],
        [42, 41],
        [36, 40],
        [29, 38],
        [21, 33],
        [14, 29],
        [8, 24],
        [3, 18],
        [0, 14],
        [-2, 9],
        [-3, 3],
        [-4, -3],
        [-5, -8],
        [-5, -12],
        [-5, -14],
        [-5, -15],
        [-5, -16],
        [-5, -17],
    ],
];

export default unistrokes;