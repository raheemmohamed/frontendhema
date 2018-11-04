$(document).ready(function(){
    checkPosition();
    checkstorysection();
    
    
   /* sticky navigation bar */
    function myFunction() {
        var x = document.getElementById("global-nav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }
    

    //toggle search bar
     $('.js-searchbar').click(function(){
        var searchtextbox = $('.search');
        searchtextbox.toggle("slide");

    });
    
    /* Responisve Mobile navigation menu */
    $('.onclicknav').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon i');
//        
       nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
             icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    // return policy closing script
    $( "#return-policy-close" ).click(function() {
      $( "#policy-div" ).hide( "slow");
    });
    
    //drop down menu	
    $(".drop-down").hover(function() {
        $('.navigation-submenu-row').addClass('display-on');
    });
    $(".drop-down").mouseleave(function() {
        $('.navigation-submenu-row').removeClass('display-on');
    });
    
    //product flickity slider custom jquery
    var $mainCarousel = $('.carousel').flickity({
        initialIndex: 1,
        wrapAround: true,
        prevNextButtons: false,
        cellSelector: '.carousel-cell',
        draggable: true,
    });
    
    //hover the left opacity divider tag
    $('.left-opacity').hover(function(){
      $mainCarousel.flickity('previous');
    });
    
    //move the right site opacty divider tag
    $('.right-opacity').hover(function(cellElement) {
      $mainCarousel.flickity('next');
        
    });
    
    //carasoul hover product effect
    $('.carousel-cell').mouseenter(function(){
        
        var cellCarousel = $('carousel-cell').flickity();
        
        cellCarousel.flickity('previous');
    
      
    });
    
    

    //slider selecter and animating flickity
    var $logger = $('.logger');

    $mainCarousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
      // dismiss if cell was not clicked
      if ( !cellElement ) {
        return;
      }
      // change cell background with .is-clicked
      $mainCarousel.find('.is-clicked').removeClass('is-clicked');
      if($( cellElement ).addClass('is-clicked')){
        console.log("flickity slider working perfect");
      }else{
          $(cellElement).find('.is-clicked').removeClass('is-clicked');
      }
    });
    
    //pattern images resize and src attribe changing script
    function checkPosition(){
        if($(window).width() > 1499){
             //mothers-day section left pattern image src changer    
             $("#mothersdaypatternImage").attr("src",'resources/img/pattern/max-pattern.png');
             //craft image attribute changer
             $("#craftmanImage").attr("src",'resources/img/pattern/max-pattern.png');
           
        }else{
            $("#mothersdaypatternImage").attr("src",'resources/img/pattern/pattern.png');
            //craft image attribute changer
            $("#craftmanImage").attr("src",'resources/img/pattern/pattern.png');
            
        }     
    }
    
    //each and time check with the function and made the resolution elemented changes
    setInterval(function(){checkPosition();}, 500);
    
    $('.drop-down').click(function(){
        $('.navigation-submenu-row' ).slideToggle( 
          function() {
            $( this ).addClass( 'display-on' );
              $( this ).removeClass( 'navigation-submenu-row' );
              
          }, function() {
            $( this ).addClass( 'navigation-submenu-row' );
              $( this ).removeClass( 'display-on' );
            
          }
        );
        
    });
    
    /*mobile submenu display the javascript */
    $('.mobile-navigation-menu-droplist').click(function(){
        $('.mobile-menu-navigation-sub-menu' ).toggle(
          function() {
            $( this ).addClass( 'mobile-menu-navigation-sub-menu-display-on' );
              $( this ).removeClass( 'mobile-menu-navigation-sub-menu' );
              
          }, function() {
            $( this ).addClass( 'mobile-menu-navigation-sub-menu' );
              $( this ).removeClass( 'mobile-menu-navigation-sub-menu-display-on' );
            
          }
        );
    });
    
    //navigation menu active
    $('.main-nav li a').click(function(){
        $('.main-nav li  a').removeClass('active');
        $(this).addClass('active');
    });
    
    
    
    /* Inquiries product collection inner page css style*/
    
     collection_inner_inquire_btn();
     function collection_inner_inquire_btn(){
    
         var inquirebtn = $('.collection-inquire');
         
        inquirebtn.css({
            'color': '#052263 !important',
            'text-transform': 'uppercase !important',
            'font-size': '11px !important',
            'font-weight': '600 !important',
        });
     }
   
    
    
    /* Paralax effect start js here http://jsfiddle.net/wq2Ej/*/
    function checkstorysection(){
    
    var paralaxeffect = $('.divider-paralax');
    var noticebar = $('.return-policy-notice');
    
   
         if($(window).width() >= 1024){
            
             
            paralaxeffect.css({
                'width': '100%',
                'position': 'relative',
                'margin-top':  '52%' /* default 961px*/
              });
             
             noticebar.css({
                 'height':'42px'
                 
             },
           
            );
             
            /* windows is resize make refresh auto */
            $( window ).resize(function() {
             location.reload();
            });
             
            jQuery(function($) {
                  function fixDiv() {
                    var $cache = $('#getFixed');

                    if ($(window).scrollTop() ) /* below section made modification scroll top: > 120*/
                      $cache.css({
                        'position': 'fixed',
                        'top': '-3px',
                        'height': '1px' /*1000px changed by raheem paralax effect issue*/
                      });
                      
                    else
                      $cache.css({
                        'position': 'relative',
                        'top': 'auto'
                      });  

                  }
//                  $(window).scroll(fixDiv);
                  fixDiv();
                
              jQuery(function($) {
                  function fixstorydiv() {
                       var $storysection = $('#storysection');
                       if ($(window).scrollTop() ) /* scrollTop: > 480*/
                        $storysection.css({
                        
                        'box-shadow': '0px 1px 0px rgba(50, 50, 50, 0.75)'
                      });

                      else
                        $storysection.css({
                        'margin-top':'auto'
                      });
                  }  

//                  $(window).scroll(fixstorydiv);
                 
                  fixstorydiv();
              });
                
                
                function removedivider() {
                    var $removedivider = $('#getFixed');

                    if ($(window).scrollTop() > 1400)
                      $removedivider.css({
                        'display':'none'
                      });
                    
                    else
                      $removedivider.css({
                        'display':'block'
                      });  

                  }
                    $(window).scroll(removedivider);
                  removedivider();
            });
             
             

         }else{
            var $removedivider = $('#getFixed');
            paralaxeffect.css({
                'width': '100%',
                'position': 'relative',
                'margin-top':  'auto'
            });
            noticebar.css({
                 'height':'6%'
                 
            });
            $removedivider.css({
                'display':'block'
            });  

         }
        
        
        /*check height of the window auto adjust home first section*/
       if($(window).height() < 592){
           
       }
    }
    
    setInterval(function(){checkstorysection();},100);
    /* Paralax effec end js here */
    
        $( '.carousel-cell' ).hover(
          function() {
            $( this ).addClass( 'is-clicked' );
          }, function() {
            $( this ).removeClass( 'is-clicked' );
          }
        );
        
        
//        $( '.carousel-cell' ).click(
//          function() {
//            $( this ).addClass( 'is-clicked' );
//          }, function() {
//            $( this ).removeClass( 'is-clicked' );
//          }
//        );
     
    
    /* Checking the collection last grid view widths*/
    check_collection_product_slide();
    //pattern images resize and src attribe changing script
    function check_collection_product_slide(){
        if($(window).width() > 1200){
           var footer_grid_box = $('.jew-images-collection ');
            footer_grid_box.css({
               'height': '270px',
                'vertical-align': '-20px'
            });
            
            var gridheightbox = $('.gem-stone-devider-first');
            
            gridheightbox.css({
                'height':'270px',
                'width':'100%',
                
                
            });
            
        }else{
           
        }     
    }
    
    setInterval(function(){check_collection_product_slide();},100);
    
    
    
    
     /* Checking the collection last grid view 1023*/
    checkgridviewercollection();
    //pattern images resize and src attribe changing script
    function checkgridviewercollection(){
        if($(window).width() > 1023){
           var footer_grid_box = $('.jew-images-collection ');
            footer_grid_box.css({
               'height': '270px',
                'vertical-align': '-20px'
            });
            
            var gridheightbox = $('.gem-stone-devider-first');
            
            gridheightbox.css({
                'height':'270px',
                'width':'100%',
                
                
            });
            
        }else{
           
        }     
    }
//
//    setInterval(function(){checkgridviewercollection();},100);
//    
//    heighwidthproductcheck();
//     function heighwidthproductcheck(){
//         
//         var product_box_content = $('.seccontetnsec');
//         
//         if($(window).width() > 1023){
//            product_box_content.css({
//                 'width': '278px'
//             });
//         }
//       
//     }
    
     $( window ).resize(function() {
             location.reload();
            });
    
    
    /* Active Navigation menu once li active*/
//    navigationActivemenu();
//    function navigationActivemenu(){
//        for (var i = 0; i < document.links.length; i++) {
//            if (document.links[i].href == document.URL) {
//                document.links[i].className = 'active';
//            }
//        }
//    }
    
    
     navigationActivemenu();
    function navigationActivemenu(){
        for (var i = 0; i < document.links.length; i++) {
            if (document.links[i].href == document.URL) {
//                document.links[i].className = 'active';
                document.links[i].className = 'active';
                
            }
            
        }
    }
    
    
        /* This is checking weather the mac user webview or windows user mac view*/
mac();
function mac(){
    
    var rightmenumac = $('.rightsitemenu-top');
    
//     if($(window).width() >= 1016){
//         
//        if (navigator.userAgent.indexOf('Mac OS X') != -1) {
//
//            rightmenumac.css({
//                'transform': 'translate(-24px, 281%)'
//            });
//
//        } else {
//             rightmenumac.css({
//                'transform': 'translate(-45px, 281%)'
//            });
//
//        }
//     }else{
//         
//         rightmenumac.css({
//                'transform': 'translate(-61px, 281%)'
//        });
//
//     }
//    
    
    
    /* Jquery custom media query navigation menu setting*/
    
    if($(window).width() >= 1499){
         if (navigator.userAgent.indexOf('Mac OS X') != -1) {

            rightmenumac.css({
                    'transform': 'translate(-61px, 281%)'
            });

        } else {
             rightmenumac.css({
                'transform': 'translate(-82px, 281%)'
            });

        }
    }else{
        if (navigator.userAgent.indexOf('Mac OS X') != -1) {

            rightmenumac.css({
                'transform': 'translate(-24px, 281%)'
            });

        } else {
             rightmenumac.css({
                'transform': 'translate(-45px, 281%)'
            });

        }
    }
   
}
    
    
    
   

  
});



