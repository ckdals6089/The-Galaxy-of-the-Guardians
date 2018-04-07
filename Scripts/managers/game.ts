/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.5
    Last_modification : Apr 06, 2018
    Description : Added bullet manager
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
        public static plane:objects.Plane;
        public static enemies:objects.Enemy[];
        public static boss:objects.Boss;
        public static bulletManager: managers.Missile;
    }
}