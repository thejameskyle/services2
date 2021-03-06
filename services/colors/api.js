export default function(router) {
  router.get('/colors', (req, res) => {
    res.json({ colors });
  });
}

const colors = [
  {
    "id": 1,
    "name": "AliceBlue",
    "hex": "#F0F8FF"
  },
  {
    "id": 2,
    "name": "AntiqueWhite",
    "hex": "#FAEBD7"
  },
  {
    "id": 3,
    "name": "Aqua",
    "hex": "#00FFFF"
  },
  {
    "id": 4,
    "name": "Aquamarine",
    "hex": "#7FFFD4"
  },
  {
    "id": 5,
    "name": "Azure",
    "hex": "#F0FFFF"
  },
  {
    "id": 6,
    "name": "Beige",
    "hex": "#F5F5DC"
  },
  {
    "id": 7,
    "name": "Bisque",
    "hex": "#FFE4C4"
  },
  {
    "id": 8,
    "name": "Black",
    "hex": "#000000"
  },
  {
    "id": 9,
    "name": "BlanchedAlmond",
    "hex": "#FFEBCD"
  },
  {
    "id": 10,
    "name": "Blue",
    "hex": "#0000FF"
  },
  {
    "id": 11,
    "name": "BlueViolet",
    "hex": "#8A2BE2"
  },
  {
    "id": 12,
    "name": "Brown",
    "hex": "#A52A2A"
  },
  {
    "id": 13,
    "name": "BurlyWood",
    "hex": "#DEB887"
  },
  {
    "id": 14,
    "name": "CadetBlue",
    "hex": "#5F9EA0"
  },
  {
    "id": 15,
    "name": "Chartreuse",
    "hex": "#7FFF00"
  },
  {
    "id": 16,
    "name": "Chocolate",
    "hex": "#D2691E"
  },
  {
    "id": 17,
    "name": "Coral",
    "hex": "#FF7F50"
  },
  {
    "id": 18,
    "name": "CornflowerBlue",
    "hex": "#6495ED"
  },
  {
    "id": 19,
    "name": "Cornsilk",
    "hex": "#FFF8DC"
  },
  {
    "id": 20,
    "name": "Crimson",
    "hex": "#DC143C"
  },
  {
    "id": 21,
    "name": "Cyan",
    "hex": "#00FFFF"
  },
  {
    "id": 22,
    "name": "DarkBlue",
    "hex": "#00008B"
  },
  {
    "id": 23,
    "name": "DarkCyan",
    "hex": "#008B8B"
  },
  {
    "id": 24,
    "name": "DarkGoldenRod",
    "hex": "#B8860B"
  },
  {
    "id": 25,
    "name": "DarkGray",
    "hex": "#A9A9A9"
  },
  {
    "id": 26,
    "name": "DarkGreen",
    "hex": "#006400"
  },
  {
    "id": 27,
    "name": "DarkKhaki",
    "hex": "#BDB76B"
  },
  {
    "id": 28,
    "name": "DarkMagenta",
    "hex": "#8B008B"
  },
  {
    "id": 29,
    "name": "DarkOliveGreen",
    "hex": "#556B2F"
  },
  {
    "id": 30,
    "name": "DarkOrange",
    "hex": "#FF8C00"
  },
  {
    "id": 31,
    "name": "DarkOrchid",
    "hex": "#9932CC"
  },
  {
    "id": 32,
    "name": "DarkRed",
    "hex": "#8B0000"
  },
  {
    "id": 33,
    "name": "DarkSalmon",
    "hex": "#E9967A"
  },
  {
    "id": 34,
    "name": "DarkSeaGreen",
    "hex": "#8FBC8F"
  },
  {
    "id": 35,
    "name": "DarkSlateBlue",
    "hex": "#483D8B"
  },
  {
    "id": 36,
    "name": "DarkSlateGray",
    "hex": "#2F4F4F"
  },
  {
    "id": 37,
    "name": "DarkTurquoise",
    "hex": "#00CED1"
  },
  {
    "id": 38,
    "name": "DarkViolet",
    "hex": "#9400D3"
  },
  {
    "id": 39,
    "name": "DeepPink",
    "hex": "#FF1493"
  },
  {
    "id": 40,
    "name": "DeepSkyBlue",
    "hex": "#00BFFF"
  },
  {
    "id": 41,
    "name": "DimGray",
    "hex": "#696969"
  },
  {
    "id": 42,
    "name": "DodgerBlue",
    "hex": "#1E90FF"
  },
  {
    "id": 43,
    "name": "FireBrick",
    "hex": "#B22222"
  },
  {
    "id": 44,
    "name": "FloralWhite",
    "hex": "#FFFAF0"
  },
  {
    "id": 45,
    "name": "ForestGreen",
    "hex": "#228B22"
  },
  {
    "id": 46,
    "name": "Fuchsia",
    "hex": "#FF00FF"
  },
  {
    "id": 47,
    "name": "Gainsboro",
    "hex": "#DCDCDC"
  },
  {
    "id": 48,
    "name": "GhostWhite",
    "hex": "#F8F8FF"
  },
  {
    "id": 49,
    "name": "Gold",
    "hex": "#FFD700"
  },
  {
    "id": 50,
    "name": "GoldenRod",
    "hex": "#DAA520"
  },
  {
    "id": 51,
    "name": "Gray",
    "hex": "#808080"
  },
  {
    "id": 52,
    "name": "Green",
    "hex": "#008000"
  },
  {
    "id": 53,
    "name": "GreenYellow",
    "hex": "#ADFF2F"
  },
  {
    "id": 54,
    "name": "HoneyDew",
    "hex": "#F0FFF0"
  },
  {
    "id": 55,
    "name": "HotPink",
    "hex": "#FF69B4"
  },
  {
    "id": 56,
    "name": "IndianRed",
    "hex": "#CD5C5C"
  },
  {
    "id": 57,
    "name": "Indigo",
    "hex": "#4B0082"
  },
  {
    "id": 58,
    "name": "Ivory",
    "hex": "#FFFFF0"
  },
  {
    "id": 59,
    "name": "Khaki",
    "hex": "#F0E68C"
  },
  {
    "id": 60,
    "name": "Lavender",
    "hex": "#E6E6FA"
  },
  {
    "id": 61,
    "name": "LavenderBlush",
    "hex": "#FFF0F5"
  },
  {
    "id": 62,
    "name": "LawnGreen",
    "hex": "#7CFC00"
  },
  {
    "id": 63,
    "name": "LemonChiffon",
    "hex": "#FFFACD"
  },
  {
    "id": 64,
    "name": "LightBlue",
    "hex": "#ADD8E6"
  },
  {
    "id": 65,
    "name": "LightCoral",
    "hex": "#F08080"
  },
  {
    "id": 66,
    "name": "LightCyan",
    "hex": "#E0FFFF"
  },
  {
    "id": 67,
    "name": "LightGoldenRodYellow",
    "hex": "#FAFAD2"
  },
  {
    "id": 68,
    "name": "LightGray",
    "hex": "#D3D3D3"
  },
  {
    "id": 69,
    "name": "LightGreen",
    "hex": "#90EE90"
  },
  {
    "id": 70,
    "name": "LightPink",
    "hex": "#FFB6C1"
  },
  {
    "id": 71,
    "name": "LightSalmon",
    "hex": "#FFA07A"
  },
  {
    "id": 72,
    "name": "LightSeaGreen",
    "hex": "#20B2AA"
  },
  {
    "id": 73,
    "name": "LightSkyBlue",
    "hex": "#87CEFA"
  },
  {
    "id": 74,
    "name": "LightSlateGray",
    "hex": "#778899"
  },
  {
    "id": 75,
    "name": "LightSteelBlue",
    "hex": "#B0C4DE"
  },
  {
    "id": 76,
    "name": "LightYellow",
    "hex": "#FFFFE0"
  },
  {
    "id": 77,
    "name": "Lime",
    "hex": "#00FF00"
  },
  {
    "id": 78,
    "name": "LimeGreen",
    "hex": "#32CD32"
  },
  {
    "id": 79,
    "name": "Linen",
    "hex": "#FAF0E6"
  },
  {
    "id": 80,
    "name": "Magenta",
    "hex": "#FF00FF"
  },
  {
    "id": 81,
    "name": "Maroon",
    "hex": "#800000"
  },
  {
    "id": 82,
    "name": "MediumAquaMarine",
    "hex": "#66CDAA"
  },
  {
    "id": 83,
    "name": "MediumBlue",
    "hex": "#0000CD"
  },
  {
    "id": 84,
    "name": "MediumOrchid",
    "hex": "#BA55D3"
  },
  {
    "id": 85,
    "name": "MediumPurple",
    "hex": "#9370DB"
  },
  {
    "id": 86,
    "name": "MediumSeaGreen",
    "hex": "#3CB371"
  },
  {
    "id": 87,
    "name": "MediumSlateBlue",
    "hex": "#7B68EE"
  },
  {
    "id": 88,
    "name": "MediumSpringGreen",
    "hex": "#00FA9A"
  },
  {
    "id": 89,
    "name": "MediumTurquoise",
    "hex": "#48D1CC"
  },
  {
    "id": 90,
    "name": "MediumVioletRed",
    "hex": "#C71585"
  },
  {
    "id": 91,
    "name": "MidnightBlue",
    "hex": "#191970"
  },
  {
    "id": 92,
    "name": "MintCream",
    "hex": "#F5FFFA"
  },
  {
    "id": 93,
    "name": "MistyRose",
    "hex": "#FFE4E1"
  },
  {
    "id": 94,
    "name": "Moccasin",
    "hex": "#FFE4B5"
  },
  {
    "id": 95,
    "name": "NavajoWhite",
    "hex": "#FFDEAD"
  },
  {
    "id": 96,
    "name": "Navy",
    "hex": "#000080"
  },
  {
    "id": 97,
    "name": "OldLace",
    "hex": "#FDF5E6"
  },
  {
    "id": 98,
    "name": "Olive",
    "hex": "#808000"
  },
  {
    "id": 99,
    "name": "OliveDrab",
    "hex": "#6B8E23"
  },
  {
    "id": 100,
    "name": "Orange",
    "hex": "#FFA500"
  },
  {
    "id": 101,
    "name": "OrangeRed",
    "hex": "#FF4500"
  },
  {
    "id": 102,
    "name": "Orchid",
    "hex": "#DA70D6"
  },
  {
    "id": 103,
    "name": "PaleGoldenRod",
    "hex": "#EEE8AA"
  },
  {
    "id": 104,
    "name": "PaleGreen",
    "hex": "#98FB98"
  },
  {
    "id": 105,
    "name": "PaleTurquoise",
    "hex": "#AFEEEE"
  },
  {
    "id": 106,
    "name": "PaleVioletRed",
    "hex": "#DB7093"
  },
  {
    "id": 107,
    "name": "PapayaWhip",
    "hex": "#FFEFD5"
  },
  {
    "id": 108,
    "name": "PeachPuff",
    "hex": "#FFDAB9"
  },
  {
    "id": 109,
    "name": "Peru",
    "hex": "#CD853F"
  },
  {
    "id": 110,
    "name": "Pink",
    "hex": "#FFC0CB"
  },
  {
    "id": 111,
    "name": "Plum",
    "hex": "#DDA0DD"
  },
  {
    "id": 112,
    "name": "PowderBlue",
    "hex": "#B0E0E6"
  },
  {
    "id": 113,
    "name": "Purple",
    "hex": "#800080"
  },
  {
    "id": 114,
    "name": "Red",
    "hex": "#FF0000"
  },
  {
    "id": 115,
    "name": "RosyBrown",
    "hex": "#BC8F8F"
  },
  {
    "id": 116,
    "name": "RoyalBlue",
    "hex": "#4169E1"
  },
  {
    "id": 117,
    "name": "SaddleBrown",
    "hex": "#8B4513"
  },
  {
    "id": 118,
    "name": "Salmon",
    "hex": "#FA8072"
  },
  {
    "id": 119,
    "name": "SandyBrown",
    "hex": "#F4A460"
  },
  {
    "id": 120,
    "name": "SeaGreen",
    "hex": "#2E8B57"
  },
  {
    "id": 121,
    "name": "SeaShell",
    "hex": "#FFF5EE"
  },
  {
    "id": 122,
    "name": "Sienna",
    "hex": "#A0522D"
  },
  {
    "id": 123,
    "name": "Silver",
    "hex": "#C0C0C0"
  },
  {
    "id": 124,
    "name": "SkyBlue",
    "hex": "#87CEEB"
  },
  {
    "id": 125,
    "name": "SlateBlue",
    "hex": "#6A5ACD"
  },
  {
    "id": 126,
    "name": "SlateGray",
    "hex": "#708090"
  },
  {
    "id": 127,
    "name": "Snow",
    "hex": "#FFFAFA"
  },
  {
    "id": 128,
    "name": "SpringGreen",
    "hex": "#00FF7F"
  },
  {
    "id": 129,
    "name": "SteelBlue",
    "hex": "#4682B4"
  },
  {
    "id": 130,
    "name": "Tan",
    "hex": "#D2B48C"
  },
  {
    "id": 131,
    "name": "Teal",
    "hex": "#008080"
  },
  {
    "id": 132,
    "name": "Thistle",
    "hex": "#D8BFD8"
  },
  {
    "id": 133,
    "name": "Tomato",
    "hex": "#FF6347"
  },
  {
    "id": 134,
    "name": "Turquoise",
    "hex": "#40E0D0"
  },
  {
    "id": 135,
    "name": "Violet",
    "hex": "#EE82EE"
  },
  {
    "id": 136,
    "name": "Wheat",
    "hex": "#F5DEB3"
  },
  {
    "id": 137,
    "name": "White",
    "hex": "#FFFFFF"
  },
  {
    "id": 138,
    "name": "WhiteSmoke",
    "hex": "#F5F5F5"
  },
  {
    "id": 139,
    "name": "Yellow",
    "hex": "#FFFF00"
  },
  {
    "id": 140,
    "name": "YellowGreen",
    "hex": "#9ACD32"
  }
];
