/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Designed button objects
*/

module objects{
    export class Button extends createjs.Bitmap{

        //PRIVATE VARIABLES

        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number=0, y:number=0){
            super(assetManager.getResult(imageString));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = x;
            this.y = y;
        }

        //PRIVATE METHODS

        //PUBLIC METHODS
    }

}