/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 20, 2018
    Description : Set background object in playScene
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
    var playScene = /** @class */ (function (_super) {
        __extends(playScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function playScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        playScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this.Main();
        };
        playScene.prototype.Update = function () {
            this._background.Update();
            this._plane.Update();
        };
        playScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._plane);
        };
        return playScene;
    }(objects.Scene));
    scenes.playScene = playScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map