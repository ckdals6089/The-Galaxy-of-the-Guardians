/*
    Name : Dongwan Kim
    Version : v1.5
    Last_modification : Feb 21, 2018
    Description : Added temporary missile image
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
        {id: "btnStart", src:"./Assets/images/btnStart_temporary.png"}, 
        {id: "background", src:"./Assets/images/background_temporary.png"},  
        {id: "btnNormal", src:"./Assets/images/btnNormal_temp.png"},
        {id: "btnHell", src:"./Assets/images/btnHell_temp.png"},
        {id: "missile", src:"./Assets/images/missile.png"},
        {id: "plane", src:"./Assets/images/plane_temp.png"}
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
        }
        currentState = objects.Game.currentScene;
        
        stage.addChild(currentScene);
    }

    window.onload = Init;
})();