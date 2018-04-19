/*
    Name : Dongwan Kim, Jowon Shin, Changmin Shin
    Version : v2.6
    Last_modification : Apr 18, 2018
    Description : Changed the frame rate for explosion
*/

/// <reference path="_reference.ts"/>

(function () {
    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene: objects.Scene;
    let currentState: number;
    let keyBoardManager: managers.Keyboard;
    let stats:Stats;

    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;

    textureAtlasData = {

        "images": [
            "./Assets/sprites/textureAtlas.png"
        ],

        "frames": [
            [1, 1, 512, 606, 0, 0, 0],
            [515, 1, 474, 464, 0, 0, 0],
            [515, 467, 398, 191, 0,  0, 0],
            [915, 467, 92, 164, 0,  0, 0],
            [915, 633, 80, 54, 0, 0, 0],
            [1, 609, 286, 186, 0, 0, 0],
            [289, 609, 198, 172, 0, 0, 0],
            [489, 660, 240, 242, 0, 0, 0],
            [289, 783, 198, 172, 0,  0, 0],
            [731, 660, 160, 100, 0,  0, 0],
            [893, 689, 130, 96, 0,  0, 0],
            [731, 762, 150, 179, 0, 0, 0],
            [489, 904, 230, 412, 0, 0, 0],
            [883, 787, 126, 122, 0,  0, 0],
            [883, 911, 120, 121, 0,  0, 0],
            [721, 943, 119, 108, 0,  0, 0],
            [842, 943, 35, 35, 0, 0, 0],
            [1, 797, 229, 57, 0, 0, 0],
            [232, 797, 52, 50, 0,  0, 0],
            [232, 849, 51, 52, 0,  0, 0],
            [1, 856, 226, 56, 0,  0, 0],
            [229, 903, 58, 69, 0, 0, 0],
            [289, 957, 198, 125, 0, 0, 0],
            [1, 914, 226, 56, 0,  0, 0],
            [1, 972, 196, 232, 0,  0, 0],
            [199, 974, 78, 41, 0, 0, 0],
            [199, 1017, 75, 75, 0, 0, 0],
            [842, 1034, 63, 70, 0, 0, 0],
            [907, 1034, 61, 70, 0,  0, 0],
            [970, 1034, 51, 52, 0,  0, 0],
            [970, 1088, 51, 52, 0,  0, 0],
            [721, 1053, 60, 60, 0,  0, 0],
            [783, 1053, 57, 64, 0, 0, 0],//32
            [721, 1115, 60, 60, 0, 0, 0],
            [842, 1106, 56, 59, 0,  0, 0],
            [783, 1119, 56, 57, 0, 0, 0],
            [721, 1177, 51, 52, 0, 0, 0],
            [900, 1106, 51, 52, 0, 0, 0],
            [953, 1142, 51, 52, 0, 0, 0],
            [900, 1160, 49, 64, 0, 0, 0],
            [841, 1167, 46, 78, 0,  0, 0],
        ],

        "animations": {
            "enemyH": { "frames": [0] },
            "meteorbig": { "frames": [1] },
            "btnPlayAgain": { "frames": [2] },
            "enemyB": { "frames": [3] },
            "lifeitem": { "frames": [4] },
            "logo": { "frames": [5] },
            "enemyE": { "frames": [6] },
            "meteormedium": { "frames": [7] },
            "enemyF": { "frames": [8] },
            "enemyD": { "frames": [9] },
            "enemyA": { "frames": [10] },
            "enemyC": { "frames": [11] },
            "enemyG": { "frames": [12] },
            "meteorsmall": { "frames": [13] },
            "meteor": { "frames": [14] },
            "meteorB": { "frames": [15] },
            "star": { "frames": [16] },
            "btnUltimate": { "frames": [17] },
            "explosion": { 
                "frames": [19, 29, 30, 36, 37, 38, 18],
                "speed" : 0.4 
            },
            "btnNormal": { "frames": [20] },
            "bossA": { "frames": [22] },
            "btnStart": { "frames": [23] },
            "bossB": { "frames": [24] },
            "poweritem": { "frames": [25] },
            "btnBack": { "frames": [26] },
            "bossmissileA": { "frames": [31] },
            "missile2": { "frames": [32] },
            "bossmissileB": { "frames": [33] },
            "playerShip": {
                "frames": [35, 34, 21, 28, 27],
                "speed": 0.5
            },
            "missile": { "frames": [39] },
            "missile3": { "frames": [40] }
        },


    };

    assetManifest = [ //TODO: Must change the temporary images
        { id: "imgLogo", src: "./Assets/images/logo.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "background2", src: "./Assets/images/background2.png" },
        { id: "background3", src: "./Assets/images/background3.png" },
        { id: "logo", src: "./Assets/images/logo.png" },
        { id: "warning", src: "./Assets/images/warning.png" },
        { id: "backgroundSound", src: "./Assets/sounds/background.mp3" },
        { id: "missileSound", src: "./Assets/sounds/missileSound.mp3" },
        { id: "warningSound", src: "./Assets/sounds/warningSound.mp3" },
        { id: "bazookaSound", src: "./Assets/sounds/bazookaSound.mp3" },
        { id: "crashSound", src: "./Assets/sounds/crashSound.mp3" },
        { id: "tadaSound", src: "./Assets/sounds/tada.mp3" },
        { id: "gettingItemSound", src: "./Assets/sounds/gettingItem.wav" },
        { id: "attackSound", src: "./Assets/sounds/attackSound.mp3" },
        { id: "levelCompleteSound", src: "./Assets/sounds/levelCompleteSound.mp3" },
        { id: "gameOverSound", src: "./Assets/sounds/gameOverSound.mp3" }
    ];

    //preload Assets
    function Init(): void {
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        console.log("start");
    }

    function InitStats():void{
        stats = new Stats();
        stats.showPanel( 0 );
        document.body.appendChild( stats.dom );
    }
    function Start(): void {
        
        InitStats();

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

    function Update(): void {
        stats.begin();

        if (currentState != managers.Game.currentScene) {
            Main();
        }
        currentScene.Update();

        stage.update();

        stats.end();
    }

    function Main(): void {
        stage.removeAllChildren();

        switch (managers.Game.currentScene) {
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
            case config.Scene.PLAY_THREE:
                currentScene = new scenes.StageThreeScene();
                break;
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene();
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();