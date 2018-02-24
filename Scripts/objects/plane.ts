/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 21, 2018
    Description : Added life value and set 3 lives
*/
module objects{
    export class Plane extends objects.GameObject{
        //PRIVATE VARIABLES
            private _centerX:number;
            private _life:number;
        //PUBLIC PROPERTIES
            public get Life():number{
                return this._life;
            }
        //CONSTRUTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"plane");
            this._centerX = this.centerX;
            this._life = 3;
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
        public MinusLife():void{
            this._life -= 1;
        }


    }
}