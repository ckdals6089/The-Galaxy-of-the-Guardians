/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : April 18, 2018
    Description : Created a missile manager class
*/

module managers{
    export class Missile_Boss{
        //PRIVATE VARIABLES
        private _missileCount:number;

        //PUBLIC PROPERTIES
        public Missiles:objects.Missile_Boss[];
        public CurrentMissile:number;
        public MissileCount:number;
        //CONSTRUCTOR
        constructor(){
            this.Start();
        }

        //PRIVATE METHODS
        private _missileShoot():void{
            for(let count = 0; count < this._missileCount;count++){
                this.Missiles[count] = new objects.Missile_Boss();
                
            }
            
        }
        //PUBLIC METHODS
        public Start():void{
            switch(managers.Game.currentScene) {
                case config.Scene.PLAY_ONE:
                    this._missileCount = 10;
                break;
                case config.Scene.PLAY_TWO:
                    this._missileCount = 40;
                break;
                case config.Scene.PLAY_THREE:
                    this._missileCount = 100;
                break;
            }
            this.MissileCount = this._missileCount;
            this.Missiles = new Array<objects.Missile_Boss>();
            this._missileShoot();
            this.CurrentMissile = 0;
        }

        public Update():void{
            this.Missiles.forEach(missile =>{
                missile.Update();
            });
        }
    }
}
 