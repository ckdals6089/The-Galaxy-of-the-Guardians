/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.5
    Last_modification : Mar 16, 2018
    Description : added life item
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
                        case "lifeitem":
                            objects.Game.scoreboardManager.Lives += 1;
                            createjs.Sound.play("gettingItemSound"); //sound must be changed
                            if (objects.Game.scoreboardManager.Lives >= 5) {
                                objects.Game.scoreboardManager.Lives = 5;
                            }
                            break;
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