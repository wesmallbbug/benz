jQuery(function(){


	   /*禁止默认拖动事件*/
//	  document.ontouchmove = function(event){
//		event.preventDefault();
//	  };
	    
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
		   bl('.ld', 458, '', 348, 16);
		   bl('.qdcx_but',940,'','','');
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
		   bl('.grzx_con',266,'',712,681);
		   bl('.grzx_tel',215,82,549,38);
		   bl('.grzx_yzm',345,82,241,38);
		   bl('.hqyzm',312,381,291,100);
		   bl('.grzx_login_close',0,'',205,102);
		   bl('.grzx_wx',441,41,40,40);
		   bl('.grzx_login_but',542,'',630,100);
		   bl('.yzcg',304,'',712,331);
		   bl('.switch_con,.page',0,0,'',930);
		   bl('.cx_xxk',625,0,750,117);
		   bl('.next1_tc_con', 193, '', 712, 870);
		   bl('.next1_tc_conn', 223, '', 712, 700);
		   bl('.next1_tc_text',201,'',631,491);
		   bl('.jjfw_in','','','',100);
		   bl('.jjfw_in input,.text_val','',200,431,40);
		   bl('.jjfw_tsy', 685, 58, 208, 26);
		   bl('.jjfw_tsyy', 484, 58, 208, 26);
		   setInterval(function () {
		       bl('.next_but', 730, '', 631, 100);
		   },1)
		  
           bl('.next_butt', 570, '', 631, 100);
		   bl('.jjfw_loc_in',33,'',714,103);
		   bl('.mdd_loc',36,'','','');
		   bl('.loc_text',162,'',714,733);
		   bl('.dd_sx','',633,40,40);
		   bl('.dd_gai','','',100,'');
		   bl('.loc_qd',933,'',718,102);
		   bl('.next3_tc_con',23,'',710,1030);
		   bl('.jjfw_in3',31,'',631,'');
		   bl('.jjfw_in3_1',150,'','','');
		   bl('.loc_mdd',250,'','',359);
		   bl('.ti_span',36,88,'','');
		   bl('.loc_mdd_text',101,'',573,232);
		   bl('.loc_mdd_sx',0,17,35,35);
		   bl('.jjfw_in3_2',608,'','','');
		   bl('.jjfw_in3_3',728,'','','');
		   bl('.jjfw_tsy2',851,'','','');
		   bl('.next_but8',900,'','','');
		   bl('.zwcx_tc_con',402,'',712,561); 
		   bl('.zwcx_qd',422,'',630,101);
		   bl('.zwcx_close','','',103,130);
		   bl('.jjfw_ycfw_con',33,'',712,1030);
		   bl('.ycfw_text',209,'',633,235);
		   bl('.ycfw_text2',209,'',633,338);
		   bl('.cgts',460,'',633,'');
		   bl('.dzf_dd',16,1,14,14);
		   bl('.zffs_chi',678,'',631,100);
		   bl('.zffs_chi select,.select,.sel',35,175,448,'');
		   bl('.zft',35,41,'','');
		   bl('.zffs_chi2',570,'',631,100);
		   bl('.zffs_chi3',788,'',631,100);
		   bl('.ljzf_but',900,'',632,100);
		   bl('.zxtj_tc_lan','','','',80);
		   bl('.zxtj_tc_lan span','',40,'','');
		   bl('.zxtj_tc_lan_sx','',630,40,40);
		   bl('.zxtj_text',109,'',633,764);
		   bl('.zxtj_text2',209,'',633,580);
		   bl('.zxtj_text_li_tou_left','','','',122);
		   bl('.ico_tout','','',80,80);
		   bl('.zxtjsj_star',47,'','','');
		   bl('.zxtjsj_name',10,'','','');
		   bl('.zxtjsj_star img','','',21,23);
		   bl('.zxtj_dd',22,590,40,40);
		   bl('.zxtj_dd_gai', '', '', 400, 141);
		   bl('.ckxq','','','',40);
		   bl('.sd_h','','',37,9);
		   bl('.zxtj_qd',895,'',631,100);
		   bl('.zxtj_qd_d',895,520,308,100);
		   bl('.jjfw_loc_qd_d',940,563,340,100);
		   bl('.jjfw_loc_prev_d',940,189,340,100);
		   bl('.fh_qd_d',895,195,308,100);
		   bl('.qr_yezf_con',583,'',712,451);
		   bl('.qr_yezf_close','','',114,121);
		   bl('.qd_yezf',310,39,302,101);
		   bl('.qx_yezf',310,371,302,101);
		   bl('.yzcg_3sh',364,'',712,332);
		   bl('.yclj_con',262,'',713,790);
		   bl('.yclj_text',179,'',614,423);
		   bl('.ico_tout','','',77,77);
		   bl('.yclj_dd','','',40,40);
		   bl('.yclj_close','','',106,121);
		   bl('.yclj_bq_con',512,'',712,552);
		   bl('.yclj_bq_close','','',152,139);
		   bl('.yclj_bq_qd',412,'',631,101);
		   bl('.yclj_qd_but',650,'',632,100);
		   bl('.intitle','',30,'','');
		   bl('.intitle_shu','',170,'',20);
		   bl('.close_tc','','',145,145);
		   bl('.prev_but',730,40,305,100);
		   bl('.qd_but_d',730,364,305,100);
		   bl('.chioce_loc_con', 250, '', 711, 790);
		   bl('.zxtj_tc_lan',790,'','','');
		   bl('.qd_chio_loc',942,'','','');
		   bl('.chio_loc_title',67,'','','');
		   bl('.cxpz_text_cjhi',185,47,599,681);
		   bl('.loc_did','','','','');
		   bl('.hdzx_scrol',263,'',633,792);
		   
		   
		   
		   
		   
		   setInterval(function () {
		       bl('.chioce_loc_qd', 649, '', 632, 100);
		   },1)
		   
		   bl('.chice_loc_text',181,'',603,429)
		   bl('.chioce_dd','','',40,40);
		   
		   setInterval(function(){
		   	bl('.sq_new_but2',20,'',672,102);
		   },1);
		    
		    
		   jQuery('.loc_h_left').css({
             "padding-top":pingKuan * bili(15)+'px',
             "text-indent":pingKuan * bili(19)+'px'
           }); 
		    
		   jQuery('.hdzximg').css({
             "margin-bottom":pingKuan * bili(24)+'px'
           });   
		   
		   
		   jQuery('.loc_h_right').css({
             "padding-bottom":pingKuan * bili(20)+'px'
           });
		   
		   
		   jQuery('.chioce_locli').css({
             "padding-top":pingKuan * bili(50)+'px',
             "padding-bottom":pingKuan * bili(50)+'px'
           });
		   
		   jQuery('.close_tc1').bind('touchstart',function(){
		   	jQuery('.tcbg1').fadeOut(200);
		   });
		   
		   jQuery('.close_tc2').bind('touchstart',function(){
		   	jQuery('.tcbg2').fadeOut(200);
		   });
		   
		    jQuery('.sjpj_close ').bind('touchstart', function () {
		       jQuery('.zxtj_tc').fadeOut(200);
		   });

		   jQuery('.fh_qd_d ').bind('touchstart', function () {
		       setTimeout(function () {
		           jQuery('.zxtj_tc').fadeOut(200);
		       }, 600);
		      
		   });
		   
		   jQuery('.close_tc3').bind('touchstart',function(){
		   	jQuery('.tcbg3').fadeOut(200);
		   });
		   
		   jQuery('.yclj_li').css({
             "padding-top":pingKuan * bili(34)+'px',
             "padding-bottom":pingKuan * bili(34)+'px'
           });
		   
		   
		   jQuery('.pj_yhm').css({
             "padding-left":pingKuan * bili(16)+'px',
             "margin-bottom":pingKuan * bili(16)+'px'
           });
		   
		   jQuery('.nmpj').css({
             "margin-bottom":pingKuan * bili(45)+'px'
           });
		   
		   
		   jQuery('.zxtj_text_li').css({
             "margin-bottom":pingKuan * bili(25)+'px'
           });
           
           
		   
		    jQuery('.pjdy_con span').css({
             "padding-top":pingKuan * bili(15)+'px',
             "padding-bottom":pingKuan * bili(15)+'px',
             "padding-left":pingKuan * bili(12)+'px',
             "padding-right":pingKuan * bili(12)+'px',
             "margin-right":pingKuan * bili(10)+'px',
             "margin-left":pingKuan * bili(10)+'px',
             "margin-bottom":pingKuan * bili(20)+'px'
           });
		   
		   
		   
		   jQuery('.pjbq').css({
		   	"padding-bottom":pingKuan * bili(22),
		   	"padding-top":pingKuan * bili(22),
		   	"padding-left":pingKuan * bili(13)
		   });
		  
		  jQuery('.loc_mdd_li').css({
		   	"margin-bottom":pingKuan * bili(30)
		   });
		  
		   jQuery('.xx_trte').css({
		   	"margin-bottom":pingKuan * bili(24),
		   	"margin-left":pingKuan * bili(75)
		   });
		   
		   jQuery('.loc_li').css({
		   	"padding-bottom":pingKuan * bili(45),
		   	"padding-top":pingKuan * bili(45)
		   });
		   
		   jQuery('.loc_li').css({
		   	"margin-bottom":pingKuan * bili(30)
		   });
		   
		   jQuery('.jjfw_in').css({
		   	"margin-bottom":pingKuan * bili(20)
		   });
		   
		   
		   setTimeout(function(){
		   	jQuery('.switch_con .page1').addClass('switchpagein');
		   	jQuery('.lb_car1').addClass('lb_car1in');
		   	jQuery('.qdcx_but').addClass('qdcx_butin');
		   },1000);
		   
		   
		   
		   jQuery('.cx_xxk_li').css({
		   	 "margin-top":pingKuan * bili(44)	
		   });
		   
		   
		   jQuery('.error').css({
		     "bottom":pingKuan * bili(180)
		   });
		   
		   
	       jQuery('.dzf_li').css({
             "margin-bottom":pingKuan * bili(20)+'px'
           });
		
		
		jQuery('.zxtj_text_li_tou_right').css({
             "min-height":pingKuan * bili(122)+'px'
        });
		
		jQuery('.sijs_text').css({
             "margin-top":pingKuan * bili(60)+'px',
             "margin-bottom":pingKuan * bili(20)+'px',
             "width":pingKuan * bili(455)+'px'
        });
		
		

	 
	       
		   setTimeout(function(){
		      jQuery('.hgun').addClass('topin');
		   },600);
		  
		    setTimeout(function(){
		      jQuery('.index_dl').addClass('index_dl_in');
		   },1000);
		   
		    setTimeout(function(){
		      jQuery('.nav').addClass('topin');
		   },0);
		   
		   
		    setTimeout(function () {
		        loadedIscrollo();
		        loadedIscrollo18();
		    }, 4000);
		 
           

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
			styleJs();
		}
		function hengshuping(){
			if(window.orientation==180||window.orientation==0){loaded();};
			if(window.orientation==90||window.orientation==-90){loaded();}
		}
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
		window.addEventListener('load', loaded, false);
      
//    
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




