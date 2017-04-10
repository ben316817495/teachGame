
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
	    	game.load.spine('fsAmImg','img/bone/fs/fs.json');
	    	game.load.spine('zsAmImg','img/bone/zs/zs.json');

	    	// game.load.image('bg_darkDoor','img/darkDoor1.jpg');
	    	// game.load.image('bg_darkDoor_star','img/darkDoor2.jpg');
	    	// game.load.image('bg_darkDoor_moon','img/darkDoor_moon.png');
	    	game.load.spritesheet('anHeiLight', 'img/ui_xuanfu1.png',300,350);//29.2kb
	    	game.load.spritesheet('fireSprites','img/ui_xuanfu2.png',80,80);//371kb

	    	//logo
	    	game.load.image('gameLogo','img/font.png');
	    	game.load.image('redBtn','img/btn-red.png');
	    	//人物选择界面背景
	    	game.load.image('peopleTypeBg','img/peoBg.jpg');
	    	//html_hz.png 战士徽章
	    	game.load.image('htmlHZ','img/html_hz.png');
	    	game.load.image('cssHZ','img/css_hz.png');
	    	game.load.image('jsHZ','img/js_hz.png');




	    	

	    	


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
			
			//var indexCenterDoorImg = game.add.image(80,380,'index_centerDoor_img');
			var indexCenterDoorImg = game.add.button(80,380,'index_centerDoor_img',function(){
				//alert(1);
				 game.state.start('roleChoseState');
			});



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


			var gameLogo = game.add.image(100,50,'gameLogo');
				gameLogo.scale.set(0.5);

			
		}//this.create

		this.update = function() {
			loginBg.tilePosition.x -=0.7;
			//loginBg_star.x -=1.2;

		}//this.update

	  }//var jmBgState

	
	var itemVal =[];
	var roleChoseState = function(game){

			this.create = function(){


				var peopleTypeBg = game.add.image(-100,0,'peopleTypeBg');
					peopleTypeBg.scale.set(0.6);

				var htmlHZ = game.add.button(10,300,'htmlHZ',function(){

					itemVal.itemAmName ='zsAmImg';
					itemVal.amName = "animation";
					itemVal.fristAnName = "stand_zsAmImg";
					itemVal.scale = 0.78;
					itemVal.x = -50;
					itemVal.y = 680;
					changeTheMen(itemVal);
				});

				var cssHZ = game.add.button(10,400,'cssHZ',function(){
					//alert('css');
					itemVal.itemAmName ='fsAmImg';
					itemVal.amName = "deful";
					itemVal.fristAnName = "stand_fsAmImg";
					itemVal.scale = 0.6;
					itemVal.x = 340;
					itemVal.y = 650;
					changeTheMen(itemVal);
				});
				
				var jsHZ = game.add.button(10,500,'jsHZ',function(){
					alert('js');
				});

				var leftCol_BtnGroup = game.add.group();
					leftCol_BtnGroup.add(htmlHZ);
					leftCol_BtnGroup.add(cssHZ);
					leftCol_BtnGroup.add(jsHZ);


					leftCol_BtnGroup.y=-60;


					//console.log(leftCol_BtnGroup);

				// var fsAmImg = game.add.spine(100,600,'fsAmImg');
				// 	fsAmImg.scale.set(0.5);
				// 	fsAmImg.setAnimationByName(10, "deful",true);
				// 	fsAmImg.setAnimationByName(0, "stand_fsAmImg");

				// var zsAmImg = game.add.spine(50,680,'zsAmImg');
				// 	zsAmImg.scale.set(0.64);
				// 	zsAmImg.setAnimationByName(10, "animation",true);
				// 	zsAmImg.setAnimationByName(0, "stand_zsAmImg");

				var gamePeopleAn = game.add.spine(-50,680,'zsAmImg');
				 	gamePeopleAn.scale.set(0.78);
				 	gamePeopleAn.setAnimationByName(10, "animation",true);
				 	gamePeopleAn.setAnimationByName(0, "stand_zsAmImg");


				function changeTheMen(itemVal){
						gamePeopleAn.destroy();
						gamePeopleAn = game.add.spine(itemVal.x,itemVal.y,itemVal.itemAmName);
				 		gamePeopleAn.scale.set(itemVal.scale);
				 		gamePeopleAn.setAnimationByName(10, itemVal.amName,true);
				 		gamePeopleAn.setAnimationByName(0, itemVal.fristAnName);

				}


			
			}//this.create

		}//var roleChoseState

	game.state.add('boot',bootState);
	game.state.add('loader',loaderState);
	game.state.add('jmBgState',jmBgState);
	game.state.add('roleChoseState',roleChoseState);


	game.state.start('boot');//启动第一个场景


}); //the-end