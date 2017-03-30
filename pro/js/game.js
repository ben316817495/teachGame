
$(document).ready(function(){ 

	var gameHeight = $(window).height();	
	var gameWidth = $(window).width();	
　	var game = new Phaser.Game(1400,768,Phaser.AUTO,'container');　
	//var game = new Phaser.Game(1990,768,Phaser.AUTO,'container');
	var bootState = function(game){

			 this.preload = function(){
				      game.load.spritesheet('boss_wushi', 'img/boss_wushi.png',118,183);
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

	    	loadImg = game.add.sprite(game.world.centerX -80, game.world.centerY-130, 'boss_wushi');
	    	loadImg.animations.add('loadImg_away',[0, 1, 2, 3, 4]);
 		    loadImg.play('loadImg_away', 10, true);

 		    progressText = game.add.text(game.world.centerX -80, game.world.centerY + 70,'0%',{fill:'#fff',fontSize:'16px'});
		    progressText.font = '微软雅黑';

	    };// this.init
	   

	    this.preload = function(){

	    	game.plugins.add(Fabrique.Plugins.Spine);

	    	game.load.spine('longImg','img/bone/long/l1.json');
	    	game.load.spine('longWBImg','img/bone/wb/wb.json');

	    	// game.load.image('bg_darkDoor','img/darkDoor1.jpg');
	    	// game.load.image('bg_darkDoor_star','img/darkDoor2.jpg');
	    	// game.load.image('bg_darkDoor_moon','img/darkDoor_moon.png');
	    	game.load.spritesheet('anHeiLight', 'img/ui_xuanfu1.png',300,350);//29.2kb
	    	game.load.spritesheet('fireSprites','img/ui_xuanfu2.png',80,80);//371kb

	    	


	    	//首页新背景加载
	    	game.load.image('index_bg_img','img/new/index_bg.png');
	    	game.load.image('index_centerDoor_img','img/new/centerDoor.png');
	    	game.load.image('index_leftBottom_img','img/new/leftBottom.png');
	    	game.load.image('index_rightBottom_img','img/new/rightBottom.png');



	    	game.load.onFileComplete.add(function(progress){
	            
	            progressText.text ='游戏加中' + progress + '%...';

		     	if(progress == 100){
		    	
                        game.state.start('jmBgState');
							
		            	}//if

		        });//game.load.onFileComplete
	    	
	    	}//this.preload

	    }//var loaderState





	  var jmBgState = function(game){
	  	var loginBg,loginBg_star;
	  	this.init = function(){
	   		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	   		//game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		}
		this.create = function(){
			game.world.setBounds(0,0,gameWidth,gameHeight);

				//loginBg = game.add.tileSprite(0,0,50000,gameHeight,'bg_darkDoor');
				loginBg = game.add.tileSprite(0,0,50000,gameHeight,'index_bg_img');
				loginBg.scale.set(1);

			var indexLeftBottomImg = game.add.image(0,300,'index_leftBottom_img');

			var indexRightBottomImg = game.add.image(1100,520,'index_rightBottom_img');
			
			var indexCenterDoorImg = game.add.image(80,380,'index_centerDoor_img');


			



			var anHeiLight = game.add.sprite(580, 410, 'anHeiLight');
				//anHeiLight.scale.set(1.3);
   				anHeiLight.animations.add('loadImg_anHeiLight',[0,1 ,2, 3, 4,5,6,7,8,9,10,11]);
   				anHeiLight.play('loadImg_anHeiLight',10, true);

   			var fireSprites = game.add.sprite(495, 635, 'fireSprites');
   				fireSprites.animations.add('loadImg_fireSprites',[11,10,9,8,7,6,5,4,3,2,1,0]);
   				fireSprites.play('loadImg_fireSprites', 10, true);

   			var fireSprites = game.add.sprite(880, 630, 'fireSprites');
   				fireSprites.animations.add('loadImg_fireSprites',[11,10,9,8,7,6,5,4,3,2,1,0]);
   				fireSprites.play('loadImg_fireSprites', 10, true);
   			//龙尾巴
   			var longWBImg = game.add.spine(360, 780, "longWBImg");
				longWBImg.setAnimationByName(10, "animation",true);
				b2=longWBImg.setAnimationByName(0, "ready_pao1");
			//龙
   			var	longImgAm = game.add.spine(260, 650, "longImg");
   				longImgAm.setAnimationByName(10, "animation",true);
				b1=longImgAm.setAnimationByName(0, "ready_pao");

			
		}//this.create

		this.update = function() {
			loginBg.tilePosition.x -=0.7;
			//loginBg_star.x -=1.2;

		}//this.update

	  }//var jmBgState



	game.state.add('boot',bootState);
	game.state.add('loader',loaderState);
	game.state.add('jmBgState',jmBgState);


	game.state.start('boot');//启动第一个场景


}); //the-end