/*
    Name : Dongwan Kim, Changmin Shin, Jowon Shin
    Version : v2.7
    Last_modification : Apr 18, 2018
    Description : Added enemies missiles
*/

module scenes {
    export class StageOneScene extends objects.Scene {
        //PRIVATE VARIABLES
        private _background: objects.Background;
        private _plane: objects.Plane;
        private _enemy: objects.Enemy[];
        private _enemyNum: number;
        private _star: objects.Star;
        private _meteor: objects.Meteor;
        private _lifeItem: objects.LifeItem;
        private _backgroundSound: createjs.AbstractSoundInstance;
        private _scoreBoard: managers.ScoreBoard;
        private _missileManager:managers.Missile;
        //private _enemyMissileManager:managers.Missile_Enemy;
        private _bossMissileManager:managers.Missile_Boss;
        private _boss:objects.Boss;
        private _warningMessage:objects.Warning;
        private _congratMessage:objects.Label;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor() {
            super();
            this.Start();

        }
        //PRIVATE METHODS
        private _sucessStage():void{
            // if(this._scoreBoard.Score > 300){
             if(this._boss.alpha == 0) {
                this._congratMessage.Update();
                 setTimeout(() => {
                    managers.Game.currentScene = config.Scene.PLAY_TWO; 
                 }, 4000);
                 this._backgroundSound.stop();
             }
        }

        //PUBLIC METHODS
        public Start(): void {
            
            this._background = new objects.Background(this.assetManager);

            this._plane = new objects.Plane();
            managers.Game.plane = this._plane;
            
            this._star = new objects.Star();
            managers.Game.star = this._star;
            this._lifeItem = new objects.LifeItem();
            managers.Game.lifeitem = this._lifeItem;
            this._meteor = new objects.Meteor();

            this._enemyNum = 5;
            this._enemy = new Array<objects.Enemy>();
            managers.Game.enemies = this._enemy;
            
            this._boss = new objects.Boss();
            managers.Game.boss = this._boss;

            this._missileManager = new managers.Missile();
            managers.Game.bulletManager = this._missileManager;

            // this._enemyMissileManager = new managers.Missile_Enemy();
            // managers.Game.EnemyBulletManager = this._enemyMissileManager;

            this._bossMissileManager = new managers.Missile_Boss();
            managers.Game.BossBulletManager = this._bossMissileManager;

            for (let count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }

            this._backgroundSound = createjs.Sound.play("backgroundSound")
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;

            this._scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreboardManager = this._scoreBoard;

            this._warningMessage = new objects.Warning(this.assetManager);
            this._congratMessage = new objects.Label("Congratulations!", "40px", "SpaceComic", "#FFFFFF", 320, 600, true);

            this.Main();
        }

        public Update(): void {

            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();
            this._meteor.Update();
            this._missileManager.Update();
            // this._enemyMissileManager.Update();
            this._bossMissileManager.Update();
            // this.BulletFire();
            if(this._scoreBoard.Score >= 3000){
                this._boss.Update();
                this._warningMessage.Update();
            }

            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);

            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);

            this._enemy.forEach(enemy => {
                enemy.Update();
                managers.Collision.Check(this._plane, enemy);

            });
            
            managers.Collision.Crush(this._missileManager.Missiles,this._enemy);
            
            this._missileManager.Missiles.forEach(missile =>{
                managers.Collision.Check(missile,this._boss);  
            });
            this._bossMissileManager.Missiles.forEach(missile =>{
                managers.Collision.Check(missile,this._plane);
            });
            // this._enemyMissileManager.Missiles.forEach(missile =>{
            //     managers.Collision.Check(missile, this._plane);
            // });

            if(this._scoreBoard.Lives <= 1) {
                this._scoreBoard.LivesLabel.color = "#FF0000";
            } else if(this._scoreBoard.Lives >= 2){
                this._scoreBoard.LivesLabel.color = "#FFFFFF";
            }

            if (this._scoreBoard.Lives === 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
            }
            
            this._sucessStage();

        }
        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._meteor);

            this.addChild(this._star);
            this.addChild(this._lifeItem);
            

            this._missileManager.Missiles.forEach(missile =>{
                this.addChild(missile);
            });
            // this._enemyMissileManager.Missiles.forEach(missile =>{
            //     this.addChild(missile);
            // });
            // this.addChild(this._enemyMissileManager);
            this._bossMissileManager.Missiles.forEach(missile =>{
                this.addChild(missile);
            });
            this.addChild(this._warningMessage);
            this.addChild(this._boss);

            this.addChild(this._plane);
            this._enemy.forEach(enemy => {
                this.addChild(enemy);
            });

            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);

            this.addChild(this._congratMessage);
        }
    }
}
