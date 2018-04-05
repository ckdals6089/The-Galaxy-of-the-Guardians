/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Apr 05, 2018
    Description : Created a boss class
*/
module objects{
    export class Boss extends GameObject{
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(){
            super("bossA");
            this.Start();
            this.life=10;
        }
        //PRIVATE METHODS

        //PUBLIC METHODS

        public Start():void{
            this._dy = 5;
            this.x = 320;
            this.y = -this.height;
            // this.Reset();
        }

        public Move():void{
            this.y += this._dy;
        }
        public CheckBounds():void{
            //check the bottom border
            if(this.y >= 40){
                this.y = 40;
            }
        }
        public Update():void{
            this.position = new math.Vector2(this.x, this.y);

            this.Move();
            this.CheckBounds();
        }
    }
}