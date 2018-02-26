/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created background objects
*/
module objects {
    export class Background extends createjs.Bitmap {
        //PRIVATE INSTANCE
        private _dy: number;
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("background"));
            this.Start();
        }
        //PRIVATE METHODS
        private _reset(): void {
            this.y = -960;
        }
        private _checkBounds(): void {
            if (this.y >= 0) {
                this._reset();
            }
        }
        private _move(): void {
            this.y += this._dy;
        }
        //PUBLIC METHODS
        public Start(): void {
            this._dy = 5;
            this._reset();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}