/* slider new */
$(document).ready(mySlider);

    function mySlider() {
        var imgNumber, 
            sliderContainerWidth, 
            imgContainer,
            index,
            flag = true,
            speed = 600,
            bullets = true,
            auto = true ,
            time = 5000 ;

        construction();
        $(window).resize(construction);
        if(auto){
            var handle = setInterval(slideRight, time) ; 
        }

    function construction() {
        index = 1;
        imgNumber = $('.images-container li').length;
        sliderContainerWidth = Math.round($('#slider-container').width());
        imgContainer = sliderContainerWidth * imgNumber;
        $('.images-container').css("width", imgContainer);
        $('.images-container li').css("width", sliderContainerWidth);
        $('.images-container').css("margin-left", 0);
        if (bullets == true) {
            $('.bullets-container').html("");
            for (i = 1; i <= imgNumber; i++) {
                $('.bullets-container').append("<span class='bullet'></span>");
            }
            $('.bullet').eq(0).addClass('active');
        }
        $(".bullet").click(pagers);
        $('.a-right').click(slideRight);
        $('.a-left').click(slideLeft);
    }

    function pagers() {
        if (!$(this).hasClass('active')) {
            var bulletIndex = $(".bullets-container span").index(this) + 1;
            index = bulletIndex;
            $(".bullets-container").find(".bullet").removeClass("active").eq(bulletIndex - 1).addClass("active");
            $('.images-container').animate({
                marginLeft: -sliderContainerWidth * (bulletIndex - 1)
            }, speed);
        }
    }

    function slideRight() {
        var imgContainerLeft = parseInt($('.images-container').css('margin-left'));
        if (flag) {
            if (imgContainerLeft == -sliderContainerWidth * (imgNumber - 1)) {
                index = 1;
                $('.images-container').animate({
                    marginLeft: 0
                }, speed, function() {
                    flag = true;
                })
            } else {
                index++;
                $('.images-container').animate({
                    marginLeft: '-=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                })
            }
            flag = false;
            $(".bullets-container").find(".bullet").removeClass("active").eq(index - 1).addClass("active");
        }
    }

    function slideLeft() {
        var imgContainerLeft = parseInt($('.images-container').css('margin-left'));
        clearInterval(slideRight, 3000);
        if (flag) {
            if (imgContainerLeft == 0 ) {
                index = index + (imgNumber - 1);
                $('.images-container').animate({
                    marginLeft: -sliderContainerWidth * (imgNumber - 1) + 'px'
                }, speed, function() {
                    flag = true;
                })
            } else {
                index--;
                $('.images-container').animate({
                    marginLeft: '+=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                })
            }
            flag = false;
            $(".bullets-container").find(".bullet").removeClass("active").eq(index - 1).addClass("active");
        }

    }
    $("#slider-container .arrow , .bullets-container").hover(function(){
      clearInterval(handle);
    },function(){
      handle = setInterval(slideRight, time) ;
    })
    

};

$( document ).ready(function() {
/* sticky navigation menu checker*/    
//navigationcheck();
    
    
     /* Sticky navigation menu checker */
    function navigationcheck(){
        
         if($(window).width() >= 1000){
             
            if ($(window).scrollTop()){ /*400 default scrollTop:> 150*/
              $('.noti').addClass('stickactive');
                $('.main-navigator-menu').hide();
                
            }
            else{

                 $('.noti').removeClass('stickactive');
                $('.main-navigator-menu').show();
            }
             
         }else{
             
              var main_navigation_menu = $('.main-navigator-menu');
              var Sticky_navigation_menu = $('.noti');
             
               main_navigation_menu.css({
                'display': 'none'
               });
             
              Sticky_navigation_menu.css({
                'display': 'none'
               });
             
         }

       
    }
       setInterval(function(){navigationcheck();},100);
    
    
//    $(function(){
//      $('.owl-carousel').owlCarousel({
//        loop: true,
//        autoWidth: false,
////         items: 4,
//           slideBy: 4,
//        center: true,
//        autoplay: true,
//        autoplayTimeout: 10000
//      })
//    });
    
    
    $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
        autoplay: true,
//        autoplayTimeout: 3000,
        responsiveClass:true,
        margin:10,
    responsive:{
        0:{
            items:1,
            mouseDrag: true,
            touchDrag: true
        },
        320:{
            items:1,
            mouseDrag: true,
            touchDrag: true
        },
        
        480:{
            items:2,
            mouseDrag: true,
            touchDrag: true
        },
        750:{
            items:3,
            mouseDrag: true,
            touchDrag: true
        },
        1000:{
            items:4,
            dots: false,
            nav: false,
            mouseDrag: false,
            touchDrag: false
        }
    }
});
    
});


/* Slick carouserl slider*/
$(document).ready(function() {
  $(".SlickCarousel").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
      infinite: true,
    autoplaySpeed: 6000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 4, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
//    appendArrows: $(".Container .Head .Arrows"), // Class For Arrows Buttons
//    prevArrow: '<span class="Slick-Prev"></span>',
//    nextArrow: '<span class="Slick-Next"></span>',
    easing: "linear",
      arrows: true,
    responsive: [{
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 641,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }, ],
  })
})



 








