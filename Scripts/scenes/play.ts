/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 20, 2018
    Description : Set background object in playScene
*/

module scenes{
    export class playScene extends objects.Scene{
            //PRIVATE VARIABLES
            private _background:objects.Background;
            private _plane:objects.Plane;
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
                this.Main();
            }
    
            public Update():void{
                this._background.Update();
                this._plane.Update();
            }
            public Main():void{
                this.addChild(this._background);
                this.addChild(this._plane);
            
            }
        
    }
}