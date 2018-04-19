var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 25, 2018
    Description : Created Key config
*/
var config;
(function (config) {
    var Keys = /** @class */ (function () {
        function Keys() {
        }
        //MOVE SPACESHIP
        Keys.LEFT_ARROW = 37;
        Keys.RIGHT_ARROW = 39;
        Keys.UP_ARROW = 40;
        Keys.DOWN_ARROW = 38;
        //SHOOTING ULTI
        Keys.SPACE = 32;
        return Keys;
    }());
    config.Keys = Keys;
})(config || (config = {}));
/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.4
    Last_modification : Feb 23, 2018
    Description : Added 3rd stage scene
*/
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["LOADING"] = 0] = "LOADING";
        Scene[Scene["OPENING"] = 1] = "OPENING";
        Scene[Scene["CHOOSEMODE"] = 2] = "CHOOSEMODE";
        Scene[Scene["PLAY_ONE"] = 3] = "PLAY_ONE";
        Scene[Scene["PLAY_TWO"] = 4] = "PLAY_TWO";
        Scene[Scene["PLAY_THREE"] = 5] = "PLAY_THREE";
        Scene[Scene["GAMEOVER"] = 6] = "GAMEOVER";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.7
    Last_modification : Apr 19, 2018
    Description : Added mode selection value
*/
var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.HighScore = 0;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Created scene objects
*/
var objects;
(function (objects) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        //CONSTRUCTOR
        function Scene() {
            var _this = _super.call(this) || this;
            _this.assetManager = managers.Game.assetManager;
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        Scene.prototype.Start = function () {
        };
        Scene.prototype.Update = function () {
        };
        Scene.prototype.Main = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
/*
    Name : Jowon Shin
    Version : v1.5
    Last_modification : Feb 23, 2018
    Description : Created a vector object
*/
var math;
(function (math) {
    /**
     * This class extends the CreateJS Point class
     *
     * @export
     * @class Vector2
     * @extends {createjs.Point}
     */
    var Vector2 = /** @class */ (function (_super) {
        __extends(Vector2, _super);
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, x, y) || this;
        }
        /**
         * This method returns the distance between two Vector2 objects (a and b)
         *
         * @static
         * @method distance
         * @param {Vector2} a
         * @param {Vector2} b
         * @returns {number}
         */
        Vector2.distance = function (a, b) {
            return Math.floor(Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)));
        };
        return Vector2;
    }(createjs.Point));
    math.Vector2 = Vector2;
})(math || (math = {}));
/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Mar 16, 2018
    Description : Added life property
