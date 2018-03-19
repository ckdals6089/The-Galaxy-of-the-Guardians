/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 25, 2018
    Description : Changed the position of missile
*/
module objects{
    export class Missile extends objects.GameObject {
        //PRIVATE VARIABLES
         
        //PUBLIC PROPERTIES

        //CONSTRUTOR
        constructor(){
           super("missile2");    

            this.Start();
       }
        //PRIVATE METHODS
        private _reset():void{
            //this.position = objects.Plane.getPosition;
            this.alpha = 1;
            this.x = this.position.x;
            this.y = this.position.y;  
            //this.x = objects.Game.stage.mouseX;
              //this.y = objects.Game.stage.mouseY; //TODO: + plane top
              //this.x = 300;
              //this.y=430;

        }
        private _checkBounds():void{
            if(this.y <= 0 ){
                this._reset();
            }
            
        }
        private _move():void{
            
            this.y -= this._dy;
            this._checkBounds();
        }

        // //PUBLIC METHODS
        public Start():void{
            //console.log(objects.Plane.getPosition);
            this._dy = 15;
            
        }
        public Update():void{

            if(this.y >0){
                this._move();
            }
        }



    }
}