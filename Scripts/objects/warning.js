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
    Name : Jowon Shin, Dongwan Kim
    Version : v1.0
    Last_modification : Feb 26, 2018
    Description : Created Warning
*/
var objects;
(function (objects) {
    var Warning = /** @class */ (function (_super) {
        __extends(Warning, _super);
        // public properties
        // Constructor
        function Warning(assetManager) {
            var _this = _super.call(this, assetManager.getResult("warning")) || this;
            _this.x = 10;
            _this.y = 100;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Warning.prototype.Start = function () {
            this.alpha = 0;
            this._scoreBoard = managers.Game.scoreboardManager;
            this._boss = managers.Game.boss;
            this.Reset();
        };
        // updates the game object every frame
        Warning.prototype.Update = function () {
            if (this._boss.y < 50) {
                //if (this._scoreBoard.Score === 300) {
                createjs.Sound.play("warningSound");
                this.alpha = 1;
                this.Move();
            }
            else if (this._boss.y === 50) {
                this.alpha = 0;
                this.Reset();
            }
            this.CheckBounds();
        };
        // reset the objects location to some value
        Warning.prototype.Reset = function () {
            this.alpha = 0;
            this.x = 10;
            this.y = 100;
        };
        // move the object to some new location
        Warning.prototype.Move = function () {
            this.x += 10;
        };
        // check to see if some boundary has been passed
        Warning.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x >= 640 + managers.Game.currentSceneObject.getBounds().width) {
                //if (this.x >= 1000) {
                this.Reset();
            }
        };
        return Warning;
    }(createjs.Bitmap));
    objects.Warning = Warning;
})(objects || (objects = {}));
//# sourceMappingURL=warning.js.map