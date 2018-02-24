module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(plane: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            //console.log(plane.position);
            console.log(objects.Vector2.distance(plane.position, other.position);
            if (objects.Vector2.distance(plane.position, other.position) < (plane.centerY + other.centerY)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    // if plane collides with enemy
                    if(other.name === "enemy") {
                        console.log("fins");
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        }
    }
}