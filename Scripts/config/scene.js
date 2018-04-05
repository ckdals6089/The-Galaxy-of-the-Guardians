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
//# sourceMappingURL=scene.js.map