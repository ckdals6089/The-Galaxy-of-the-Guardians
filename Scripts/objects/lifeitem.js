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
    Last_modification : Mar 16, 2018
    Description : Created Life Item
*/
var objects;
(function (objects) {
    var LifeItem = /** @class */ (function (_super) {
        __extends(LifeItem, _super);
        // private instance variables
        // public properties
        // Constructor
        function LifeItem() {
            var _this = _super.call(this, "lifeitem") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        LifeItem.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        // updates the game object every frame
        LifeItem.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        LifeItem.prototype.Reset = function () {
            this.alpha = 1;
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.centerY);
            this.y = -this.height;
        };
        // move the object to some new location
        LifeItem.prototype.Move = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        LifeItem.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        return LifeItem;
    }(objects.GameObject));
    objects.LifeItem = LifeItem;
})(objects || (objects = {}));
//# sourceMappingURL=lifeitem.js.map