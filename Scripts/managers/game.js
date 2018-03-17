/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.4
    Last_modification : Feb 26, 2018
    Description : Moved to managers module
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
//# sourceMappingURL=game.js.map