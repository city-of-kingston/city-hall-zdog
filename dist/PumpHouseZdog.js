"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactZdog = require("react-zdog");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var BRICK = "#B53D3B";
var BRICK_DARK = "#a85858";
var GROUND = "#eee";
var ROOF = "#DD6A68";
var WINDOW = "#484848";
var WINDOW_FRAME = "#777";
var SMOKE = "#ccc";
var WIDTH = 30;
var HEIGHT = 10;
var DEPTH = 20;

var Window = function Window(props) {
  return _react["default"].createElement(_reactZdog.Group, props, _react["default"].createElement(_reactZdog.Ellipse, {
    diameter: 4,
    color: WINDOW,
    fill: true
  }), _react["default"].createElement(_reactZdog.Ellipse, {
    diameter: 4,
    color: WINDOW_FRAME,
    stroke: 2
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: 4,
    height: 4,
    translate: {
      y: 2.5
    },
    color: WINDOW_FRAME,
    stroke: 2
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: 4,
    height: 4,
    scale: 0.95,
    fill: true,
    translate: {
      y: 2.5
    },
    color: WINDOW
  }));
};

var PumpHouseZdog = function PumpHouseZdog() {
  return _react["default"].createElement(_reactZdog.Anchor, {
    scale: 10,
    rotate: {
      y: Math.PI * 0.8,
      x: -Math.PI / 8
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
      y: -HEIGHT / 2
    }
  }, _react["default"].createElement(_reactZdog.Group, {
    translate: {
      z: -DEPTH / 2
    }
  }, _react["default"].createElement(_reactZdog.Polygon, {
    radius: 5,
    sides: 3,
    fill: true,
    translate: {
      y: -HEIGHT / 2 - 1
    },
    stroke: 2,
    scale: {
      y: 0.4
    },
    color: BRICK
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: WIDTH,
    height: HEIGHT,
    color: BRICK,
    fill: true
  }), _react["default"].createElement(Window, {
    scale: {
      x: 1.3
    }
  }), _react["default"].createElement(Window, {
    scale: {
      x: 1.3
    },
    translate: {
      x: WIDTH / 3
    }
  }), _react["default"].createElement(Window, {
    scale: {
      x: 1.3
    },
    translate: {
      x: -WIDTH / 3
    }
  }), _react["default"].createElement(Window, {
    scale: 0.3,
    translate: {
      y: -5.3
    }
  }), _react["default"].createElement(Window, {
    scale: 0.25,
    translate: {
      y: -5,
      x: 1.7
    }
  }), _react["default"].createElement(Window, {
    scale: 0.25,
    translate: {
      y: -5,
      x: -1.7
    }
  })), _react["default"].createElement(_reactZdog.Group, {
    translate: {
      z: DEPTH / 2
    }
  }, _react["default"].createElement(_reactZdog.Polygon, {
    radius: 5,
    sides: 3,
    fill: true,
    translate: {
      y: -HEIGHT / 2 - 1
    },
    stroke: 2,
    scale: {
      y: 0.4
    },
    color: BRICK
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: WIDTH,
    height: HEIGHT,
    color: BRICK,
    fill: true
  }), _react["default"].createElement(Window, {
    scale: {
      x: 1.3
    }
  }), _react["default"].createElement(Window, {
    scale: {
      x: 1.3
    },
    translate: {
      x: WIDTH / 3
    }
  }), _react["default"].createElement(Window, {
    scale: {
      x: 1.3
    },
    translate: {
      x: -WIDTH / 3
    }
  })), _react["default"].createElement(_reactZdog.Group, {
    translate: {
      x: -WIDTH / 2
    },
    rotate: {
      y: Math.PI / 2
    }
  }, _react["default"].createElement(_reactZdog.Polygon, {
    radius: DEPTH / 2,
    sides: 3,
    fill: true,
    translate: {
      y: -HEIGHT / 2 - 1
    },
    stroke: 2,
    scale: {
      y: 0.2
    },
    color: BRICK
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: DEPTH,
    height: HEIGHT,
    color: BRICK,
    fill: true
  }), _react["default"].createElement(Window, null), _react["default"].createElement(Window, {
    translate: {
      x: DEPTH / 3
    }
  }), _react["default"].createElement(Window, {
    translate: {
      x: -DEPTH / 3
    }
  })), _react["default"].createElement(_reactZdog.Group, {
    translate: {
      x: WIDTH / 2
    },
    rotate: {
      y: Math.PI / 2
    }
  }, _react["default"].createElement(_reactZdog.Polygon, {
    radius: DEPTH / 2,
    sides: 3,
    fill: true,
    translate: {
      y: -HEIGHT / 2 - 1
    },
    stroke: 2,
    scale: {
      y: 0.2
    },
    color: BRICK
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: DEPTH,
    height: HEIGHT,
    color: BRICK,
    fill: true
  })), _react["default"].createElement(_reactZdog.Anchor, {
    translate: {
      y: -HEIGHT / 2
    }
  }, _react["default"].createElement(_reactZdog.Group, null, _react["default"].createElement(_reactZdog.Rect, {
    width: 5,
    height: DEPTH,
    fill: true,
    color: ROOF,
    rotate: {
      x: Math.PI / 2,
      y: Math.PI / 5
    },
    translate: {
      y: -1.5,
      x: -2
    }
  }), _react["default"].createElement(_reactZdog.Rect, {
    width: 5,
    height: DEPTH,
    fill: true,
    color: ROOF,
    rotate: {
      x: Math.PI / 2,
      y: -Math.PI / 5
    },
    translate: {
      y: -1.5,
      x: 2
    }
  }), _react["default"].createElement(_reactZdog.Rect, {
    height: DEPTH / 2,
    width: WIDTH,
    fill: true,
    color: ROOF,
    rotate: {
      x: Math.PI / 2 - Math.PI / 9
    },
    translate: {
      y: -1.5,
      z: DEPTH / 4 - 0.2
    },
    stroke: 4
  }), _react["default"].createElement(_reactZdog.Rect, {
    height: DEPTH / 2,
    width: WIDTH,
    fill: true,
    color: ROOF,
    rotate: {
      x: Math.PI / 2 + Math.PI / 9
    },
    translate: {
      y: -1.5,
      z: -DEPTH / 4 + 0.2
    },
    stroke: 4
  }))), _react["default"].createElement(_reactZdog.Box, {
    width: DEPTH / 2,
    height: HEIGHT,
    depth: DEPTH / 2,
    color: BRICK,
    translate: {
      x: WIDTH / 2 + DEPTH / 4,
      z: -DEPTH / 4 + 3
    }
  }, _react["default"].createElement(_reactZdog.Cylinder, {
    diameter: 3,
    length: 10,
    rotate: {
      x: Math.PI / 2
    },
    translate: {
      y: -5 - HEIGHT / 2
    },
    color: BRICK_DARK
  }), _react["default"].createElement(_reactZdog.Shape, {
    stroke: 25,
    color: SMOKE,
    translate: {
      y: -18
    }
  }), _react["default"].createElement(_reactZdog.Shape, {
    stroke: 22,
    color: SMOKE,
    translate: {
      y: -19,
      x: 1
    }
  }), _react["default"].createElement(_reactZdog.Shape, {
    stroke: 20,
    color: SMOKE,
    translate: {
      y: -20,
      z: 2,
      x: -1
    }
  }), _react["default"].createElement(_reactZdog.Shape, {
    stroke: 25,
    color: SMOKE,
    translate: {
      y: -22
    }
  }))));
};

var _default = PumpHouseZdog;
exports["default"] = _default;