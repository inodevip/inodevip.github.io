// build time:Mon Oct 08 2018 11:43:41 GMT+0800 (中国标准时间)
var Home=location.href,Pages=4,xhr,xhrUrl="";var Diaspora={L:function(e,t,a){if(e==xhrUrl){return false}xhrUrl=e;if(xhr){xhr.abort()}xhr=$.ajax({type:"GET",url:e,timeout:1e4,success:function(e){t(e);xhrUrl=""},error:function(t,i,o){if(i=="abort"){a&&a()}else{window.location.href=e}xhrUrl=""}})},P:function(){return!!("ontouchstart"in window)},PS:function(){if(!(window.history&&history.pushState)){return}history.replaceState({u:Home,t:document.title},document.title,Home);window.addEventListener("popstate",function(e){var t=e.state;if(!t)return;document.title=t.t;if(t.u==Home){$("#preview").css("position","fixed");setTimeout(function(){$("#preview").removeClass("show");$("#container").show();window.scrollTo(0,parseInt($("#container").data("scroll")));setTimeout(function(){$("#preview").html("");$(window).trigger("resize")},300)},0)}else{Diaspora.loading();Diaspora.L(t.u,function(e){document.title=t.t;$("#preview").html($(e).filter("#single"));Diaspora.preview();setTimeout(function(){Diaspora.player()},0)})}})},HS:function(e,t){var a=e.data("id")||0,i=e.attr("href"),o=e.attr("title")||e.text();if(!$("#preview").length||!(window.history&&history.pushState))location.href=i;Diaspora.loading();var r={d:a,t:o,u:i};Diaspora.L(i,function(e){if(!$(e).filter("#single").length){location.href=i;return}switch(t){case"push":history.pushState(r,o,i);break;case"replace":history.replaceState(r,o,i);break}document.title=o;$("#preview").html($(e).filter("#single"));switch(t){case"push":Diaspora.preview();break;case"replace":window.scrollTo(0,0);Diaspora.loaded();break}setTimeout(function(){Diaspora.player();$("#top").show();comment=$("#gitalk-container");if(comment.data("ae")==true){comment.click()}},0)})},preview:function(){$("#preview").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){var e=$("#preview").hasClass("show");if(!!e){$("#container").hide()}else{$("#container").show()}Diaspora.loaded()});setTimeout(function(){$("#preview").addClass("show");$("#container").data("scroll",window.scrollY);setTimeout(function(){$("#preview").css({position:"static","overflow-y":"auto"})},500)},0)},player:function(){var e=$("#audio");if(!e.length){$(".icon-play").css({color:"#dedede",cursor:"not-allowed"});return}var t=$("#audio source").eq(0).attr("src");if(t==""&&e[0].src==""){audiolist=$("#audio-list li");mp3=audiolist.eq([Math.floor(Math.random()*audiolist.size())]);e[0].src=mp3.data("url")}if(e.eq(0).data("autoplay")==true){e[0].play()}e.on({timeupdate:function(){var t=e[0].currentTime/e[0].duration*100;$(".bar").css("width",t+"%");if(t/5<=1){e[0].volume=t/5}else{e[0].volume=1}},ended:function(){$(".icon-pause").removeClass("icon-pause").addClass("icon-play")},playing:function(){$(".icon-play").removeClass("icon-play").addClass("icon-pause")}})},loading:function(){var e=window.innerWidth;var t='<style class="loaderstyle" id="loaderstyle'+e+'">'+"@-moz-keyframes loader"+e+"{100%{background-position:"+e+"px 0}}"+"@-webkit-keyframes loader"+e+"{100%{background-position:"+e+"px 0}}"+".loader"+e+"{-webkit-animation:loader"+e+" 3s linear infinite;-moz-animation:loader"+e+" 3s linear infinite;}"+"</style>";$(".loaderstyle").remove();$("head").append(t);$("#loader").removeClass().addClass("loader"+e).show()},loaded:function(){$("#loader").removeClass().hide()},F:function(e,t,a){var i=$(e).parent().height(),o=$(e).parent().width(),r=a/t;if(i/o>r){e.style.height=i+"px";e.style.width=i/r+"px"}else{e.style.width=o+"px";e.style.height=o*r+"px"}e.style.left=(o-parseInt(e.style.width))/2+"px";e.style.top=(i-parseInt(e.style.height))/2+"px"}};$(function(){if(Diaspora.P()){$("body").addClass("touch")}if($("#preview").length){var e={};e.t=$("#cover");e.w=e.t.attr("width");e.h=e.t.attr("height");(e.o=function(){$("#mark").height(window.innerHeight)})();if(e.t.prop("complete")){setTimeout(function(){e.t.load()},0)}e.t.on("load",function(){(e.f=function(){var t=$("#mark").width(),a=$("#mark").height(),i,o,r,n;n=t>=1e3||a>=1e3?1e3:500;if(t>=a){r=t/n*50;o=r;i=r*t/a}else{r=a/n*50;i=r;o=r*a/t}$(".layer").css({width:t+i,height:a+o,marginLeft:-.5*i,marginTop:-.5*o});if(!e.w){e.w=e.t.width();e.h=e.t.height()}Diaspora.F($("#cover")[0],e.w,e.h)})();setTimeout(function(){$("html, body").removeClass("loading")},1e3);$("#mark").parallax();var t=new Vibrant(e.t[0]);var a=t.swatches();if(a["DarkVibrant"]){$("#vibrant polygon").css("fill",a["DarkVibrant"].getHex());$("#vibrant div").css("background-color",a["DarkVibrant"].getHex())}if(a["Vibrant"]){$(".icon-menu").css("color",a["Vibrant"].getHex())}});if(!e.t.attr("src")){alert("Please set the post thumbnail")}$("#preview").css("min-height",window.innerHeight);Diaspora.PS();$(".pview a").addClass("pviewa");var t;$(window).on("resize",function(){clearTimeout(t);t=setTimeout(function(){if(!Diaspora.P()&&location.href==Home){e.o();e.f()}if($("#loader").attr("class")){Diaspora.loading()}},500)})}else{$("#single").css("min-height",window.innerHeight);setTimeout(function(){$("html, body").removeClass("loading")},1e3);window.addEventListener("popstate",function(e){if(e.state)location.href=e.state.u});Diaspora.player();$(".icon-icon, .image-icon").attr("href","/");$("#top").show()}$(window).on("scroll",function(){if($(".scrollbar").length&&!Diaspora.P()&&!$(".icon-images").hasClass("active")){var e=$(window).scrollTop(),t=$("#top").width(),a=document.body.scrollHeight,i=$(window).height();var o=t/(a-i)*e;$(".scrollbar").width(o);if(e>80&&window.innerWidth>800){$(".subtitle").fadeIn()}else{$(".subtitle").fadeOut()}}});$(window).on("touchmove",function(e){if($("body").hasClass("mu")){e.preventDefault()}});$("body").on("click",function(e){var t=$(e.target).attr("class")||"",a=$(e.target).attr("rel")||"";if(e.target.nodeName=="IMG"&&$(e.target).parent().get(0).nodeName=="P"){t="pimg"}if(!t&&!a)return;switch(true){case t.indexOf("switchmenu")!=-1:window.scrollTo(0,0);$("html, body").toggleClass("mu");break;case t.indexOf("more")!=-1:t=$(".more");if(t.data("status")=="loading"){return false}var i=parseInt(t.data("page"))||1;if(i==1){t.data("page",1)}if(i>=Pages){return}t.html("加载中...").data("status","loading");Diaspora.loading();Diaspora.L(t.attr("href"),function(e){var a=$(e).find(".more").attr("href");if(a!=undefined){t.attr("href",a).html("加载更多").data("status","loaded");t.data("page",parseInt(t.data("page"))+1)}else{$("#pager").remove()}var i=$(window).scrollTop();$("#primary").append($(e).find(".post"));$(window).scrollTop(i+100);Diaspora.loaded();$("html,body").animate({scrollTop:i+400},500)},function(){t.html("加载更多").data("status","loaded")});return false;break;case t.indexOf("icon-home")!=-1:$(".toc").fadeOut(100);if($("#preview").hasClass("show")){history.back()}else{location.href="/"}break;case t.indexOf("icon-scan")!=-1:if($(".icon-scan").hasClass("tg")){$("#qr").toggle()}else{$(".icon-scan").addClass("tg");$("#qr").qrcode({width:128,height:128,text:location.href}).toggle()}break;case t.indexOf("icon-play")!=-1:$("#audio")[0].play();$(".icon-play").removeClass("icon-play").addClass("icon-pause");break;case t.indexOf("icon-pause")!=-1:$("#audio")[0].pause();$(".icon-pause").removeClass("icon-pause").addClass("icon-play");break;case t.indexOf("cover")!=-1:Diaspora.HS($(e.target).parent(),"push");return false;break;case t.indexOf("posttitle")!=-1:Diaspora.HS($(e.target),"push");return false;break;case a=="prev"||a=="next":if(a=="prev"){var o=$("#prev_next a")[0].text}else{var o=$("#prev_next a")[1].text}$(e.target).attr("title",o);Diaspora.HS($(e.target),"replace");return false;break;case t.indexOf("toc-text")!=-1||t.indexOf("toc-link")!=-1||t.indexOf("toc-number")!=-1:hash="";if(e.target.nodeName=="SPAN"){hash=$(e.target).parent().attr("href")}else{hash=$(e.target).attr("href")}to=$("a.headerlink[href='"+hash+"']");$("html,body").animate({scrollTop:to.offset().top-50},300);return false;break;case t.indexOf("pviewa")!=-1:$("body").removeClass("mu");setTimeout(function(){Diaspora.HS($(e.target),"push");$(".toc").fadeIn(1e3)},300);return false;break;case t.indexOf("pimg")!=-1:var r=$(".pswp").get(0);if(r){var n=[];var s=0;var l=[];$(".content img").each(function(t,a){if(e.target.src==a.src){s=t}var i={src:a.src,w:a.naturalWidth,h:a.naturalHeight};l.push(a);n.push(i)});var c={index:s,shareEl:false,zoomEl:false,allowRotationOnUserZoom:true,history:false,getThumbBoundsFn:function(e){var t=l[e],a=window.pageYOffset||document.documentElement.scrollTop,i=t.getBoundingClientRect();return{x:i.left,y:i.top+a,w:i.width}}};var d=new PhotoSwipe(r,PhotoSwipeUI_Default,n,c);d.init()}return false;break;case-1!=t.indexOf("comment"):Diaspora.loading(),comment=$("#gitalk-container");gitalk=new Gitalk({clientID:comment.data("ci"),clientSecret:comment.data("cs"),repo:comment.data("r"),owner:comment.data("o"),admin:comment.data("a"),id:location.pathname,distractionFreeMode:comment.data("d")});$(".comment").removeClass("link");gitalk.render("gitalk-container");Diaspora.loaded();return false;break;default:return true;break}});comment=$("#gitalk-container");if(comment.data("ae")==true){comment.click()}});
//rebuild by neat 