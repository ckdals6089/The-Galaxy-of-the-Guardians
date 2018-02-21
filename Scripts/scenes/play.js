/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Created first pages
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
        //PRIVATE VARIABLES
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
        };
        playScene.prototype.Update = function () {
        };
        playScene.prototype.Main = function () {
        };
        playScene.prototype.Init = function () {
        };
        return playScene;
    }(objects.Scene));
    scenes.playScene = playScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map