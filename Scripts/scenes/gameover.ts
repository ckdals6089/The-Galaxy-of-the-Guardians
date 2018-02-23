/*
    Name : Jowon Shin
    Version : v1.1
    Last_modification : Feb 23, 2018
    Description : added label and changed the button
*/

module scenes{
    export class GameOverScene extends objects.Scene{
        //PRIVATE VARIABLES
        private _btnPlayAgain: objects.Button;
        private _lblGameOver: objects.Label;

        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        //PRIVATE METHODS
        private _btnPlayAgainClick():void{
            objects.Game.currentScene = config.Scene.OPENING;
        }

        //PUBLIC METHODS
        public Start():void{
            this._btnPlayAgain = new objects.Button(this.assetManager, "btnPlayAgain", 320, 360);
            this._lblGameOver = new objects.Label("Game Over", "40px", "Consolas", "#FF0000", 320, 240, true);
            this.Main();
            console.log("game over");
        }

        public Update():void{

        }

        public Main():void{
            this.addChild(this._lblGameOver);
            this.addChild(this._btnPlayAgain);
    
            this._btnPlayAgain.on("click", this._btnPlayAgainClick);
        }

        // public Init():void{

        // }
    }
}