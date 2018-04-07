/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Apr 06, 2018
    Description : Changed the missile basic settings
*/
module objects {
    export class Missile extends objects.GameObject {
        //PRIVATE VARIABLES

        //PUBLIC PROPERTIES

        //CONSTRUTOR
        constructor() {
            super("missile");

            this.Start();
        }
        //PRIVATE METHODS

        // //PUBLIC METHODS
        public Start(): void {
            //console.log(objects.Plane.getPosition);
            this._dy = -10;
            this._dx = 0;
            this.Reset();

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.x = -5000;
            this.y = -5000;
        }
        public CheckBounds(): void {
            if (this.y <= -this.height) {
                this.Reset();
            }
        }
        public Move(): void {
            this.y += this._dy;
        }



    }
}