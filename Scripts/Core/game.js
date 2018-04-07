/*
    Name : Dongwan Kim, Jowon Shin, Changmin Shin
    Version : v2.5
    Last_modification : Mar 18, 2018
    Description : Changed image path with spriteS
*/
/// <reference path="_reference.ts"/>
(function () {
    //Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyBoardManager;
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [
            "./Assets/sprites/textureAtlas.png"
        ],
        "frames": [
            [1, 1, 398, 191, 0, 0, 0],
            [401, 1, 92, 164, 0, 0, 0],
            [401, 167, 80, 54, 0, 0, 0],
            [1, 194, 286, 186, 0, 0, 0],
            [289, 223, 198, 125, 0, 0, 0],
            [289, 350, 196, 232, 0, 0, 0],
            [1, 382, 229, 57, 0, 0, 0],
            [232, 382, 52, 50, 0, 0, 0],
            [232, 434, 51, 52, 0, 0, 0],
            [1, 441, 226, 56, 0, 0, 0],
            [229, 488, 58, 69, 0, 0, 0],
            [1, 499, 226, 56, 0, 0, 0],
            [1, 557, 160, 100, 0, 0, 0],
            [163, 557, 63, 70, 0, 0, 0],
            [228, 559, 57, 64, 0, 0, 0],
            [287, 584, 150, 179, 0, 0, 0],
            [228, 625, 56, 59, 0, 0, 0],
            [163, 629, 61, 70, 0, 0, 0],
            [226, 686, 56, 57, 0, 0, 0],
            [439, 584, 60, 60, 0, 0, 0],
            [439, 646, 60, 60, 0, 0, 0],
            [439, 708, 51, 52, 0, 0, 0],
            [439, 762, 51, 52, 0, 0, 0],
            [1, 659, 130, 96, 0, 0, 0],
            [133, 701, 78, 41, 0, 0, 0],
            [133, 744, 75, 75, 0, 0, 0],
            [1, 757, 120, 121, 0, 0, 0],
            [210, 745, 51, 52, 0, 0, 0],
            [1, 880, 119, 108, 0, 0, 0],
            [122, 880, 49, 64, 0, 0, 0],
            [123, 821, 51, 52, 0, 0, 0],
            [122, 946, 51, 52, 0, 0, 0],
            [173, 875, 35, 35, 0, 0, 0]
        ],
        "animations": {
            "btnPlayAgain": { "frames": [0] },
            "enemyB": { "frames": [1] },
            "lifeitem": { "frames": [2] },
            "logo": { "frames": [3] },
            "bossA": { "frames": [4] },
            "bossB": { "frames": [5] },
            "btnUltimate": { "frames": [6] },
            "explosion": {
                "frames": [8, 21, 22, 27, 30, 31, 7],
                "speed": 0.3
            },
            "btnNormal": { "frames": [9] },
            "btnStart": { "frames": [11] },
            "enemyD": { "frames": [12] },
            "missile": { "frames": [14] },
            "enemyC": { "frames": [15] },
            "playerShip": {
                "frames": [18, 16, 10, 17, 13],
                "speed": 0.5
            },
            "bossmissileA": { "frames": [19] },
            "bossmissileB": { "frames": [20] },
            "enemyA": { "frames": [23] },
            "powerItem": { "frames": [24] },
            "btnBack": { "frames": [25] },
            "meteor": { "frames": [26] },
            "meteorB": { "frames": [28] },
            "missile2": { "frames": [29] },
            "star": { "frames": [32] }
        },
    };
    assetManifest = [
        { id: "imgLogo", src: "./Assets/images/logo.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "logo", src: "./Assets/images/logo.png" },
        { id: "warning", src: "./Assets/images/warning.png" },
        { id: "backgroundSound", src: "./Assets/sounds/background.mp3" },
        { id: "missileSound", src: "./Assets/sounds/missileSound.mp3" },
        { id: "warningSound", src: "./Assets/sounds/warningSound.mp3" },
        { id: "bazoozaSound", src: "./Assets/sounds/bazookaSound.mp3" },
        { id: "crashSound", src: "./Assets/sounds/crashSound.mp3" },
        { id: "tadaSound", src: "./Assets/sounds/tada.mp3" },
        { id: "gettingItemSound", src: "./Assets/sounds/gettingItem.wav" }
    ];
    //preload Assets
    function Init() {
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        console.log("start");
    }
    function Start() {
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
    function Update() {
        if (currentState != managers.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
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
//# sourceMappingURL=game.js.map