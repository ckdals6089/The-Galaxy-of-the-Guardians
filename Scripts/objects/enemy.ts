/*
    Name : Dongwan Kim
    Version : v1.4
    Last_modification : Apr 19, 2018
    Description : Added Enemies bullet
*/
module objects{
    export class Enemy extends GameObject{
        //PRIVATE VARIABLES
        private _missileSpawn:math.Vector2;

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
            this.BulletFire();

        }
        public Start():void{
            this.Reset();
            this._missileSpawn = new math.Vector2();
        }
        public Reset():void{
            this.alpha = 1;
            this.life=2;
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


        }

        public BulletFire():void{
            if(this.alpha == 1){
                let ticker:number = createjs.Ticker.getTicks();
                if(ticker % 60 == 0){
                    let enemies:Enemy[] =  managers.Game.enemies;
                    let _missile:Missile_Enemy[] = managers.Game.EnemyBulletManager.Missiles;
                    
                    for(let i=0; i < enemies.length;i++){
                        if(enemies[i].alpha == 1){
                            this._missileSpawn = new math.Vector2(enemies[i].x,enemies[i].y);

                            _missile[i].x = this._missileSpawn.x;
                            _missile[i].y = this._missileSpawn.y;    
                                _missile[i].Dx = this._dx*1.5;
                            
                                _missile[i].Dy = this._dy* 1.5;  
                                _missile[i].Update();
                        
                        }

                    }
                
                    


                }
            }
        }
    }
}