$(function(){
	$('.main_sideLf li').on('click',function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	})
})