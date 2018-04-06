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
            if (this.alpha = 1) {
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
                    if (managers.Game.bulletManager.CurrentMissile > 29) {
                        managers.Game.bulletManager.CurrentMissile = 0;
                    }
                }
            }
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map