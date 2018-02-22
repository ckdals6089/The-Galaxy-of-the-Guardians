/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created missile objects
*/
module objects{
    export class Missile extends objects.GameObject{
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES

        //CONSTRUTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"missile");
            this.Start();
        }
        //PRIVATE METHODS
        private _reset():void{
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
        }
        private _checkBounds():void{
            if(this.y <= 0){
                this._reset();
            }
        }
        private _move():void{
            this.y -= this._dy;
            this._checkBounds();
        }
        //PUBLIC METHODS
        public Start():void{
            console.log("missile shooting");
            this._dy = 15;
            this._reset();

            
        }
        public Update():void{
            this._move();
        }

    }
}