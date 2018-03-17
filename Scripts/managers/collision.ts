/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.5
    Last_modification : Mar 16, 2018
    Description : added life item
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

        public check(plane: gameobjects.Plane, other: gameobjects.GameObject) {
            //check to see if object is colliding
            if (math.Vector2.distance(plane.position, other.position) < (plane.centerY + other.centerY - 30)) {
                if (!other.isColliding) {

                    other.isColliding = true;
                    console.log("Crushed with " + other.name);

                    switch (other.name) {
                        case "enemy":
                            plane.MinusLife();
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
                        managers.Game.scoreboardManager.Lives += 1;
                            createjs.Sound.play("gettingItemSound"); //sound must be changed
                            if(managers.Game.scoreboardManager.Lives >= 5) {
                                managers.Game.scoreboardManager.Lives = 5;
                            }
                            break;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        }
    }
}