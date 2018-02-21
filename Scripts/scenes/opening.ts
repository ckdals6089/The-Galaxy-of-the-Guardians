/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Created first pages
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
            objects.Game.currentScene = config.Scene.PLAY;
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