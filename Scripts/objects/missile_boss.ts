/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Apr 18, 2018
    Description : Created a boss's missile
*/
module objects {
    export class Missile_Boss extends objects.GameObject {
        //PRIVATE VARIABLES

        //PUBLIC PROPERTIES

        //CONSTRUTOR
        constructor() {
            super("bossmissileB");
            this.Start();
        }
        //PRIVATE METHODS

        // //PUBLIC METHODS
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.alpha = 1;
            this._dx = (Math.random() * -4) +2;
            this._dy = (Math.random() * 5);
            this.x = -5000;
            this.y = -5000;
            
        }
        public CheckBounds(): void {
            if (this.y >= 960 + this.height) {
                this.Reset();
            }
        }
        public Move(): void {
            this.x += this._dx;
            this.y += this._dy;
        }



    }
}