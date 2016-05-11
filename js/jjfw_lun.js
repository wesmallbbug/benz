define(function(){
    var reg=location.search.match(),
		ts=reg&&reg[1]||'scrollX',
		b=new pageSwitch('pages',{
        duration:450,
        start:0,
        direction:0,
        loop:true,
        ease:'ease',
        transition:'fade',
		freeze:false,
		mouse:false,
        mousewheel:false,
        arrowkey:true,
        autoplay:false,
        interval:3000
        });
        
        
        var inde
        b.on('after',function(){
        	jQuery('.page').removeClass('switchpagein');
        	jQuery('.lb_car').removeClass('lb_car1in');
        	jQuery('#pages .page').each(function(){
             if(jQuery(this).css('display')=='block'){
               inde=jQuery(this).index();
               
               jQuery('.page').eq(inde).addClass('switchpagein');
               jQuery('.page').eq(inde).find('.lb_car').addClass('lb_car1in');
               jQuery('.xgbg').fadeOut(500);
               jQuery('.xgbg').eq(inde).fadeIn(500);
             }
           });

           
        });
        
        setInterval(function(){
          
        
          jQuery('#pages .page').each(function(){
             if(jQuery(this).css('display')=='block'){
               index=jQuery(this).index();
               jQuery('.ld ul li').removeClass('focus');
               jQuery('.ld ul li').eq(index).addClass('focus');
             }
           });
           
           
        },1);
})