(function($){
    let mainMenu=$('.main_menu'),
    winDow=$(window),
    backtop=$('.backtop');
    let menuTop=mainMenu.offset().top;
    winDow.on('scroll',function(){
        let scrol=winDow.scrollTop();

        //menu js
        if (scrol>menuTop){
            mainMenu.addClass('menufixed');
        }else{
            mainMenu.removeClass('menufixed');
        }

        //backtop scroll js
        if(scrol>400){
            backtop.fadeIn(1000);
        }else{
            backtop.fadeOut(1000);
        }
    });

    //backtop click js
    backtop.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        });
    });

    //seminarscheduel toggle js
    $('.toggle').on('click',function(){
        $('.blank').slideToggle(1000)
    });
    
    //preloader load js
    winDow.on('load',function(){
        $('.preloader_main').delay(1000).fadeOut(1000);
    });
    
    //bannerslider js 
    $('#banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
        });
        $('#courses slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false
            });
           
              
})(jQuery);