"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactZdog = require("react-zdog");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LIMESTONE = "#E2E2DC";
var LIMESTONE_DARK = "#cfcfc8";
var GROUND = "#fafafa";
var ROOF = "#707065";
var ROOF_GREEN = "#96BAA0";
var WINDOW = "#DBF0F9";
var WINDOW_FRAME = "#C0CACE";
var HEIGHT = 12;

var Windows = function Windows(_ref) {
  var _ref$w = _ref.w,
      w = _ref$w === void 0 ? 6 : _ref$w,
      _ref$h = _ref.h,
      h = _ref$h === void 0 ? 2 : _ref$h;
  var windows = [];

  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h; y++) {
      windows.push(_react["default"].createElement(_reactZdog.Anchor, {
        key: "".concat(x, ".").concat(y),
        translate: {
          x: (x - w / 2 + 0.5) * 2,
          y: (y - h / 2 + 0.5) * 3
        }
      }, _react["default"].createElement(_reactZdog.RoundedRect, {
        width: 1,
        height: 2.2,
        fill: true,
        color: WINDOW
      }), _react["default"].createElement(_reactZdog.RoundedRect, {
        width: 1,
        height: 2.2,
        stroke: 3,
        color: WINDOW_FRAME
      })));
    }
  }

  return _react["default"].createElement(_react.Fragment, null, windows.map(function (win) {
    return win;
  }));
};

var Spire = function Spire(_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? ROOF : _ref2$color,
      props = _objectWithoutProperties(_ref2, ["color"]);

  return _react["default"].createElement(_reactZdog.Anchor, props, _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 1.5,
    length: 1.5,
    color: LIMESTONE,
    translate: {
      y: -1.5 / 2
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Hemisphere, {
    diameter: 1.5,
    color: color,
    translate: {
      y: -1.5
    },
    rotate: {
      x: Math.PI / 2
    }
  }));
};