*/
var objects;
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUTORS
        function GameObject(imageString) {
            var _this = _super.call(this, managers.Game.textureAtlas, imageString) || this;
            _this.name = imageString;
            _this._init();
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "Dx", {
            //public position:createjs.Point;
            get: function () {
                return this._dx;
            },
            set: function (_dx) {
                this._dx = _dx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Dy", {
            get: function () {
                return this._dy;
            },
            set: function (_dy) {
                this._dy = _dy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "isColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newState) {
                this._isColliding = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "life", {
            get: function () {
                return this._life;
            },
            set: function (newLife) {
                this._life = newLife;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS
        GameObject.prototype._init = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.regX = this.centerX;
            this.regY = this.centerY;
            this.position = new math.Vector2(this.x, this.y);
            this.isColliding = false;
            this.Life = this._life;
        };
        //PUBLIC METHODS
        GameObject.prototype.Reset = function () {
        };
        GameObject.prototype.CheckBounds = function () {
        };
        GameObject.prototype.Move = function () {
        };
        GameObject.prototype.Start = function () {
        };
        GameObject.prototype.Update = function () {
        };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Designed button objects
*/
var objects;
(function (objects) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function Button(imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, imageString) || this;
            // this.regX = this.getBounds().width * 0.5;
            // this.regY = this.getBounds().height * 0.5;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Button;
    }(objects.GameObject));
    objects.Button = Button;
})(objects || (objects = {}));
/*
    Name : Jowon Shin
    Version : v1.1
    Last_modification : April 07, 2018
    Description : Updated Update method
*/
var objects;
(function (objects) {
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        // Public Propoerties
        // Constructor
        function Label(labelString, fontSize, fontFamily, fontColour, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, labelString, fontSize + " " + fontFamily, fontColour) || this;
            if (isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            _this._boss = managers.Game.boss;
            _this._bossMissile = managers.Game.BossBulletManager;
            _this._enemy = managers.Game.enemies;
            _this._lifeItem = managers.Game.lifeitem;
            _this._star = managers.Game.star;
            _this._scoreBoard = managers.Game.scoreboardManager;
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initializes variables and creates new objects
        // updates the game object every frame
        Label.prototype.Update = function () {
            if (this._boss.alpha === 0) {
                if (this.y < 480 && this.y > 300) {
                    createjs.Sound.play("levelCompleteSound");
                }
                this.alpha = 1;
                this.Move();
                this._enemy.forEach(function (enemy) {
                    enemy.alpha = 0;
                    //managers.Game.currentSceneObject.removeChild(enemy);
                });
                this._bossMissile.Missiles.forEach(function (missile) {
                    missile.alpha = 0;
                });
                this._star.alpha = 0;
                this._lifeItem.alpha = 0;
            }
            else {
                this.alpha = 0;
            }
        };
        // reset the objects location to some value
        Label.prototype.Reset = function () {
            this.alpha = 0;
            this.x = 320;
            this.y = 600;
        };
        // move the object to some new location
        Label.prototype.Move = function () {
            this.y -= 5;
        };
        // check to see if some boundary has been passed
        Label.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y < 0) {
                //if (this.x >= 1000) {
                this.Reset();
            }
        };
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : March 16, 2018
    Description : Designed Logo Object
*/
var objects;
(function (objects) {
    var Logo = /** @class */ (function (_super) {
        __extends(Logo, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function Logo(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.regX = _this.getBounds().width * 0.5;
            _this.regY = _this.getBounds().height * 0.5;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Logo;
    }(createjs.Bitmap));
    objects.Logo = Logo;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created background objects
*/
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        //CONSTRUCTOR
        function Background(assetManager) {
            var _this = _super.call(this, assetManager.getResult("background")) || this;
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY_ONE:
                    _this = _super.call(this, assetManager.getResult("background")) || this;
                    break;
                case config.Scene.PLAY_TWO:
                    _this = _super.call(this, assetManager.getResult("background2")) || this;
                    break;
                case config.Scene.PLAY_THREE:
                    _this = _super.call(this, assetManager.getResult("background3")) || this;
                    break;
            }
            _this.Start();
            return _this;
        }
        Object.defineProperty(Background.prototype, "Dy", {
            //PUBLIC PROPERTIES
            get: function () {
                return this._dy;
            },
            set: function (_dy) {
                this._dy = _dy;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS
        Background.prototype._reset = function () {
            this.y = -1000;
        };
        Background.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        Background.prototype._move = function () {
            this.y += this._dy;
        };
        //PUBLIC METHODS
        Background.prototype.Start = function () {
            this._dy = 1;
            this._reset();
        };
        Background.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.4
    Last_modification : Apr 06 2018
    Description : Creaeted BulletFire public methods
*/
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        //CONSTRUTOR
        function Plane() {
            var _this = _super.call(this, "playerShip") || this;
            _this.life = 3;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Plane, "centerX", {
            //PUBLIC PROPERTIES
            get: function () {
                return this.centerX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Plane, "centerY", {
            get: function () {
                return this.centerY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Plane.prototype, "Life", {
            get: function () {
                return this.life;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS
        //PUBLIC METHODS
        Plane.prototype.Reset = function () {
        };
        Plane.prototype.CheckBounds = function () {
            if (this.x >= 640 - this.centerX) {
                this.x = 640 - this.centerX;
            }
            if (this.x < this.centerX) {
                this.x = this.centerX;
            }
            if (this.y >= 480 - this.centerY) {
                this.y = 480 - this.centerY;
            }
            if (this.y < this.centerY) {
                this.y = this.centerY;
            }
        };
        Plane.prototype.Move = function () {
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 10;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 10;
            }
            if (managers.Game.keyboardManager.moveForward) {
                this.y += 10;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y -= 10;
            }
        };
        Plane.prototype.Start = function () {
            this.x = 300;
            this.y = 430;
            this._missileSpawn = new math.Vector2();
        };
        Plane.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            this.BulletFire();
        };
        Plane.prototype.BulletFire = function () {
            if (this.alpha === 1) {
                var ticker = createjs.Ticker.getTicks();
                if (ticker % 10 == 0) {
                    this._missileSpawn = new math.Vector2(this.x, this.y - this.centerY);
                    var currentMissile = managers.Game.bulletManager.CurrentMissile;
                    var missile = managers.Game.bulletManager.Missiles[currentMissile];
                    missile.x = this._missileSpawn.x;
                    missile.y = this._missileSpawn.y;
                    this._missileSound = createjs.Sound.play("missileSound");
                    this._missileSound.loop = 0;
                    this._missileSound.volume = 0.2;
                    managers.Game.bulletManager.CurrentMissile++;
                    if (managers.Game.bulletManager.CurrentMissile > 999) {
                        managers.Game.bulletManager.CurrentMissile = 0;
                    }
                }
            }
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Apr 06, 2018
    Description : Changed the missile basic settings
*/
var objects;
(function (objects) {
    var Missile = /** @class */ (function (_super) {
        __extends(Missile, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUTOR
        function Missile() {
            var _this = _super.call(this, "missile") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        // //PUBLIC METHODS
        Missile.prototype.Start = function () {
            //console.log(objects.Plane.getPosition);
            this._dy = -10;
            this._dx = 0;
            this.Reset();
        };
        Missile.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Missile.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Missile.prototype.CheckBounds = function () {
            if (this.y <= -this.height) {
                this.Reset();
            }
        };
        Missile.prototype.Move = function () {
            this.y += this._dy;
        };
        return Missile;
    }(objects.GameObject));
    objects.Missile = Missile;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.4
    Last_modification : Apr 19, 2018
    Description : Added Enemies bullet
*/
var objects;
(function (objects) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Enemy() {
            var _this = _super.call(this, "enemyA") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        Enemy.prototype.Move = function () {
            this.x += this._dx;
            this.y += this._dy;
            this.BulletFire();
        };
        Enemy.prototype.Start = function () {
            this.Reset();
            this._missileSpawn = new math.Vector2();
        };
        Enemy.prototype.Reset = function () {
            this.alpha = 1;
            this.life = 2;
            this.x = (Math.random() * (640 - this.width)) + this.centerX;
            this.y = -this.height;
            this._dx = (Math.random() * -4) + 2;
            this._dy = (Math.random() * 5) + 5;
        };
        Enemy.prototype.CheckBounds = function () {
            //check the bottom border
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Enemy.prototype.Update = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.Move();
            this.CheckBounds();
        };
        Enemy.prototype.BulletFire = function () {
            if (this.alpha == 1) {
                var ticker = createjs.Ticker.getTicks();
                if (ticker % 60 == 0) {
                    var enemies = managers.Game.enemies;
                    var _missile = managers.Game.EnemyBulletManager.Missiles;
                    for (var i = 0; i < enemies.length; i++) {
                        if (enemies[i].alpha == 1) {
                            this._missileSpawn = new math.Vector2(enemies[i].x, enemies[i].y);
                            _missile[i].x = this._missileSpawn.x;
                            _missile[i].y = this._missileSpawn.y;
                            _missile[i].Dx = this._dx * 1.5;
                            _missile[i].Dy = this._dy * 1.5;
                            _missile[i].Update();
                        }
                    }
                }
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : Apr 19, 2018
    Description : Change x, y values
*/
var objects;
(function (objects) {
    var Missile_Enemy = /** @class */ (function (_super) {
        __extends(Missile_Enemy, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUTOR
        function Missile_Enemy() {
            var _this = _super.call(this, "bossmissileA") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        // //PUBLIC METHODS
        Missile_Enemy.prototype.Start = function () {
            this._dy = 10;
            this._dx = 0;
            this.Reset();
        };
        Missile_Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Missile_Enemy.prototype.Reset = function () {
            this.x = -100;
            this.y = -100;
        };
        Missile_Enemy.prototype.CheckBounds = function () {
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Missile_Enemy.prototype.Move = function () {
            this.y += this._dy;
        };
        return Missile_Enemy;
    }(objects.GameObject));
    objects.Missile_Enemy = Missile_Enemy;
})(objects || (objects = {}));
/*
    Name : Jowon Shin, Dongwan Kim
    Version : v1.1
    Last_modification : Feb 26, 2018
    Description : Set the visibility when they reset
*/
var objects;
(function (objects) {
    var Star = /** @class */ (function (_super) {
        __extends(Star, _super);
        // private instance variables
        // public properties
        // Constructor
        function Star() {
            var _this = _super.call(this, "star") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Star.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        // updates the game object every frame
        Star.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Star.prototype.Reset = function () {
            this.alpha = 1;
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.centerY);
            this.y = -this.height;
        };
        // move the object to some new location
        Star.prototype.Move = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Star.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y >= 1000 + this.height) {
                this.Reset();
            }
        };
        return Star;
    }(objects.GameObject));
    objects.Star = Star;
})(objects || (objects = {}));
/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : Mar 16, 2018
    Description : Created Life Item
*/
var objects;
(function (objects) {
    var LifeItem = /** @class */ (function (_super) {
        __extends(LifeItem, _super);
        // private instance variables
        // public properties
        // Constructor
        function LifeItem() {
            var _this = _super.call(this, "lifeitem") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        LifeItem.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        // updates the game object every frame
        LifeItem.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        LifeItem.prototype.Reset = function () {
            this.alpha = 1;
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.centerY);
            this.y = -this.height;
        };
        // move the object to some new location
        LifeItem.prototype.Move = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        LifeItem.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y >= 2000 + this.height) {
                this.Reset();
            }
        };
        return LifeItem;
    }(objects.GameObject));
    objects.LifeItem = LifeItem;
})(objects || (objects = {}));
/*
    Name : Chamgin Shin
    Version : v1.1
    Last_modification : April 6, 2018
    Description : Set the visibility when they reset
*/
var objects;
(function (objects) {
    var Meteor = /** @class */ (function (_super) {
        __extends(Meteor, _super);
        // private instance variables
        // public properties
        // Constructor
        function Meteor() {
            var _this = _super.call(this, "meteorsmall") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Meteor.prototype.Start = function () {
            this._dy = 1;
            this.Reset();
        };
        // updates the game object every frame
        Meteor.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Meteor.prototype.Reset = function () {
            this.alpha = 1;
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.centerY);
            this.y = -this.height;
        };
        // move the object to some new location
        Meteor.prototype.Move = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Meteor.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : April 05, 2018
    Description : Created Explosion File
*/
var objects;
(function (objects) {
    var Explosion = /** @class */ (function (_super) {
        __extends(Explosion, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Explosion() {
            var _this = _super.call(this, "explosion") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        Explosion.prototype._animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this._animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        };
        //PUBLIC METHODS
        Explosion.prototype.Start = function () {
            this.on("animationend", this._animationEnded.bind(this), false);
        };
        Explosion.prototype.Update = function () {
        };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
/*
    Name : Jowon Shin, Dongwan Kim
    Version : v1.0
    Last_modification : Feb 26, 2018
    Description : Created Warning
*/
var objects;
(function (objects) {
    var Warning = /** @class */ (function (_super) {
        __extends(Warning, _super);
        // public properties
        // Constructor
        function Warning(assetManager) {
            var _this = _super.call(this, assetManager.getResult("warning")) || this;
            _this.x = 10;
            _this.y = 100;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Warning.prototype.Start = function () {
            this._scoreBoard = managers.Game.scoreboardManager;
            this._boss = managers.Game.boss;
            this.Reset();
        };
        // updates the game object every frame
        Warning.prototype.Update = function () {
            if (this._boss.y < 50) {
                createjs.Sound.play("warningSound", { volume: 0.7 });
                this.alpha = 1;
                this.Move();
            }
            else if (this._boss.y === 50) {
                managers.Game.currentSceneObject.removeChild(this);
            }
            // this.CheckBounds();
        };
        // reset the objects location to some value
        Warning.prototype.Reset = function () {
            this.alpha = 0;
            this.x = 10;
            this.y = 100;
        };
        // move the object to some new location
        Warning.prototype.Move = function () {
            this.x += 10;
        };
        // check to see if some boundary has been passed
        Warning.prototype.CheckBounds = function () {
            // check bounds
            if (this.x >= 640 + managers.Game.currentSceneObject.getBounds().width) {
                this.Reset();
            }
        };
        return Warning;
    }(createjs.Bitmap));
    objects.Warning = Warning;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Apr 05, 2018
    Description : Created a boss class
*/
var objects;
(function (objects) {
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Boss() {
            var _this = _super.call(this, "bossB") || this;
            _this.Start();
            _this.life = 1000;
            return _this;
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        Boss.prototype.Start = function () {
            this.alpha = 1;
            this._dy = 5;
            this.x = 320;
            this.y = -this.height;
            this._missileSpawn = new math.Vector2();
            // this.Reset();
        };
        Boss.prototype.Move = function () {
            this.y += this._dy;
        };
        Boss.prototype.CheckBounds = function () {
            //check the bottom border
            if (this.y >= 50) {
                this.y = 50;
            }
        };
        Boss.prototype.Update = function () {
            this.position = new math.Vector2(this.x, this.y);
            this.Move();
            this.CheckBounds();
            this.BulletFire();
        };
        Boss.prototype.BulletFire = function () {
            if (this.alpha == 1) {
                var ticker = createjs.Ticker.getTicks();
                if (ticker % 10 == 0) {
                    this._missileSpawn = new math.Vector2(this.x, this.y);
                    var currentMissile = managers.Game.BossBulletManager.CurrentMissile;
                    var missile = managers.Game.BossBulletManager.Missiles[currentMissile];
                    var missileCount = managers.Game.BossBulletManager.MissileCount;
                    missile.x = this._missileSpawn.x;
                    missile.y = this._missileSpawn.y;
                    managers.Game.BossBulletManager.CurrentMissile++;
                    if (managers.Game.BossBulletManager.CurrentMissile > missileCount - 1) {
                        managers.Game.BossBulletManager.CurrentMissile = 0;
                    }
                }
            }
        };
        return Boss;
    }(objects.GameObject));
    objects.Boss = Boss;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Apr 18, 2018
    Description : Created a boss's missile
*/
var objects;
(function (objects) {
    var Missile_Boss = /** @class */ (function (_super) {
        __extends(Missile_Boss, _super);
        //PRIVATE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUTOR
        function Missile_Boss() {
            var _this = _super.call(this, "bossmissileB") || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        // //PUBLIC METHODS
        Missile_Boss.prototype.Start = function () {
            this.Reset();
        };
        Missile_Boss.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Missile_Boss.prototype.Reset = function () {
            this.alpha = 1;
            this._dx = (Math.random() * -4) + 2;
            this._dy = (Math.random() * 5);
            this.x = -5000;
            this.y = -5000;
        };
        Missile_Boss.prototype.CheckBounds = function () {
            if (this.y >= 960 + this.height) {
                this.Reset();
            }
        };
        Missile_Boss.prototype.Move = function () {
            this.x += this._dx;
            this.y += this._dy;
        };
        return Missile_Boss;
    }(objects.GameObject));
    objects.Missile_Boss = Missile_Boss;
})(objects || (objects = {}));
/*
    Name : Dongwan Kim, Jowon Shin
    Version : v2.0
    Last_modification : April 07, 2018
    Description : Modified collision between missile and enemy
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
                            case "bossB":
                                other.life -= 1;
                                if (other.life < 0) {
                                    other.alpha = 0;
                                    managers.Game.scoreboardManager.Score += 2000;
                                    createjs.Sound.play("bazookaSound");
                                }
                                one.alpha = 0;
                                if (other.y == 50) {
                                    explosion = new objects.Explosion();
                                    explosion.x = (other.x - 30) + Math.random() * 50;
                                    explosion.y = other.centerY * Math.random();
                                    managers.Game.currentSceneObject.addChild(explosion);
                                    createjs.Sound.play("attackSound", { volume: 0.1 });
                                }
                                break;
                            case "playerShip":
                                if ((math.Vector2.distance(onePos, otherPos) < (one.centerY + other.centerY) - 30)) {
                                    if (one.alpha != 0) {
                                        other.life -= 1;
                                        managers.Game.scoreboardManager.Lives -= 1;
                                        console.log(other.life);
                                        console.log(one.width + "," + one.height);
                                        createjs.Sound.play("crashSound");
                                        one.alpha = 0;
                                        explosion = new objects.Explosion();
                                        explosion.x = other.x;
                                        explosion.y = other.y;
                                        managers.Game.currentSceneObject.addChild(explosion);
                                    }
                                }
                                break;
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
                    var onePos = new math.Vector2(missile[countM].x, missile[countM].y);
                    var otherPos = new math.Vector2(enemy[countE].x, enemy[countE].y);
                    if (enemy[countE].alpha != 0) {
                        if (missile[countM].alpha != 0) {
                            if (math.Vector2.distance(onePos, otherPos) < missile[countM].centerY + enemy[countE].centerY) {
                                //if(math.Vector2.distance(missile[countM].position, enemy[countE].position) > (missile[countM].centerY + enemy[countE].centerY - 30)){
                                if (!enemy[countE].isColliding) {
                                    enemy[countE].isColliding = true;
                                    missile[countM].alpha = 0;
                                    enemy[countE].life -= 1;
                                    var explosion = new objects.Explosion();
                                    explosion.x = enemy[countE].x;
                                    explosion.y = enemy[countE].y;
                                    managers.Game.currentSceneObject.addChild(explosion);
                                    if (enemy[countE].life == 0) {
                                        enemy[countE].alpha = 0;
                                        managers.Game.scoreboardManager.Score += 100;
                                        createjs.Sound.play("attackSound", { volume: 0.2 });
                                    }
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
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 25, 2018
    Description : Created keyboard module to move the spaceship
*/
var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        //CONSTRUCTORS
        function Keyboard() {
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }
        //PRIVATE METHODS
        //PUBLIC METHODS
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Keys.UP_ARROW:
                    this.moveForward = true;
                    break;
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = true;
                    break;
                case config.Keys.DOWN_ARROW:
                    this.moveBackward = true;
                    break;
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = true;
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Keys.UP_ARROW:
                    this.moveForward = false;
                    break;
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                    break;
                case config.Keys.DOWN_ARROW:
                    this.moveBackward = false;
                    break;
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
/*
    Name : Jowon Shin
    Version : v1.9
    Last_modification : Feb 26, 2018
    Description : Create the scoreboard
*/
var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this._initialize();
        }
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            // public properties
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newLives) {
                this._lives = newLives;
                this.LivesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newHighScore) {
                this._highScore = newHighScore;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        ScoreBoard.prototype._initialize = function () {
            this.LivesLabel = new objects.Label("Lives: 0", "20px", "SpaceComic", "#FFFFFF", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score: 99999", "15px", "SpaceComic", "#FFFF00", 475, 10, false);
            this.HighScoreLabel = new objects.Label("High Score: 99999", "40px", "SpaceComic", "#FFFFFF", 320, 140, true);
            this.Score = 0;
            this.Lives = 3;
            this.HighScore = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : April 06, 2018
    Description : Created a missile manager class
*/
var managers;
(function (managers) {
    var Missile = /** @class */ (function () {
        //CONSTRUCTOR
        function Missile() {
            this.Start();
        }
        //PRIVATE METHODS
        Missile.prototype._missileShoot = function () {
            for (var count = 0; count < this._missileCount; count++) {
                this.Missiles[count] = new objects.Missile();
            }
        };
        //PUBLIC METHODS
        Missile.prototype.Start = function () {
            this._missileCount = 1000;
            this.Missiles = new Array();
            this._missileShoot();
            this.CurrentMissile = 0;
        };
        Missile.prototype.Update = function () {
            this.Missiles.forEach(function (missile) {
                missile.Update();
            });
        };
        return Missile;
    }());
    managers.Missile = Missile;
})(managers || (managers = {}));
/*
    Name : Dongwan Kim
    Version : v1.1
    Last_modification : April 19, 2018
    Description : Changed the missile count
*/
var managers;
(function (managers) {
    var Missile_Enemy = /** @class */ (function () {
        //CONSTRUCTOR
        function Missile_Enemy() {
            this.Start();
        }
        //PRIVATE METHODS
        Missile_Enemy.prototype._missileShoot = function () {
            for (var count = 0; count < this._missileCount; count++) {
                this.Missiles[count] = new objects.Missile_Enemy();
            }
        };
        //PUBLIC METHODS
        Missile_Enemy.prototype.Start = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY_ONE:
                    this._missileCount = 5;
                    break;
                case config.Scene.PLAY_TWO:
                    this._missileCount = 6;
                    break;
                case config.Scene.PLAY_THREE:
                    this._missileCount = 7;
                    break;
            }
            this.Missiles = new Array();
            this._missileShoot();
        };
        Missile_Enemy.prototype.Update = function () {
            this.Missiles.forEach(function (missile) {
                missile.Update();
            });
        };
        return Missile_Enemy;
    }());
    managers.Missile_Enemy = Missile_Enemy;
})(managers || (managers = {}));
/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : April 18, 2018
    Description : Created a missile manager class
*/
var managers;
(function (managers) {
    var Missile_Boss = /** @class */ (function () {
        //CONSTRUCTOR
        function Missile_Boss() {
            this.Start();
        }
        //PRIVATE METHODS
        Missile_Boss.prototype._missileShoot = function () {
            for (var count = 0; count < this._missileCount; count++) {
                this.Missiles[count] = new objects.Missile_Boss();
            }
        };
        //PUBLIC METHODS
        Missile_Boss.prototype.Start = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY_ONE:
                    this._missileCount = 10;
                    break;
                case config.Scene.PLAY_TWO:
                    this._missileCount = 40;
                    break;
                case config.Scene.PLAY_THREE:
                    this._missileCount = 100;
                    break;
            }
            this.MissileCount = this._missileCount;
            this.Missiles = new Array();
            this._missileShoot();
            this.CurrentMissile = 0;
        };
        Missile_Boss.prototype.Update = function () {
            this.Missiles.forEach(function (missile) {
                missile.Update();
            });
        };
        return Missile_Boss;
    }());
    managers.Missile_Boss = Missile_Boss;
})(managers || (managers = {}));
/*
    Name : Jowon Shin
    Version : v1.0
    Last_modification : March 16, 2018
    Description : Created a splash scene
*/
var scenes;
(function (scenes) {
    var loadingScene = /** @class */ (function (_super) {
        __extends(loadingScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function loadingScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        loadingScene.prototype.GoStart = function () {
            setTimeout(
            //Move to Opening scene after 3 seconds
            function () {
                managers.Game.currentScene = config.Scene.OPENING;
            }, 3000);
        };
        loadingScene.prototype.AnimateLogo = function () {
        };
        //PUBLIC METHODS
        loadingScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Logo(this.assetManager, "imgLogo", 320, 220);
            this.Main();
            console.log("loading game..");
        };
        loadingScene.prototype.Update = function () {
        };
        loadingScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._logo);
            this.AnimateLogo();
            this.GoStart();
        };
        return loadingScene;
    }(objects.Scene));
    scenes.loadingScene = loadingScene;
})(scenes || (scenes = {}));
/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Feb 25, 2018
    Description : Added a background and label
*/
var scenes;
(function (scenes) {
    var openingScene = /** @class */ (function (_super) {
        __extends(openingScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function openingScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        openingScene.prototype._btnStartClick = function () {
            managers.Game.currentScene = config.Scene.CHOOSEMODE;
        };
        //PUBLIC METHODS
        openingScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Logo(this.assetManager, "logo", 320, 220);
            this._openingLogo = new objects.Label("The Galaxy of the Guardians", "30px", "SpaceComic", "#FFFFFF", 100, 310);
            this._btnStart = new objects.Button("btnStart", 320, 415);
            this.Main();
            console.log("start");
        };
        openingScene.prototype.Update = function () {
        };
        openingScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._openingLogo);
            this.addChild(this._btnStart);
            this.addChild(this._logo);
            this._btnStart.on("click", this._btnStartClick);
        };
        return openingScene;
    }(objects.Scene));
    scenes.openingScene = openingScene;
})(scenes || (scenes = {}));
/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.3
    Last_modification : Apr 19, 2018
    Description : Implemented selected mode value
*/
var scenes;
(function (scenes) {
    var chooseModeScene = /** @class */ (function (_super) {
        __extends(chooseModeScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function chooseModeScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        chooseModeScene.prototype._btnNormalClick = function () {
            managers.Game.currentScene = config.Scene.PLAY_ONE;
            //Selection 0: Normal mode
            managers.Game.selectedMode = 0;
        };
        chooseModeScene.prototype._btnHellClick = function () {
            managers.Game.currentScene = config.Scene.PLAY_ONE;
            //Selection 0: Normal mode
            managers.Game.selectedMode = 1;
        };
        chooseModeScene.prototype._btnBackClick = function () {
            managers.Game.currentScene = config.Scene.OPENING;
        };
        //PUBLIC METHODS
        chooseModeScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._logo = new objects.Logo(this.assetManager, "logo", 320, 220);
            this._btnNormal = new objects.Button("btnNormal", 200, 370);
            this._btnHell = new objects.Button("btnUltimate", 440, 370);
            this._btnBack = new objects.Button("btnBack", 530, 80);
            this.Main();
            console.log("start");
        };
        chooseModeScene.prototype.Update = function () {
        };
        chooseModeScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._btnNormal);
            this.addChild(this._btnHell);
            this.addChild(this._btnBack);
            this.addChild(this._logo);
            this._btnNormal.on("click", this._btnNormalClick);
            this._btnHell.on("click", this._btnHellClick);
            this._btnBack.on("click", this._btnBackClick);
        };
        return chooseModeScene;
    }(objects.Scene));
    scenes.chooseModeScene = chooseModeScene;
})(scenes || (scenes = {}));
/*
    Name : Dongwan Kim, Changmin Shin, Jowon Shin
    Version : v2.7
    Last_modification : Apr 18, 2018
    Description : Added enemies missiles
*/
var scenes;
(function (scenes) {
    var StageOneScene = /** @class */ (function (_super) {
        __extends(StageOneScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function StageOneScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        StageOneScene.prototype._sucessStage = function () {
            // if(this._scoreBoard.Score > 300){
            if (this._boss.alpha == 0) {
                this._congratMessage.Update();
                setTimeout(function () {
                    managers.Game.currentScene = config.Scene.PLAY_TWO;
                }, 4000);
                this._backgroundSound.stop();
            }
        };
        //PUBLIC METHODS
        StageOneScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane();
            managers.Game.plane = this._plane;
            this._star = new objects.Star();
            managers.Game.star = this._star;
            this._lifeItem = new objects.LifeItem();
            managers.Game.lifeitem = this._lifeItem;
            this._meteor = new objects.Meteor();
            this._enemyNum = 5;
            this._enemy = new Array();
            managers.Game.enemies = this._enemy;
            this._boss = new objects.Boss();
            managers.Game.boss = this._boss;
            this._missileManager = new managers.Missile();
            managers.Game.bulletManager = this._missileManager;
            this._enemyMissileManager = new managers.Missile_Enemy();
            managers.Game.EnemyBulletManager = this._enemyMissileManager;
            this._bossMissileManager = new managers.Missile_Boss();
            managers.Game.BossBulletManager = this._bossMissileManager;
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;
            this._scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreboardManager = this._scoreBoard;
            this._warningMessage = new objects.Warning(this.assetManager);
            this._congratMessage = new objects.Label("Congratulations!", "40px", "SpaceComic", "#FFFFFF", 320, 600, true);
            this.Main();
        };
        StageOneScene.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();
            this._meteor.Update();
            this._missileManager.Update();
            this._enemyMissileManager.Update();
            this._bossMissileManager.Update();
            // this.BulletFire();
            if (this._scoreBoard.Score >= 3000) {
                this._boss.Update();
                this._warningMessage.Update();
            }
            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);
            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.Check(_this._plane, enemy);
            });
            managers.Collision.Crush(this._missileManager.Missiles, this._enemy);
            this._missileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._boss);
            });
            this._bossMissileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._plane);
            });
            this._enemyMissileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._plane);
            });
            if (this._scoreBoard.Lives <= 1) {
                this._scoreBoard.LivesLabel.color = "#FF0000";
            }
            else if (this._scoreBoard.Lives >= 2) {
                this._scoreBoard.LivesLabel.color = "#FFFFFF";
            }
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
            }
            this._sucessStage();
        };
        StageOneScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            this.addChild(this._meteor);
            this.addChild(this._star);
            this.addChild(this._lifeItem);
            this._missileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this._enemyMissileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            // this.addChild(this._enemyMissileManager);
            this._bossMissileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this.addChild(this._warningMessage);
            this.addChild(this._boss);
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._congratMessage);
        };
        return StageOneScene;
    }(objects.Scene));
    scenes.StageOneScene = StageOneScene;
})(scenes || (scenes = {}));
/*
    Name : Dongwan Kim
    Version : v1.6
    Last_modification : Apr 18, 2018
    Description : Added enemies missiles
*/
var scenes;
(function (scenes) {
    var StageTwoScene = /** @class */ (function (_super) {
        __extends(StageTwoScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function StageTwoScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        StageTwoScene.prototype._sucessStage = function () {
            if (this._boss.alpha == 0) {
                this._congratMessage.Update();
                setTimeout(function () {
                    managers.Game.currentScene = config.Scene.PLAY_THREE;
                }, 4000);
                this._backgroundSound.stop();
            }
        };
        //PUBLIC METHODS
        StageTwoScene.prototype.Start = function () {
            console.log("Stage two");
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane();
            this._plane = managers.Game.plane;
            this._star = new objects.Star();
            managers.Game.star = this._star;
            this._lifeItem = new objects.LifeItem();
            managers.Game.lifeitem = this._lifeItem;
            this._meteor = new objects.Meteor();
            this._enemyNum = 6;
            this._enemy = new Array();
            managers.Game.enemies = this._enemy;
            this._boss = new objects.Boss();
            managers.Game.boss = this._boss;
            this._missileManager = new managers.Missile();
            managers.Game.bulletManager = this._missileManager;
            this._enemyMissileManager = new managers.Missile_Enemy();
            managers.Game.EnemyBulletManager = this._enemyMissileManager;
            this._bossMissileManager = new managers.Missile_Boss();
            managers.Game.BossBulletManager = this._bossMissileManager;
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;
            this._scoreBoard = new managers.ScoreBoard;
            this._scoreBoard = managers.Game.scoreboardManager;
            this._prviousScore = managers.Game.scoreboardManager.Score;
            this._warningMessage = new objects.Warning(this.assetManager);
            this._congratMessage = new objects.Label("Congratulations!", "40px", "SpaceComic", "#FFFFFF", 320, 600, true);
            this.Main();
        };
        StageTwoScene.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();
            this._meteor.Update();
            this._missileManager.Update();
            this._enemyMissileManager.Update();
            this._bossMissileManager.Update();
            if (this._scoreBoard.Score >= this._prviousScore + 5000) {
                this._boss.Update();
                this._warningMessage.Update();
            }
            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);
            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                enemy.Dy += 0.07;
                managers.Collision.Check(_this._plane, enemy);
            });
            managers.Collision.Crush(this._missileManager.Missiles, this._enemy);
            this._missileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._boss);
            });
            this._bossMissileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._plane);
            });
            this._enemyMissileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._plane);
            });
            if (this._scoreBoard.Lives <= 1) {
                this._scoreBoard.LivesLabel.color = "#FF0000";
            }
            else if (this._scoreBoard.Lives >= 2) {
                this._scoreBoard.LivesLabel.color = "#FFFFFF";
            }
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
            }
            this._sucessStage();
        };
        StageTwoScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            this.addChild(this._meteor);
            this.addChild(this._star);
            this.addChild(this._lifeItem);
            this._missileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this._enemyMissileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this._bossMissileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this.addChild(this._warningMessage);
            this.addChild(this._boss);
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._congratMessage);
        };
        return StageTwoScene;
    }(objects.Scene));
    scenes.StageTwoScene = StageTwoScene;
})(scenes || (scenes = {}));
/*
    Name : Dongwan Kim
    Version : v1.6
    Last_modification : Apr 18, 2018
    Description : Modified success condition
*/
var scenes;
(function (scenes) {
    var StageThreeScene = /** @class */ (function (_super) {
        __extends(StageThreeScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function StageThreeScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        StageThreeScene.prototype._sucessStage = function () {
            if (this._boss.alpha == 0) {
                this._congratMessage.Update();
                setTimeout(function () {
                    managers.Game.currentScene = config.Scene.GAMEOVER;
                }, 4000);
                this._backgroundSound.stop();
            }
        };
        //PUBLIC METHODS
        StageThreeScene.prototype.Start = function () {
            console.log("Stage three");
            this._background = new objects.Background(this.assetManager);
            this._plane = new objects.Plane();
            this._plane = managers.Game.plane;
            this._star = new objects.Star();
            managers.Game.star = this._star;
            this._lifeItem = new objects.LifeItem();
            managers.Game.lifeitem = this._lifeItem;
            this._meteor = new objects.Meteor();
            this._enemyNum = 7;
            this._enemy = new Array();
            managers.Game.enemies = this._enemy;
            this._boss = new objects.Boss();
            managers.Game.boss = this._boss;
            this._missileManager = new managers.Missile();
            managers.Game.bulletManager = this._missileManager;
            this._enemyMissileManager = new managers.Missile_Enemy();
            managers.Game.EnemyBulletManager = this._enemyMissileManager;
            this._bossMissileManager = new managers.Missile_Boss();
            managers.Game.BossBulletManager = this._bossMissileManager;
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemy[count] = new objects.Enemy();
            }
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.5;
            this._scoreBoard = new managers.ScoreBoard;
            this._scoreBoard = managers.Game.scoreboardManager;
            this._prviousScore = managers.Game.scoreboardManager.Score;
            this._warningMessage = new objects.Warning(this.assetManager);
            this._congratMessage = new objects.Label("Congratulations!", "40px", "SpaceComic", "#FFFFFF", 320, 600, true);
            this.Main();
        };
        StageThreeScene.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._plane.Update();
            this._star.Update();
            this._lifeItem.Update();
            this._meteor.Update();
            this._missileManager.Update();
            this._enemyMissileManager.Update();
            this._bossMissileManager.Update();
            if (this._scoreBoard.Score >= this._prviousScore + 3000) {
                this._boss.Update();
                this._warningMessage.Update();
            }
            //check collision between plane and star
            managers.Collision.Check(this._plane, this._star);
            //check collision between plane and a life item
            managers.Collision.Check(this._plane, this._lifeItem);
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                enemy.Dy += 0.07;
                managers.Collision.Check(_this._plane, enemy);
            });
            managers.Collision.Crush(this._missileManager.Missiles, this._enemy);
            this._missileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._boss);
            });
            this._bossMissileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._plane);
            });
            this._enemyMissileManager.Missiles.forEach(function (missile) {
                managers.Collision.Check(missile, _this._plane);
            });
            if (this._scoreBoard.Lives <= 1) {
                this._scoreBoard.LivesLabel.color = "#FF0000";
            }
            else if (this._scoreBoard.Lives >= 2) {
                this._scoreBoard.LivesLabel.color = "#FFFFFF";
            }
            if (this._scoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.GAMEOVER;
                this._backgroundSound.stop();
            }
            //Finish the game when boss is dead in normal mode
            if (managers.Game.selectedMode == 0) {
                this._sucessStage();
            }
        };
        StageThreeScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._background);
            this.addChild(this._meteor);
            this.addChild(this._star);
            this.addChild(this._lifeItem);
            this._missileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this._enemyMissileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this._bossMissileManager.Missiles.forEach(function (missile) {
                _this.addChild(missile);
            });
            this.addChild(this._warningMessage);
            this.addChild(this._boss);
            this.addChild(this._plane);
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._congratMessage);
        };
        return StageThreeScene;
    }(objects.Scene));
    scenes.StageThreeScene = StageThreeScene;
})(scenes || (scenes = {}));
/*
    Name : Jowon Shin
    Version : v1.2
    Last_modification : Feb 23, 2018
    Description : added High Score Label
*/
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        GameOverScene.prototype._btnPlayAgainClick = function () {
            managers.Game.currentScene = config.Scene.OPENING;
        };
        //PUBLIC METHODS
        GameOverScene.prototype.Start = function () {
            this._background = new objects.Background(this.assetManager);
            this._btnPlayAgain = new objects.Button("btnPlayAgain", 320, 360);
            this._lblGameOver = new objects.Label("Game Over", "40px", "SpaceComic", "#FF0000", 320, 240, true);
            this._lblScore = new objects.Label("High Score: ", "40px", "SpaceComic", "#FF0000", 100, 95, false);
            this._scoreboard = new managers.ScoreBoard;
            this.Main();
            console.log("game over");
        };
        GameOverScene.prototype.Update = function () {
        };
        GameOverScene.prototype.Main = function () {
            createjs.Sound.play("gameOverSound"); //must be changed
            this.addChild(this._background);
            this.addChild(this._lblGameOver);
            this.addChild(this._btnPlayAgain);
            this._scoreboard.HighScore = managers.Game.HighScore;
            this._lblScore.text += this._scoreboard.HighScore;
            this.addChild(this._lblScore);
            this._btnPlayAgain.on("click", this._btnPlayAgainClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
/// <reference path="../../Scripts/config/scene.ts"/>
/// <reference path="../../Scripts/config/keys.ts"/>
/// <reference path="../../Scripts/managers/game.ts"/>
/// <reference path="../../Scripts/objects/scene.ts"/>
/// <reference path="../../Scripts/math/vector2.ts"/>
/// <reference path="../../Scripts/objects/gameobject.ts"/>
/// <reference path="../../Scripts/objects/button.ts"/>
/// <reference path="../../Scripts/objects/label.ts"/>
/// <reference path="../../Scripts/objects/logo.ts"/>
/// <reference path="../../Scripts/objects/background.ts"/>
/// <reference path="../../Scripts/objects/plane.ts"/>
/// <reference path="../../Scripts/objects/missile.ts"/>
/// <reference path="../../Scripts/objects/enemy.ts"/>
/// <reference path="../../Scripts/objects/missile_enemy.ts"/>
/// <reference path="../../Scripts/objects/star.ts"/>
/// <reference path="../../Scripts/objects/lifeitem.ts"/>
/// <reference path="../../Scripts/objects/meteor.ts"/>
/// <reference path="../../Scripts/objects/explosion.ts"/>
/// <reference path="../../Scripts/objects/warning.ts"/>
/// <reference path="../../Scripts/objects/boss.ts"/>
/// <reference path="../../Scripts/objects/missile_boss.ts"/>
/// <reference path="../../Scripts/managers/collision.ts"/>
/// <reference path="../../Scripts/managers/keyboard.ts"/>
/// <reference path="../../Scripts/managers/scoreboard.ts"/>
/// <reference path="../../Scripts/managers/missile.ts"/>
/// <reference path="../../Scripts/managers/missile_enemy.ts"/>
/// <reference path="../../Scripts/managers/missile_boss.ts"/>
/// <reference path="../../Scripts/scenes/loading.ts"/>
/// <reference path="../../Scripts/scenes/opening.ts"/>
/// <reference path="../../Scripts/scenes/choosemode.ts"/>
/// <reference path="../../Scripts/scenes/play_one.ts"/>
/// <reference path="../../Scripts/scenes/play_two.ts"/>
/// <reference path="../../Scripts/scenes/play_three.ts"/>
/// <reference path="../../Scripts/scenes/gameover.ts"/>
/*
    Name : Dongwan Kim, Jowon Shin, Changmin Shin
    Version : v2.6
    Last_modification : Apr 18, 2018
    Description : Changed the frame rate for explosion
*/
/// <reference path="_reference.ts"/>
(function () {
    //Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyBoardManager;
    var stats;
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [
            "./Assets/sprites/textureAtlas.png"
        ],
        "frames": [
            [1, 1, 512, 606, 0, 0, 0],
            [515, 1, 474, 464, 0, 0, 0],
            [515, 467, 398, 191, 0, 0, 0],
            [915, 467, 92, 164, 0, 0, 0],
            [915, 633, 80, 54, 0, 0, 0],
            [1, 609, 286, 186, 0, 0, 0],
            [289, 609, 198, 172, 0, 0, 0],
            [489, 660, 240, 242, 0, 0, 0],
            [289, 783, 198, 172, 0, 0, 0],
            [731, 660, 160, 100, 0, 0, 0],
            [893, 689, 130, 96, 0, 0, 0],
            [731, 762, 150, 179, 0, 0, 0],
            [489, 904, 230, 412, 0, 0, 0],
            [883, 787, 126, 122, 0, 0, 0],
            [883, 911, 120, 121, 0, 0, 0],
            [721, 943, 119, 108, 0, 0, 0],
            [842, 943, 35, 35, 0, 0, 0],
            [1, 797, 229, 57, 0, 0, 0],
            [232, 797, 52, 50, 0, 0, 0],
            [232, 849, 51, 52, 0, 0, 0],
            [1, 856, 226, 56, 0, 0, 0],
            [229, 903, 58, 69, 0, 0, 0],
            [289, 957, 198, 125, 0, 0, 0],
            [1, 914, 226, 56, 0, 0, 0],
            [1, 972, 196, 232, 0, 0, 0],
            [199, 974, 78, 41, 0, 0, 0],
            [199, 1017, 75, 75, 0, 0, 0],
            [842, 1034, 63, 70, 0, 0, 0],
            [907, 1034, 61, 70, 0, 0, 0],
            [970, 1034, 51, 52, 0, 0, 0],
            [970, 1088, 51, 52, 0, 0, 0],
            [721, 1053, 60, 60, 0, 0, 0],
            [783, 1053, 57, 64, 0, 0, 0],
            [721, 1115, 60, 60, 0, 0, 0],
            [842, 1106, 56, 59, 0, 0, 0],
            [783, 1119, 56, 57, 0, 0, 0],
            [721, 1177, 51, 52, 0, 0, 0],
            [900, 1106, 51, 52, 0, 0, 0],
            [953, 1142, 51, 52, 0, 0, 0],
            [900, 1160, 49, 64, 0, 0, 0],
            [841, 1167, 46, 78, 0, 0, 0],
        ],
        "animations": {
            "enemyH": { "frames": [0] },
            "meteorbig": { "frames": [1] },
            "btnPlayAgain": { "frames": [2] },
            "enemyB": { "frames": [3] },
            "lifeitem": { "frames": [4] },
            "logo": { "frames": [5] },
            "enemyE": { "frames": [6] },
            "meteormedium": { "frames": [7] },
            "enemyF": { "frames": [8] },
            "enemyD": { "frames": [9] },
            "enemyA": { "frames": [10] },
            "enemyC": { "frames": [11] },
            "enemyG": { "frames": [12] },
            "meteorsmall": { "frames": [13] },
            "meteor": { "frames": [14] },
            "meteorB": { "frames": [15] },
            "star": { "frames": [16] },
            "btnUltimate": { "frames": [17] },
            "explosion": {
                "frames": [19, 29, 30, 36, 37, 38, 18],
                "speed": 0.4
            },
            "btnNormal": { "frames": [20] },
            "bossA": { "frames": [22] },
            "btnStart": { "frames": [23] },
            "bossB": { "frames": [24] },
            "poweritem": { "frames": [25] },
            "btnBack": { "frames": [26] },
            "bossmissileA": { "frames": [31] },
            "missile2": { "frames": [32] },
            "bossmissileB": { "frames": [33] },
            "playerShip": {
                "frames": [35, 34, 21, 28, 27],
                "speed": 0.5
            },
            "missile": { "frames": [39] },
            "missile3": { "frames": [40] }
        },
    };
    assetManifest = [
        { id: "imgLogo", src: "./Assets/images/logo.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "background2", src: "./Assets/images/background2.png" },
        { id: "background3", src: "./Assets/images/background3.png" },
        { id: "logo", src: "./Assets/images/logo.png" },
        { id: "warning", src: "./Assets/images/warning.png" },
        { id: "backgroundSound", src: "./Assets/sounds/background.mp3" },
        { id: "missileSound", src: "./Assets/sounds/missileSound.mp3" },
        { id: "warningSound", src: "./Assets/sounds/warningSound.mp3" },
        { id: "bazookaSound", src: "./Assets/sounds/bazookaSound.mp3" },
        { id: "crashSound", src: "./Assets/sounds/crashSound.mp3" },
        { id: "tadaSound", src: "./Assets/sounds/tada.mp3" },
        { id: "gettingItemSound", src: "./Assets/sounds/gettingItem.wav" },
        { id: "attackSound", src: "./Assets/sounds/attackSound.mp3" },
        { id: "levelCompleteSound", src: "./Assets/sounds/levelCompleteSound.mp3" },
        { id: "gameOverSound", src: "./Assets/sounds/gameOverSound.mp3" }
    ];
    //preload Assets
    function Init() {
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
        console.log("start");
    }
    function InitStats() {
        stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);
    }
    function Start() {
        InitStats();
        textureAtlasData.images = [assetManager.getResult("textureAtlas")];
        //textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.LOADING;
        currentState = config.Scene.LOADING;
        keyBoardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyBoardManager;
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        stats.begin();
        if (currentState != managers.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update();
        stats.end();
    }
    function Main() {
        stage.removeAllChildren();
        switch (managers.Game.currentScene) {
            case config.Scene.LOADING:
                currentScene = new scenes.loadingScene();
                break;
            case config.Scene.OPENING:
                currentScene = new scenes.openingScene();
                break;
            case config.Scene.CHOOSEMODE:
                currentScene = new scenes.chooseModeScene();
                break;
            case config.Scene.PLAY_ONE:
                currentScene = new scenes.StageOneScene();
                break;
            case config.Scene.PLAY_TWO:
                currentScene = new scenes.StageTwoScene();
                break;
            case config.Scene.PLAY_THREE:
                currentScene = new scenes.StageThreeScene();
                break;
            case config.Scene.GAMEOVER:
                currentScene = new scenes.GameOverScene();
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map