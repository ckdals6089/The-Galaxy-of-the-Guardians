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
    Name : Jowon Shin
    Version : v1.0
    Last_modification : April 05, 2018
    Description : Created Explosion File
*/
var objects;
(function (objects) {
    var Explosion = /** @class */ (function (_super) {
        __extends(Explosion, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Explosion() {
            var _this = _super.call(this, "explosion") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        Explosion.prototype._animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        };
        //PUBLIC METHODS
        Explosion.prototype.Start = function () {
            this.on("animationend", this._animationEnded.bind(this), false);
        };
        Explosion.prototype.Update = function () {
        };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map