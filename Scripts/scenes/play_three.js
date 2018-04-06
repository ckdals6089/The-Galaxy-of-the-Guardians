/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Apr 06, 2018
    Description : Changed missile manager
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
    var StageThreeScene = /** @class */ (function (_super) {
        __extends(StageThreeScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function StageThreeScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        StageThreeScene.prototype._sucessStage = function () {
            if (this._scoreBoard.Score >= 9000) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                //TODO: Build a new scene ? or display a congratulation label?
                this._backgroundSound.stop();
            }
        };
        //PUBLIC METHODS
        StageThreeScene.prototype.Start = function () {
            console.log("Stage three");
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane();
            this._star = new objects.Star();
            this._lifeItem = new objects.LifeItem();
            this._enemyNum = 5;
            this._enemy = new Array();
            this._missileManager = new managers.Missile();
            managers.Game.bulletManager = this._missileManager;
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;
            this._scoreBoard = new managers.ScoreBoard;
            this._scoreBoard = managers.Game.scoreboardManager;
            this.Main();
        };
        StageThreeScene.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();
            this._missileManager.Update();
            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);
            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                enemy.Dy += 0.07;
                managers.Collision.Check(_this._plane, enemy);
                if (_this._plane.Life == 0) {
                    managers.Game.currentScene = config.Scene.GAMEOVER;
                    _this._backgroundSound.stop();
                }
            });
            managers.Collision.Crush(this._missileManager.Missiles, this._enemy);
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
            }
            this._sucessStage();
        };
        StageThreeScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            this.addChild(this._star);
            this.addChild(this._lifeItem);
            this._missileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return StageThreeScene;
    }(objects.Scene));
    scenes.StageThreeScene = StageThreeScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play_three.js.map