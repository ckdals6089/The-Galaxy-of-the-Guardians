/*
    Name : Dongwan Kim, Jowon Shin, Changmin Shin
    Version : v2.3
    Last_modification : Feb 26, 2018
    Description : Changed image names due to live site
*/

/// <reference path="_reference.ts"/>

(function(){
    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene:objects.Scene;
    let currentState:number;
    let keyBoardManager:managers.Keyboard;

    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;


    


    textureAtlasData = {

        "images": [
            
            "./Assets/sprites/textureAtlas.png"
        ],
        
        "frames": [
            [0, 0, 75, 75, 0, 0, 0],
            [75, 0, 232, 62, 0, -4, -11],
            [0, 75, 403, 196, 0, 0, 0],
            [0, 271, 232, 62, 0, -4, -11],
            [232, 271, 235, 63, 0, -9, -4],
            [0, 334, 131, 151, 0, 0, 0],
            [131, 334, 200, 237, 0, 0, -13],
            [331, 334, 120, 82, 0, -4, -23],
            [0, 571, 106, 110, 0, -14, -7],
            [106, 571, 62, 64, 0, -1, 0],
            [168, 571, 47, 47, 0, -9, -9],
            [215, 571, 116, 116, 0, -20, 0],
            [331, 571, 116, 121, 0, -20, 0],
            [0, 692, 120, 140, 0, -18, 0],
            [120, 692, 126, 140, 0, -14, 0],
            [246, 692, 131, 140, 0, -11, 0],
            [377, 692, 70, 70, 0, 0, 0]
        ],
        
        "animations": {
            "btnBack": { "frames": [0] },
            "btnNormal": { "frames": [1] },
            "btnPlayAgain": { "frames": [2] },
            "btnStart": { "frames": [3] },
            "btnUltimate": { "frames": [4] },
            "enemyA": { "frames": [5] },
            "enemyB": { "frames": [6] },
            "lifeitem": { "frames": [7] },
            "meteor": { "frames": [8] },
            "missile": { "frames": [9] },
            "missile2": { "frames": [10] },
            "playerShip": { 
                "frames": [11,12,13,14,15],
                "speed": 0.5 
            },
        
            "star": { "frames": [16] }
        }
    };

    assetManifest = [ //TODO: Must change the temporary images
        {id: "imgLogo", src:"./Assets/images/logo.png"},
        //{id: "btnStart", src:"./Assets/images/btnStart.png"}, 
        {id: "background", src:"./Assets/images/background.png"},  
        //{id: "missile", src:"./Assets/images/missile.png"},
        //{id: "star", src:"./Assets/images/star.png"},
        //{id: "lifeitem", src:"./Assets/images/lifeItem.png"}, //temporary image
        //{id: "enemy", src:"./Assets/images/enemyA.png"},
        {id: "logo", src: "./Assets/images/logo.png" },
        {id: "backgroundSound", src:"./Assets/sounds/background.mp3"},
        {id: "missileSound", src:"./Assets/sounds/missileSound.mp3"},
        {id: "bazoozaSound", src:"./Assets/sounds/bazookaSound.mp3"},
        {id: "crashSound", src:"./Assets/sounds/crashSound.mp3"}, //temporary sound
        {id: "tadaSound", src:"./Assets/sounds/tada.mp3"},
        {id: "gettingItemSound", src:"./Assets/sounds/gettingItem.wav"}
    ];

    //preload Assets
    function Init():void{
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start,this);
        console.log("start");
    }
    function Start():void{
         textureAtlasData.images = [assetManager.getResult("textureAtlas")];
         //textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.LOADING;
        currentState = config.Scene.LOADING;

        keyBoardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyBoardManager;
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update():void{
        if(currentState != managers.Game.currentScene){
            Main();
        }
        currentScene.Update();

        stage.update();
    }
    function Main():void{
        stage.removeAllChildren();

        switch(managers.Game.currentScene){
            case config.Scene.LOADING:
                currentScene = new scenes.loadingScene();
                break;
            case config.Scene.OPENING:
                currentScene = new scenes.openingScene();
                break;
            case config.Scene.CHOOSEMODE:
                currentScene = new scenes.chooseModeScene();
                break;
            case config.Scene.PLAY_ONE:
                currentScene = new scenes.StageOneScene();
                break;
            case config.Scene.PLAY_TWO:
                currentScene = new scenes.StageTwoScene();
                break;
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene();
                break;
        }
        currentState = managers.Game.currentScene;
        
        stage.addChild(currentScene);
    }

    window.onload = Init;
})();