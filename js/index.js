jQuery(function(){
	

	   /*禁止默认拖动事件*/
	  document.ontouchmove = function(event){
		event.preventDefault();
	  };
	    
//	alert($(window).width()+'-----'+$(window).height());
	
	    function styleJs(){
			var pingKuan=jQuery(".m_wrapper").width(),//m_wrapper是最外层div的类名
				bili = function(mun){
					var oScale = mun/750;	//750是psd宽度
					return oScale.toFixed(6);
				};
				
		
			//例子
			jQuery(".iBg").css({
				"width":pingKuan * bili(240)	//240是在480宽度的psd中的width		
			});
			

		
			//样式重置完成之后
			setTimeout(function(){
				jQuery(".load").hide();
				jQuery(".m_wrapper").css({
					"opacity": 1
				});
			},1000);
	   	
			
			
			
		   
		
		  
		   bl('.logo',33,'',176,46);
		   bl('#wrapper',506,0,'',134);
		   bl('#scroller',0,0,750,134);
		   bl('.hgun','','',193,134);
		   bl('.jjfw_hbut1',0,0,177,247);
		   bl('.jjfw_hbut2',0,193,177,247);
		   bl('.jjfw_hbut3',0,386,177,247);
		   bl('.jjfw_hbut4',0,579,177,247);
		   bl('.jjfw_hbut5',0,925,177,247);
		   bl('.ld',458,'',348,16);		   
		   bl('.index_dl',686,'',670,401);
		   
		   
		   jQuery('.error').css({
		     "bottom":pingKuan * bili(180)
		   });
		   
//		   jQuery('.logo').css({
//		     "right":pingKuan * bili(42)
//		   });
		   
		   //横向滚动
		    var myScroll;
	
			function loaded () {
				myScroll = new IScroll('#wrapper', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
			}
			
			loaded();
		   //滚动条end
		   
		   setTimeout(function(){
		      jQuery('.hgun').addClass('topin');
		   },500);
		  
		    setTimeout(function(){
		      jQuery('.index_dl').addClass('index_dl_in');
		   },900);
		   
		    setTimeout(function(){
		      jQuery('.nav').addClass('topin');
		   },1300);
		   

	       function bl(e,top,left,width,height){
		      
		      if(top!=''){
		      	jQuery(e).css({
					"top":pingKuan * bili(top)	
				});
		      }
		      
		      if(left!=''){
		      	jQuery(e).css({
					"left":pingKuan * bili(left)	
				});
		      }
		      
		      if(width!=''){
		      	jQuery(e).css({
					"width":pingKuan * bili(width)	
				});
		      }
		      
		      if(height!=''){
		      	jQuery(e).css({
					"height":pingKuan * bili(height)	
				});
		      }
				
	       }

	    
	    
	    
	    
	    
	    }
			
			
			

		function loaded(){
			setTimeout(function(){styleJs();},0);
		}
		function hengshuping(){
			if(window.orientation==180||window.orientation==0){loaded();};
			if(window.orientation==90||window.orientation==-90){loaded();}
		}
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
		window.addEventListener('load', loaded, false);
      
      
//     /*获取加载进度*/	  
//     var aImg = document.getElementsByTagName('img');
//     var vid = document.getElementById('yx');
//     var iNow=0;
//     
//     
//     
//	    for(var i=0;i<aImg.length;i++){
//	    	
//			  (function(i){
//			  	
//				var yImg = new Image();
//				
//				yImg.onload = function(){
//					
//					iNow++;	
//					
//					var pros=parseInt(iNow/aImg.length*100);
//					
//					console.log(pros);
//					
//				    
//			    	setTimeout(function(){
//			    		jQuery('.loadFont span').text(pros+'%');
//			    	},500);	
//				   
//				    
//					if(pros==100){ 
//						setTimeout(function(){
//							loaded();
//							jQuery('.loadFont span').text('100%');
//						},1000); 
//				    }
//				
//			   };
//			
//			   yImg.src=aImg[i].src;
//			 
//			 })(i);
//		}	
//      /*获取加载进度end*/




});




