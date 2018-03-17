/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.4
    Last_modification : Feb 26, 2018
    Description : Moved to managers module
*/
module managers{
    export class Game{
        public static stage:createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene:number;
        public static currentSceneObject:objects.Scene;
        public static keyboardManager:managers.Keyboard;
        public static scoreboardManager:managers.ScoreBoard;
        public static HighScore: number = 0;
        public static textureAtlas: createjs.SpriteSheet;
    }
}