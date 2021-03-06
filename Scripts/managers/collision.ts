/*
    Name : Dongwan Kim, Jowon Shin
    Version : v2.0 
    Last_modification : April 07, 2018
    Description : Modified collision between missile and enemy
*/
module managers {
    export class Collision {
        //Properties
        private _attackSound: createjs.AbstractSoundInstance;
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public static Check(one: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            let onePos: math.Vector2 = new math.Vector2(one.x, one.y);
            let otherPos: math.Vector2 = new math.Vector2(other.x, other.y);
            if (other.alpha != 0) {
                if (math.Vector2.distance(onePos, otherPos) < (one.centerY + other.centerY)) {
                    if (!other.isColliding) {
                        other.isColliding = true;
                        
                            switch (other.name) {
                                case "enemyA":
                                    one.life -= 1;
                                    managers.Game.scoreboardManager.Lives -= 1;
                                    createjs.Sound.play("crashSound");
                                    other.alpha = 0;

                                    let explosion = new objects.Explosion();
                                    explosion.x = one.x;
                                    explosion.y = one.y;
                                    managers.Game.currentSceneObject.addChild(explosion);
                                    break;
                                case "star":
                                    managers.Game.scoreboardManager.Score += 100;
                                    createjs.Sound.play("gettingItemSound"); //sound must be changed
                                    other.alpha = 0;
                                    if (managers.Game.HighScore <= managers.Game.scoreboardManager.Score) {
                                        managers.Game.scoreboardManager.HighScore = managers.Game.scoreboardManager.Score;
                                        managers.Game.HighScore = managers.Game.scoreboardManager.HighScore;
                                    }
                                    break;
                                case "lifeitem":
                                    one.life += 1;
                                    managers.Game.scoreboardManager.Lives += 1;
                                    createjs.Sound.play("gettingItemSound"); //sound must be changed
                                    other.alpha = 0;
                                    if (managers.Game.scoreboardManager.Lives >= 5) {
                                        managers.Game.scoreboardManager.Lives = 5;
                                    }
                                    break;
                                case "bossB":
                                    other.life -= 1;
                                    if(other.life < 0){
                                        other.alpha = 0;
                                        managers.Game.scoreboardManager.Score += 2000;
                                        createjs.Sound.play("bazookaSound");
                                    }                   
                                    one.alpha = 0;
                                    if(other.y == 50){
                                        explosion = new objects.Explosion();    
                                        explosion.x = (other.x - 30) + Math.random()*50 ;
                                        explosion.y = other.centerY * Math.random();
                                        managers.Game.currentSceneObject.addChild(explosion);   
                                        createjs.Sound.play("attackSound", {volume: 0.1});                                       
                                    }     
                                    break;
                                case "playerShip":
                                    if( (math.Vector2.distance(onePos, otherPos) < (one.centerY + other.centerY) - 30) ){
                                        if(one.alpha != 0){
                                            other.life -= 1;
                                            managers.Game.scoreboardManager.Lives -= 1;
                                            console.log(other.life);
                                            console.log(one.width+ ","+ one.height);
                                                    
                                            createjs.Sound.play("crashSound");
                                            one.alpha = 0;
        
                                            explosion = new objects.Explosion();
                                            explosion.x = other.x;
                                            explosion.y = other.y;
                                            managers.Game.currentSceneObject.addChild(explosion);
                                            }
                                    } 
                                break;

                            }
                        
                    }
                }
                else {
                    other.isColliding = false;
                }
            }
        }
        public static Crush(missile: objects.Missile[], enemy: objects.Enemy[]) {
            //check to see if object is colliding

            for (let countM = 0; countM < missile.length; countM++) {
                for (let countE = 0; countE < enemy.length; countE++) {
                    
            let onePos: math.Vector2 = new math.Vector2(missile[countM].x, missile[countM].y);
            let otherPos: math.Vector2 = new math.Vector2(enemy[countE].x, enemy[countE].y);
                    if (enemy[countE].alpha != 0) {
                        if (missile[countM].alpha != 0) {
                            if (math.Vector2.distance(onePos, otherPos) < missile[countM].centerY + enemy[countE].centerY) {
                                //if(math.Vector2.distance(missile[countM].position, enemy[countE].position) > (missile[countM].centerY + enemy[countE].centerY - 30)){

                                if (!enemy[countE].isColliding) {
                                    enemy[countE].isColliding = true;
                                    missile[countM].alpha = 0;
                                    enemy[countE].life -=1;

                                    let explosion = new objects.Explosion();
                                    explosion.x = enemy[countE].x;
                                    explosion.y = enemy[countE].y;
                                    managers.Game.currentSceneObject.addChild(explosion);
                                    
                                    if(enemy[countE].life == 0){
                                        enemy[countE].alpha = 0;
                                        managers.Game.scoreboardManager.Score += 100;
                                        createjs.Sound.play("attackSound", {volume: 0.2});
                                    }


                                }
                            }
                        }
                    }

                }
            }
        }
    }
}

