/*
    Name : Dongwan Kim
    Version : v1.4
    Last_modification : Feb 23, 2018
    Description : Added enemy array
*/

module scenes{
    export class playScene extends objects.Scene{
            //PRIVATE VARIABLES
            private _background:objects.Background;
            private _plane:objects.Plane;
            private _enemy:objects.Enemy[];
            private _enemyNum:number;
            private _missile:objects.Missile[];
            private _missileNum:number;
            private _missileCount:number;
            //PUBLIC PROPERTIES
    
            //CONSTRUCTOR
            constructor(assetManager:createjs.LoadQueue){
                super(assetManager);
                
                this.Start();

            }
            //PRIVATE METHODS
    
            //PUBLIC METHODS
            public Start():void{
                this._missileNum = 5;
                this._missileCount = 0;
                this._background = new objects.Background(this.assetManager);
                this._plane = new objects.Plane(this.assetManager);

                this._enemyNum=10;
                this._enemy = new Array<objects.Enemy>();
                this._missile = new Array<objects.Missile>();
                this._bulletFire = this._bulletFire.bind(this);

                for(let count = 0; count < this._enemyNum; count++){
                    this._enemy[count] = new objects.Enemy(this.assetManager);
                }

                this.Main();
            }
    
            public Update():void{
                this._background.Update();
                this._plane.Update();
                //onsole.log("Plane : " + this._plane.centerX);
                this._enemy.forEach(enemy =>{
                    enemy.Update();
                    console.log(enemy.x);
                    //this._crash(this._plane,enemy);
                })
                this._missile.forEach(missile =>{
                    missile.Update();
                })
            }
            public Main():void{
                this.addChild(this._background);


                for(let count = 0; count < this._missileNum; count++) {
                    console.log("missile shooting");
                    
                    this._missile[count] = new objects.Missile(this.assetManager);

                    this.addChild(this._missile[count]);
                    this._bulletFire(count * 80);
                }
                this.addChild(this._plane);
                this._enemy.forEach(enemy =>{
                    this.addChild(enemy);
                })

            
            }

            private _bulletFire(back:number):void{
                console.log(this._missileCount);
                    this._missile[this._missileCount].x = objects.Game.stage.mouseX;
                    this._missile[this._missileCount].y = objects.Game.stage.mouseY - back;
    
                    this._missileCount++;
                    if(this._missileCount >= this._missileNum -1){
                        this._missileCount = 0;
                }

            }

        }

        
    }
