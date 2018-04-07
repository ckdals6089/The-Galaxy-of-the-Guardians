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
            super("bossB");
                this.Start();
                this.life=1000;
        }
        //PRIVATE METHODS

        //PUBLIC METHODS

        public Start():void{
            this.alpha = 1;
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
            if(this.y >= 50){
                this.y = 50;
            }
        }
        public Update():void{
            
            this.position = new math.Vector2(this.x, this.y);

            this.Move();
            this.CheckBounds();
        }
    }
}