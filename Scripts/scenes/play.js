/*
    Name : Dongwan Kim
    Version : v1.4
    Last_modification : Feb 23, 2018
    Description : Added enemy array
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
            this._missileNum = 5;
            this._missileCount = 0;
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this._enemyNum = 10;
            this._enemy = new Array();
            this._missile = new Array();
            this._bulletFire = this._bulletFire.bind(this);
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy(this.assetManager);
            }
            this.Main();
        };
        playScene.prototype.Update = function () {
            this._background.Update();
            this._plane.Update();
            //onsole.log("Plane : " + this._plane.centerX);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                console.log(enemy.x);
                //this._crash(this._plane,enemy);
            });
            this._missile.forEach(function (missile) {
                missile.Update();
            });
        };
        playScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            for (var count = 0; count < this._missileNum; count++) {
                console.log("missile shooting");
                this._missile[count] = new objects.Missile(this.assetManager);
                this.addChild(this._missile[count]);
                this._bulletFire(count * 80);
            }
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
        };
        playScene.prototype._bulletFire = function (back) {
            console.log(this._missileCount);
            this._missile[this._missileCount].x = objects.Game.stage.mouseX;
            this._missile[this._missileCount].y = objects.Game.stage.mouseY - back;
            this._missileCount++;
            if (this._missileCount >= this._missileNum - 1) {
                this._missileCount = 0;
            }
        };
        return playScene;
    }(objects.Scene));
    scenes.playScene = playScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map