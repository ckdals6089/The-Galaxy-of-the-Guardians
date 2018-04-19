/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Apr 18, 2018
    Description : Created a enemy's missile
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
            this.x = 5000;
            this.y = 5000;
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