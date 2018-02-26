/*
    Name : Dongwan Kim
    Version : v1.6
    Last_modification : Feb 25, 2018
    Description : Modified the position of missile
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
    private _collision: managers.Collision;
    private _backgroundSound:createjs.AbstractSoundInstance;
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

        this._enemyNum=3;
        this._enemy = new Array<objects.Enemy>();
        this._missile = new Array<objects.Missile>();
        this._bulletFire = this._bulletFire.bind(this);

        for(let count = 0; count < this._enemyNum; count++){
            this._enemy[count] = new objects.Enemy(this.assetManager);
        }
        this._collision = new managers.Collision();

        this._backgroundSound = createjs.Sound.play("backgroundSound")
        this._backgroundSound.loop = -1;
        this._backgroundSound.volume = 0.2;

        this.Main();
    }

    public Update():void{
    
        this._background.Update();
        this._plane.Update();
        this._enemy.forEach(enemy =>{
            enemy.Update();

            this._collision.check(this._plane, enemy);

            if(this._plane.Life == 0){
                objects.Game.currentScene = config.Scene.GAMEOVER;
            }
        });
        this._missile.forEach(missile =>{
            missile.position.x = this._plane.x;
            missile.position.y = this._plane.y;
            missile.Update();
           console.log(missile.position.x);

        });
    }
    public Main():void{
        this.addChild(this._background);


        for(let count = 0; count < this._missileNum; count++) {
            //console.log("missile shooting");
            
            this._missile[count] = new objects.Missile(this.assetManager);

            this.addChild(this._missile[count]);
            this._bulletFire(count * 80);
        }
        this.addChild(this._plane);
        this._enemy.forEach(enemy =>{
            this.addChild(enemy);

        });
    }

    private _bulletFire(back:number):void{
        //console.log(this._missileCount);
            this._missile[this._missileCount].x = objects.Game.stage.mouseX;
            this._missile[this._missileCount].y = objects.Game.stage.mouseY - back;

            this._missileCount++;
            if(this._missileCount >= this._missileNum -1){
                this._missileCount = 0;
        }
    }
}
}
