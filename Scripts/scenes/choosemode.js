/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Created chooseModeScene
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
    var chooseModeScene = /** @class */ (function (_super) {
        __extends(chooseModeScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function chooseModeScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        chooseModeScene.prototype._btnNormalClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        chooseModeScene.prototype._btnHellClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        //PUBLIC METHODS
        chooseModeScene.prototype.Start = function () {
            this._btnNormal = new objects.Button(this.assetManager, "btnNormal", 200, 340);
            this._btnHell = new objects.Button(this.assetManager, "btnHell", 440, 340);
            this.Main();
            console.log("start");
        };
        chooseModeScene.prototype.Update = function () {
        };
        chooseModeScene.prototype.Main = function () {
            this.addChild(this._btnNormal);
            this.addChild(this._btnHell);
            this._btnNormal.on("click", this._btnNormalClick);
            this._btnHell.on("click", this._btnHellClick);
        };
        return chooseModeScene;
    }(objects.Scene));
    scenes.chooseModeScene = chooseModeScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=choosemode.js.map