/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : March 16, 2018
    Description : Designed Logo Object
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Logo = /** @class */ (function (_super) {
        __extends(Logo, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function Logo(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.regX = _this.getBounds().width * 0.5;
            _this.regY = _this.getBounds().height * 0.5;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Logo;
    }(createjs.Bitmap));
    objects.Logo = Logo;
})(objects || (objects = {}));
//# sourceMappingURL=logo.js.map