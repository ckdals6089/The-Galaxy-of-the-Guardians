/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : Feb 23, 2018
    Description : created gameover scene
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
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        //private _lblGameOver: objects.Label; // need to create a label
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        GameOverScene.prototype._btnBackClick = function () {
            objects.Game.currentScene = config.Scene.CHOOSEMODE;
        };
        //PUBLIC METHODS
        GameOverScene.prototype.Start = function () {
            this._btnBack = new objects.Button(this.assetManager, "btnBack", 320, 340);
            this.Main();
            console.log("game over");
        };
        GameOverScene.prototype.Update = function () {
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this._btnBack);
            this._btnBack.on("click", this._btnBackClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map