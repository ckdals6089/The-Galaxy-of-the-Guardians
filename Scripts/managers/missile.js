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
//# sourceMappingURL=missile.js.map