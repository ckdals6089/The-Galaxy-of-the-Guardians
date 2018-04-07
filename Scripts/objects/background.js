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
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created background objects
*/
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        //CONSTRUCTOR
        function Background(assetManager) {
            var _this = _super.call(this, assetManager.getResult("background")) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Background.prototype, "Dy", {
            //PUBLIC PROPERTIES
            get: function () {
                return this._dy;
            },
            set: function (_dy) {
                this._dy = _dy;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS
        Background.prototype._reset = function () {
            this.y = -1000;
        };
        Background.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        Background.prototype._move = function () {
            this.y += this._dy;
        };
        //PUBLIC METHODS
        Background.prototype.Start = function () {
            this._dy = 1;
            this._reset();
        };
        Background.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map