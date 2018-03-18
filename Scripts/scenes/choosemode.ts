/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.2
    Last_modification : Feb 25, 2018
    Description : Added a background image
*/

module scenes{
    export class chooseModeScene extends objects.Scene{
        //PRIVATE VARIABLES
        private _btnNormal: objects.Button;
        private _btnHell: objects.Button;
        private _btnBack: objects.Button;
        private _background: objects.Background;
        private _logo: objects.Logo;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(){
            super()
            this.Start();
        }

        //PRIVATE METHODS
        private _btnNormalClick():void{
            managers.Game.currentScene = config.Scene.PLAY_ONE;
        }

        private _btnHellClick():void{
            managers.Game.currentScene = config.Scene.PLAY_ONE;
        }

        private _btnBackClick():void {
            managers.Game.currentScene = config.Scene.OPENING;
        }

        //PUBLIC METHODS
        public Start():void{
            this._background = new objects.Background(this.assetManager);

            this._logo = new objects.Logo(this.assetManager,"logo", 320,220);
            this._btnNormal = new objects.Button("btnNormal", 200, 400);
            this._btnHell = new objects.Button("btnUltimate", 440, 400);
            this._btnBack = new objects.Button("btnBack", 530, 80);
            this.Main();
            console.log("start");
        }

        public Update():void{

        }
        public Main():void{
            this.addChild(this._background);
            this.addChild(this._btnNormal);
            this.addChild(this._btnHell);
            this.addChild(this._btnBack);
            this.addChild(this._logo);

            this._btnNormal.on("click", this._btnNormalClick);
            this._btnHell.on("click",this._btnHellClick);
            this._btnBack.on("click", this._btnBackClick);
        }
        // public Init():void{

        // }
    }
}