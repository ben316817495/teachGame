$(document).ready(function(){ 

	//var gameHeight = $(window).height();	
	//var gameWidth = $(window).width();	
　	var game = new Phaser.Game(600,150,Phaser.AUTO,'container','',true);　
	var bootState = function(game){

			 this.preload = function(){
				      game.load.image('boss_wushi', 'img/game/loading.png');
		       };

		       this.create = function(){
				
				       game.state.start('loader');
		   
		        };

		}//var bootState

	var loaderState = function(game){
		var progressText;//百分比文字
	    var loadImg;
	    
	    this.init = function(){
			
			//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

	    	//loadImg = game.add.sprite(game.world.centerX -80, game.world.centerY-130, 'boss_wushi');
	    	//loadImg.animations.add('loadImg_away',[0, 1, 2, 3, 4]);
 		    //loadImg.play('loadImg_away', 10, true);

 		    progressText = game.add.text(game.world.centerX -80, game.world.centerY + 70,'0%',{fill:'#fff',fontSize:'16px'});
		    progressText.font = '微软雅黑';

	    };// this.init

	    this.preload = function(){

	    	game.load.image('gameLu','img/game/lu.png');
	    	game.load.image('yunBg','img/game/yun.png');
	    	game.load.spritesheet('longAM', 'img/game/long.png',120,109);

	    	game.load.onFileComplete.add(function(progress){
	            
	            progressText.text ='游戏加中' + progress + '%...';

		     	if(progress == 100){
		    	
                        game.state.start('jmBgState');
							
		            	}//if

		        });//game.load.onFileComplete

	    }
	}

	var jmBgState = function(game){
		this.init = function(){}

		this.create = function(){
			game.add.button(50, game.world.centerY,'boss_wushi',function(){
				 game.state.start('roleChoseState');
			});
		}

	}

	var roleChoseState = function(game){
		var loginBg,loginBg_star,loginBgyun;
		this.create = function(){



			loginBg =game.add.tileSprite(0,130,50000,32,'gameLu');
			loginBg.scale.set(0.6);
			loginBgyun =game.add.tileSprite(0,75,50000,70,'yunBg');
			loginBgyun.scale.set(0.6);

			var longImg = game.add.sprite(50, game.world.centerY+20, 'longAM');
	    	longImg.animations.add('loadImg_away',[ 2, 3]);
 		    longImg.play('loadImg_away', 10, true);
 		    longImg.scale.set(0.5);

		}
		this.update = function() {
			loginBg.tilePosition.x -=10;
			loginBgyun.tilePosition.x -=2;
		}//this.update
	}


	game.state.add('boot',bootState);
	game.state.add('loader',loaderState);
	game.state.add('jmBgState',jmBgState);
	game.state.add('roleChoseState',roleChoseState);


	game.state.start('boot');//启动第一个场景

}); //the-end