$(document).ready(function(){ 

	//var gameHeight = $(window).height();	
	//var gameWidth = $(window).width();	
　	var game = new Phaser.Game(600,150,Phaser.AUTO,'container','',true);　
	var bootState = function(game){

			 this.preload = function(){
				   //  game.load.atlasXML('cow0','img/cow_0.png.png','img/cow_0.png.xml');
				     game.load.atlasJSONHash('cow01', 'img/cow_0.png.png', 'img/cow_0.png.json');
		       };

		       this.create = function(){
				       game.state.start('loader');
		        };

		}//var bootState

	var loaderState = function(game){
		var progressText;//百分比文字
	    var loadImg,loadImg2;
	    
	    this.init = function(){
			
			//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

	    	

 		   progressText = game.add.text(game.world.centerX -80, game.world.centerY + 70,'0%',{fill:'#fff',fontSize:'16px'});
		    progressText.font = '微软雅黑';

	    };// this.init

	    this.preload = function(){
	    	
	    		loadImg2 = game.add.sprite(0, 0, 'cow01');
	    		loadImg2.animations.add('run',[0, 1]);
    			loadImg2.animations.play('run', 7, true);
	    	// game.load.onFileComplete.add(function(progress){
	            
	     //        progressText.text ='游戏加中' + progress + '%...';

		    //  	if(progress == 100){
		    	
      //                   game.state.start('jmBgState');
							
		    //         	}//if

		    //     });//game.load.onFileComplete

	    }
	}

	


	game.state.add('boot',bootState);
	game.state.add('loader',loaderState);
	//game.state.add('jmBgState',jmBgState);
	//game.state.add('roleChoseState',roleChoseState);


	game.state.start('boot');//启动第一个场景

}); //the-end