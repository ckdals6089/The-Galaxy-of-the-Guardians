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
    Last_modification : Apr 05, 2018
    Description : Created a boss class
*/
var objects;
(function (objects) {
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Boss() {
            var _this = _super.call(this, "bossA") || this;
            _this.Start();
            _this.life = 10;
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        Boss.prototype.Start = function () {
            this._dy = 5;
            this.x = 320;
            this.y = -this.height;
            // this.Reset();
        };
        Boss.prototype.Move = function () {
            this.y += this._dy;
        };
        Boss.prototype.CheckBounds = function () {
            //check the bottom border
            if (this.y >= 40) {
                this.y = 40;
            }
        };
        Boss.prototype.Update = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.Move();
            this.CheckBounds();
        };
        return Boss;
    }(objects.GameObject));
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map