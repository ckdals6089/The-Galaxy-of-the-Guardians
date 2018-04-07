/*
    Name : Jowon Shin, Dongwan Kim
    Version : v1.0
    Last_modification : Feb 26, 2018
    Description : Created Warning
*/
module objects {
    export class Warning extends createjs.Bitmap {

        // private instance variables
        private _scoreBoard: managers.ScoreBoard;
        private _boss: objects.Boss;

        // public properties

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("warning"));

            this.x = 10;
            this.y = 100;
            this.Start();
        }

        // private methods

        // public methods

        // Initializes variables and creates new objects
        public Start(): void {
            this._scoreBoard = managers.Game.scoreboardManager;
            this._boss = managers.Game.boss;
            this.Reset();
        }

        // updates the game object every frame
        public Update(): void {
            if(this._boss.y < 50) {
                managers.Game.currentSceneObject.addChild(this);
                createjs.Sound.play("warningSound");
                this.alpha = 1;
                this.Move();
            } else if(this._boss.y === 50) {
                managers.Game.currentSceneObject.removeChild(this);
            }
           // this.CheckBounds();
        }

        // reset the objects location to some value
        public Reset(): void {
            this.alpha = 0;
            this.x = 10;
            this.y = 100;
        }

        // move the object to some new location
        public Move(): void {
            this.x += 10;
        }

        // check to see if some boundary has been passed
        public CheckBounds(): void {
            // check bounds
            if (this.x >= 640 + managers.Game.currentSceneObject.getBounds().width) {
                this.Reset();
            }
        }
    }
}