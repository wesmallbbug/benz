jQuery(function(){
	

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
			},1000);
	   		
			
		
		
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
           bl('.yzcg',304,'',712,331);
           bl('.grzx_head_bg',50,'',199,206);
           bl('.grzx_head_bg2','',59,129,127);
           bl('.grzx_head',52,'',164,160);
           bl('.grzx_head2','',59,129,127);
           bl('.grzx_name',261,0,'','');
           bl('.grzx_xxk',348,'','',101);
           bl('.grzx_tab_xxk',457,'',670,600);
           bl('.grzx_tab_ht','','','',121);
           bl('.grzx_tab_icon1','',20,196,35);
           bl('.grzx_tab_icon2','',20,197,39);
           bl('.grzx_tab_icon3','',20,191,34);
           bl('.grzx_tab_icon4','',20,198,41);
           bl('.grzx_tab_icon5','',20,225,31);
           bl('.dd_num','',601,52,52);
           bl('.grzx_shead','',576,52,54);
           bl('.grzx_thead','',576,48,48);
           bl('.grzx_shead2','',600,52,54);
           bl('.grzx_thead2','',600,48,48);
           bl('.grzx_con',266,'',712,681);
		   bl('.grzx_tel',215,82,549,38);
		   bl('.grzx_yzm',345,82,241,38);
		   bl('.hqyzm',312,381,291,100);
		   bl('.grzx_login_close',0,'',205,102);
		   bl('.grzx_wx',441,41,40,40);
		   bl('.grzx_login_but',542,'',630,100);
		   bl('.yzcg',304,'',712,331);
           bl('.sq_new_but',454,'',672,102);
           bl('.sq_new_but2',220,'',672,102);
           bl('.sq_new_ts',600,'',645,223);
           bl('.grzx_new_con',323,'',711,711);
           bl('.sq_tel',234,71,570,40);
           bl('.sq_ztel',364,71,570,40);
           bl('.grzx_new_con_close','','',119,125);
           bl('.sq_xz_qd',570,'',632,101);
           bl('.xz_xq_top','','',750,218);
           bl('.xz_xq_left','','',501,218);
           bl('.xz_xqtou_name','',232,269,'');
           bl('.xz_xq_right','','',250,218);
           bl('.xz_sq_tssq',352,'','','');
           bl('.xz_xq_gdt',443,'',711,570);
           bl('.xz_sq_ht_top','','','',100);
           bl('.xz_sq_tou','',42,75,75);
           bl('.xz_sq_title','',152,'','');
           bl('.xz_sq_sd_ys','',633,37,37);
           bl('.sq_sd_ys_gai','','',101,'');
           bl('.sqxq_close_gai','','',101,'');
           bl('.xz_sq_ht_bottom','','','',201);
           bl('.xz_sq_ht','','','',302);
           bl('.xz_sq_ht_bottom_float span',104,'','','');
           bl('.grzx_sq_xq_con',82,'',712,970);
           bl('.sq_time_li',327,'',630,465);
           bl('.sq_time_top',0,0,'',50);
           bl('.sq_xz_text',85,'',630,395);
           bl('.qxsq_but',830,'',630,100);
           bl('.qxsq_tc_qd_con',453,'',731,561);
           bl('.qxsq_ti_text',210,'',632,'');
           bl('.qxsq_shi',420,40,310,101);
           bl('.qxsq_fou',420,381,310,101);
           bl('.qxsq_close_gai','','',111,111);
           bl('.sqxq_close','','',34,34);
           bl('.grzx_grxx_dl_con',492,'',670,482);
           bl('.grzx_xgdh',0,0,'',119);
           bl('.grzx_dzgl',119,0,'',123);
           bl('.grzx_syfp',223,0,'',120);
           bl('.grzx_xgmm',361,'','',122);
           bl('.grxx_new_but',482,'',672,102);
           bl('.djtj_cydz',642,'',548,145);
           bl('.tjcy_dz_con',155,'',712,894);
           bl('.grxx_sh',235,82,555,'');
           bl('.grxx_si',366,82,555,'');
           bl('.grxx_xxdz',629,82,555,'');
           bl('.grxx_close_gai','','',112,122);
           bl('.grxx_qd',622,'',630,100);
           bl('.grxx_qx',495,82,555,'');
           bl('.grxx_qdc',753,'',630,100);
           bl('.grxx_sxd','',22,35,35);
           bl('.grxx_sxd2','',92,37,37);
           bl('.grzx_sxd_xq',0,0,55,'');
           bl('.grzx_sxd_close',0,55,65,'');
           bl('.mm_3sh','','',712,331);
           bl('.grzx_xgdh div', 45, 434, 240, '')
           bl('.fpkj_tc_con',10,'',712,1051);
           bl('.fpkj_fptt',208,240,435,40);
           bl('.fpkj_fwf',328,240,435,40);
           bl('.fpkj_kkje',447,240,435,40);
           bl('.fpkj_yjdz',565,240,435,40);
           bl('.fpkj_sjr',684,240,435,40);
           bl('.fpkj_tel',801,240,435,40);
           bl('.fpkj_close','','',112,118);
           bl('.fpkj_tj',912,'',632,101);
           bl('.grzx_zxcz_but',483,'',712,102);
           bl('.grzx_srje',483,'',712,102);
           bl('.wxzf',887,'',710,100);
           bl('.3sh_czcg','','',711,332);
           bl('.grzx_srje2',615,'',712,102);
           bl('.error6',744,'',712,102);
           bl('.ddzt_con','','',712,'');
           bl('.ddzt_con_1','','',712,'');
           bl('.ddzt_con_tplan','','',712,158);
           bl('.ddzt_con_tplan span',56,'','','');
           bl('.ddzt_text',160,'',632,'');
           bl('.zffs_chi',690,'',631,60);
           bl('.ljzf_but',782,'',632,100);
           bl('.ljzf_but1',670,'',632,100);
           bl('.zffs_chi select',35,175,448,'');
           bl('.zft',35,41,'','');
           bl('.dzf_dd',16,1,14,14);
           bl('.qxdd_con', 464, '', 712, 551);
           bl('.pdz_tc_sxdz', 464, '', 712, 438);
           bl('.qxdd_close', '', '', 105, 120);
           bl('.qxdd_fou', 411, 371, 302, 101);
           bl('.qxdd_fou2', 296, 371, 302, 101);
           bl('.qxdd_si', 411, 41, 302, 101);
           bl('.qxdd_si2', 296, 41, 302, 101);
           bl('.siji_xx',670,'',630,98);
           bl('.ico_tout','','',80,80);
           bl('.fwsjj',10,112,'','');
           bl('.sjdhh',55,112,'','');
           bl('.bh_but',47,'',110,50);
           bl('.star_con',322,0,'',25);
           bl('.star_con img','','',35,34);
           bl('.sj_pj_ti',402,'',641,26);
           bl('.pjdy_con',462,'',670,172);
           bl('.pj_text',642,'',569,154);
           bl('.sjpj_tj',913,'',670,101);
           bl('.ddzt_con2',41,'','',753);
           bl('.ddzt_con_tplan2',30,'','','');
           bl('.ddzt_text2',120,'',632,165);
           bl('.mxlan',332,'',667,461);
           bl('.zffs_chi2',521,'','','');
           bl('.zffs_chi23',521,'','',100);
           bl('.ljzf_but2',653,'','','');
           bl('.gth','',25,35,35);
           bl('.ztcon_text',132,'',712,920);
           bl('.jjfw_ddzt_con,.jjfw_pj_con',132,'','','');
           bl('.syfp2_con',3,'',712,1061);
           bl('.syfp2_text',189,'',631,672);
           bl('.fpl_top','','','',72);
           bl('.syfp_sx','',549,40,40);
           bl('.fpldd_gai','','',136,113);
           bl('.syfp2_close','','',114,123);
           bl('.syfp2_but',922,'',631,100);
           bl('.jjfw_ddzt_con','','','',900);
           bl('.ddzt_text22','','','',485);
           bl('.qx_con',818,'',632,104);
           bl('.qx_text','',40,'','');
           bl('.qx_sx','',549,40,40);
           bl('.qx_sx','',117,'','');
           bl('.fptitle',202,84,'','')
           bl('.fptitleshu1',220,200,'',20);
           bl('.ydcg_title',74,'',182,45);
           
           
           jQuery('.xz_sq_ht_bottom66').css({
             "padding-left":pingKuan * bili(66)
           });
           
           jQuery('.siji_xx').css({
             "margin-top":pingKuan * bili(20),
             "margin-bottom":pingKuan * bili(20)
           });
           
           
           jQuery('.ddzt_text').css({
             "padding-top":pingKuan * bili(30),
             "padding-bottom":pingKuan * bili(10)
           });
           
           jQuery('.ddzt_con').css({
             "padding-bottom":pingKuan * bili(30)
           });
           
           
           
           jQuery('.fpl').css({
             "padding-bottom":pingKuan * bili(10),
             "margin-bottom":pingKuan * bili(28)
           });
           
           
           jQuery('.fpl .dzf_li').css({
             "padding-left":pingKuan * bili(40),
             "padding-right":pingKuan * bili(40)
           });
           
           jQuery('.fpl_top').css({
             "padding-left":pingKuan * bili(40),
             "margin-bottom":pingKuan * bili(30)
           });
           
           jQuery('.mxlan').css({
             "padding-left":pingKuan * bili(45),
             "padding-top":pingKuan * bili(38)
           });
           
           jQuery('.pj_text').css({
             "padding-top":pingKuan * bili(32),
             "padding-bottom":pingKuan * bili(32),
             "padding-left":pingKuan * bili(51),
             "padding-right":pingKuan * bili(51)
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
           
           
           jQuery('.dzf_li').css({
             "margin-bottom":pingKuan * bili(20)+'px'
           });
           
           jQuery('.botto').css({
             "top":pingKuan * bili(650)+'px',
             "width":pingKuan * bili(632)+'px'
           });
           
           
           jQuery('.cydz_li').css({
             "margin-bottom":pingKuan * bili(30)+'px'
           });
           
           jQuery('.cydz_li').css({
             "padding-top":pingKuan * bili(40)+'px',
             "padding-bottom":pingKuan * bili(40)+'px'
           });
          
           
           jQuery('.sq_time_top').css({
             "padding-left":pingKuan * bili(80)+'px',
             "line-height":pingKuan * bili(50)+'px'
           });
           
             jQuery('.time_li_b_sm').css({
             "padding-left":pingKuan * bili(80)+'px'
           });
           
           
           
            jQuery('.time_li_b_left').css({
             "width":pingKuan * bili(300)+'px'
           });
           
           jQuery('.time_li_b_right').css({
             "width":pingKuan * bili(225)+'px'
           });
           
             jQuery('.time_li_b .time_li_b_left').css({
             "padding-left":pingKuan * bili(80)+'px'
           });
           
          
           
           
           jQuery('.xz_sq_ht').css({
             "margin-bottom":pingKuan * bili(32)+'px'
           });
           
           jQuery('.sp1').css({
             "text-indent":pingKuan * bili(-15)+'px'
           });
           jQuery('.sp3').css({
             "text-indent":pingKuan * bili(15)+'px'
           });
           
           jQuery('.xz_xq_right span').css({
             "margin-top":pingKuan * bili(20)+'px'
           });
           jQuery('.dd_num').css({
             "line-height":pingKuan * bili(52)+'px'
           });
           
           
           
           jQuery('.nav').addClass('topin');
           
           Zepto('.chionav').tap(function(){
             Zepto('.grzx_tc').hide();
           });
          
           jQuery('.error').css({
		     "bottom":pingKuan * bili(180)
		   });
		   
		   jQuery('.error2').css({
		     "bottom":pingKuan * bili(160)
		   });
           
            jQuery('.error4').css({
		     "bottom":pingKuan * bili(150)
		   });
           
            jQuery('.error5').css({
		     "top":pingKuan * bili(110)
		   });
		   
		   
		   jQuery('.ddzt_con').css({
		   	"margin-bottom":pingKuan * bili(40)
		   });
		   
           
           loadedIscrollo();
           
           
           
           
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




