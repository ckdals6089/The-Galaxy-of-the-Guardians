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
    Version : v1.2
    Last_modification : Apr 06, 2018
    Description : Changed the missile basic settings
*/
var objects;
(function (objects) {
    var Missile = /** @class */ (function (_super) {
        __extends(Missile, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUTOR
        function Missile() {
            var _this = _super.call(this, "missile") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        // //PUBLIC METHODS
        Missile.prototype.Start = function () {
            //console.log(objects.Plane.getPosition);
            this._dy = -10;
            this._dx = 0;
            this.Reset();
        };
        Missile.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Missile.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Missile.prototype.CheckBounds = function () {
            if (this.y <= -this.height) {
                this.Reset();
            }
        };
        Missile.prototype.Move = function () {
            this.y += this._dy;
        };
        return Missile;
    }(objects.GameObject));
    objects.Missile = Missile;
})(objects || (objects = {}));
//# sourceMappingURL=missile.js.map