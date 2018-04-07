/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : April 06, 2018
    Description : Created a missile manager class
*/

module managers{
    export class Missile{
        //PRIVATE VARIABLES
        private _missileCount:number;

        //PUBLIC PROPERTIES
        public Missiles:objects.Missile[];
        public CurrentMissile:number;

        //CONSTRUCTOR
        constructor(){
            this.Start();
        }

        //PRIVATE METHODS
        private _missileShoot():void{
            for(let count = 0; count < this._missileCount;count++){
                this.Missiles[count] = new objects.Missile();
                console.log("AA");
                
            }
        }
        //PUBLIC METHODS
        public Start():void{
            this._missileCount=100;
            this.Missiles = new Array<objects.Missile>();
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
 