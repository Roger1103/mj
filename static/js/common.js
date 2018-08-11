$(function(){
	if ($(window).width()>=992) {
		$(window).scroll(function(event) {
			/* Act on the event */
			if($(window).scrollTop()>0){
				$('.header1').addClass('act');
			}else{
				$('.header1').removeClass('act');
			}
		});
	}else{
		$('.header1').removeClass('act');
	}
	$(".fplogo").slick({
		dots: false,
		arrows:true,
		slidesToShow:1,
		swipe:false,
		accessibility:false,
		autoplay:false,
		vertical: true
	});
	//导航下拉
	$(".header1 nav li").hover(function(){
		$(this).find(".pulldown").stop().slideDown();
	},function(){
        $(this).find(".pulldown").stop().slideUp();
    });
   /* $('.header1 .pdcenter li a').hover(function() {
		$(this).parent().addClass('act');
		$(this).parent().siblings().removeClass('act');
	}, function() {
		$(this).parent().removeClass('act');
		$(this).parent().siblings().eq(0).addClass('act');
	});*/
    $('.header1 .pdcenter .tech').hover(function() {
		$(this).addClass('act');
		$(this).siblings().removeClass('act');
	}, function() {
		$(this).removeClass('act');
		$(this).addClass('act');
	});
	//搜索弹窗
	$(".header1 .search").click(function(){
		$(".searchbox").fadeIn(300);
	});
	$(".searchbox .tansouc").click(function(){
		$(".searchbox").fadeOut(300);
	});
	// 手机版搜索弹窗
	$(".header2 .dsou").click(function(){
		$(".searchbox").fadeIn(300);
	});
	$(".searchbox .tansouc").click(function(){
		$(".searchbox").fadeOut(300);
	});
	// phone菜单下拉
	$("#menuph").click(function(){
		$(this).find(".point").toggleClass("active");
		$(".xialaph").slideToggle();
		/*$(".phonemeng").toggleClass('active');*/
		$("body,html").animate({
			scrollTop:0
		},500);
	});
	// phone二级菜单下拉
	$(".xialaph h4").click(function(){
		$(this).siblings(".ul2").slideToggle();
		$(this).parent().parent().siblings().find(".ul2").slideUp();
		$(this).toggleClass("active");
		$(this).parent().parent().siblings().find("h4,h5").removeClass('active');
	});
	/*三级导航*/
	$(".xialaph h5 img").click(function(){
		$(this).parent().siblings(".ul3").slideToggle();
		$(this).parent().parent().siblings().find(".ul3").slideUp();
		$(this).parent().toggleClass("active");
		$(this).parent().parent().siblings().find("h4,h5").removeClass('active');
	});
	$('.returntop').click(function(){$("html,body").animate({scrollTop:0},1000)});	
	$(".fplogoph").slick({
		dots: false,
		arrows:true,
		slidesToShow:1,
		slidesToScroll: 1,
		autoplay:true
	});
	//内页导航下拉
	$(".bread_con").click(function() {
		$(this).find('.breadlist').slideToggle(300);
		$(this).siblings(".bread_con").find(".breadlist").slideUp(200);
	});
	$('.bread_con:last').find('.breadbtn').find('.sanjiao').css('display','none');
	$('.bread_con:last').find('.breadbtn').append("<img/>");
	$('.bread_con:last').find('.breadbtn').children('img').attr("src","/Public/Cn/images/xsanjiao.png");
	/*返回顶部*/
    $(function(){
        $('.gotop').click(function(){$("html,body").animate({scrollTop:0},1000)});
    })
   /* $(window).on('scroll',function(){
		var heighta = $(window).scrollTop();
		if (heighta>400) {
			$(".fixme").css('display','block');
		}else{
			$(".fixme").css('display','none');
		};
	});*/
	jQuery(".pdcenter").slide({mainCell:".pdslick",autoPlay:false});
	 $('.satis').click(function(event) {
        $('.tanb').fadeIn(300);
        $('.meng2').fadeIn(300);
    });
    $('.tanb .close').click(function(event) {
        $('.tanb').fadeOut(300);
        $('.meng').fadeOut(300);
        $('.meng2').fadeOut(300);
    });
    $('.tanb .anniu button').click(function(event) {
        $('.tanb').fadeOut(300);
        $('.meng').fadeOut(300);
    });
    $('.footer .forig .bw').hover(function() {
		$(this).parents('.erfu').addClass('atv');
	}, function() {
		$(this).parents('.erfu').removeClass('atv');
	});

	
	if ($(window).width()<=768) {
	    $('.footer .forig .bw').hover(function() {
			$(this).parents('.erfu').addClass('atv');
			$('.bgt').css('display','block');
		}, function() {
			$(this).parents('.erfu').removeClass('atv');
			$('.bgt').css('display','none');
		});
	}
	$('.bgt').click(function(){
		/*$('.footer .forig .erfu').removeClass('atv');*/
		$('.erweima').css({
            transform:'translate(-30%,-50%)',
            opacity:'1'
        });
	});



})
function colsemeng(){
	$('.meng').fadeOut(300);
	$('.meng2').fadeOut(300);
}