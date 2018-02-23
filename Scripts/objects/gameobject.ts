/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created Gameobject object
*/

module objects{
    export class GameObject extends createjs.Bitmap{
        //PRIVATE VARIABLES
        protected _dy:number;
        protected _dx:number;

        //PUBLIC PROPERTIES
        public width:number;
        public height:number;
        public centerX:number;
        public centerY:number;
        public position:createjs.Point;

        //CONSTRUTORS
        constructor(assetManager:createjs.LoadQueue, imageString:string){
            super(assetManager.getResult(imageString));
            this.name = imageString;
            this._init();
        }
        //PRIVATE METHODS
        private _init():void{
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.regX = this.centerX;
            this.regY = this.centerY;
            this.position = new createjs.Point(this.x,this.y);

        }
        //PUBLIC METHODS
        public Reset():void {
    
        }
    
        public CheckBounds():void {
    
        }
    
        public Move():void {
    
        }
    
        public Start():void {
    
        }

        public Update():void {
    
        }

    }
}