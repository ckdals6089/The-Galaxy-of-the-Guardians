/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Feb 23, 2018
    Description : Changed the value to make it play smoothly
*/
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (plane, other) {
            //check to see if object is colliding
            //console.log(plane.position);
            if (objects.Vector2.distance(plane.position, other.position) < (plane.centerY + other.centerY - 30)) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if plane collides with enemy
                    if (other.name === "enemy") {
                        plane.MinusLife();
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map