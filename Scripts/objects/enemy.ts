/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 26, 2018
    Description : Set the visibility when they reset
*/
module objects{
    export class Enemy extends GameObject{
        //PRIVATE VARIABLES

        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"enemy");
            this.Start();
        }
        //PRIVATE METHODS

        //PUBLIC METHODS
        public Move():void{
            this.x += this._dx;
            this.y += this._dy;
        }
        public Start():void{
            this.Reset();
        }
        public Reset():void{
            this.visible = true;
            this.x = (Math.random() * (640 - this.width)) + this.centerX;
            this.y = -this.height;
            this._dx = (Math.random() * -4) +2;
            this._dy = (Math.random() * 5) + 5;
        }
        public CheckBounds():void{
            //check the bottom border
            if(this.y >= 480 + this.height){
                this.Reset();
            }
        }
        public Update():void{
            this.position = new Vector2(this.x, this.y);

            this.Move();
            this.CheckBounds();
        }
    }
}