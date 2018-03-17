/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : March 16, 2018
    Description : Created a splash scene 
*/

module scenes{
    export class loadingScene extends objects.Scene{
        //PRIVATE VARIABLES
        private _background:objects.Background;
        private _logo: objects.Logo;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        //PRIVATE METHODS
        private GoStart():void {
            setTimeout(
                //Move to Opening scene after 3 seconds
                function() {
                    managers.Game.currentScene = config.Scene.OPENING;
                }, 3000
            );
        }

        private AnimateLogo():void {
            
        }

        //PUBLIC METHODS
        public Start():void{
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Logo(this.assetManager, "imgLogo", 320, 220);

            this.Main();
            console.log("loading game..");
        }

        public Update():void{

        }
        public Main():void{
            this.addChild(this._background);
            this.addChild(this._logo);
            this.AnimateLogo();
            this.GoStart();
        }
        // public Init():void{

        // }
    }
}