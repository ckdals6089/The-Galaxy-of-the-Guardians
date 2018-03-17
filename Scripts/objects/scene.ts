/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 20, 2018
    Description : Created scene objects
*/

module objects{
    export class Scene extends createjs.Container{
        
        //INSTANCE VARIABLES

        //PUBLIC PROPERTIES
        public assetManager;

        //CONSTRUCTOR
        constructor(){
            super();

            this.assetManager = managers.Game.assetManager;
        }

        //PRIVATE METHODS

        //PUBLIC METHODS
        public Start():void{

        }
        public Update():void{

        }
        public Main():void{
            
        }

    }
}