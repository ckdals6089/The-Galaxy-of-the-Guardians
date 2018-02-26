/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.2
    Last_modification : Feb 26, 2018
    Description : added scoreboard manager to manage player's lives and score
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

            if (objects.Vector2.distance(plane.position, other.position) < (plane.centerY + other.centerY -30 )) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    console.log("Crushed with " + other.name);
                    switch(other.name)
                    {
                        case "enemy":
                            //createjs.Sound.play("crushedSound");
                            plane.MinusLife();
                            objects.Game.scoreboardManager.Lives -= 1;
                            objects.Game.scoreboardManager.Score += 100; //will be changed after creating more objects
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