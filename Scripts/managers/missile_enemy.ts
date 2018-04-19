/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : April 18, 2018
    Description : Created a missile manager class
*/

module managers{
    export class Missile_Enemy{
        //PRIVATE VARIABLES
        private _missileCount:number;

        //PUBLIC PROPERTIES
        public Missiles:objects.Missile_Enemy[];
        public CurrentMissile:number;

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
            this._missileCount=1;
            this.Missiles = new Array<objects.Missile_Enemy>();
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
 