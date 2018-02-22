/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Feb 21, 2018
    Description : Added missile object to play scene
*/

module scenes{
    export class playScene extends objects.Scene{
            //PRIVATE VARIABLES
            private _background:objects.Background;
            private _plane:objects.Plane;
            private _missile:objects.Missile;
            //PUBLIC PROPERTIES
    
            //CONSTRUCTOR
            constructor(assetManager:createjs.LoadQueue){
                super(assetManager);
                
                this.Start();
            }
            //PRIVATE METHODS
    
            //PUBLIC METHODS
            public Start():void{
                this._background = new objects.Background(this.assetManager);
                this._plane = new objects.Plane(this.assetManager);
                this._missile = new objects.Missile(this.assetManager);
                this.Main();
            }
    
            public Update():void{
                this._background.Update();
                this._plane.Update();
                this._missile.Update();
            }
            public Main():void{
                this.addChild(this._background);
                this.addChild(this._missile);
                this.addChild(this._plane);

            
            }
        
    }
}