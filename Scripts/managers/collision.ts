/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.6
    Last_modification : Mar 16, 2018
    Description : Changed check methods
*/
module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(one: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding
            if (math.Vector2.distance(one.position, other.position) < (one.centerY + other.centerY - 30)) {
                if (!other.isColliding) {

                    other.isColliding = true;
                    if(one.name = "plane"){
                        //console.log("Crushed with " + other.name);

                        switch (other.name) {
                            case "enemy":
                                    one.life -= 1;
                                    managers.Game.scoreboardManager.Lives -= 1;
                                    createjs.Sound.play("crashSound");                           
                                break;
                            case "star":
                                managers.Game.scoreboardManager.Score += 100;
                                createjs.Sound.play("gettingItemSound"); //sound must be changed
                                if (managers.Game.HighScore <= managers.Game.scoreboardManager.Score) {
                                    managers.Game.scoreboardManager.HighScore = managers.Game.scoreboardManager.Score;
                                    managers.Game.HighScore = managers.Game.scoreboardManager.HighScore;
                                }
                                break;
                            case "lifeitem":
                            one.life += 1;
                            managers.Game.scoreboardManager.Lives += 1;
                                createjs.Sound.play("gettingItemSound"); //sound must be changed
                                if(managers.Game.scoreboardManager.Lives >= 5) {
                                    managers.Game.scoreboardManager.Lives = 5;
                                }
                                break;
                        }
                     }
                }
            }
            else {
                other.isColliding = false;
            }
        }
        public crush(missile:objects.Missile[], enemy:objects.Enemy[]){
             //check to see if object is colliding
             missile.every
             if (math.Vector2.distance(missile[0].position, enemy[0].position) < (missile[0].centerY + enemy[0].centerY - 30)) {
                if (!enemy[0].isColliding) {

                    enemy[0].isColliding = true;
                    console.log("Crushed with " + enemy[0].name);
                    enemy[0].visible = false;
                }
            }
            else {
                enemy[0].isColliding = false;
            }
        }
    }
}