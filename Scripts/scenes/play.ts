/*
    Name : Dongwan Kim, Changmin Shin, Jowon Shin
    Version : v2.1
    Last_modification : Feb 26, 2018
    Description : Created Star Object
*/

module scenes{
export class playScene extends objects.Scene{
    //PRIVATE VARIABLES
    private _background:objects.Background;
    private _plane:objects.Plane;
    private _enemy:objects.Enemy[];
    private _enemyNum:number;
    private _star:objects.Star;
    private _missile:objects.Missile[];
    private _missileNum:number;
    private _missileCount:number;
    private _collision: managers.Collision;
    private _backgroundSound:createjs.AbstractSoundInstance;
    private _missileSound:createjs.AbstractSoundInstance;
    private _scoreBoard: managers.ScoreBoard;
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
        this._star = new objects.Star(this.assetManager);
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
        this._backgroundSound.volume = 0.5;

        this._scoreBoard = new managers.ScoreBoard;
        objects.Game.scoreboardManager = this._scoreBoard;

        this.Main();
    }

    public Update():void{
    
        this._background.Update();
        this._plane.Update();
        this._star.Update();

        //check collision between plane and star
        this._collision.check(this._plane, this._star);

        this._enemy.forEach(enemy =>{
            enemy.Update();

            this._collision.check(this._plane, enemy);

            if(this._plane.Life == 0){
                objects.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
                this._missileSound.stop();
            }
        });

        this._missile.forEach(missile =>{
            missile.position.x = this._plane.x;
            missile.position.y = this._plane.y;
            missile.Update();
           console.log(missile.position.x);
        });

        if(this._scoreBoard.Lives <= 0){
            objects.Game.currentScene = config.Scene.GAMEOVER;
            this._backgroundSound.stop();
            this._missileSound.stop();
          }
          
    }
    public Main():void{
        this.addChild(this._background);
        this.addChild(this._star);

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

        this.addChild(this._scoreBoard.LivesLabel);
        this.addChild(this._scoreBoard.ScoreLabel);
    }

    private _bulletFire(back:number):void{
        //console.log(this._missileCount);
            this._missile[this._missileCount].x = objects.Game.stage.mouseX;
            this._missile[this._missileCount].y = objects.Game.stage.mouseY - back;

            this._missileCount++;
            if(this._missileCount >= this._missileNum -1){
                this._missileCount = 0;
                //createjs.Sound.play("missileSound");
                this._missileSound = createjs.Sound.play("missileSound");
                this._missileSound.loop = -1;
                this._missileSound.volume = 0.2;
        }
    }
}
}
