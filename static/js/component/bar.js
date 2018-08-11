define(function(){
    var type=["","onlineSever","openFeedback","go2Top"], eleId="fixBar";
    function bind(){
        $.each(type,
            function(index,t){
                switch(t){
                    case"onlineSever":
                        break;
                    case"openFeedback":
                        break;
                    case"go2Top":
                        bindGoToTop(t);
                        break;
                    default:break;
                }
            }
        );
    }
    function bindGoToTop(a){$("."+a).on("click",
        function(event){
            goToTop();
        });
    }function goToTop(){
        $("body,html").animate({
            scrollTop:0
        },200);
    }
    function showHide(){
        var scrollTop=$(document).scrollTop(),bar=$("#fixBar ul");
        clearTimeout(scroll);
        return setTimeout(function(){
            if(scrollTop<400){
                bar.removeClass("showBar");
            }else{
                bar.addClass("showBar");}
        },100);
    }
    function createBar(data){
        var wechatQrCodeImg=ykyUrl.portal+"/images/qr_code.jpg";
        var defaultCodeImgUrl="";
        var defaultCodeUrl="javascript:void(0);";
        var hasRightBar=false;
        if(data&&data.content){
            var contentObject=JSON.parse(data.content);
            if(contentObject&&contentObject.image){
                defaultCodeImgUrl=contentObject.image;
            }if(contentObject&&contentObject.url&&contentObject.url!=""){
                defaultCodeUrl=contentObject.url;}hasRightBar=true;
        }else{
            if(data=="ajaxError"){hasRightBar=false;
            }
        }
        var el=$("#"+eleId),links={coupon:ykyUrl.portal+"/coupon/receive.htm",url:ykyUrl.customer+"/assetcenter/myCoupon.htm"};
        if(el.length){
            el.remove();
        }
        if(hasRightBar){
            var ele='<div id="fixBar" class="fixbar">'+

                '<ul class="showBar">'+
                '<li><a rel="nofollow" class="onlineSever openFirmQQ bar_btn" href="javascript:;"><i class="icon-qq-sidebar"></i><span>QQ客服<i class="tgl"></i></span></a></li>'+
                '<li class="middleTgl"><div href="javascript:;" class="bar_btn"><i class="icon-codeQR"></i><div id="rNavAdCont" class="qrCode"><i class="imgcode-close"></i><a rel="nofollow" class="r_bar_img" target="_blank" href="'+defaultCodeUrl+'"><img class="imgcode-show" src="'+defaultCodeImgUrl+'"><i class="tgl"></i></a></div></div></li>'+
                '<li><a rel="nofollow" class="openFeedback bar_btn" href="javascript:;" onclick="addFeedback();"><i class="icon-feedback"></i><span>意见反馈<i class="tgl"></i></span></a></li>'+"</ul>"+'<ul class="showBarBtm">'+
                '<li><a rel="nofollow" class="go2Top bar_btn" href="javascript:;"><i class="icon-go2top"></i><span>返回顶部<i class="tgl"></i></span></a></li>'+"</ul>"+"</div>";
        }else{
            var ele='<div id="fixBar" class="fixbar">'+

                '<ul class="showBar">'+
                '<li><a rel="nofollow" class="onlineSever openFirmQQ bar_btn" href="javascript:;"><i class="icon-qq-sidebar"></i><span>QQ客服<i class="tgl"></i></span></a></li>'+
                "</ul>"+
                '<ul class="showBarBtm">'+
                '<li><a rel="nofollow" class="go2Top bar_btn" href="javascript:;"><i class="icon-go2top"></i><span>返回顶部<i class="tgl"></i></span></a></li>'+"</ul>"+"</div>";
        }
        $("body").append(ele);
        if(hasRightBar){
            var targetImg=$(".imgcode-show");
            if(targetImg[0]){
                var sizeArr=getImgNaturalDimensions(targetImg[0],
                    function(imgWidth,imgHeight){
                    if(imgWidth<=116){
                        $("#rNavAdCont").css({"top":-imgHeight/2,});
                }else{
                    $("#rNavAdCont").css({"top":-(116*imgHeight/imgWidth)/2,});
                }if(navigator.appName==="Microsoft Internet Explorer"){
                    if(navigator.userAgent.match(/Trident/i)&&navigator.userAgent.match(/MSIE 8.0/i)){
                        if(imgWidth>116){
                            $("#rNavAdCont .imgcode-show").css({"width":"116px"});
                        }
                    }
                }
                });
                if(sizeArr&&sizeArr.length&&sizeArr[0]&&sizeArr[1]){
                    if(sizeArr[0]<=116){
                        $("#rNavAdCont").css({"top":-sizeArr[1]/2,});
                    }else{
                        $("#rNavAdCont").css({"top":-(116*sizeArr[1]/sizeArr[0])/2,});
                    }
                }
            }
        }
    }
    function getSideBarQRCodeInfo(fn){defaultCodeUrl=ykyUrl.portal+"/images/mobike.png";var params={"categoryTypeId":"advertisement","extend2":"8002","status":"PUT"};
        $.ajax({url:ykyUrl.info+"/v1/recommendations/advertisement/sidebar",type:"PUT",dataType:"json",contentType:"application/json",data:JSON.stringify(params),async:false,success:function(data){
            if(fn){
                fn(data);
            }
        },
            error:function(data){
                var data="ajaxError";
                if(fn){
                    fn(data);
                }
            }
        });
    }
    function getImgNaturalDimensions(img,callback){
        var nWidth,nHeight;
        if(img.naturalWidth){
            nWidth=img.naturalWidth;
            nHeight=img.naturalHeight;
        }else{
            var image=new Image();
            image.src=img.src;
            image.onload=function(){
                callback(image.width,image.height);
            };
        }
        return[nWidth,nHeight];
    }
    function init(){
        var scroll;
        getSideBarQRCodeInfo(function(data){
            createBar(data);
        });
        $("#fixBar li").on("mouseenter",function(event){
            if($(this).hasClass("coupon_icon")){
                return;
            }
            $(this).addClass("b_current");
            if($(this).hasClass("middleTgl")){
                $(this).find(".qrCode").removeClass("dn");
            }
        }).on("mouseleave",
            function(event){
                if($(this).hasClass("coupon_icon")){
                    return;
                }$(this).removeClass("b_current");
            });
        $("#couponState").on("click",function(){
            if(!$(this).parent().hasClass("coupon_icon")){
                return;
            }
            $(this).parent().removeClass("coupon_icon");
            $(this).parent().removeClass("b_current");
        });
        $(".middleTgl .imgcode-close").on("click",
            function(){
                $(".middleTgl .qrCode").addClass("dn");
            });
        bind();
    }
    return{
        init:init
    };
});