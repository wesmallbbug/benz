$(function(){
	
 
	   /*禁止默认拖动事件*/
	  document.ontouchmove = function(event){
		event.preventDefault();
	  };
	  
//	    
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
			},500);
	   		
			
	
		
		   bl('.nav','','',750,115);
		   bl('.tel',0,0,115,'');
		   bl('.pp',0,119,208,'');
		   bl('.fw',0,331,208,'');
		   bl('.zx',0,542,208,'');
		   bl('.tel_xx','','','',10);
		   bl('.logo',33,42,176,46);
		   bl('.hgun','','',928,237);
		   bl('.blan',773,0,'','');
		   bl('.ld',458,'',348,16);
		   bl('.qdcx_but',946,'','','');
		   bl('.fwt',208,'','',777);
		   bl('.jjnext',425,'',711,628);
		   bl('.in_na',43,'',589,96);
		   bl('.in_loc',163,'',589,96);
		   bl('.in_time',285,'',589,96);
		   bl('.next_but',427,0,'',110);
		   bl('.qd_but',478,0,'',101);
		   bl('.xljd',401,30,138,47);
		   bl('.ylr',401,187,112,47);
		   bl('.xydd',401,318,136,47);
		   bl('.qdloc_lan',71,'','','');
		   bl('.qdloc_in',78,'',652,94);
		   bl('.chio_loc',209,0,750,163);
		   bl('.qdloc_dd',61,670,40,40);
		   bl('.chio_loc2',393,0,750,163);
		   bl('.chio_loc3',572,0,750,163);
		   bl('.locqd',919,'','','');
		   bl('.ycfw_con',62,0,'',996);
		   bl('.hbh',55,268,403,36);
		   bl('.jjsj',107,268,403,36);
		   bl('.sddd',162,268,403,36);
		   bl('.fwcx',214,268,403,36);
		   bl('.ckxm',266,268,403,36);
		   bl('.ckdhh',319,268,403,36);
		   bl('.lbzxx',372,268,403,36);
		   bl('.ddje',425,268,403,36);
		   bl('.kxsj',546,268,403,36);
		   bl('.djk',658,268,403,36);
		   bl('.zffs',771,268,403,36);
		   bl('.ljzf',866,'','',102);
		   bl('.sjtj_con',42,0,'',1023);
		   bl('.sj_chioce',79,0,'',165);
		   bl('.sj_chioce_dd',61,670,40,40);
		   bl('.sj_chioce2',480,0,'',165);
		   bl('.sjqd',896,'','',101);
		   bl('.yycg_con',0,0,'',1023);
		   bl('.qxdd',818,0,'',103);
		   bl('.jjfw_hbut1',0,45,177,247);
		   bl('.jjfw_hbut2',0,265,177,247);
		   bl('.jjfw_hbut3',0,485,177,247);
		   bl('.jjfw_hbut4',0,705,177,247);
		   bl('.index_dl',786,'',670,300);
		   bl('.pp_con',131,'','',964);
		   bl('.pp_con2',216,'','',879);
		   bl('.tc_hdzx_but',0,0,'',188);
		   bl('.tc_fwzs_but',188,0,'',188);
		   bl('.tc_kfrx_but',376,0,'',188);
		   bl('.tc_zxsy_but',564,0,'',188);
		   bl('.ppzx_close','','','',104);
		   bl('.tc_jjfw_but',0,0,'',188);
		   bl('.tc_sjfw_but',188,0,'',191);
		   bl('.tc_slfw_but',379,0,'',191);
		   bl('.tc_rzfw_but',570,0,'',191);
		   bl('.tc_fars_but',0,0,'',182);
		   bl('.tc_xhsc_but',182,0,'',191);
		   bl('.tc_grzx_but',373,0,'',191);
		   bl('.sale_lo1',612,'',711,531);
		   bl('.sale_tel',72,197,463,38);
		   bl('.sale_name',203,197,463,38);
		   bl('.sale_qd',403,'',632,99);
		   bl('.sale_wx',301,40,40,40);
		   bl('.3sh',424,'',712,331);
		   bl('.sale_wx2',172,40,40,40);
		   bl('.fs_but','','','',101);
           bl('.gdt',163,'',711,811);
           bl('.h_tab_top','','','',81); 
           bl('.h_tap_text','',60,'','');
           bl('.h_tap_text span','','',468,'');
           bl('.fs_butf',30,548,113,31);
           bl('.fs_butgai','','',176,80);
           bl('.zd_text','','',555,'');
           bl('.focusd',0,0,15,15);
           bl('.te_le','','',136,'');
           bl('.te_re','','',410,'');
           bl('.sale_loginout',1002,'',710,100);
           bl('.xgmm',1132,'','','');
           bl('.fsfx',472,'',712,491);
           bl('.fsfx_close',472,594,137,137);
           bl('.fs_xgmm_bg',252,'',711,771);
           bl('.sale_gm_op',245,79,555,'');
           bl('.sale_gm_np',375,79,555,'');
           bl('.sale_gm_qnp',508,79,555,'');
           bl('.gm_close','','',135,135);
           bl('.gm_qd',630,'',631,102);
           bl('.yfs_zk',30,'',32,20);          
           bl('.sz_box','','','',270);
           bl('.sz_box1','','','',150);
           bl('.szt',0,0,'',150);
           bl('.xq','','',58,28);
           bl('.tim_js','','','',121);
           bl('.tim_js span','',52,'','');
           bl('.zfcs_con',378,'',712,737);
           bl('.cs_num',130,58,'','');
           bl('.zfcs_text',221,'',603,475);
           bl('.cs_head','','',80,80)
           bl('.cs_xx','','',332,'');
           bl('.cs_tsy','',440,164,'');
           bl('.cs_close','','',165,153);
           bl('.sale_mylog',406,'',630,555);
           bl('.slte',156,20,562,'');
           bl('.slm',289,20,248,'');
           bl('.hqyzt',256,340,290,100);
           bl('.hygli',456,0,633,103);
           
       
           setTimeout(function(){
               jQuery('.yfs_zk').addClass('hro');
           },1000);
         
         
           jQuery('.sz_box1').css({
		     "margin-bottom":pingKuan * bili(40)
		   });
         
           jQuery('.error').css({
		     "bottom":pingKuan * bili(172)
		   });
		   
		   jQuery('.error3').css({
		     "bottom":pingKuan * bili(152)
		   });
            
            
            jQuery('.cs_xx').css({
				"padding-right":pingKuan * bili(162)
			}); 
            
             jQuery('.cs_time').css({
				"padding-left":pingKuan * bili(40)
			}); 
            
            jQuery('.csxq').css({	
				"padding-top":pingKuan * bili(50),	
				"padding-bottom":pingKuan * bili(50),
				"padding-left":pingKuan * bili(108)
			}); 
            
           jQuery('.tim_js span').css({	
				"padding-left":pingKuan * bili(52)	
			}); 
           
           jQuery('.h_tab').css({	
				"margin-bottom":pingKuan * bili(25)	
			});
           
           jQuery('.h_tap_text').css({
				"padding-top":pingKuan * bili(25),	
				"padding-bottom":pingKuan * bili(25)	
		    });
				
			 jQuery('.focusd').css({
				"margin-left":pingKuan * bili(-43.5),
				"margin-top":pingKuan * bili(9)	
			});
				
			
						
			jQuery('.h_tab_bottom').css({
				"padding-top":pingKuan * bili(40)
			});	
			
		   jQuery('.zd_text').css({
				"padding-bottom":pingKuan * bili(40),
				"padding-left":pingKuan * bili(45)
			});	
			
		   jQuery('.te').css({
				"margin-left":pingKuan * bili(56)	
		   });
           
           
            jQuery('.szt .sp1').css({
				"margin-left":pingKuan * bili(-15)
			});
			
			jQuery('.szt .sp11').css({
				"margin-left":pingKuan * bili(0)
			});
			
			jQuery('.szt .sp3').css({
				"margin-left":pingKuan * bili(15)
			});
				
           jQuery('.errors').css({
				"bottom":pingKuan * bili(130)
			});
           
           
           loadedIscrollo();
           loadedIscrollo2();
           
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
//		window.addEventListener('load', loaded, false);
      
      
       /*获取加载进度*/	  
       var aImg = document.getElementsByTagName('img');
       var vid = document.getElementById('yx');
       var iNow=0;
       
       
       
	    for(var i=0;i<aImg.length;i++){
	    	
			  (function(i){
			  	
				var yImg = new Image();
				
				yImg.onload = function(){
					
					iNow++;	
					
					var pros=parseInt(iNow/aImg.length*100);
					
					console.log(pros);
					
				    
			    	setTimeout(function(){
			    		jQuery('.loadFont span').text(pros+'%');
			    	},500);	
				   
				    
					if(pros==100){ 
						setTimeout(function(){
							loaded();
							jQuery('.loadFont span').text('100%');
						},1000); 
				    }
				
			   };
			
			   yImg.src=aImg[i].src;
			 
			 })(i);
		}	
        /*获取加载进度end*/




});




