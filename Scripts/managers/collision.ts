/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.4
    Last_modification : Feb 26, 2018
    Description : added star
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

        public check(plane: objects.Plane, other: objects.GameObject) {
            //check to see if object is colliding
            if (objects.Vector2.distance(plane.position, other.position) < (plane.centerY + other.centerY - 30)) {
                if (!other.isColliding) {

                    other.isColliding = true;
                    console.log("Crushed with " + other.name);

                    switch (other.name) {
                        case "enemy":
                            plane.MinusLife();
                            objects.Game.scoreboardManager.Lives -= 1;
                            createjs.Sound.play("crashSound");
                            break;
                        case "star":
                            objects.Game.scoreboardManager.Score += 100;
                            createjs.Sound.play("gettingItemSound"); //sound must be changed
                            if (objects.Game.HighScore <= objects.Game.scoreboardManager.Score) {
                                objects.Game.scoreboardManager.HighScore = objects.Game.scoreboardManager.Score;
                                objects.Game.HighScore = objects.Game.scoreboardManager.HighScore;
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