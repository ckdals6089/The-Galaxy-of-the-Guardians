/*
    Name : Jowon Shin
    Version : v1.1
    Last_modification : April 07, 2018
    Description : Updated Update method
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
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        // Public Propoerties
        // Constructor
        function Label(labelString, fontSize, fontFamily, fontColour, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, labelString, fontSize + " " + fontFamily, fontColour) || this;
            if (isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            _this._boss = managers.Game.boss;
            _this._scoreBoard = managers.Game.scoreboardManager;
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initializes variables and creates new objects
        // updates the game object every frame
        Label.prototype.Update = function () {
            if (this._boss.alpha === 0) {
                createjs.Sound.play("tada");
                this.alpha = 1;
                this.Move();
            }
            else {
                this.alpha = 0;
            }
        };
        // reset the objects location to some value
        Label.prototype.Reset = function () {
            this.alpha = 0;
            this.x = 320;
            this.y = 600;
        };
        // move the object to some new location
        Label.prototype.Move = function () {
            this.y -= 5;
        };
        // check to see if some boundary has been passed
        Label.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y < 0) {
                //if (this.x >= 1000) {
                this.Reset();
            }
        };
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map