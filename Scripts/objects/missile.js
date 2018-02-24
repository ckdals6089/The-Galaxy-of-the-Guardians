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
    Description : Created missile objects
*/
var objects;
(function (objects) {
    var Missile = /** @class */ (function (_super) {
        __extends(Missile, _super);
        //PUBLIC PROPERTIES
        //CONSTRUTOR
        function Missile(assetManager) {
            var _this = _super.call(this, assetManager, "missile") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        Missile.prototype._reset = function () {
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY; //TODO: + plane top
        };
        Missile.prototype._checkBounds = function () {
            if (this.y <= 0) {
                this._reset();
            }
        };
        Missile.prototype._move = function () {
            this.y -= this._dy;
            this._checkBounds();
        };
        Missile.prototype._updatePosition = function () {
            this.position.x = this.x;
            this.position.y = this.y;
        };
        //PUBLIC METHODS
        Missile.prototype.Start = function () {
            this._dy = 15;
        };
        Missile.prototype.Update = function () {
            if (this.y > 0) {
                this._updatePosition();
                this._move();
            }
        };
        Missile.prototype.ResetValue = function (value1, value2) {
            this.x = value1;
            this.y = value2;
        };
        return Missile;
    }(objects.GameObject));
    objects.Missile = Missile;
})(objects || (objects = {}));
//# sourceMappingURL=missile.js.map