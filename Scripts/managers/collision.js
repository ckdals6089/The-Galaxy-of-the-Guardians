/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.6
    Last_modification : Mar 16, 2018
    Description : Changed check methods
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
            if (other.alpha != 0) {
                if (math.Vector2.distance(one.position, other.position) < (one.centerY + other.centerY - 30)) {
                    if (!other.isColliding) {
                        other.isColliding = true;
                        if (one.name = "plane") {
                            switch (other.name) {
                                case "enemyA":
                                    one.life -= 1;
                                    managers.Game.scoreboardManager.Lives -= 1;
                                    createjs.Sound.play("crashSound");
                                    other.alpha = 0;
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
                        if (missile[countM].x >= enemy[countE].x && missile[countM].x + 11 < enemy[countE].x + 49 && missile[countM].y < enemy[countE].y + 40) {
                            //if(math.Vector2.distance(missile[countM].position, enemy[countE].position) > (missile[countM].centerY + enemy[countE].centerY - 30)){
                            if (!enemy[countE].isColliding) {
                                enemy[countE].isColliding = true;
                                enemy[countE].alpha = 0;
                                managers.Game.scoreboardManager.Score += 100;
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