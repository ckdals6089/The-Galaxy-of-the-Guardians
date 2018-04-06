/*
    Name : Dongwan Kim
    Version : v1.4
    Last_modification : Apr 06 2018
    Description : Creaeted BulletFire public methods
*/
module objects{
    export class Plane extends objects.GameObject {
        //PRIVATE VARIABLES
        private _missileSpawn:math.Vector2;
        private _missileSound: createjs.AbstractSoundInstance;

        //PUBLIC PROPERTIES
            public static get centerX():number{
                return this.centerX;
            }
            public static get centerY():number{
                return this.centerY;
            }
            public get Life():number{
                return this.life;
            }
        //CONSTRUTOR
        constructor(){
            super("playerShip");
            this.life = 3;
            this.Start();
        }
        //PRIVATE METHODS
         
        //PUBLIC METHODS
        public Reset():void{

        }
        public CheckBounds():void{
            if(this.x >= 640 - this.centerX){
                this.x = 640-this.centerX;
            }
            if(this.x< this.centerX){
                this.x = this.centerX
            }
            if(this.y >= 480 - this.centerY){
                this.y = 480 - this.centerY;
            }
            if(this.y < this.centerY){
                this.y = this.centerY;
            }
        }
        public Move():void{

            if(managers.Game.keyboardManager.moveLeft){
                this.x -= 10;
            }
            if(managers.Game.keyboardManager.moveRight){
                this.x += 10;
            }
            if(managers.Game.keyboardManager.moveForward){
                this.y += 10;
            }
            if(managers.Game.keyboardManager.moveBackward){
                this.y -= 10;
            }
        }
        public Start():void{
            this.x = 300;
            this.y = 430;
            this._missileSpawn = new math.Vector2();
        }
        public Update():void{
            this.Move();
            this.CheckBounds();
            this.BulletFire();
        }
        public BulletFire():void{
            if(this.alpha = 1){
                let ticker:number = createjs.Ticker.getTicks();
                if(ticker % 10 == 0){
                    this._missileSpawn = new math.Vector2(this.x,this.y-this.centerY);
    
                    let currentMissile = managers.Game.bulletManager.CurrentMissile;
                    let missile = managers.Game.bulletManager.Missiles[currentMissile];
                    missile.x = this._missileSpawn.x;
                    missile.y = this._missileSpawn.y;
        
                    this._missileSound = createjs.Sound.play("missileSound");
                     this._missileSound.loop = 0;
                    this._missileSound.volume = 0.2;

                    managers.Game.bulletManager.CurrentMissile++;
                    if(managers.Game.bulletManager.CurrentMissile > 29){
                        managers.Game.bulletManager.CurrentMissile = 0;
                    }
        
                }
            }
         
          
        }
        

    }
}