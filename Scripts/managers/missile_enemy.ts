/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : April 19, 2018
    Description : Changed the missile count
*/

module managers{
    export class Missile_Enemy{
        //PRIVATE VARIABLES
        private _missileCount:number;

        //PUBLIC PROPERTIES
        public Missiles:objects.Missile_Enemy[];

        //CONSTRUCTOR
        constructor(){
            this.Start();
        }

        //PRIVATE METHODS
        private _missileShoot():void{
            for(let count = 0; count < this._missileCount;count++){
                this.Missiles[count] = new objects.Missile_Enemy();
               
            }
        }
        //PUBLIC METHODS
        public Start():void{
            switch(managers.Game.currentScene) {
                case config.Scene.PLAY_ONE:
                    this._missileCount = 5;
                break;
                case config.Scene.PLAY_TWO:
                    this._missileCount = 6;
                break;
                case config.Scene.PLAY_THREE:
                    this._missileCount = 7;
                break;
            }
            this.Missiles = new Array<objects.Missile_Enemy>();
            this._missileShoot();
        }

        public Update():void{
            this.Missiles.forEach(missile =>{
                missile.Update();
            });
        }
    }
}
 