/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.7
    Last_modification : Apr 19, 2018
    Description : Added mode selection value
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
        public static selectedMode:number;
        public static textureAtlas: createjs.SpriteSheet;
        public static plane:objects.Plane;
        public static enemies:objects.Enemy[];
        public static lifeitem: objects.LifeItem;
        public static star: objects.Star;
        public static boss:objects.Boss;
        public static bulletManager: managers.Missile;
        public static EnemyBulletManager: managers.Missile_Enemy;
        public static BossBulletManager:managers.Missile_Boss;
    }
}