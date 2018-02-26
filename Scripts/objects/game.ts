/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.2
    Last_modification : Feb 26, 2018
    Description : Added scoreboard manager
*/
module objects{
    export class Game{
        public static stage:createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene:number;
        public static keyboardManager:managers.Keyboard;
        public static scoreboardManager:managers.ScoreBoard;
    }
}