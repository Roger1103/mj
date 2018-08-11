function search(){
    var keywordVal=$.trim($("#_condition").val());
    var keyword=keywordVal.replace(/\//g,"%2F");
    keyword=keyword.replace(/\\/g,"%5C");
    if(keyword!=null&&keyword!=""){
        setKeyWord(keywordVal);
        setTimeout(function(){
            window.location.href=ykyUrl._this+"/search/?s="+encodeURIComponent(keyword);
        },100);
    }else{
        $("#_condition").focus();
        $("#_condition").attr("placeholder","请输入型号");
        $("#_condition").css("border-color","#036eb8");}
}
var showMore;
$("#_condition").keyup(function(event){
    showMore=showPredictive(1);
    if(event.keyCode==13){
        var keyword=$.trim($("#_condition").val());
        if(keyword!=null&&keyword!=""){
            search();
        }
    }
    if($("#_condition").val()){
        $(".header_search .head-delete").show().animate({"opacity":1},200);
    }
});
$(function(){
    var isHold;$(".header_search .head-delete").on("click",function(){
        $("#_condition").val("");
        $("#_condition").focus();
        $(this).animate({"opacity":0},200,function(){$(this).hide();});});
    $(".categorys_dropdown .all_Cat").on("mouseenter",function(){
        clearTimeout(isHold);
        if($(".all_class.vh").length){openCat();}}
    ).on("mouseleave",function(){
            isHold=setTimeout(closeCat,100);
        });
    $(".all_class").on("mouseenter",function(){
        clearTimeout(isHold);
    }).on("mouseleave",function(){
        isHold=setTimeout(closeCat,100);
    });var openCat=function(){
        $(".categorys_dropdown").addClass("categorys_active");
        $(".all_class").removeClass("vh");
        $(".all_class #newScroll .cat").eq(0).siblings(".cat").find("a").removeClass("active");
        $(".all_class #newScroll .cat").eq(0).find("a").addClass("active");
        $(".sub_menus_wrap").eq(0).removeClass("vh");
        $(".sub_menus_wrap").eq(0).siblings(".sub_menus_wrap").addClass("vh");
    },
        closeCat=function(){
            $(".categorys_dropdown").removeClass("categorys_active");
            $(".all_class #newScroll .cat").find("a").removeClass("active");$(
                ".all_class #newScroll .mCSB_container"
            ).css("top",0);
            $(".all_class #newScroll").mCustomScrollbar("update");
            $(".sub_menus_wrap").eq(0).find(".sub_menus .mCSB_container").css("top",0);
            $(".all_class .sub_menus_wrap").eq(0).find(".sub_menus").mCustomScrollbar("update");
            $(".sub_menus_wrap").addClass("vh");$(".all_class").addClass("vh");};
    $("#_condition").on("focus",function(){$(this).css("border-color","#036eb8");
        $(this).animate({width:"225px"},500);$(this).siblings(".header_search_limg").animate({left:"245px",opacity:0},500).hide();
        $(this).siblings(".header_search_rimg").animate({right:"15px",opacity:1},500).show();
        $(this).animate({paddingLeft:"20px",},500);showPredictive(1);});
    $("#_condition").on("blur",function(){if(!$("#_condition").val()){$(".header_search .head-delete").animate({"opacity":0},200,function(){$(".header_search .head-delete").hide();});}var value=$(this).val();if(!value&&!$(".header_search").hasClass("active")){$(this).css("border-color","#c3c3c3");$(this).animate({width:"155px"},500);$(this).animate({paddingLeft:"35px",},500);setTimeout(function(){$("#_condition").siblings(".header_search_rimg").animate({right:"200px",opacity:0},300).hide();},200);$(this).siblings(".header_search_limg").animate({left:"15px",opacity:1},500).show();closeKeyWord(1);}if(value&&!$(".header_search").hasClass("active")){setTimeout("closeKeyWord(1)",300);}});if($("#_condition").val()){$(".header_search .head-delete").show().animate({"opacity":1},200);$("#_condition").animate({width:"225px"},500);$("#_condition").animate({paddingLeft:"20px",},500);$("#_condition").css("border-color","#036eb8");$("#_condition").siblings(".header_search_limg").animate({left:"245px",opacity:0},500).hide();$("#_condition").siblings(".header_search_rimg").animate({right:"15px",opacity:1},500).show();}getNotice();});$(".top_img_close").on("click",function(){$(".top_img").addClass("dn");});
function showPredictive(type){clearTimeout(showMore);return setTimeout(function(){var val="";if(type==1){val=$.trim($("#_condition").val());}else{val=$.trim($("#top_condition").val());}if(val!=""){var list="",html="";$.ajax({type:"GET",async:true,url:ykyUrl.product+"/v1/products/keyword/association",data:{"keyword":val},contentType:"application/json",success:function(data){if(data.length>0){var len=data.length<10?data.length:10;for(var i=0;i<len;i++){list+="<li><a href="+ykyUrl._this+"/search/?s="+checkUrlKey(data[i])+">"+data[i]+"</a></li>";}html="<ul class='has_kw'>"+list+"</ul>";if(type==1){$(".header_search .predictive_box .no_kw").remove();$(".header_search .predictive_box .has_kw").remove();$(".header_search .predictive_box").append(html);$(".header_search .predictive_box").removeClass("dsn");}else{$(".search_box .predictive_box .no_kw").remove();$(".search_box .predictive_box .has_kw").remove();$(".search_box .predictive_box").append(html);$(".search_box .predictive_box").removeClass("dsn");}}else{$(".predictive_box").addClass("dsn");}},error:function(e){}});}else{var option=JSON.parse(localStorage.getItem("searchWord"));var list="",html="";if(option&&option.length>0){var len=option.length<10?option.length:10;for(var i=0;i<len;i++){list+="<li><a title="+option[i]+" href=/search/?s="+checkUrlKey(option[i])+">"+option[i]+"</a><i class='predictive-delete'>历史记录</i></li>";}html="<ul class='no_kw'>"+list+"<li class='mb10'><i class='predictive-allDelete'>删除全部</i></li></ul>";if(type==1){$(".header_search .predictive_box .no_kw").remove();$(".header_search .predictive_box .has_kw").remove();$(".header_search .predictive_box").append(html);$(".header_search .predictive_box").removeClass("dsn");}else{$(".search_box .predictive_box .no_kw").remove();$(".search_box .predictive_box .has_kw").remove();$(".search_box .predictive_box").append(html);$(".search_box .predictive_box").removeClass("dsn");}}else{$(".predictive_box").addClass("dsn");}}},200);}function checkUrlKey(key){var keyWord=key.replace(/\//g,"%2F"),keyWord=keyWord.replace(/\\/g,"%5C"),keyWord=encodeURIComponent(keyWord);return keyWord;}function setKeyWord(val){if(val!=""){var option=localStorage.getItem("searchWord")?JSON.parse(localStorage.getItem("searchWord")):[];for(var i=0;i<option.length;i++){if(option[i]==val){option.splice(i,1);}}option.unshift(val);if(option.length>10){option=option.slice(0,10);}localStorage.setItem("searchWord",JSON.stringify(option));}}function closeKeyWord(type){if(type==1){if($(".header_search").hasClass("active")){}else{$(".header_search .predictive_box").addClass("dsn");}}else{if($(".search_box").hasClass("active")){}else{$(".search_box .predictive_box").addClass("dsn");}}}$(".header_search").hover(function(){var flag=$.trim($(this).find("input").val());if(flag==""){$(this).addClass("active");}},function(){$(this).removeClass("active");});$(".search_box").hover(function(){$(this).addClass("active");},function(){$(this).removeClass("active");});$(".predictive_box").on("mouseover","li",function(){$(this).find(".predictive-delete").text("删除");});$(".predictive_box").on("mouseout","li",function(){$(this).find(".predictive-delete").text("历史记录");});$(".predictive_box").on("click",".predictive-delete",function(){var option=JSON.parse(localStorage.getItem("searchWord"));var str=$(this).siblings("a").text();var len=option.length<10?option.length:10;for(var i=0;i<len;i++){if(option[i]==str){option.splice(i,1);}}localStorage.setItem("searchWord",JSON.stringify(option));if($(this).parents(".predictive_box").hasClass("predictive_top")){showPredictive(1);if($("#_condition").length){$("#_condition").focus();}if($("#activeCondition").length){$("#activeCondition").focus();}}else{showPredictive(2);}});$(".predictive_box").on("click",".predictive-allDelete",function(){localStorage.removeItem("searchWord");$(".predictive_box").addClass("dsn");});$(".predictive_box").on("click",".has_kw a",function(){var option=localStorage.getItem("searchWord")?JSON.parse(localStorage.getItem("searchWord")):[];var str=$(this).text();for(var i=0;i<option.length;i++){if(option[i]==str){return;}}option.unshift(str);if(option.length>10){option=option.slice(0,10);}localStorage.setItem("searchWord",JSON.stringify(option));});function getNotice(){$.ajax({type:"GET",async:true,url:ykyUrl.info+"/v1/news?categoryTypeIdStr=NOTICE,MEDIAREPORT&status=PUBLISHED",data:{},contentType:"application/json",success:function(data){var array=data.list;var Arr=[];for(var i=0;i<array.length;i++){if(array[i].isTitleRed==="RED"){Arr.push(array[i]);}}if(Arr.length){var url=ykyUrl._this+"/news/"+Arr[0].newsId+".htm";$(".show_nocition").attr("title",Arr[0].title);$(".top_nocition").text(Arr[0].title);$(".top_nocition").attr("href",url);}},error:function(e){}});}