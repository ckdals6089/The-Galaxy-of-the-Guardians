/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Mar 16, 2018
    Description : Created second stage scene
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
    var StageTwoScene = /** @class */ (function (_super) {
        __extends(StageTwoScene, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function StageTwoScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        StageTwoScene.prototype.Start = function () {
            this.Main();
        };
        StageTwoScene.prototype.Update = function () {
        };
        StageTwoScene.prototype.Main = function () {
        };
        return StageTwoScene;
    }(objects.Scene));
    scenes.StageTwoScene = StageTwoScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play_two.js.map