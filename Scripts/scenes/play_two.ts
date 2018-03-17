/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Mar 16, 2018
    Description : Created second stage scene
*/

module scenes {
    export class StageTwoScene extends objects.Scene {
        //PRIVATE VARIABLES
       
        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();

        }
        //PRIVATE METHODS

        //PUBLIC METHODS
        public Start(): void {
 
            this.Main();
        }

        public Update(): void {

 

        }
        public Main(): void {
   
        }


    }
}
