/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 21, 2018
    Description : reset the button click event
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
    var openingScene = /** @class */ (function (_super) {
        __extends(openingScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function openingScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        openingScene.prototype._btnStartClick = function () {
            objects.Game.currentScene = config.Scene.CHOOSEMODE;
        };
        //PUBLIC METHODS
        openingScene.prototype.Start = function () {
            this._btnStart = new objects.Button(this.assetManager, "btnStart", 320, 340);
            this.Main();
            console.log("start");
        };
        openingScene.prototype.Update = function () {
        };
        openingScene.prototype.Main = function () {
            this.addChild(this._btnStart);
            this._btnStart.on("click", this._btnStartClick);
        };
        return openingScene;
    }(objects.Scene));
    scenes.openingScene = openingScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=opening.js.map