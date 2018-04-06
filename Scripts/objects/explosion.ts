/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : April 05, 2018
    Description : Created Explosion File
*/
module objects{
    export class Explosion extends GameObject{
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(){
            super("explosion");
            this.Start();
        }

        //PRIVATE METHODS
        private _animationEnded(): void {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        }

        //PUBLIC METHODS
        public Start():void{
            this.on("animationend", this._animationEnded.bind(this), false);
        }

        public Update():void{
            
        }
    }
}