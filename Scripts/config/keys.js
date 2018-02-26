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
//# sourceMappingURL=keys.js.map