/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 23, 2018
    Description : Changed the value to make it play smoothly
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

            //console.log(plane.position);
            console.log(objects.Vector2.distance(plane.position, other.position));
            if (objects.Vector2.distance(plane.position, other.position) < (plane.centerY + other.centerY -30 )) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    // if plane collides with enemy
                    if(other.name === "enemy") {
                        plane.MinusLife();
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        }
    }
}