/*
    Name : Dongwan Kim, Changmin Shin, Jowon Shin
    Version : v2.1
    Last_modification : Feb 26, 2018
    Description : Created Star Object
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
            this._star = new objects.Star(this.assetManager);
            this._enemyNum = 3;
            this._enemy = new Array();
            this._missile = new Array();
            this._bulletFire = this._bulletFire.bind(this);
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy(this.assetManager);
            }
            this._collision = new managers.Collision();
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;
            this._scoreBoard = new managers.ScoreBoard;
            objects.Game.scoreboardManager = this._scoreBoard;
            this.Main();
        };
        playScene.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            //check collision between plane and star
            this._collision.check(this._plane, this._star);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                _this._collision.check(_this._plane, enemy);
                if (_this._plane.Life == 0) {
                    objects.Game.currentScene = config.Scene.GAMEOVER;
                    _this._backgroundSound.stop();
                    _this._missileSound.stop();
                }
            });
            this._missile.forEach(function (missile) {
                missile.position.x = _this._plane.x;
                missile.position.y = _this._plane.y;
                missile.Update();
                console.log(missile.position.x);
            });
            if (this._scoreBoard.Lives <= 0) {
                objects.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
                this._missileSound.stop();
            }
        };
        playScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            this.addChild(this._star);
            for (var count = 0; count < this._missileNum; count++) {
                //console.log("missile shooting");
                this._missile[count] = new objects.Missile(this.assetManager);
                this.addChild(this._missile[count]);
                this._bulletFire(count * 80);
            }
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        playScene.prototype._bulletFire = function (back) {
            //console.log(this._missileCount);
            this._missile[this._missileCount].x = objects.Game.stage.mouseX;
            this._missile[this._missileCount].y = objects.Game.stage.mouseY - back;
            this._missileCount++;
            if (this._missileCount >= this._missileNum - 1) {
                this._missileCount = 0;
                //createjs.Sound.play("missileSound");
                this._missileSound = createjs.Sound.play("missileSound");
                this._missileSound.loop = -1;
                this._missileSound.volume = 0.2;
            }
        };
        return playScene;
    }(objects.Scene));
    scenes.playScene = playScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map