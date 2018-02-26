/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 25, 2018
    Description : Added keyboard manager
*/
module objects{
    export class Game{
        public static stage:createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene:number;
        public static keyboardManager:managers.Keyboard;
    }
}