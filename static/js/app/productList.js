$(function(){var titles=$(".navitems .l").find("li");$(titles[1]).addClass("active");$(".big_img").on("error",function(){$(this).attr("src",ykyUrl._this+"/images/static/yky300.png");});$("#closeInquiryTip").on("click",function(){localStorage.setItem("firstLogin",true);$(".f_inquiry_tip").addClass("dn");});var firstLogin=localStorage.getItem("firstLogin");if(firstLogin){$(".f_inquiry_tip").addClass("dn");}else{$(".f_inquiry_tip").removeClass("dn");}});var scrollT;var time=0;$(window).scroll(function(){scrollT=showTop();});var heightVal=0;function getTop(){heightVal=$(".s_condition").offset().top;}function showTop(){var scrollTop=$(document).scrollTop();clearTimeout(scrollT);return setTimeout(function(){if(scrollTop<heightVal){$(".float_top").removeClass("float_top_show");$(".search_box .predictive_box").addClass("dsn");}else{$(".float_top").addClass("float_top_show");var isFocus=$("#top_condition").is(":focus");if(isFocus){$(".search_box .predictive_box").removeClass("dsn");}}},100);}getTop();showTop();var quickViewLayer=null;function addGoodsList(id,el){if(id==""){return false;}quickViewLayer=layer.open({fix:true,offset:"60px",type:2,title:"快速加入购物车  ",shade:0.3,shadeClose:true,area:["800px","720px"],content:[ykyUrl._this+"/search/?s="+id,"no"]});if(id){}}function showAddGoodsConfirm(addData,type){layer.confirm("<p>【"+addData.npm+"】已成功加入购物车！ </p>",{offset:"auto",time:3000,area:["450px","auto"],btn:["去购物车结算 ","继续采购 "],title:" ",shade:0,move:false,skin:"up_skin_class",},function(){gotoCart.go();},function(){layer.closeAll();});}$(function(){$(".data_aggregate .hover_style li").hover(function(){var ids=$(this).attr("pid");$(".data_aggregate .hover_style li[pid="+ids+"]").css("background","#f8f8f8");},function(){$(".data_aggregate .hover_style li").css("background","#fff");});$.each($(".stockList .cc"),function(i,e){if($(e).find(".data_num li").length<=4){$(e).children().removeClass("show_data");}});$(".show_data").hover(function(){$(this).parents(".cc").find(".data_aggregate").css("display","block");},function(){$(this).parents(".cc").find(".data_aggregate").css("display","none");});var that=$(".supplier_list");if(that.children().length<=8){that.addClass("supplier_min_height");$(".supplier_open").addClass("dsn");}else{if(that.children().length<=16){that.addClass("supplier_height");$(".supplier_open").addClass("dsn");}else{that.addClass("supplier_height");}}var url=window.location.href;if(url.indexOf("showQty=1")>=0){$("#showHasStoreMain").attr("checked","true");}else{$("#showHasStoreMain").removeAttr("checked");}if(url.indexOf("showQty=1")>=0){$("#showHasStore").attr("checked","true");}else{$("#showHasStore").removeAttr("checked");}$(".supplier_open").on("click",function(){$(this).addClass("dsn");$(".supplier_close").removeClass("dsn");that.removeClass("supplier_height");that.removeClass("supplier_min_height");});$(".supplier_close").on("click",function(){$(this).addClass("dsn");$(".supplier_open").removeClass("dsn");that.addClass("supplier_height");});if($("#show_big_list .goods_brand").length<=16){$("#show_big_list .maker_open").addClass("dsn");$("#show_big_list .brd_list").removeClass("more_list");$("#show_big_list .mk_list").css("width","1090px");}if($("#show_sub_list .small_list_title").length<=14){$("#show_sub_list .maker_open").addClass("dsn");$("#show_sub_list .brd_list").removeClass("more_list");$("#show_sub_list .mk_list").css("width","1090px");}if($("#show_small_list .goods_brand").length<=16){$("#show_small_list .maker_open").addClass("dsn");$("#show_small_list .brd_list").removeClass("more_list");$("#show_small_list .mk_list").css("width","1090px");}if($("#cc_vendor_list .show_more_vendor").length>=14){$("#cc_vendor_list .vendor-tips").removeClass("dsn");}if($("#cc_maker_list .show_more_maker").length<=14){$("#cc_maker_list .maker_open").addClass("dsn");$("#cc_maker_list .brd_list").removeClass("more_list");}if($("#cc_maker_list .show_more_maker").length<=1){$("#cc_maker_list .maker_choice").addClass("dsn");$("#cc_maker_list .brd_list").removeClass("more_list");}var makerBtnChoice=false;if(window.navigator.appVersion.indexOf("MSIE 9.0")!=-1){$("#subCateListCont").css({"width":"1037px"});}if($("#show_sub_list .cc_show_title").length<=14){$("#show_sub_list .maker_open").addClass("dsn");}else{$("#show_sub_list .maker_open").removeClass("dsn");}$("#show_sub_list .sub_class_list").scrollTop(0);function unScroll(){var top=$(".sub_class_list").scrollTop();$(".sub_class_list").on("scroll.unable",function(e){$(".sub_class_list").scrollTop(top);});}function removeUnScroll(){$(".sub_class_list").unbind("scroll.unable");}$(".sub_class_list .cc_show_title").hover(function(){unScroll();},function(){removeUnScroll();});$(".sub_class_list .cc_show_title").on("mouseenter",function(){var scrollTop=$(".sub_class_list").scrollTop();var topValue=$(this).position().top;var leftValue=$(this).position().left;$(this).find(".show_small_list").css({"top":topValue});$(this).find(".fake_small_cate").css({"top":topValue-9,"left":leftValue-10});});$("#show_sub_list .maker_open").on("click",function(){$(this).addClass("dsn");$(this).siblings(".maker_close").removeClass("dsn");$(this).siblings(".mk_list").find(".sub_class_list").addClass("more_list");});$("#show_sub_list .maker_close").on("click",function(){$(this).addClass("dsn");$(this).siblings(".maker_open").removeClass("dsn");$("#show_sub_list .sub_class_list").scrollTop(0);$(this).siblings(".mk_list").find(".sub_class_list").removeClass("more_list");});$("#show_small_list .maker_open").on("click",function(){$(this).addClass("dsn");$(this).siblings(".maker_close").removeClass("dsn");$(this).siblings(".mk_list").find(".brd_list").addClass("more_list");});$("#show_small_list .maker_close").on("click",function(){$(this).addClass("dsn");$(this).siblings(".maker_open").removeClass("dsn");$(this).siblings(".mk_list").find(".brd_list").removeClass("more_list");});$("#cc_vendor_list .vendor_open").on("click",function(){$(this).addClass("dsn");$(this).siblings(".vendor_close").removeClass("dsn");$(this).siblings(".vd_list").find(".brd_list").addClass("more_list");});$("#cc_vendor_list .vendor_close").on("click",function(){$(".brd_list").scrollTop(0);$("#cc_vendor_list .brd_list").css("overflow-y","hidden");$(this).addClass("dsn");$(this).siblings(".vendor_open").removeClass("dsn");$(this).siblings(".vd_list").find(".brd_list").removeClass("more_list");if($("#cc_vendor_list .show_more_vendor").length<=14){$("#cc_vendor_list .vendor_open").addClass("dsn");}else{$("#cc_vendor_list .vendor_open").removeClass("dsn");}});$("#cc_maker_list .maker_open").on("click",function(){if(makerBtnChoice){return;}$("#brand_all").addClass("cc_b_r");$("#brand_all").siblings("a").removeClass("cc_b_r");$(this).addClass("dsn");$(this).siblings(".maker_close").removeClass("dsn");$(this).siblings(".mk_list").find(".brd_list").addClass("more_list");$(this).siblings(".mk_list").find(".show_search_num").removeClass("dsn");manufacturerShowAll();});$("#cc_maker_list .maker_close").on("click",function(){if(makerBtnChoice){return;}removeCheck();manufacturerShowAll();$(".brd_list").scrollTop(0);$("#cc_maker_list .brd_list").css("overflow-y","hidden");$(this).addClass("dsn");$(this).siblings(".maker_open").removeClass("dsn");$(this).siblings(".maker_choice").removeClass("dsn").addClass("flag_cc");$(this).siblings(".mk_list").find(".brd_list").removeClass("more_list");$(this).siblings(".mk_list").find(".choose_more_maker").addClass("dsn");$(this).siblings(".mk_list").find(".show_search_num").addClass("dsn");$(this).siblings(".mk_list").find(".show_maker_btn").addClass("dsn");if($("#cc_maker_list .show_more_maker").length<=14){$("#cc_maker_list .maker_open").addClass("dsn");}else{$("#cc_maker_list .maker_open").removeClass("dsn");}});$(".maker_choice").on("click",function(){if(makerBtnChoice){return;}$("#brand_all").addClass("cc_b_r");$("#brand_all").siblings("a").removeClass("cc_b_r");$(this).addClass("dsn").removeClass("flag_cc");$(this).siblings(".maker_open").addClass("dsn");$(this).siblings(".maker_close").removeClass("dsn");$(this).siblings(".mk_list").find(".brd_list").addClass("more_list");$(this).siblings(".mk_list").find(".choose_more_maker").removeClass("dsn");$(this).siblings(".mk_list").find(".show_search_num").removeClass("dsn");$(this).siblings(".mk_list").find(".show_maker_btn").removeClass("dsn");manufacturerShowAll();});$(".maker_btn_cancel").on("click",function(){if(makerBtnChoice){return;}removeCheck();manufacturerShowAll();$(".brd_list").scrollTop(0);$("#cc_maker_list .brd_list").css("overflow-y","hidden");$(this).parents(".maker_tlt").find(".maker_close").addClass("dsn");$(this).parents(".maker_tlt").find(".maker_choice").removeClass("dsn").addClass("flag_cc");$(this).parents(".mk_list").find(".brd_list").removeClass("more_list");$(this).parents(".mk_list").find(".choose_more_maker").addClass("dsn");$(this).parents(".mk_list").find(".show_search_num").addClass("dsn");$(this).parents(".mk_list").find(".show_maker_btn").addClass("dsn");if($("#cc_maker_list .show_more_maker").length<=14){$("#cc_maker_list .maker_open").addClass("dsn");}else{$("#cc_maker_list .maker_open").removeClass("dsn");}});loadPage(getNewUrl(null,new Array("page")));for(var i=0;i<$(".cc1").length;i++){if($(".cc1").eq(i).find(".s_detailed ul li").length==0){$(".cc1").eq(i).prev().find(".s_down").addClass("dsn");}}$.each($(".supplier_list .supplier_logo"),function(i,e){if($(e).attr("data-val")==getQueryString("vendorId")){$(e).addClass("active");}});function checkMaker(){var len=$("#show_maker").length;var venLen=$("#show_vendor").length;var lenCat=$("#show_small_class").length;if(len){$("#cc_maker_list").addClass("dsn");if(lenCat){$("#clear_br").removeClass("cc_clear");}else{$("#clear_br").addClass("cc_clear");}if(venLen){$("#clear_br").removeClass("cc_clear");}}else{$("#cc_maker_list").removeClass("dsn");}}function checkVendor(){var len=$("#show_vendor").length;var mkLen=$("#show_maker").length;var lenCat=$("#show_small_class").length;if(len){$("#cc_vendor_list").addClass("dsn");$("#clear_mk_br").removeClass("cc_clear");if(lenCat){$("#clear_br").removeClass("cc_clear");}else{$("#clear_br").addClass("cc_clear");}if(mkLen){$("#clear_br").removeClass("cc_clear");}}else{$("#cc_vendor_list").removeClass("dsn");}}function checkShow(){var _this=$(".supplier_search");var big=_this.find("#show_big_list");var sub=_this.find("#show_sub_list");var small=_this.find("#show_small_list");var maker=_this.find("#cc_maker_list").hasClass("dsn");if(big.hasClass("dsn")&&sub.hasClass("dsn")&&small.hasClass("dsn")&&maker){_this.addClass("dsn");}if(big.length==0&&sub.length==0&&small.length==0){$("#clear_br").removeClass("cc_clear");}}function checkClass(){var bigLen=$("#show_big_class").length;var subLen=$("#show_sub_class").length;var smallLen=$("#show_small_class").length;if(subLen>0){if(smallLen>0){$("#show_big_list").addClass("dsn");$("#show_sub_list").addClass("dsn");$("#show_small_list").addClass("dsn");$("#clear_br").removeClass("cc_clear");}else{$("#show_big_list").addClass("dsn");$("#show_sub_list").addClass("dsn");$("#show_small_list").removeClass("dsn");}}else{$("#show_big_list").addClass("dsn");$("#show_sub_list").removeClass("dsn");$("#show_small_list").addClass("dsn");}$("#show_sub_list .sub_class_list").scrollTop(0);$("#show_small_list .brd_list").scrollTop(0);}$(".mk_list .show_more_maker a").on("click",function(){var cc=$("#cc_maker_list").find(".flag_cc").length;if(cc>0){var value=$(this).attr("data-id");selectDataInfo("manufacturer",value);}else{var _this=$(this);if(_this.hasClass("cc_c_r")){_this.removeClass("cc_c_r");}else{_this.addClass("cc_c_r");}var checkNum=$(this).siblings(".choose_more_maker").find("input");checkNum.trigger("click");}});$(".maker_btn_sure").on("click",function(){var arr=[];var str="";var allMaker=$(".mk_list .brd_list input");for(var i=0;i<allMaker.length;i++){var check=$($(".check_select")[i]).prop("checked");if(check){var val=allMaker.eq(i).parents(".show_more_maker").find("a").attr("data-id");arr.push(val);}}if(arr.length>0){str=arr.join(",");selectDataInfo("manufacturer",str);}});$(".go2inquiry .icon-help").on("click",function(){if($(this).find(".tips_content").hasClass("dn")){$(this).find(".tips_content").removeClass("dn");}else{$(this).find(".tips_content").addClass("dn");}});checkClass();checkMaker();checkVendor();checkShow();showChoose();});$(".show_search_num a").hover(function(){$(this).addClass("cc_b_r");$(this).siblings("a").removeClass("cc_b_r");});function removeCheck(){var allMaker=$(".mk_list .brd_list input");for(var i=0;i<allMaker.length;i++){var check=$($(".check_select")[i]).prop("checked");if(check){allMaker.eq(i).trigger("click");}}}function showChoose(){$(".show_more_maker .check_select").on("click",function(){var menInp=$(this).parents(".show_more_maker").find(".goods_brand");if(menInp.hasClass("cc_c_r")){menInp.removeClass("cc_c_r");}else{menInp.addClass("cc_c_r");}});$(".show_more_maker .goods_brand").on("click",function(){if($(this).hasClass("cc_c_r")){$(this).removeClass("cc_c_r");}else{$(this).addClass("cc_c_r");}});}$("#tSearch a").on("click",function(){$("#top_condition").val("").focus();$(this).animate({"opacity":0},200,function(){$(this).hide();});});$("#top_condition").on("keyup",function(e){setTimeout("showPredictive(2)",200);if($.trim($(this).val())!=""){$("#tSearch .del_btn_search").show().animate({"opacity":1},200);}else{$("#tSearch .del_btn_search").hide();}if(e.keyCode=="13"){var keyword=$.trim($("#top_condition").val());var url=ykyUrl._this+"/search/?s=";if(keyword!=null&&keyword!=""){var keywordNew=keyword.replace(/\//g,"%2F");keywordNew=keywordNew.replace(/\\/g,"%5C");url=ykyUrl._this+"/search/?s="+encodeURIComponent(keywordNew);}setKeyWord(keyword);window.location.href=url;}});$("#tSearch button").on("click",function(){var keyword=$.trim($("#top_condition").val());var url=ykyUrl._this+"/search/?s=";if(keyword!=null&&keyword!=""){var keywordNew=keyword.replace(/\//g,"%2F");keywordNew=keywordNew.replace(/\\/g,"%5C");url=ykyUrl._this+"/search/?s="+encodeURIComponent(keywordNew);}setKeyWord(keyword);window.location.href=url;});$("#top_condition").on("focus",function(){showPredictive(2);});$("#top_condition").on("blur",function(){closeKeyWord(2);});function getQueryString(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=window.location.search.substr(1).match(reg);if(r!=null){return decodeURI(r[2]);}else{return"";}}function loadPage(url){var totalRecords=$("#total").val();var size=$("#pageSize").val();var sendUrl="?page=";var t=url.indexOf("?");if(t>=0){sendUrl="&page=";}var totalRecords=totalRecords;var totalPage=Math.ceil(totalRecords/size);if(totalPage>10){totalPage=10;}var pageNo=getParameter("page");if(!pageNo){pageNo=1;}if(totalPage>10){totalPage=10;}kkpager.generPageHtml({pno:pageNo,total:totalPage,totalRecords:totalRecords,hrefFormer:"pager_test",hrefLatter:".html",getLink:function(n){var ss=(parseInt(n));return url+sendUrl+ss;}});}$(".s_img").hover(function(){var src=$(this).find("img.small_img").attr("data-src");$(this).siblings(".b_img").find("img").attr("src",src);$(this).siblings(".b_img").css("display","block");},function(){$(this).siblings(".b_img").css("display","none");});var totalPageNum=$("#totalPageNum").val();function goBack(type,currPage){var delParameters=new Array("page");var curr=parseInt(currPage);if(type=="1"){curr=curr-1;if(curr<1){curr=1;}}else{curr=curr+1;if(curr>parseInt(totalPageNum)){curr=parseInt(totalPageNum);}}var addParameters=new Array({name:"page",value:curr});window.location.href=getNewUrl(addParameters,delParameters);}function changeSize(size){var delParameters=new Array("page","pageSize");var addParameters=new Array({name:"pageSize",value:size});window.location.href=getNewUrl(addParameters,delParameters);}function selectDataInfo(field,fieldValue){if(field!="cat"){fieldValue=encodeURIComponent(fieldValue);}var delParameters=new Array("page","pageSize",field);var addParameters=new Array({name:field,value:fieldValue});window.location.href=getNewUrl(addParameters,delParameters);}function selectIsQtyInfo(id){var delParameters=new Array("page","pageSize","showQty");var addParameters=null;if($("#"+id).is(":checked")){addParameters=new Array({name:"showQty",value:"1"});}window.location.href=getNewUrl(addParameters,delParameters);}function manufacturerToggle(brandIn){var tabListOther=$("div[data-initial]");$.each(tabListOther,function(j,t){$(t).hide();$(t).removeClass("cc_flag");});var tabList=$("div[data-initial='"+brandIn+"']");$.each(tabList,function(j,t){$(t).toggle();$(t).addClass("cc_flag");});$(".brd_list").scrollTop(0);if($(".maker_choice").hasClass("flag_cc")){if($("#cc_maker_list .cc_flag").length<=35){$("#cc_maker_list .more_list").css("overflow-y","hidden");}else{$("#cc_maker_list .more_list").css("overflow-y","auto");}}else{if($("#cc_maker_list .cc_flag").length<=30){$("#cc_maker_list .more_list").css("overflow-y","hidden");}else{$("#cc_maker_list .more_list").css("overflow-y","auto");}}}function manufacturerShowAll(){var tabListOther=$("div[data-initial]");$.each(tabListOther,function(j,t){$(t).show();$(t).addClass("cc_flag");});if($(".maker_choice").hasClass("flag_cc")){if($("#cc_maker_list .cc_flag").length<=35){$("#cc_maker_list .more_list").css("overflow-y","hidden");}else{$("#cc_maker_list .more_list").css("overflow-y","auto");}}else{if($("#cc_maker_list .cc_flag").length<=30){$("#cc_maker_list .more_list").css("overflow-y","hidden");}else{$("#cc_maker_list .more_list").css("overflow-y","auto");}}}function clearField(field){if(field==="vendorId"||field==="manufacturer"){if(!(location.search.indexOf("vendorId")>0)&&!(location.search.indexOf("manufacturer")>0)){if(keyWords==="keyword"){field=keyWords;}}else{if(field==="manufacturer"&&!(location.search.indexOf("manufacturer")>0)){field="keyword";}else{if(field==="vendorId"&&!(location.search.indexOf("vendorId")>0)){field="keyword";}}}}var delParameters=new Array("page","pageSize",field);window.location.href=getNewUrl(null,delParameters);}jQuery.fn.highlight=function(pat){function innerHighlight(node,pat){var skip=0;if(node.nodeType==3){var pos=node.data.toUpperCase().indexOf(pat);if(pos>=0){var spannode=document.createElement("span");spannode.className="highlight";var middlebit=node.splitText(pos);var endbit=middlebit.splitText(pat.length);var middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);skip=1;}}else{if(node.nodeType==1&&node.childNodes&&!/(script|style)/i.test(node.tagName)){for(var i=0;i<node.childNodes.length;++i){i+=innerHighlight(node.childNodes[i],pat);}}}return skip;}return this.each(function(){innerHighlight(this,pat.toUpperCase());});};jQuery.fn.removeHighlight=function(){function newNormalize(node){for(var i=0,children=node.childNodes,nodeCount=children.length;i<nodeCount;i++){var child=children[i];if(child.nodeType==1){newNormalize(child);continue;}if(child.nodeType!=3){continue;}var next=child.nextSibling;if(next==null||next.nodeType!=3){continue;}var combined_text=child.nodeValue+next.nodeValue;new_node=node.ownerDocument.createTextNode(combined_text);node.insertBefore(new_node,child);node.removeChild(child);node.removeChild(next);i--;nodeCount--;}}return this.find("span.highlight").each(function(){var thisParent=this.parentNode;thisParent.replaceChild(this.firstChild,this);newNormalize(thisParent);}).end();};$(function(){var searchTerm="";var keyWord=$("#keyWord").val();if(keyWord){searchTerm=keyWord;}else{var url=window.location.href;var indexS=url.indexOf("kw/");var indexE=url.indexOf(".htm");var urlStr=decodeURIComponent(url.substring(indexS+3,indexE)).replace(/%2F/g,"/");searchTerm=urlStr.replace(/%5C/g,"\\");}$(".show-light").removeHighlight();if(searchTerm.length>=2){$(".show-light").highlight(searchTerm);}});gaObj.gaKeyWord();gaProductshowInit();gaBind();function gaProductshowInit(){var prodList=$(".ga_prod");var prodParList=[];$.each(prodList,function(index,node){var prodInfoString=$(node).data("prodinfo");var prodInfo=prodInfoString;var pageSize=$("#pageSize").val();var currPage=parseInt(getParameter("page")?getParameter("page"):1)-1;var vendorName=$(node).find(".ga_vendor").text()?$(node).find(".ga_vendor").text():"";var prodObj={"id":prodInfo.id,"name":prodInfo.name,"category":prodInfo.category,"brand":prodInfo.brand,"list":"Search Results","position":pageSize&&currPage?currPage*pageSize+index+1:index+1,"dimension1":vendorName};prodParList.push(prodObj);});gaObj.onProductShow(prodParList);}function gaBind(){$(document).on("click",".ga_prod .ga_detail",function(){var $node=$(this);var prodNode=$node.parents(".ga_prod");var prodInfoString=prodNode.data("prodinfo");var prodInfo=eval("("+prodInfoString+")");var pageSize=$("#pageSize").val();var currPage=parseInt(getParameter("page")?getParameter("page"):1)-1;var prod={"id":prodInfo.id,"name":prodInfo.name,"category":prodInfo.category,"brand":prodInfo.brand,"position":pageSize&&currPage?currPage*pageSize+prodNode.index():prodNode.index()};gaObj.onProductDetail(prod);});}function resultListAddToCart(el){var $node=$(el);var prodNode=$node.parents(".ga_prod");var prodInfoString=prodNode.data("prodinfo");var prodInfo=eval("("+prodInfoString+")");var prod={"id":prodInfo.id,"name":prodInfo.name,};gaObj&&gaObj.addlistTocart(prod);}initImg();function initImg(){var imglList=$(".prom_img_shot");$.each(imglList,function(i,n){var url=$(n).data("srcurl");if(url){$(n).attr("src",url);}else{$(n).hide();}});}