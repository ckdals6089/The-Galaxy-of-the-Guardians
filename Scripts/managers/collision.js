/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.8
    Last_modification : April 16, 2018
    Description : Added Explosion
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
        Collision.Check = function (one, other) {
            //check to see if object is colliding
            var onePos = new math.Vector2(one.x, one.y);
            var otherPos = new math.Vector2(other.x, other.y);
            if (other.alpha != 0) {
                if (math.Vector2.distance(onePos, otherPos) < (one.centerY + other.centerY)) {
                    if (!other.isColliding) {
                        other.isColliding = true;
                        if (one.name = "plane") {
                            switch (other.name) {
                                case "enemyA":
                                    one.life -= 1;
                                    managers.Game.scoreboardManager.Lives -= 1;
                                    createjs.Sound.play("crashSound");
                                    other.alpha = 0;
                                    var explosion = new objects.Explosion();
                                    explosion.x = one.x;
                                    explosion.y = one.y;
                                    managers.Game.currentSceneObject.addChild(explosion);
                                    break;
                                case "star":
                                    managers.Game.scoreboardManager.Score += 100;
                                    createjs.Sound.play("gettingItemSound"); //sound must be changed
                                    other.alpha = 0;
                                    if (managers.Game.HighScore <= managers.Game.scoreboardManager.Score) {
                                        managers.Game.scoreboardManager.HighScore = managers.Game.scoreboardManager.Score;
                                        managers.Game.HighScore = managers.Game.scoreboardManager.HighScore;
                                    }
                                    break;
                                case "lifeitem":
                                    one.life += 1;
                                    managers.Game.scoreboardManager.Lives += 1;
                                    createjs.Sound.play("gettingItemSound"); //sound must be changed
                                    other.alpha = 0;
                                    if (managers.Game.scoreboardManager.Lives >= 5) {
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
        };
        Collision.Crush = function (missile, enemy) {
            //check to see if object is colliding
            for (var countM = 0; countM < missile.length; countM++) {
                for (var countE = 0; countE < enemy.length; countE++) {
                    if (enemy[countE].alpha != 0) {
                        if (missile[countM].alpha != 0) {
                            if (missile[countM].x >= enemy[countE].x && missile[countM].x + 11 < enemy[countE].x + 49 && missile[countM].y < enemy[countE].y) {
                                //if(math.Vector2.distance(missile[countM].position, enemy[countE].position) > (missile[countM].centerY + enemy[countE].centerY - 30)){
                                if (!enemy[countE].isColliding) {
                                    enemy[countE].isColliding = true;
                                    enemy[countE].alpha = 0;
                                    missile[countM].alpha = 0;
                                    //createjs.Sound.play("");  TODO: put proper sound
                                    managers.Game.scoreboardManager.Score += 100;
                                }
                            }
                        }
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map