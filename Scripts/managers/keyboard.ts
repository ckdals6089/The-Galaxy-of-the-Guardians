/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 25, 2018
    Description : Created keyboard module to move the spaceship
*/
module managers{
    export class Keyboard{
        //PRIVATE INSTANCE

        //PUBLIC PROPERTIES
        public moveForward: boolean;
        public moveBackward:boolean;
        public moveLeft:boolean;
        public moveRight:boolean;

        public enabled:boolean;
        //CONSTRUCTORS
        constructor(){
            this.enabled=true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);        }
        //PRIVATE METHODS

        //PUBLIC METHODS
            public onKeyDown(event:KeyboardEvent):void{
                switch(event.keyCode){
                    case config.Keys.UP_ARROW:
                        this.moveForward=true;
                        break;

                    case config.Keys.LEFT_ARROW:
                        this.moveLeft = true;
                        break;
                    
                    case config.Keys.DOWN_ARROW:
                        this.moveBackward = true;
                        break;
                    case config.Keys.RIGHT_ARROW:
                        this.moveRight = true;
                        break;    
                }
            }

            public onKeyUp(event:KeyboardEvent):void{
                switch(event.keyCode){
                    case config.Keys.UP_ARROW:
                        this.moveForward=false;
                        break;

                    case config.Keys.LEFT_ARROW:
                        this.moveLeft = false;
                        break;
                    
                    case config.Keys.DOWN_ARROW:
                        this.moveBackward = false;
                        break;
                    case config.Keys.RIGHT_ARROW:
                        this.moveRight = false;
                        break;    
                }
            }
    }
}