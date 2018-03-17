/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : March 16, 2018
    Description : Created a splash scene
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
    var loadingScene = /** @class */ (function (_super) {
        __extends(loadingScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function loadingScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        loadingScene.prototype.GoStart = function () {
            setTimeout(
            //Move to Opening scene after 3 seconds
            function () {
                managers.Game.currentScene = config.Scene.OPENING;
            }, 3000);
        };
        loadingScene.prototype.AnimateLogo = function () {
        };
        //PUBLIC METHODS
        loadingScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Logo(this.assetManager, "imgLogo", 320, 220);
            this.Main();
            console.log("loading game..");
        };
        loadingScene.prototype.Update = function () {
        };
        loadingScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._logo);
            this.AnimateLogo();
            this.GoStart();
        };
        return loadingScene;
    }(objects.Scene));
    scenes.loadingScene = loadingScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=loading.js.map