/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : Feb 23, 2018
    Description : created gameover scene
*/

module scenes{
    export class GameOverScene extends objects.Scene{
        //PRIVATE VARIABLES
        private _btnBack: objects.Button;
        //private _lblGameOver: objects.Label; // need to create a label

        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        //PRIVATE METHODS
        private _btnBackClick():void{
            objects.Game.currentScene = config.Scene.CHOOSEMODE;
        }
        
        //PUBLIC METHODS
        public Start():void{
            this._btnBack = new objects.Button(this.assetManager, "btnBack", 320, 340);
            this.Main();
            console.log("game over");
        }

        public Update():void{

        }

        public Main():void{
            this.addChild(this._btnBack);
    
            this._btnBack.on("click", this._btnBackClick);
        }

        // public Init():void{

        // }
    }
}