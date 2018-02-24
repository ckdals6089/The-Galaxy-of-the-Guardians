/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.9
    Last_modification : Feb 23, 2018
    Description : Added Play Again Button
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

    assetManifest = [ //TODO: Must change the temporary images
        {id: "btnStart", src:"./Assets/images/Start_button.png"}, 
        {id: "background", src:"./Assets/images/background_temporary.png"},  
        {id: "btnNormal", src:"./Assets/images/normal_Button.png"},
        {id: "btnHell", src:"./Assets/images/ULTIMATE_Button.png"},
        {id: "btnBack", src:"./Assets/images/btnBack.png"},
        {id: "btnPlayAgain", src:"./Assets/images/btnPlayAgain.png"},
        {id: "missile", src:"./Assets/images/missile.png"},
        {id: "plane", src:"./Assets/images/PlayerShip.png"},
        {id: "enemy", src:"./Assets/images/enemyA.png"}
    ];

    //preload Assets
    function Init():void{

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start,this);
        console.log("start");
    }
    function Start():void{
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.OPENING;
        currentState = config.Scene.OPENING;
        Main();
    }
    function Update():void{
        if(currentState != objects.Game.currentScene){
            Main();
        }
        currentScene.Update();

        stage.update();
    }
    function Main():void{
        stage.removeAllChildren();

        switch(objects.Game.currentScene){
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