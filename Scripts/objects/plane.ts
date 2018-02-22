/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created plane object
*/
module objects{
    export class Plane extends objects.GameObject{
        //PRIVATE VARIABLES

        //PUBLIC PROPERTIES

        //CONSTRUTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"plane");
            this.Start();
        }
        //PRIVATE METHODS

        //PUBLIC METHODS
        public Reset():void{

        }
        public CheckBounds():void{

        }
        public Move():void{
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
        }
        public Start():void{

        }
        public Update():void{
            this.Move();
            this.CheckBounds();
        }
    }
}