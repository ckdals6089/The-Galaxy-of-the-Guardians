/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created Gameobject object
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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUTORS
        function GameObject(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._init();
            return _this;
        }
        //PRIVATE METHODS
        GameObject.prototype._init = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.regX = this.centerX;
            this.regY = this.centerY;
            this.position = new createjs.Point(this.x, this.y);
        };
        //PUBLIC METHODS
        GameObject.prototype.Reset = function () {
        };
        GameObject.prototype.CheckBounds = function () {
        };
        GameObject.prototype.Move = function () {
        };
        GameObject.prototype.Start = function () {
        };
        GameObject.prototype.Update = function () {
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map