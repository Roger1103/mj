require(["menus","bar","path"],function(menus,bar,path){menus.init();bar.init();var headSearch={bind:function(){if(!$("#hSearch").length){return;}var wrap=$("#hSearch"),text=wrap.find("input.text"),del=wrap.find("a.icon-uniE93E"),button=wrap.find("button"),cache={},url="",obj={"select":[{"name":"库存","id":"1","url":path.url.home+"/search/?s="},{"name":"需求","id":"2","url":path.url.home+"/search/purchase.htm?keyword="},{"name":"工具","id":"3","url":path.url.home+"/search/goods.htm?keyword="}]};if($("body.isPurchase").length){var index="";url=path.url.home+"/search/purchase.htm?keyword=";for(i=0;i<obj.select.length;i++){if(obj.select[i].url==url){index=i;}}var name=obj.select[index].name;var id=obj.select[index].id;var titles=$(".navitems .l").find("li");$(titles[2]).addClass("active");$(".select_name").text(name);$(".select_name").attr("data-id",id);}else{url=path.url.home+"/search/?s=";}$(".select_more a").on("click",function(){var index="";var text=$(this).text();for(i=0;i<obj.select.length;i++){if(obj.select[i].name==text){index=i;}}var name=obj.select[index].name;var id=obj.select[index].id;url=obj.select[index].url;$(".select_name").text(name);$(".select_name").attr("data-id",id);});function search(){num=1;url=obj.select[num-1].url;var conditionVal=$.trim(text.val());var condition=conditionVal.replace(/\//g,"%2F");condition=condition.replace(/\\/g,"%5C");if(null==condition||condition.length<=0){var newUrl=url.replace("/kw/",".htm");window.location.href=path.url.home+"/search/?s=";}else{window.location.href=url+encodeURIComponent(condition)+".htm";}}text.on("keyup",function(){if($.trim($(this).val())!=""){del.show().animate({"opacity":1},200);}else{del.hide();}});del.on("click",function(){text.val("").focus();$(this).animate({"opacity":0},200,function(){$(this).hide();});});button.on("click",function(){search();});text.bind("keydown",function(e){if(e.keyCode=="13"){search();}});}};function AddFavorite(title,url){try{window.external.addFavorite(url,title);}catch(e){try{window.sidebar.addPanel(title,url,"");}catch(e){alert("抱歉，您所使用的浏览器无法完成此操作。\n\n请使用快捷键Ctrl+D进行添加！");}}}function addDnsPrefetchs(){var dnsPrefetchs,dnsArray;if($("#dns-prefetch").length==0){return;}dnsPrefetchs=$("#dns-prefetch").attr("href");dnsArray=dnsPrefetchs.split(",");for(var i=0;i<dnsArray.length;i++){$("#dns-prefetch").after('<link rel="dns-prefetch" href="'+dnsArray[i]+'" />');}$("#dns-prefetch").remove();}$(".select_text").hover(function(){$(".select_more").show();},function(){$(".select_more").hide();});$(".select_more a").on("click",function(){var html=$(this).text();var id=$(this).attr("data-id");$(".select_name").attr("data-id",id);$(".select_name").text(html);$(".select_more").css("display","none");});addDnsPrefetchs();window.AddFavorite=AddFavorite;headSearch.bind();});