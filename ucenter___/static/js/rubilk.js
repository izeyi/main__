$(function(){
	$('.main_sideLf li').on('click',function(){$(this).addClass('cur').siblings().removeClass('cur')})
	// sidebar-menu
	$(".sidebar-dropdown > a").on('click',function () {
        $(".sidebar-submenu").slideUp(250);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
         } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(250);
            $(this).parent().addClass("active");
        }
     });

     $("#toggle-sidebar").on('click',function () {$(".page-wrapper").toggleClass("toggled")});
})