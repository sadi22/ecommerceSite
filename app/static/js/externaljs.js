
$(document).ready(function() {

	$("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        navigationText : [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
        paginationSpeed : 400,
        singleItem:true,
        autoPlay : 5000
   
    });


    $("#owl-demo2").owlCarousel({
      items : 3,
      mouseDrag: true
      //itemsDesktop : [1199,3],
      //itemsDesktopSmall : [979,3]
 
    });


    $(".searchbar-open").click(function(){
          $(".menu").hide();
          //$(".searchbar").css({"display","none"});
          $(".searchbar-container").show();
          
    });


     $(".glyphicon-remove").click(function(){
          $(".menu").show();
          //$(".searchbar").css({"display","none"});
          $(".searchbar-container").hide();
          $(".account-container").hide();
          
    });


     $(".account-open").click(function(){
          $(".menu").hide();
          //$(".searchbar").css({"display","none"});
          $(".account-container").show();
          
     });




    if ($(window).width() < 768) {
        $(".fa-bars").click(function(){
          $(".mobile-menu").toggle();

        });
        $('.catalogue').click(function(){$('.catalog').toggle(1000);});
    }
    else
        $('.catalogue').click(function(){$('.main-menu-dropdown-panel').toggle(1000);});


});

 
