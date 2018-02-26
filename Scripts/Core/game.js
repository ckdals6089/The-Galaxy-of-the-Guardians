/*
    Name : Dongwan Kim, Jowon Shin
    Version : v2.0
    Last_modification : Feb 23, 2018
    Description : Changed some images
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
    assetManifest = [
        { id: "btnStart", src: "./Assets/images/Start_button.png" },
        { id: "background", src: "./Assets/images/background_temporary.png" },
        { id: "btnNormal", src: "./Assets/images/normal_Button.png" },
        { id: "btnHell", src: "./Assets/images/ULTIMATE_Button.png" },
        { id: "btnBack", src: "./Assets/images/btnBack.png" },
        { id: "btnPlayAgain", src: "./Assets/images/btnPlayAgain.png" },
        { id: "missile", src: "./Assets/images/missile.png" },
        { id: "plane", src: "./Assets/images/PlayerShip.png" },
        { id: "enemy", src: "./Assets/images/enemyA.png" }
    ];
    //preload Assets
    function Init() {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        console.log("start");
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.OPENING;
        currentState = config.Scene.OPENING;
        keyBoardManager = new managers.Keyboard();
        objects.Game.keyboardManager = keyBoardManager;
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        switch (objects.Game.currentScene) {
            case config.Scene.OPENING:
                currentScene = new scenes.openingScene(assetManager);
                break;
            case config.Scene.CHOOSEMODE:
                currentScene = new scenes.chooseModeScene(assetManager);
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.playScene(assetManager);
                break;
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene(assetManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map