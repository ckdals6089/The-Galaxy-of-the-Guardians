/*
    Name : Dongwan Kim, Jowon Shin
    Version : v1.3
    Last_modification : Feb 23, 2018
    Description : Added GAMEOVER Scene
*/
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["LOADING"] = 0] = "LOADING";
        Scene[Scene["OPENING"] = 1] = "OPENING";
        Scene[Scene["CHOOSEMODE"] = 2] = "CHOOSEMODE";
        Scene[Scene["PLAY"] = 3] = "PLAY";
        Scene[Scene["GAMEOVER"] = 4] = "GAMEOVER";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map