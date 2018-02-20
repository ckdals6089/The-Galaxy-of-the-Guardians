/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 20, 2018
    Description : Created a game.ts and initial settings
*/

/// <reference path="_reference.ts"/>

(function(){
    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let assetManifest: any[];
    let currentScene:objects.Scene;
    let currentState:number;

    assetManifest = [

    ];

    //preload Assets
    function Init():void{

    }
    function Start():void{

        Main();
    }
    function Update():void{

    }
    function Main():void{

    }

    window.onload = Init;
})();