var CityHallZdog = function CityHallZdog() {
  var ref = (0, _react.useRef)(undefined);
  (0, _reactZdog.useRender)(function () {
    ref.current.rotate.x = -Math.PI / 8; // ref.current.rotate.x = (Math.sin(Date.now() / 1000) - 1.3) * Math.PI / 12;

    ref.current.rotate.y += 0.005;
  });
  return _react["default"].createElement(_reactZdog.Anchor, {
    ref: ref,
    scale: 10,
    rotate: {
      y: Math.PI * 0.8
    }
  }, _react["default"].createElement(_reactZdog.Group, null, _react["default"].createElement(_reactZdog.Ellipse, {
    diameter: 50,
    fill: true,
    rotate: {
      x: Math.PI / 2
    },
    color: GROUND
  }), _react["default"].createElement(_reactZdog.Shape, {
    translate: {
      y: 100000
    },
    visible: false
  })), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      z: -5
    }
  }, _react["default"].createElement(_reactZdog.Group, {
    translate: {
      y: -HEIGHT
    }
  }, _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: HEIGHT / 2
    }
  }, _react["default"].createElement(_reactZdog.Box, {
    width: 30,
    depth: 10,
    height: HEIGHT,
    color: LIMESTONE
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 10,
    length: HEIGHT,
    color: LIMESTONE,
    translate: {
      x: 15
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Box, {
    width: 5,
    depth: 5,
    height: HEIGHT,
    color: LIMESTONE,
    translate: {
      x: 17.5,
      z: -2.5
    }
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 10,
    length: HEIGHT,
    color: LIMESTONE,
    translate: {
      x: -15
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Box, {
    width: 5,
    depth: 5,
    height: HEIGHT,
    color: LIMESTONE,
    translate: {
      x: -17.5,
      z: -2.5
    }
  })), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -1
    }
  }, _react["default"].createElement(_reactZdog.Box, {
    width: 10,
    depth: 10,
    height: 2,
    translate: {},
    color: LIMESTONE_DARK
  }), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      x: 11
    }
  }, _react["default"].createElement(_reactZdog.Rect, {
    width: 12,
    height: 5,
    fill: true,
    color: ROOF,
    translate: {
      z: 2.35
    },
    rotate: {
      x: Math.PI / 2 - Math.PI / 8
    }
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: 12,
    height: 5,
    fill: true,
    color: ROOF,
    translate: {
      z: -2.35
    },
    rotate: {
      x: Math.PI / 2 + Math.PI / 8
    }
  }), _react["default"].createElement(Spire, {
    translate: {
      y: -1
    }
  })), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      x: -11
    }
  }, _react["default"].createElement(_reactZdog.Rect, {
    width: 12,
    height: 5,
    fill: true,
    color: ROOF,
    translate: {
      z: 2.35
    },
    rotate: {
      x: Math.PI / 2 - Math.PI / 8
    }
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: 12,
    height: 5,
    fill: true,
    color: ROOF,
    translate: {
      z: -2.35
    },
    rotate: {
      x: Math.PI / 2 + Math.PI / 8
    }
  }), _react["default"].createElement(Spire, {
    translate: {
      y: -1
    }
  })))), _react["default"].createElement(_reactZdog.Group, {
    translate: {
      y: -HEIGHT - 1
    }
  }, _react["default"].createElement(_reactZdog.Box, {
    width: 8,
    depth: 8,
    height: 2,
    translate: {
      y: -1 - 1
    },
    color: ROOF
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 5,
    length: 4,
    color: LIMESTONE,
    translate: {
      y: -1 - 2 - 2
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Hemisphere, {
    diameter: 5,
    color: ROOF,
    translate: {
      y: -1 - 2 - 4
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 1.3,
    length: 1.5,
    color: LIMESTONE,
    translate: {
      y: -1 - 2 - 4 - 2.5 - 1.5 / 2
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Hemisphere, {
    diameter: 1.3,
    color: ROOF,
    translate: {
      y: -1 - 2 - 4 - 2.5 - 1.5
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 0.2,
    length: 1,
    color: LIMESTONE_DARK,
    translate: {
      y: -1 - 2 - 4 - 2.5 - 1.5 - 0.5 - 0.5
    },
    rotate: {
      x: Math.PI / 2
    }
  })), _react["default"].createElement(_reactZdog.Group, null, _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -HEIGHT / 2
    }
  }, _react["default"].createElement(_reactZdog.Box, {
    width: 10,
    depth: 2,
    height: 2,
    translate: {
      z: -1 - 5,
      y: -HEIGHT / 2 + 1
    },
    color: LIMESTONE_DARK
  }), _react["default"].createElement(_reactZdog.Box, {
    width: 10,
    depth: 2,
    height: 2,
    translate: {
      z: -1 - 5,
      y: HEIGHT / 2 - 1
    },
    color: LIMESTONE_DARK
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 1.5,
    length: HEIGHT,
    color: LIMESTONE_DARK,
    translate: {
      z: -1 - 5,
      x: -4
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 1.5,
    length: HEIGHT,
    color: LIMESTONE_DARK,
    translate: {
      z: -1 - 5,
      x: -1.5
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 1.5,
    length: HEIGHT,
    color: LIMESTONE_DARK,
    translate: {
      z: -1 - 5,
      x: 1.5
    },
    rotate: {
      x: Math.PI / 2
    }
  }), _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 1.5,
    length: HEIGHT,
    color: LIMESTONE_DARK,
    translate: {
      z: -1 - 5,
      x: 4
    },
    rotate: {
      x: Math.PI / 2
    }
  })), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -HEIGHT - 1
    }
  }, _react["default"].createElement(_reactZdog.Polygon, {
    radius: 5,
    sides: 3,
    fill: true,
    translate: {
      z: -2 - 5,
      y: 0.3
    },
    stroke: 2,
    scale: {
      y: 0.23
    },
    color: LIMESTONE_DARK
  }), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      z: -5
    }
  }, _react["default"].createElement(_reactZdog.Rect, {
    width: 5,
    height: 2,
    fill: true,
    color: ROOF,
    translate: {
      z: -1,
      x: 2.35
    },
    rotate: {
      x: Math.PI / 2,
      y: -Math.PI / 8
    }
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: 5,
    height: 2,
    fill: true,
    color: ROOF,
    translate: {
      z: -1,
      x: -2.35
    },
    rotate: {
      x: Math.PI / 2,
      y: Math.PI / 8
    }
  }), _react["default"].createElement(_reactZdog.Shape, {
    visible: false,
    translate: {
      z: -5,
      y: -5
    }
  }))), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -HEIGHT / 2,
      z: -5,
      x: 12
    }
  }, _react["default"].createElement(Windows, null)), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -HEIGHT / 2,
      z: -5,
      x: -12
    }
  }, _react["default"].createElement(Windows, null))), _react["default"].createElement(_reactZdog.Group, null, _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -HEIGHT / 2,
      z: 5,
      x: -11
    }
  }, _react["default"].createElement(Windows, null)), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -HEIGHT / 2,
      z: 5,
      x: 11
    }
  }, _react["default"].createElement(Windows, null))), _react["default"].createElement(_reactZdog.Group, {
    translate: {
      y: -HEIGHT / 2 + 1,
      z: 15,
      x: 5
    },
    rotate: {
      y: Math.PI / 2
    }
  }, _react["default"].createElement(Windows, {
    w: 9
  })), _react["default"].createElement(_reactZdog.Group, {
    translate: {
      y: -HEIGHT / 2 + 1,
      z: 15,
      x: -5
    },
    rotate: {
      y: Math.PI / 2
    }
  }, _react["default"].createElement(Windows, {
    w: 9
  })), _react["default"].createElement(_reactZdog.Group, {
    translate: {
      y: -HEIGHT + 2
    }
  }, _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: HEIGHT / 2 - 1
    }
  }, _react["default"].createElement(_reactZdog.Box, {
    width: 10,
    depth: 20,
    translate: {
      z: 15
    },
    height: HEIGHT - 2,
    color: LIMESTONE
  })), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -1,
      z: 15
    }
  }, _react["default"].createElement(_reactZdog.Rect, {
    width: 5,
    height: 20,
    fill: true,
    color: ROOF_GREEN,
    translate: {
      x: 2.35
    },
    rotate: {
      x: Math.PI / 2,
      y: -Math.PI / 8
    }
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: 5,
    height: 20,
    fill: true,
    color: ROOF_GREEN,
    translate: {
      x: -2.35
    },
    rotate: {
      x: Math.PI / 2,
      y: Math.PI / 8
    }
  }), _react["default"].createElement(Spire, {
    translate: {
      y: -1
    },
    color: ROOF_GREEN
  })))));
};

var _default = CityHallZdog;
exports["default"] = _default;