$(function (){
   $('.side_bar').hover(function (){
      if($(window).width() > 500){
      $('.nav_bar > div:first-child').animate({
        width: "260px"
      }, 110);
      $('.side_bar').animate({
        width: "260px"
      }, 110);
      $('.side_bar_item > .title').fadeIn("slow");
      $('.side_bar_item > .drop_down').fadeIn("slow");
    }
   });
   
   if($(window).width() > 500){
   $('.body,header').hover(function (){
      $('.nav_bar > div:first-child').animate({
        width: "60px"
      }, 110);
      
      $('.side_bar').animate({
        width: "60px"
      }, 110);
      
      $('.side_bar_item > .title').hide();
      $('.side_bar_item > .drop_down').hide();
      $('.sub_side_bar').hide();
   });
   }
   else{
      $('.body').hover(function (){
          $('.side_bar').hide();
          
          $('.nav_bar nav').hide();
      });
   }
   
   $('.side_bar_item').click(function (){
        $(this).find('.sub_side_bar').css('left','20%');
        $(this).find('.sub_side_bar').show();
        $(this).find('.sub_side_bar').animate({
            left: "0"
        }, 110);
   });
   
   $('.sub_side_bar > .header').click(function (){
        $(this).parent().animate({
            left: "25%"
        }, 110);
        $(this).parent().fadeOut(100);
   });
   
   $('.menu_item > div > div > div').click(function(){
        $('.mega_menu').hide();
        $('.sub_menu:visible').hide();
        $('.sub_menu_border_gabarie').hide();
        $(this).find('+ .sub_menu').show();
        $(this).find('+ .sub_menu + .sub_menu_border_gabarie').show();
   });
   
   $('.sub_menu_item').click(function (){
        $('.sub_menu_item .sub_menu').hide();
        $(this).find('.sub_menu').show(); 
   });
   
   $('.search_box_in').click(function (){
      $('.search_box').fadeIn("slow"); 
      if($(window).width() <= 500){
          $('.side_bar:visible').hide();
          $('.nav_bar nav:visible').hide();
      }
   });
   $('#search_box_out').click(function (){
      $('.search_box').fadeOut("slow"); 
   });
   
   $('.body, .side_bar').hover(function (){
      
      $('.sub_menu_border_gabarie').hide();
      $('.sub_menu:visible').hide();
      $('.mega_menu').hide();
   });
   
   
   ifMegaMenuHidden = true;
   $('.mega_menu_go').click(function (){
        if(ifMegaMenuHidden){
            $('.mega_menu').show();
            ifMegaMenuHidden = false;
        }
        else{
            $('.mega_menu').hide();
            ifMegaMenuHidden = true;
        }
        
   });
   
   isSideBarMobileHidden = true;
   $('.side_bar_menu_icon img:nth-child(1)').click(function (){
       
       $('.nav_bar nav:visible').hide();
       $('.search_box:visible').hide();
       if(isSideBarMobileHidden){
       $('.side_bar').css('width','60px'); 
       $('.side_bar').show();
       $('.side_bar').animate({
            width: "260px"
       }, 180);
       isSideBarMobileHidden = false;
       }
       else{
           $('.side_bar').hide();
           isSideBarMobileHidden = true;
       }
   });
   
   isNavBarMobileHidden = true;
   $('.side_bar_menu_icon img:nth-child(2)').click(function (){
      $('.side_bar').hide();
      $('.search_box:visible').hide();
      if(isNavBarMobileHidden){
          $('.nav_bar nav').css('top','0');
          $('.nav_bar nav').show();
          $('.nav_bar nav').animate({
                top: "50px"
          }, 250);
          isNavBarMobileHidden = false;
      } 
      else{
          $('.nav_bar nav').hide();
          isNavBarMobileHidden = true;
      }
   });
   
});