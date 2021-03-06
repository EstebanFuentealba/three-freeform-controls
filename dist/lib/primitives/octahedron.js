"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var constants_1 = require("../utils/constants");
var Octahedron = /** @class */ (function (_super) {
    __extends(Octahedron, _super);
    function Octahedron(color, octahedronRadius) {
        if (octahedronRadius === void 0) { octahedronRadius = constants_1.DEFAULT_OCTAHEDRON_RADIUS; }
        var _this = _super.call(this) || this;
        _this.geometry = new THREE.OctahedronBufferGeometry(octahedronRadius, 0);
        _this.material = new THREE.MeshBasicMaterial({
            color: color,
            depthTest: false,
            transparent: true,
            side: THREE.DoubleSide
        });
        return _this;
    }
    return Octahedron;
}(THREE.Mesh));
exports.default = Octahedron;
//# sourceMappingURL=octahedron.js.map