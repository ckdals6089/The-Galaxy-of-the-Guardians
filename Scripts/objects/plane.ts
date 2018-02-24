/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created plane object
*/
module objects{
    export class Plane extends objects.GameObject{
        //PRIVATE VARIABLES
            private _centerX:number;
        //PUBLIC PROPERTIES
            public get CenterX():number{
                return this._centerX;
            }
        //CONSTRUTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"plane");
            this._centerX = this.centerX;
            this.Start();
        }
        //PRIVATE METHODS
         
        //PUBLIC METHODS
        public Reset():void{

        }
        public CheckBounds():void{
            if(this.x >= 640 - this.centerX){
                this.x = 640-this.centerX;
            }
            if(this.x< this.centerX){
                this.x = this.centerX
            }
            if(this.y >= 480 - this.centerY){
                this.y = 480 - this.centerY;
            }
            if(this.y < this.centerY){
                this.y = this.centerY;
            }
        }
        public Move():void{

            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
        }
        public Start():void{
            this._centerX = this.width*0.5;
            this.y=430;
        }
        public Update():void{
            this.position = new Vector2(this.x, this.y);
            this.Move();
            this.CheckBounds();
        }

    }
}