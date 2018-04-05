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
            "textureAtlas.png"
        ],
        "frames": [
            [1, 1, 198, 125, 0, 0, 0],
            [201, 1, 52, 50, 0, 0, 0],
            [201, 53, 51, 52, 0, 0, 0],
            [201, 107, 51, 52, 0, 0, 0],
            [1, 128, 196, 232, 0, 0, 0],
            [199, 161, 56, 59, 0, 0, 0],
            [199, 222, 56, 57, 0, 0, 0],
            [199, 281, 51, 52, 0, 0, 0],
            [199, 335, 51, 52, 0, 0, 0],
            [1, 362, 160, 100, 0, 0, 0],
            [163, 389, 92, 164, 0, 0, 0],
            [1, 464, 150, 179, 0, 0, 0],
            [153, 555, 80, 54, 0, 0, 0],
            [153, 611, 78, 41, 0, 0, 0],
            [1, 645, 130, 96, 0, 0, 0],
            [133, 654, 120, 121, 0, 0, 0],
            [1, 743, 119, 108, 0, 0, 0],
            [122, 777, 63, 70, 0, 0, 0],
            [187, 777, 61, 70, 0, 0, 0],
            [122, 849, 60, 60, 0, 0, 0],
            [184, 849, 60, 60, 0, 0, 0],
            [1, 911, 58, 69, 0, 0, 0],
            [61, 853, 57, 64, 0, 0, 0],
            [1, 853, 51, 52, 0, 0, 0],
            [1, 982, 35, 35, 0, 0, 0],
            [61, 919, 49, 64, 0, 0, 0],
            [112, 919, 51, 52, 0, 0, 0]
        ],
        "animations": {
            "bossA": { "frames": [0] },
            "explosion": {
                "frames": [2, 3, 7, 8, 23, 26, 1],
                "speed": 0.5
            },
            "bossB": { "frames": [4] },
            "Player0": {
                "frames": [6, 5, 21, 18, 17],
                "speed": 0.5
            },
            "enemyD": { "frames": [9] },
            "enemyB": { "frames": [10] },
            "enemyC": { "frames": [11] },
            "liteItem": { "frames": [12] },
            "powerItem": { "frames": [13] },
            "enemyA": { "frames": [14] },
            "meteorA": { "frames": [15] },
            "meteorB": { "frames": [16] },
            "bossmissileA": { "frames": [19] },
            "bossmissileB": { "frames": [20] },
            "missile2": { "frames": [22] },
            "star": { "frames": [24] },
            "missile": { "frames": [25] },
        },
    };
    assetManifest = [
        { id: "imgLogo", src: "./Assets/images/logo.png" },
        { id: "btnplayagain", src: "./Assets/images/btnPlayAgain.png" },
        { id: "btnnormal", src: "./Assets/images/btnNormal.png" },
        { id: "btnback", src: "./Assets/images/btnBack.png" },
        { id: "btnultimate", src: "./Assets/images/btnUltimate.png" },
        { id: "btnstart", src: "./Assets/images/btnStart.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "logo", src: "./Assets/images/logo.png" },
        { id: "backgroundSound", src: "./Assets/sounds/background.mp3" },
        { id: "missileSound", src: "./Assets/sounds/missileSound.mp3" },
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
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene();
                break;
        }
        currentState = managers.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map