/*
    Name : Dongwan Kim
    Version : v1.4
     Last_modification : Apr 07, 2018
    Description : Changed the amount of enemy
*/

module scenes {
    export class StageTwoScene extends objects.Scene {
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
        private _missileManager: managers.Missile;
        private _boss:objects.Boss;
        private _warningMessage:objects.Warning;
        private _prviousScore:number;
        private _congratMessage:objects.Label;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor() {
            super();

            this.Start();

        }
        //PRIVATE METHODS

        private _sucessStage(): void {

            if (this._boss.alpha ==0) {
                this._congratMessage.Update();
                 setTimeout(() => {
                    managers.Game.currentScene = config.Scene.PLAY_THREE; 
                 }, 4000);
                this._backgroundSound.stop();
            }
        }
        //PUBLIC METHODS
        public Start(): void {
            console.log("Stage two");

            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane();
            this._plane = managers.Game.plane;

            this._star = new objects.Star();
            this._lifeItem = new objects.LifeItem();
            this._meteor = new objects.Meteor();
            this._enemyNum = 6;
            this._enemy = new Array<objects.Enemy>();
            managers.Game.enemies = this._enemy;
            
            this._boss = new objects.Boss();
            managers.Game.boss = this._boss;

            this._missileManager = new managers.Missile();
            managers.Game.bulletManager = this._missileManager;

            for (let count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }

            this._backgroundSound = createjs.Sound.play("backgroundSound")
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;

            this._scoreBoard = new managers.ScoreBoard;
            this._scoreBoard = managers.Game.scoreboardManager;
            this._prviousScore = managers.Game.scoreboardManager.Score;
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

            if(this._scoreBoard.Score >= this._prviousScore + 5000){
                this._boss.Update();
                this._warningMessage.Update();
            }
            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);


            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);


            this._enemy.forEach(enemy => {
                enemy.Update();
                enemy.Dy += 0.07;
                managers.Collision.Check(this._plane, enemy);

                if (this._plane.Life == 0) {
                    managers.Game.currentScene = config.Scene.GAMEOVER;
                    this._backgroundSound.stop();
                }
            });
            //this._collision.check(this._missile,this._enemy);


            managers.Collision.Crush(this._missileManager.Missiles, this._enemy);
           
            this._missileManager.Missiles.forEach(missile =>{
                managers.Collision.Check(missile,this._boss);  
            });
           
            if (this._scoreBoard.Lives <= 0) {
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
            
            this._missileManager.Missiles.forEach(missile => {
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
