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
            console.log(objects.Vector2.distance(plane.position, other.position));
            if (objects.Vector2.distance(plane.position, other.position) < (plane.centerY + other.centerY)) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if plane collides with enemy
                    if (other.name === "enemy") {
                        console.log("fins");
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