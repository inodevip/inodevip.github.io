// build time:Mon Oct 08 2018 11:59:33 GMT+0800 (中国标准时间)
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.PhotoSwipeUI_Default=t()}})(this,function(){"use strict";var e=function(e,t){var n=this;var o=false,i=true,r,l,s,a,u,c,f,p=true,d,m,h,w,v,g,b,_,C={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){if(!e.title){t.children[0].innerHTML="";return false}t.children[0].innerHTML=e.title;return true},closeEl:true,captionEl:true,fullscreenEl:true,zoomEl:true,shareEl:true,counterEl:true,arrowEl:true,preloaderEl:true,tapToClose:false,tapToToggleControls:true,clickToCloseNonZoomable:true,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/"+"?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:true}],getImageURLForShare:function(){return e.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return e.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},T,I;var E=function(e){if(T){return true}e=e||window.event;if(_.timeToIdle&&_.mouseUsed&&!m){D()}var n=e.target||e.srcElement,o,i=n.getAttribute("class")||"",r;for(var l=0;l<N.length;l++){o=N[l];if(o.onTap&&i.indexOf("pswp__"+o.name)>-1){o.onTap();r=true}}if(r){if(e.stopPropagation){e.stopPropagation()}T=true;var s=t.features.isOldAndroid?600:30;I=setTimeout(function(){T=false},s)}},F=function(){return!e.likelyTouchDevice||_.mouseUsed||screen.width>_.fitControlsWidth},x=function(e,n,o){t[(o?"add":"remove")+"Class"](e,"pswp__"+n)},S=function(){var e=_.getNumItemsFn()===1;if(e!==b){x(l,"ui--one-slide",e);b=e}},k=function(){x(f,"share-modal--hidden",p)},K=function(){p=!p;if(!p){k();setTimeout(function(){if(!p){t.addClass(f,"pswp__share-modal--fade-in")}},30)}else{t.removeClass(f,"pswp__share-modal--fade-in");setTimeout(function(){if(p){k()}},300)}if(!p){O()}return false},L=function(t){t=t||window.event;var n=t.target||t.srcElement;e.shout("shareLinkClick",t,n);if(!n.href){return false}if(n.hasAttribute("download")){return true}window.open(n.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,"+"location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100));if(!p){K()}return false},O=function(){var e="",t,n,o,i,r;for(var l=0;l<_.shareButtons.length;l++){t=_.shareButtons[l];o=_.getImageURLForShare(t);i=_.getPageURLForShare(t);r=_.getTextForShare(t);n=t.url.replace("{{url}}",encodeURIComponent(i)).replace("{{image_url}}",encodeURIComponent(o)).replace("{{raw_image_url}}",o).replace("{{text}}",encodeURIComponent(r));e+='<a href="'+n+'" target="_blank" '+'class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>";if(_.parseShareButtonOut){e=_.parseShareButtonOut(t,e)}}f.children[0].innerHTML=e;f.children[0].onclick=L},R=function(e){for(var n=0;n<_.closeElClasses.length;n++){if(t.hasClass(e,"pswp__"+_.closeElClasses[n])){return true}}},y,z,M=0,D=function(){clearTimeout(z);M=0;if(m){n.setIdle(false)}},A=function(e){e=e?e:window.event;var t=e.relatedTarget||e.toElement;if(!t||t.nodeName==="HTML"){clearTimeout(z);z=setTimeout(function(){n.setIdle(true)},_.timeToIdleOutside)}},P=function(){if(_.fullscreenEl&&!t.features.isOldAndroid){if(!r){r=n.getFullscreenAPI()}if(r){t.bind(document,r.eventK,n.updateFullscreen);n.updateFullscreen();t.addClass(e.template,"pswp--supports-fs")}else{t.removeClass(e.template,"pswp--supports-fs")}}},U=function(){if(_.preloaderEl){Z(true);h("beforeChange",function(){clearTimeout(g);g=setTimeout(function(){if(e.currItem&&e.currItem.loading){if(!e.allowProgressiveImg()||e.currItem.img&&!e.currItem.img.naturalWidth){Z(false)}}else{Z(true)}},_.loadingIndicatorDelay)});h("imageLoadComplete",function(t,n){if(e.currItem===n){Z(true)}})}},Z=function(e){if(v!==e){x(w,"preloader--active",!e);v=e}},q=function(e){var n=e.vGap;if(F()){var o=_.barsSize;if(_.captionEl&&o.bottom==="auto"){if(!a){a=t.createEl("pswp__caption pswp__caption--fake");a.appendChild(t.createEl("pswp__caption__center"));l.insertBefore(a,s);t.addClass(l,"pswp__ui--fit")}if(_.addCaptionHTMLFn(e,a,true)){var i=a.clientHeight;n.bottom=parseInt(i,10)||44}else{n.bottom=o.top}}else{n.bottom=o.bottom==="auto"?0:o.bottom}n.top=o.top}else{n.top=n.bottom=0}},B=function(){if(_.timeToIdle){h("mouseUsed",function(){t.bind(document,"mousemove",D);t.bind(document,"mouseout",A);y=setInterval(function(){M++;if(M===2){n.setIdle(true)}},_.timeToIdle/2)})}},H=function(){h("onVerticalDrag",function(e){if(i&&e<.95){n.hideControls()}else if(!i&&e>=.95){n.showControls()}});var e;h("onPinchClose",function(t){if(i&&t<.9){n.hideControls();e=true}else if(e&&!i&&t>.9){n.showControls()}});h("zoomGestureEnded",function(){e=false;if(e&&!i){n.showControls()}})};var N=[{name:"caption",option:"captionEl",onInit:function(e){s=e}},{name:"share-modal",option:"shareEl",onInit:function(e){f=e},onTap:function(){K()}},{name:"button--share",option:"shareEl",onInit:function(e){c=e},onTap:function(){K()}},{name:"button--zoom",option:"zoomEl",onTap:e.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){u=e}},{name:"button--close",option:"closeEl",onTap:e.close},{name:"button--arrow--left",option:"arrowEl",onTap:e.prev},{name:"button--arrow--right",option:"arrowEl",onTap:e.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){if(r.isFullscreen()){r.exit()}else{r.enter()}}},{name:"preloader",option:"preloaderEl",onInit:function(e){w=e}}];var W=function(){var e,n,o;var i=function(i){if(!i){return}var r=i.length;for(var l=0;l<r;l++){e=i[l];n=e.className;for(var s=0;s<N.length;s++){o=N[s];if(n.indexOf("pswp__"+o.name)>-1){if(_[o.option]){t.removeClass(e,"pswp__element--disabled");if(o.onInit){o.onInit(e)}}else{t.addClass(e,"pswp__element--disabled")}}}}};i(l.children);var r=t.getChildByClass(l,"pswp__top-bar");if(r){i(r.children)}};n.init=function(){t.extend(e.options,C,true);_=e.options;l=t.getChildByClass(e.scrollWrap,"pswp__ui");h=e.listen;H();h("beforeChange",n.update);h("doubleTap",function(t){var n=e.currItem.initialZoomLevel;if(e.getZoomLevel()!==n){e.zoomTo(n,t,333)}else{e.zoomTo(_.getDoubleTapZoom(false,e.currItem),t,333)}});h("preventDragEvent",function(e,t,n){var o=e.target||e.srcElement;if(o&&o.getAttribute("class")&&e.type.indexOf("mouse")>-1&&(o.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(o.tagName))){n.prevent=false}});h("bindEvents",function(){t.bind(l,"pswpTap click",E);t.bind(e.scrollWrap,"pswpTap",n.onGlobalTap);if(!e.likelyTouchDevice){t.bind(e.scrollWrap,"mouseover",n.onMouseOver)}});h("unbindEvents",function(){if(!p){K()}if(y){clearInterval(y)}t.unbind(document,"mouseout",A);t.unbind(document,"mousemove",D);t.unbind(l,"pswpTap click",E);t.unbind(e.scrollWrap,"pswpTap",n.onGlobalTap);t.unbind(e.scrollWrap,"mouseover",n.onMouseOver);if(r){t.unbind(document,r.eventK,n.updateFullscreen);if(r.isFullscreen()){_.hideAnimationDuration=0;r.exit()}r=null}});h("destroy",function(){if(_.captionEl){if(a){l.removeChild(a)}t.removeClass(s,"pswp__caption--empty")}if(f){f.children[0].onclick=null}t.removeClass(l,"pswp__ui--over-close");t.addClass(l,"pswp__ui--hidden");n.setIdle(false)});if(!_.showAnimationDuration){t.removeClass(l,"pswp__ui--hidden")}h("initialZoomIn",function(){if(_.showAnimationDuration){t.removeClass(l,"pswp__ui--hidden")}});h("initialZoomOut",function(){t.addClass(l,"pswp__ui--hidden")});h("parseVerticalMargin",q);W();if(_.shareEl&&c&&f){p=true}S();B();P();U()};n.setIdle=function(e){m=e;x(l,"ui--idle",e)};n.update=function(){if(i&&e.currItem){n.updateIndexIndicator();if(_.captionEl){_.addCaptionHTMLFn(e.currItem,s);x(s,"caption--empty",!e.currItem.title)}o=true}else{o=false}if(!p){K()}S()};n.updateFullscreen=function(n){if(n){setTimeout(function(){e.setScrollOffset(0,t.getScrollY())},50)}t[(r.isFullscreen()?"add":"remove")+"Class"](e.template,"pswp--fs")};n.updateIndexIndicator=function(){if(_.counterEl){u.innerHTML=e.getCurrentIndex()+1+_.indexIndicatorSep+_.getNumItemsFn()}};n.onGlobalTap=function(o){o=o||window.event;var r=o.target||o.srcElement;if(T){return}if(o.detail&&o.detail.pointerType==="mouse"){if(R(r)){e.close();return}if(t.hasClass(r,"pswp__img")){if(e.getZoomLevel()===1&&e.getZoomLevel()<=e.currItem.fitRatio){if(_.clickToCloseNonZoomable){e.close()}}else{e.toggleDesktopZoom(o.detail.releasePoint)}}}else{if(_.tapToToggleControls){if(i){n.hideControls()}else{n.showControls()}}if(_.tapToClose&&(t.hasClass(r,"pswp__img")||R(r))){e.close();return}}};n.onMouseOver=function(e){e=e||window.event;var t=e.target||e.srcElement;x(l,"ui--over-close",R(t))};n.hideControls=function(){t.addClass(l,"pswp__ui--hidden");i=false};n.showControls=function(){i=true;if(!o){n.update()}t.removeClass(l,"pswp__ui--hidden")};n.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)};n.getFullscreenAPI=function(){var t=document.documentElement,n,o="fullscreenchange";if(t.requestFullscreen){n={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:o}}else if(t.mozRequestFullScreen){n={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+o}}else if(t.webkitRequestFullscreen){n={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+o}}else if(t.msRequestFullscreen){n={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}}if(n){n.enter=function(){d=_.closeOnScroll;_.closeOnScroll=false;if(this.enterK==="webkitRequestFullscreen"){e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)}else{return e.template[this.enterK]()}};n.exit=function(){_.closeOnScroll=d;return document[this.exitK]()};n.isFullscreen=function(){return document[this.elementK]}}return n}};return e});
//rebuild by neat 