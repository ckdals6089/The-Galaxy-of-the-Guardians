/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Mar 16, 2018
    Description : Added life value
*/
module objects{
    export class Enemy extends GameObject{
        //PRIVATE VARIABLES
        private _missileSpawn:math.Vector2;
        private _isShoot:boolean;
        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(){
            super("enemyA");
            this.Start();
        }
        //PRIVATE METHODS

        //PUBLIC METHODS
        public Move():void{
            this.x += this._dx;
            this.y += this._dy;
        }
        public Start():void{
            this.Reset();
            this._missileSpawn = new math.Vector2();
            this._isShoot = false;
        }
        public Reset():void{
            this.alpha = 1;
            this.life=2;
            this._isShoot = false;
            this.x = (Math.random() * (640 - this.width)) + this.centerX;
            this.y = -this.height;
            this._dx = (Math.random() * -4) +2;
            this._dy = (Math.random() * 5) + 5;
           

        }
        public CheckBounds():void{
            //check the bottom border
            if(this.y >= 480 + this.height){
                this.Reset();
            }
        }
        public Update():void{
            this.position = new math.Vector2(this.x, this.y);

            this.Move();
            this.CheckBounds();

          //  this.BulletFire();

        }

        public BulletFire():void{
            if(this.alpha == 1 && !(this._isShoot)){
                let ticker:number = createjs.Ticker.getTicks();
                if(ticker % 10 == 0){
                    this._missileSpawn = new math.Vector2(this.x,this.y);
    
                    let currentMissile = managers.Game.EnemyBulletManager.CurrentMissile;
                    let missile = managers.Game.EnemyBulletManager.Missiles[currentMissile];
                  
                    missile.x = this._missileSpawn.x;
                    missile.y = this._missileSpawn.y;                    
                    missile.Dy = this._dy + 3;
                    missile.Dx = this._dx + 3;


                    managers.Game.EnemyBulletManager.CurrentMissile++;
                    if(managers.Game.EnemyBulletManager.CurrentMissile > 2){
                        managers.Game.EnemyBulletManager.CurrentMissile = 0;
                    }
                    this._isShoot = true;
                }
            }
        }
    }
}