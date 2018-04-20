/*
    Name : Jowon Shin
    Version : v1.2
    Last_modification : Feb 23, 2018
    Description : added High Score Label
*/

module scenes {
    export class GameOverScene extends objects.Scene {
        //PRIVATE VARIABLES
        private _background: objects.Background;
        private _btnPlayAgain: objects.Button;
        private _lblGameOver: objects.Label;
        private _lblScore: objects.Label;
        private _scoreboard: managers.ScoreBoard;

        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor() {
            super();
            this.Start();
        }

        //PRIVATE METHODS
        private _btnPlayAgainClick(): void {
            managers.Game.currentScene = config.Scene.OPENING;
        }

        //PUBLIC METHODS
        public Start(): void {
            this._background = new objects.Background(this.assetManager);
            this._btnPlayAgain = new objects.Button("btnPlayAgain", 320, 360);
            this._lblGameOver = new objects.Label("Game Over", "40px", "SpaceComic", "#FF0000", 320, 240, true);
            this._lblScore = new objects.Label("High Score: ", "40px", "SpaceComic", "#FF0000", 100, 95, false);

            this._scoreboard = new managers.ScoreBoard;

            this.Main();
            console.log("game over");
        }

        public Update(): void {

        }

        public Main(): void {
            createjs.Sound.play("gameOverSound");
            this.addChild(this._background);
            this.addChild(this._lblGameOver);
            this.addChild(this._btnPlayAgain);

            this._scoreboard.HighScore = managers.Game.HighScore;
            this._lblScore.text += this._scoreboard.HighScore;
            this.addChild(this._lblScore);

            this._btnPlayAgain.on("click", this._btnPlayAgainClick);
        }

        // public Init():void{

        // }
    }
}