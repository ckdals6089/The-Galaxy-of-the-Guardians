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
        get Dy(): number {
            return this._dy;
        }
        set Dy(_dy: number) {
            this._dy = _dy;
        }

        //CONSTRUCTOR
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("background"));
            switch (managers.Game.currentScene) {

                case config.Scene.PLAY_ONE:
                super(assetManager.getResult("background"));
                  break;
                case config.Scene.PLAY_TWO:
                super(assetManager.getResult("background2"));
                 break;
                 case config.Scene.PLAY_THREE:
                super(assetManager.getResult("background3"));
                 break;
              
              }
              this.Start();
        }
        //PRIVATE METHODS
        private _reset(): void {
            this.y = -1000;
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
            this._dy = 1;
            this._reset();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}