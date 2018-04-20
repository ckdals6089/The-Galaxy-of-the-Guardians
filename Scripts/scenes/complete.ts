/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : April 20, 2018
    Description : created game complete
*/

module scenes {
    export class CompleteScene extends objects.Scene {
        //PRIVATE VARIABLES
        private _background: objects.Background;
        private _btnPlayAgain: objects.Button;
        private _lblCongrat: objects.Label;
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
            this._btnPlayAgain = new objects.Button("btnPlayAgain", 320, 400);
            this._lblCongrat = new objects.Label("Congratulations! Game Complete!", "30px", "SpaceComic", "#FFFFFF", 320, 240, true);
            this._lblScore = new objects.Label("High Score: ", "40px", "SpaceComic", "#FFFFFF", 100, 95, false);

            this._scoreboard = new managers.ScoreBoard;

            this.Main();
            console.log("game complete");
        }

        public Update(): void {

        }

        public Main(): void {
            createjs.Sound.play("tadaSound");
            this.addChild(this._background);
            this.addChild(this._lblCongrat);
            this.addChild(this._btnPlayAgain);

            this._scoreboard.HighScore = managers.Game.HighScore;
            this._lblScore.text += this._scoreboard.HighScore;
            this.addChild(this._lblScore);

            this._btnPlayAgain.on("click", this._btnPlayAgainClick);
        }
    }
}