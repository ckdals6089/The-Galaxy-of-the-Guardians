/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Apr 19, 2018
    Description : Change x, y values
*/
module objects {
    export class Missile_Enemy extends objects.GameObject {
        //PRIVATE VARIABLES

        //PUBLIC PROPERTIES

        //CONSTRUTOR
        constructor() {
            super("bossmissileA");
            this.Start();
        }
        //PRIVATE METHODS

        // //PUBLIC METHODS
        public Start(): void {
            this._dy = 10;
            this._dx = 0;
            this.Reset();

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.x = -100;
            this.y = -100;
        }
        public CheckBounds(): void {
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        }
        public Move(): void {
            this.y += this._dy;
        }



    }
}