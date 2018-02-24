/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 21, 2018
    Description : reset the button click event
*/

module scenes{
    export class openingScene extends objects.Scene{
        //PRIVATE VARIABLES
        private _btnStart: objects.Button;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        //PRIVATE METHODS
        private _btnStartClick():void{
            objects.Game.currentScene = config.Scene.CHOOSEMODE;
        }
        //PUBLIC METHODS
        public Start():void{
            this._btnStart = new objects.Button(this.assetManager, "btnStart", 320, 340);
            this.Main();
            console.log("start");
        }

        public Update():void{

        }
        public Main():void{
            this.addChild(this._btnStart);
    
            this._btnStart.on("click", this._btnStartClick);
        }
        // public Init():void{

        // }
    }
}