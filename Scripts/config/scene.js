/*
    Name : Dongwan Kim
    Version : v1.2
    Last_modification : Feb 21, 2018
    Description : Added ChooseMode scene
*/
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["OPENING"] = 0] = "OPENING";
        Scene[Scene["CHOOSEMODE"] = 1] = "CHOOSEMODE";
        Scene[Scene["PLAY"] = 2] = "PLAY";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map