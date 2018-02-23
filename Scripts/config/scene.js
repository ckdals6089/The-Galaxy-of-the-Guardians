/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.3
    Last_modification : Feb 23, 2018
    Description : Added GAMEOVER Scenew
*/
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["OPENING"] = 0] = "OPENING";
        Scene[Scene["CHOOSEMODE"] = 1] = "CHOOSEMODE";
        Scene[Scene["PLAY"] = 2] = "PLAY";
        Scene[Scene["GAMEOVER"] = 3] = "GAMEOVER";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map