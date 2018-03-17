/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Feb 25, 2018
    Description : Added a background and label 
*/

module scenes{
    export class openingScene extends objects.Scene{
        //PRIVATE VARIABLES
        private _background:objects.Background;
        private _openingLogo: objects.Label;
        private _btnStart: objects.Button;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        //PRIVATE METHODS
        private _btnStartClick():void{
            managers.Game.currentScene = config.Scene.CHOOSEMODE;
        }
        //PUBLIC METHODS
        public Start():void{
            this._background = new objects.Background(this.assetManager);

            this._openingLogo = new objects.Label("The Galaxy of the Guardians", "40px", "Consolas", "#FFFFFF",25, 180);
            this._btnStart = new objects.Button(this.assetManager, "btnStart", 320, 340);
            this.Main();
            console.log("start");
        }

        public Update():void{

        }
        public Main():void{
            this.addChild(this._background);
            this.addChild(this._openingLogo);
            this.addChild(this._btnStart);
    
            this._btnStart.on("click", this._btnStartClick);
        }
        // public Init():void{

        // }
    }
}