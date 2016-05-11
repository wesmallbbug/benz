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
	   	
			
			
			
		   
		
		   bl('.nav','','',750,115);
		   bl('.tel',0,0,115,'');
		   bl('.pp',0,119,208,'');
		   bl('.fw',0,331,208,'');
		   bl('.zx',0,542,208,'');
		   bl('.tel_xx','','','',10);
		   
//		   bl('.blan',773,0,'','');
//		   bl('.qdcx_but',946,'','','');
//		   bl('.fwt',208,'','',777);
//		   bl('.jjnext',425,'',711,628);
//		   bl('.in_na',43,'',589,96);
//		   bl('.in_loc',163,'',589,96);
//		   bl('.in_time',285,'',589,96);
//		   bl('.next_but',427,0,'',110);
//		   bl('.qd_but',478,0,'',101);
//		   bl('.xljd',401,30,138,47);
//		   bl('.ylr',401,187,112,47);
//		   bl('.xydd',401,318,136,47);
//		   bl('.qdloc_lan',71,'','','');
//		   bl('.qdloc_in',78,'',652,94);
//		   bl('.chio_loc',209,0,750,163);
//		   bl('.qdloc_dd',61,670,40,40);
//		   bl('.chio_loc2',393,0,750,163);
//		   bl('.chio_loc3',572,0,750,163);
//		   bl('.locqd',919,'','','');
//		   bl('.ycfw_con',62,0,'',996);
//		   bl('.hbh',55,268,403,36);
//		   bl('.jjsj',107,268,403,36);
//		   bl('.sddd',162,268,403,36);
//		   bl('.fwcx',214,268,403,36);
//		   bl('.ckxm',266,268,403,36);
//		   bl('.ckdhh',319,268,403,36);
//		   bl('.lbzxx',372,268,403,36);
//		   bl('.ddje',425,268,403,36);
//		   bl('.kxsj',546,268,403,36);
//		   bl('.djk',658,268,403,36);
//		   bl('.zffs',771,268,403,36);
//		   bl('.ljzf',866,'','',102);
//		   bl('.sjtj_con',42,0,'',1023);
//		   bl('.sj_chioce',79,0,'',165);
//		   bl('.sj_chioce_dd',61,670,40,40);
//		   bl('.sj_chioce2',480,0,'',165);
//		   bl('.sjqd',896,'','',101);
//		   bl('.yycg_con',0,0,'',1023);
//		   bl('.qxdd',818,0,'',103);

		   bl('.pp_con',198,'','',897);
		   bl('.pp_con2',198,'','',897);
		   bl('.pp_con3',25,'','',1071);
		   bl('.tc_hdzx_but',0,0,'',161);
		   bl('.tc_fwzs_but',161,0,'',161);
		   bl('.tc_kfrx_but',332,0,'',161);
		   bl('.tc_zxsy_but',510,0,'',161);
		   bl('.tc_zxsyy_but',671,0,'',161);
		   bl('.ppzx_close','','','',104);
		   bl('.tc_jjfw_but',0,0,'','');
		   bl('.tc_jjfw_but2',0,0,'',161);
		   bl('.tc_sjfw_but',188,0,'',191);
		   bl('.tc_sjfw_but2',161,0,'',161);
		   bl('.tc_slfw_but',379,0,'',191);
		   bl('.tc_slfw_but2',330,0,'',160);
		   bl('.tc_rzfw_but',570,0,'',191);
		   bl('.tc_rzfw_but2',505,0,'',161);
		   bl('.tc_brzfw_but2',652,0,'',156);
		   bl('.tc_fars_but',0,0,'',182);
		   bl('.tc_xhsc_but',85,0,'',191);
		   bl('.tc_grzx_but',326,0,'',161);
		   bl('.grzx_con',266,'',712,681);
		   bl('.grzx_tel',215,82,549,38);
		   bl('.grzx_yzm',345,82,241,38);
		   bl('.hqyzm',312,381,291,100);
		   bl('.grzx_login_close',0,'',205,102);
		   bl('.grzx_wx',441,41,40,40);
		   bl('.grzx_login_but',542,'',630,100);
		   bl('.yzcg',304,'',712,331);
		   
		   
		   jQuery('.error').css({
		     "bottom":pingKuan * bili(180)
		   });
		   
		   
		   //横向滚动
		    var myScroll;
	
			function loaded () {
				myScroll = new IScroll('#wrapper', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
			}
			
			loaded();
		   //滚动条end
		   
		   setTimeout(function(){
		      jQuery('.hgun').addClass('topin');
		   },600);
		  
		    setTimeout(function(){
		      jQuery('.index_dl').addClass('index_dl_in');
		   },1000);
		   
		    setTimeout(function(){
		      jQuery('.nav').addClass('topin');
		   },1400);
		   

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




