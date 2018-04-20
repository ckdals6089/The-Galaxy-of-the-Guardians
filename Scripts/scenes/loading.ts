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
        private _line1: objects.Label;
        private _line2: objects.Label;
        private _line3: objects.Label;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(){
            super();
            this.Start();
        }
        //PRIVATE METHODS
        private GoStart():void {
            setTimeout(
                //Move to Opening scene after 5 seconds
                function() {
                    managers.Game.currentScene = config.Scene.OPENING;
                }, 7000
            );
        }
        
        private UpdateLabel(label : objects.Label): void {
            label.alpha = 1;
            label.y -= 2;
        }

        //PUBLIC METHODS
        public Start():void{
            createjs.Sound.play("storySound", {loop:1});
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Logo(this.assetManager, "imgLogo", 320, 220);
            this._line1 = new objects.Label("In 4444, aliens are invading Earth", "20px", "SpaceComic", "#FFFFFF", 280, 500, true);
            this._line2 = new objects.Label("It is your job to defend", "20px", "SpaceComic", "#FFFFFF", 280, 550, true);
            this._line3 = new objects.Label("your home planet, Earth annd the Galaxy!","20px", "SpaceComic", "#FFFFFF", 280, 600, true);
            this.Main();
            console.log("loading game..");
        }

        public Update():void{
            this.UpdateLabel(this._line1);
            this.UpdateLabel(this._line2);
            this.UpdateLabel(this._line3);
        }
        public Main():void{
            this.addChild(this._background);
            //this.addChild(this._logo);
            this.addChild(this._line1);
            this.addChild(this._line2);
            this.addChild(this._line3);
            this.GoStart();
        }
        // public Init():void{

        // }
    }
}