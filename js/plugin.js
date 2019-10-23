// build time:Wed Oct 23 2019 17:11:33 GMT+0800 (GMT+08:00)
(function(t,i,e,r){var o="parallax";var n=30;var s={relativeInput:false,clipRelativeInput:false,calibrationThreshold:100,calibrationDelay:500,supportDelay:1e3,calibrateX:false,calibrateY:true,invertX:true,invertY:true,limitX:false,limitY:false,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5};function a(i,e){this.element=i;this.$context=t(i).data("api",this);this.$layers=this.$context.find(".layer");var r={calibrateX:this.$context.data("calibrate-x")||null,calibrateY:this.$context.data("calibrate-y")||null,invertX:this.$context.data("invert-x")||null,invertY:this.$context.data("invert-y")||null,limitX:parseFloat(this.$context.data("limit-x"))||null,limitY:parseFloat(this.$context.data("limit-y"))||null,scalarX:parseFloat(this.$context.data("scalar-x"))||null,scalarY:parseFloat(this.$context.data("scalar-y"))||null,frictionX:parseFloat(this.$context.data("friction-x"))||null,frictionY:parseFloat(this.$context.data("friction-y"))||null,originX:parseFloat(this.$context.data("origin-x"))||null,originY:parseFloat(this.$context.data("origin-y"))||null};for(var o in r){if(r[o]===null){delete r[o]}}t.extend(this,s,e,r);this.calibrationTimer=null;this.calibrationFlag=true;this.enabled=false;this.depths=[];this.raf=null;this.bounds=null;this.ex=0;this.ey=0;this.ew=0;this.eh=0;this.ecx=0;this.ecy=0;this.erx=0;this.ery=0;this.cx=0;this.cy=0;this.ix=0;this.iy=0;this.mx=0;this.my=0;this.vx=0;this.vy=0;this.onMouseMove=this.onMouseMove.bind(this);this.onDeviceOrientation=this.onDeviceOrientation.bind(this);this.onOrientationTimer=this.onOrientationTimer.bind(this);this.onCalibrationTimer=this.onCalibrationTimer.bind(this);this.onAnimationFrame=this.onAnimationFrame.bind(this);this.onWindowResize=this.onWindowResize.bind(this);this.initialise()}a.prototype.transformSupport=function(t){var o=e.createElement("div");var n=false;var s=null;var a=false;var h=null;var u=null;for(var l=0,c=this.vendors.length;l<c;l++){if(this.vendors[l]!==null){h=this.vendors[l][0]+"transform";u=this.vendors[l][1]+"Transform"}else{h="transform";u="transform"}if(o.style[u]!==r){n=true;break}}switch(t){case"2D":a=n;break;case"3D":if(n){var f=e.body||e.createElement("body");var p=e.documentElement;var d=p.style.overflow;var g=false;if(!e.body){g=true;p.style.overflow="hidden";p.appendChild(f);f.style.overflow="hidden";f.style.background=""}f.appendChild(o);o.style[u]="translate3d(1px,1px,1px)";s=i.getComputedStyle(o).getPropertyValue(h);a=s!==r&&s.length>0&&s!=="none";p.style.overflow=d;f.removeChild(o);if(g){f.removeAttribute("style");f.parentNode.removeChild(f)}}break}return a};a.prototype.ww=null;a.prototype.wh=null;a.prototype.wcx=null;a.prototype.wcy=null;a.prototype.wrx=null;a.prototype.wry=null;a.prototype.portrait=null;a.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);a.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]];a.prototype.motionSupport=!!i.DeviceMotionEvent;a.prototype.orientationSupport=!!i.DeviceOrientationEvent;a.prototype.orientationStatus=0;a.prototype.transform2DSupport=a.prototype.transformSupport("2D");a.prototype.transform3DSupport=a.prototype.transformSupport("3D");a.prototype.propertyCache={};a.prototype.initialise=function(){if(this.$context.css("position")==="static"){this.$context.css({position:"relative"})}this.accelerate(this.$context);this.updateLayers();this.updateDimensions();this.enable();this.queueCalibration(this.calibrationDelay)};a.prototype.updateLayers=function(){this.$layers=this.$context.find(".layer");this.depths=[];this.$layers.css({position:"absolute",display:"block",left:0,top:0});this.$layers.first().css({position:"relative"});this.accelerate(this.$layers);this.$layers.each(t.proxy(function(i,e){this.depths.push(t(e).data("depth")||0)},this))};a.prototype.updateDimensions=function(){this.ww=i.innerWidth;this.wh=i.innerHeight;this.wcx=this.ww*this.originX;this.wcy=this.wh*this.originY;this.wrx=Math.max(this.wcx,this.ww-this.wcx);this.wry=Math.max(this.wcy,this.wh-this.wcy)};a.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect();this.ex=this.bounds.left;this.ey=this.bounds.top;this.ew=this.bounds.width;this.eh=this.bounds.height;this.ecx=this.ew*this.originX;this.ecy=this.eh*this.originY;this.erx=Math.max(this.ecx,this.ew-this.ecx);this.ery=Math.max(this.ecy,this.eh-this.ecy)};a.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer);this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)};a.prototype.enable=function(){if(!this.enabled){this.enabled=true;if(this.orientationSupport){this.portrait=null;i.addEventListener("deviceorientation",this.onDeviceOrientation);setTimeout(this.onOrientationTimer,this.supportDelay)}else{this.cx=0;this.cy=0;this.portrait=false;i.addEventListener("mousemove",this.onMouseMove)}i.addEventListener("resize",this.onWindowResize);this.raf=requestAnimationFrame(this.onAnimationFrame)}};a.prototype.disable=function(){if(this.enabled){this.enabled=false;if(this.orientationSupport){i.removeEventListener("deviceorientation",this.onDeviceOrientation)}else{i.removeEventListener("mousemove",this.onMouseMove)}i.removeEventListener("resize",this.onWindowResize);cancelAnimationFrame(this.raf)}};a.prototype.calibrate=function(t,i){this.calibrateX=t===r?this.calibrateX:t;this.calibrateY=i===r?this.calibrateY:i};a.prototype.invert=function(t,i){this.invertX=t===r?this.invertX:t;this.invertY=i===r?this.invertY:i};a.prototype.friction=function(t,i){this.frictionX=t===r?this.frictionX:t;this.frictionY=i===r?this.frictionY:i};a.prototype.scalar=function(t,i){this.scalarX=t===r?this.scalarX:t;this.scalarY=i===r?this.scalarY:i};a.prototype.limit=function(t,i){this.limitX=t===r?this.limitX:t;this.limitY=i===r?this.limitY:i};a.prototype.origin=function(t,i){this.originX=t===r?this.originX:t;this.originY=i===r?this.originY:i};a.prototype.clamp=function(t,i,e){t=Math.max(t,i);t=Math.min(t,e);return t};a.prototype.css=function(i,e,o){var n=this.propertyCache[e];if(!n){for(var s=0,a=this.vendors.length;s<a;s++){if(this.vendors[s]!==null){n=t.camelCase(this.vendors[s][1]+"-"+e)}else{n=e}if(i.style[n]!==r){this.propertyCache[e]=n;break}}}i.style[n]=o};a.prototype.accelerate=function(t){for(var i=0,e=t.length;i<e;i++){var r=t[i];this.css(r,"transform","translate3d(0,0,0)");this.css(r,"transform-style","preserve-3d");this.css(r,"backface-visibility","hidden")}};a.prototype.setPosition=function(t,i,e){i+="px";e+="px";if(this.transform3DSupport){this.css(t,"transform","translate3d("+i+","+e+",0)")}else{if(this.transform2DSupport){this.css(t,"transform","translate("+i+","+e+")")}else{t.style.left=i;t.style.top=e}}};a.prototype.onOrientationTimer=function(t){if(this.orientationSupport&&this.orientationStatus===0){this.disable();this.orientationSupport=false;this.enable()}};a.prototype.onCalibrationTimer=function(t){this.calibrationFlag=true};a.prototype.onWindowResize=function(t){this.updateDimensions()};a.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx;var i=this.iy-this.cy;if(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold){this.queueCalibration(0)}if(this.portrait){this.mx=this.calibrateX?i:this.iy;this.my=this.calibrateY?t:this.ix}else{this.mx=this.calibrateX?t:this.ix;this.my=this.calibrateY?i:this.iy}this.mx*=this.ew*(this.scalarX/100);this.my*=this.eh*(this.scalarY/100);if(!isNaN(parseFloat(this.limitX))){this.mx=this.clamp(this.mx,-this.limitX,this.limitX)}if(!isNaN(parseFloat(this.limitY))){this.my=this.clamp(this.my,-this.limitY,this.limitY)}this.vx+=(this.mx-this.vx)*this.frictionX;this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,r=this.$layers.length;e<r;e++){var o=this.depths[e];var n=this.$layers[e];var s=this.vx*o*(this.invertX?-1:1);var a=this.vy*o*(this.invertY?-1:1);this.setPosition(n,s,a)}this.raf=requestAnimationFrame(this.onAnimationFrame)};a.prototype.onDeviceOrientation=function(t){if(!this.desktop&&t.beta!==null&&t.gamma!==null){this.orientationStatus=1;var e=(t.beta||0)/n;var r=(t.gamma||0)/n;var o=i.innerHeight>i.innerWidth;if(this.portrait!==o){this.portrait=o;this.calibrationFlag=true}if(this.calibrationFlag){this.calibrationFlag=false;this.cx=e;this.cy=r}this.ix=e;this.iy=r}};a.prototype.onMouseMove=function(t){var i=t.clientX;var e=t.clientY;if(!this.orientationSupport&&this.relativeInput){if(this.clipRelativeInput){i=Math.max(i,this.ex);i=Math.min(i,this.ex+this.ew);e=Math.max(e,this.ey);e=Math.min(e,this.ey+this.eh)}this.ix=(i-this.ex-this.ecx)/this.erx;this.iy=(e-this.ey-this.ecy)/this.ery}else{this.ix=(i-this.wcx)/this.wrx;this.iy=(e-this.wcy)/this.wry}};var h={enable:a.prototype.enable,disable:a.prototype.disable,updateLayers:a.prototype.updateLayers,calibrate:a.prototype.calibrate,friction:a.prototype.friction,invert:a.prototype.invert,scalar:a.prototype.scalar,limit:a.prototype.limit,origin:a.prototype.origin};t.fn[o]=function(i){var e=arguments;return this.each(function(){var r=t(this);var n=r.data(o);if(!n){n=new a(this,i);r.data(o,n)}if(h[i]){n[i].apply(n,Array.prototype.slice.call(e,1))}})}})(window.jQuery||window.Zepto,window,document);(function(){var t=0;var i=["ms","moz","webkit","o"];for(var e=0;e<i.length&&!window.requestAnimationFrame;++e){window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(i,e){var r=(new Date).getTime();var o=Math.max(0,16-(r-t));var n=window.setTimeout(function(){i(r+o)},o);t=r+o;return n}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(t){clearTimeout(t)}}})();(function(t){t.fn.qrcode=function(i){var e;function r(t){this.mode=e;this.data=t}function o(t,i){this.typeNumber=t;this.errorCorrectLevel=i;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function n(t,i){if(void 0==t.length)throw Error(t.length+"/"+i);for(var e=0;e<t.length&&0==t[e];)e++;this.num=Array(t.length-e+i);for(var r=0;r<t.length-e;r++)this.num[r]=t[r+e]}function s(t,i){this.totalCount=t;this.dataCount=i}function a(){this.buffer=[];this.length=0}r.prototype={getLength:function(){return this.data.length},write:function(t){for(var i=0;i<this.data.length;i++)t.put(this.data.charCodeAt(i),8)}};o.prototype={addData:function(t){this.dataList.push(new r(t));this.dataCache=null},isDark:function(t,i){if(0>t||this.moduleCount<=t||0>i||this.moduleCount<=i)throw Error(t+","+i);return this.modules[t][i]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var t=1,t=1;40>t;t++){for(var i=s.getRSBlocks(t,this.errorCorrectLevel),e=new a,r=0,o=0;o<i.length;o++)r+=i[o].dataCount;for(o=0;o<this.dataList.length;o++)i=this.dataList[o],e.put(i.mode,4),e.put(i.getLength(),h.getLengthInBits(i.mode,t)),i.write(e);if(e.getLengthInBits()<=8*r)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,i){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++){this.modules[e]=Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[e][r]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(t,i);7<=this.typeNumber&&this.setupTypeNumber(t);null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,i)},setupPositionProbePattern:function(t,i){for(var e=-1;7>=e;e++)if(!(-1>=t+e||this.moduleCount<=t+e))for(var r=-1;7>=r;r++)-1>=i+r||this.moduleCount<=i+r||(this.modules[t+e][i+r]=0<=e&&6>=e&&(0==r||6==r)||0<=r&&6>=r&&(0==e||6==e)||2<=e&&4>=e&&2<=r&&4>=r?!0:!1)},getBestMaskPattern:function(){for(var t=0,i=0,e=0;8>e;e++){this.makeImpl(!0,e);var r=h.getLostPoint(this);if(0==e||t>r)t=r,i=e}return i},createMovieClip:function(t,i,e){t=t.createEmptyMovieClip(i,e);this.make();for(i=0;i<this.modules.length;i++)for(var e=1*i,r=0;r<this.modules[i].length;r++){var o=1*r;this.modules[i][r]&&(t.beginFill(0,100),t.moveTo(o,e),t.lineTo(o+1,e),t.lineTo(o+1,e+1),t.lineTo(o,e+1),t.endFill())}return t},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=0==t%2);for(t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=0==t%2)},setupPositionAdjustPattern:function(){for(var t=h.getPatternPosition(this.typeNumber),i=0;i<t.length;i++)for(var e=0;e<t.length;e++){var r=t[i],o=t[e];if(null==this.modules[r][o])for(var n=-2;2>=n;n++)for(var s=-2;2>=s;s++)this.modules[r+n][o+s]=-2==n||2==n||-2==s||2==s||0==n&&0==s?!0:!1}},setupTypeNumber:function(t){for(var i=h.getBCHTypeNumber(this.typeNumber),e=0;18>e;e++){var r=!t&&1==(i>>e&1);this.modules[Math.floor(e/3)][e%3+this.moduleCount-8-3]=r}for(e=0;18>e;e++)r=!t&&1==(i>>e&1),this.modules[e%3+this.moduleCount-8-3][Math.floor(e/3)]=r},setupTypeInfo:function(t,i){for(var e=h.getBCHTypeInfo(this.errorCorrectLevel<<3|i),r=0;15>r;r++){var o=!t&&1==(e>>r&1);6>r?this.modules[r][8]=o:8>r?this.modules[r+1][8]=o:this.modules[this.moduleCount-15+r][8]=o}for(r=0;15>r;r++)o=!t&&1==(e>>r&1),8>r?this.modules[8][this.moduleCount-r-1]=o:9>r?this.modules[8][15-r-1+1]=o:this.modules[8][15-r-1]=o;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,i){for(var e=-1,r=this.moduleCount-1,o=7,n=0,s=this.moduleCount-1;0<s;s-=2)for(6==s&&s--;;){for(var a=0;2>a;a++)if(null==this.modules[r][s-a]){var u=!1;n<t.length&&(u=1==(t[n]>>>o&1));h.getMask(i,r,s-a)&&(u=!u);this.modules[r][s-a]=u;o--;-1==o&&(n++,o=7)}r+=e;if(0>r||this.moduleCount<=r){r-=e;e=-e;break}}}};o.PAD0=236;o.PAD1=17;o.createData=function(t,i,e){for(var i=s.getRSBlocks(t,i),r=new a,n=0;n<e.length;n++){var u=e[n];r.put(u.mode,4);r.put(u.getLength(),h.getLengthInBits(u.mode,t));u.write(r)}for(n=t=0;n<i.length;n++)t+=i[n].dataCount;if(r.getLengthInBits()>8*t)throw Error("code length overflow. ("+r.getLengthInBits()+">"+8*t+")");for(r.getLengthInBits()+4<=8*t&&r.put(0,4);0!=r.getLengthInBits()%8;)r.putBit(!1);for(;!(r.getLengthInBits()>=8*t);){r.put(o.PAD0,8);if(r.getLengthInBits()>=8*t)break;r.put(o.PAD1,8)}return o.createBytes(r,i)};o.createBytes=function(t,i){for(var e=0,r=0,o=0,s=Array(i.length),a=Array(i.length),u=0;u<i.length;u++){var l=i[u].dataCount,c=i[u].totalCount-l,r=Math.max(r,l),o=Math.max(o,c);s[u]=Array(l);for(var f=0;f<s[u].length;f++)s[u][f]=255&t.buffer[f+e];e+=l;f=h.getErrorCorrectPolynomial(c);l=new n(s[u],f.getLength()-1).mod(f);a[u]=Array(f.getLength()-1);for(f=0;f<a[u].length;f++)c=f+l.getLength()-a[u].length,a[u][f]=0<=c?l.get(c):0}for(f=u=0;f<i.length;f++)u+=i[f].totalCount;e=Array(u);for(f=l=0;f<r;f++)for(u=0;u<i.length;u++)f<s[u].length&&(e[l++]=s[u][f]);for(f=0;f<o;f++)for(u=0;u<i.length;u++)f<a[u].length&&(e[l++]=a[u][f]);return e};e=4;for(var h={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var i=t<<10;0<=h.getBCHDigit(i)-h.getBCHDigit(h.G15);)i^=h.G15<<h.getBCHDigit(i)-h.getBCHDigit(h.G15);return(t<<10|i)^h.G15_MASK},getBCHTypeNumber:function(t){for(var i=t<<12;0<=h.getBCHDigit(i)-h.getBCHDigit(h.G18);)i^=h.G18<<h.getBCHDigit(i)-h.getBCHDigit(h.G18);return t<<12|i},getBCHDigit:function(t){for(var i=0;0!=t;)i++,t>>>=1;return i},getPatternPosition:function(t){return h.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,i,e){switch(t){case 0:return 0==(i+e)%2;case 1:return 0==i%2;case 2:return 0==e%3;case 3:return 0==(i+e)%3;case 4:return 0==(Math.floor(i/2)+Math.floor(e/3))%2;case 5:return 0==i*e%2+i*e%3;case 6:return 0==(i*e%2+i*e%3)%2;case 7:return 0==(i*e%3+(i+e)%2)%2;default:throw Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var i=new n([1],0),e=0;e<t;e++)i=i.multiply(new n([1,u.gexp(e)],0));return i},getLengthInBits:function(t,i){if(1<=i&&10>i)switch(t){case 1:return 10;case 2:return 9;case e:return 8;case 8:return 8;default:throw Error("mode:"+t)}else if(27>i)switch(t){case 1:return 12;case 2:return 11;case e:return 16;case 8:return 10;default:throw Error("mode:"+t)}else if(41>i)switch(t){case 1:return 14;case 2:return 13;case e:return 16;case 8:return 12;default:throw Error("mode:"+t)}else throw Error("type:"+i)},getLostPoint:function(t){for(var i=t.getModuleCount(),e=0,r=0;r<i;r++)for(var o=0;o<i;o++){for(var n=0,s=t.isDark(r,o),a=-1;1>=a;a++)if(!(0>r+a||i<=r+a))for(var h=-1;1>=h;h++)0>o+h||i<=o+h||0==a&&0==h||s==t.isDark(r+a,o+h)&&n++;5<n&&(e+=3+n-5)}for(r=0;r<i-1;r++)for(o=0;o<i-1;o++)if(n=0,t.isDark(r,o)&&n++,t.isDark(r+1,o)&&n++,t.isDark(r,o+1)&&n++,t.isDark(r+1,o+1)&&n++,0==n||4==n)e+=3;for(r=0;r<i;r++)for(o=0;o<i-6;o++)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(e+=40);for(o=0;o<i;o++)for(r=0;r<i-6;r++)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(e+=40);for(o=n=0;o<i;o++)for(r=0;r<i;r++)t.isDark(r,o)&&n++;t=Math.abs(100*n/i/i-50)/5;return e+10*t}},u={glog:function(t){if(1>t)throw Error("glog("+t+")");return u.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return u.EXP_TABLE[t]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},l=0;8>l;l++)u.EXP_TABLE[l]=1<<l;for(l=8;256>l;l++)u.EXP_TABLE[l]=u.EXP_TABLE[l-4]^u.EXP_TABLE[l-5]^u.EXP_TABLE[l-6]^u.EXP_TABLE[l-8];for(l=0;255>l;l++)u.LOG_TABLE[u.EXP_TABLE[l]]=l;n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var i=Array(this.getLength()+t.getLength()-1),e=0;e<this.getLength();e++)for(var r=0;r<t.getLength();r++)i[e+r]^=u.gexp(u.glog(this.get(e))+u.glog(t.get(r)));return new n(i,0)},mod:function(t){if(0>this.getLength()-t.getLength())return this;for(var i=u.glog(this.get(0))-u.glog(t.get(0)),e=Array(this.getLength()),r=0;r<this.getLength();r++)e[r]=this.get(r);for(r=0;r<t.getLength();r++)e[r]^=u.gexp(u.glog(t.get(r))+i);return new n(e,0).mod(t)}};s.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];s.getRSBlocks=function(t,i){var e=s.getRsBlockTable(t,i);if(void 0==e)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+i);for(var r=e.length/3,o=[],n=0;n<r;n++)for(var a=e[3*n+0],h=e[3*n+1],u=e[3*n+2],l=0;l<a;l++)o.push(new s(h,u));return o};s.getRsBlockTable=function(t,i){switch(i){case 1:return s.RS_BLOCK_TABLE[4*(t-1)+0];case 0:return s.RS_BLOCK_TABLE[4*(t-1)+1];case 3:return s.RS_BLOCK_TABLE[4*(t-1)+2];case 2:return s.RS_BLOCK_TABLE[4*(t-1)+3]}};a.prototype={get:function(t){return 1==(this.buffer[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,i){for(var e=0;e<i;e++)this.putBit(1==(t>>>i-e-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0);t&&(this.buffer[i]|=128>>>this.length%8);this.length++}};"string"===typeof i&&(i={text:i});i=t.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},i);return this.each(function(){var e;if("canvas"==i.render){e=new o(i.typeNumber,i.correctLevel);e.addData(i.text);e.make();var r=document.createElement("canvas");r.width=i.width;r.height=i.height;for(var n=r.getContext("2d"),s=i.width/e.getModuleCount(),a=i.height/e.getModuleCount(),h=0;h<e.getModuleCount();h++)for(var u=0;u<e.getModuleCount();u++){n.fillStyle=e.isDark(h,u)?i.foreground:i.background;var l=Math.ceil((u+1)*s)-Math.floor(u*s),c=Math.ceil((h+1)*s)-Math.floor(h*s);n.fillRect(Math.round(u*s),Math.round(h*a),l,c)}}else{e=new o(i.typeNumber,i.correctLevel);e.addData(i.text);e.make();r=t("<table></table>").css("width",i.width+"px").css("height",i.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",i.background);n=i.width/e.getModuleCount();s=i.height/e.getModuleCount();for(a=0;a<e.getModuleCount();a++){h=t("<tr></tr>").css("height",s+"px").appendTo(r);for(u=0;u<e.getModuleCount();u++)t("<td></td>").css("width",n+"px").css("background-color",e.isDark(a,u)?i.foreground:i.background).appendTo(h)}}e=r;jQuery(e).appendTo(this)})}})(jQuery);(function t(i,e,r){function o(s,a){if(!e[s]){if(!i[s]){var h="function"==typeof require&&require;if(!a&&h)return h(s,!0);if(n)return n(s,!0);h=Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}h=e[s]={exports:{}};i[s][0].call(h.exports,function(t){var e=i[s][1][t];return o(e?e:t)},h,h.exports,t,i,e,r)}return e[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o})({1:[function(t,i,e){if(!r)var r={map:function(t,i){var e={};return i?t.map(function(t,r){e.index=r;return i.call(e,t)}):t.slice()},naturalOrder:function(t,i){return t<i?-1:t>i?1:0},sum:function(t,i){var e={};return t.reduce(i?function(t,r,o){e.index=o;return t+i.call(e,r)}:function(t,i){return t+i},0)},max:function(t,i){return Math.max.apply(null,i?r.map(t,i):t)}};t=function(){function t(t,i,e){return(t<<2*h)+(i<<h)+e}function i(t){function i(){e.sort(t);r=!0}var e=[],r=!1;return{push:function(t){e.push(t);r=!1},peek:function(t){r||i();void 0===t&&(t=e.length-1);return e[t]},pop:function(){r||i();return e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){r||i();return e}}}function e(t,i,e,r,o,n,s){this.r1=t;this.r2=i;this.g1=e;this.g2=r;this.b1=o;this.b2=n;this.histo=s}function o(){this.vboxes=new i(function(t,i){return r.naturalOrder(t.vbox.count()*t.vbox.volume(),i.vbox.count()*i.vbox.volume())})}function n(i){var e=Array(1<<3*h),r,o,n,s;i.forEach(function(i){o=i[0]>>u;n=i[1]>>u;s=i[2]>>u;r=t(o,n,s);e[r]=(e[r]||0)+1});return e}function s(t,i){var r=1e6,o=0,n=1e6,s=0,a=1e6,h=0,l,c,f;t.forEach(function(t){l=t[0]>>u;c=t[1]>>u;f=t[2]>>u;l<r?r=l:l>o&&(o=l);c<n?n=c:c>s&&(s=c);f<a?a=f:f>h&&(h=f)});return new e(r,o,n,s,a,h,i)}function a(i,e){function o(t){var i=t+"1";t+="2";var r,o,n,s;o=0;for(c=e[i];c<=e[t];c++)if(u[c]>h/2){n=e.copy();s=e.copy();r=c-e[i];o=e[t]-c;for(r=r<=o?Math.min(e[t]-1,~~(c+o/2)):Math.max(e[i],~~(c-1-r/2));!u[r];)r++;for(o=l[r];!o&&u[r-1];)o=l[--r];n[t]=r;s[i]=n[t]+1;return[n,s]}}if(e.count()){var n=e.r2-e.r1+1,s=e.g2-e.g1+1,a=r.max([n,s,e.b2-e.b1+1]);if(1==e.count())return[e.copy()];var h=0,u=[],l=[],c,f,p,d,g;if(a==n)for(c=e.r1;c<=e.r2;c++){d=0;for(f=e.g1;f<=e.g2;f++)for(p=e.b1;p<=e.b2;p++)g=t(c,f,p),d+=i[g]||0;h+=d;u[c]=h}else if(a==s)for(c=e.g1;c<=e.g2;c++){d=0;for(f=e.r1;f<=e.r2;f++)for(p=e.b1;p<=e.b2;p++)g=t(f,c,p),d+=i[g]||0;h+=d;u[c]=h}else for(c=e.b1;c<=e.b2;c++){d=0;for(f=e.r1;f<=e.r2;f++)for(p=e.g1;p<=e.g2;p++)g=t(f,p,c),d+=i[g]||0;h+=d;u[c]=h}u.forEach(function(t,i){l[i]=h-t});return a==n?o("r"):a==s?o("g"):o("b")}}var h=5,u=8-h;e.prototype={volume:function(t){if(!this._volume||t)this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1);return this._volume},count:function(i){var e=this.histo;if(!this._count_set||i){i=0;var r,o,n;for(r=this.r1;r<=this.r2;r++)for(o=this.g1;o<=this.g2;o++)for(n=this.b1;n<=this.b2;n++)index=t(r,o,n),i+=e[index]||0;this._count=i;this._count_set=!0}return this._count},copy:function(){return new e(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(i){var e=this.histo;if(!this._avg||i){i=0;var r=1<<8-h,o=0,n=0,s=0,a,u,l,c;for(u=this.r1;u<=this.r2;u++)for(l=this.g1;l<=this.g2;l++)for(c=this.b1;c<=this.b2;c++)a=t(u,l,c),a=e[a]||0,i+=a,o+=a*(u+.5)*r,n+=a*(l+.5)*r,s+=a*(c+.5)*r;this._avg=i?[~~(o/i),~~(n/i),~~(s/i)]:[~~(r*(this.r1+this.r2+1)/2),~~(r*(this.g1+this.g2+1)/2),~~(r*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var i=t[0]>>u;gval=t[1]>>u;bval=t[2]>>u;return i>=this.r1&&i<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}};o.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var i=this.vboxes,e=0;e<i.size();e++)if(i.peek(e).vbox.contains(t))return i.peek(e).color;return this.nearest(t)},nearest:function(t){for(var i=this.vboxes,e,r,o,n=0;n<i.size();n++)if(r=Math.sqrt(Math.pow(t[0]-i.peek(n).color[0],2)+Math.pow(t[1]-i.peek(n).color[1],2)+Math.pow(t[2]-i.peek(n).color[2],2)),r<e||void 0===e)e=r,o=i.peek(n).color;return o},forcebw:function(){var t=this.vboxes;t.sort(function(t,i){return r.naturalOrder(r.sum(t.color),r.sum(i.color))});var i=t[0].color;5>i[0]&&5>i[1]&&5>i[2]&&(t[0].color=[0,0,0]);var i=t.length-1,e=t[i].color;251<e[0]&&251<e[1]&&251<e[2]&&(t[i].color=[255,255,255])}};return{quantize:function(t,e){function h(t,i){for(var e=1,r=0,o;1e3>r;)if(o=t.pop(),o.count()){var n=a(u,o);o=n[0];n=n[1];if(!o)break;t.push(o);n&&(t.push(n),e++);if(e>=i)break;if(1e3<r++)break}else t.push(o),r++}if(!t.length||2>e||256<e)return!1;var u=n(t),l=0;u.forEach(function(){l++});var c=s(t,u),f=new i(function(t,i){return r.naturalOrder(t.count(),i.count())});f.push(c);h(f,.75*e);for(c=new i(function(t,i){return r.naturalOrder(t.count()*t.volume(),i.count()*i.volume())});f.size();)c.push(f.pop());h(c,e-c.size());for(f=new o;c.size();)f.push(c.pop());return f}}}();i.exports=t.quantize},{}],2:[function(t,i,e){(function(){var i,e,r,o=function(t,i){return function(){return t.apply(i,arguments)}},n=[].slice;window.Swatch=e=function(){function t(t,i){this.rgb=t;this.population=i}t.prototype.hsl=void 0;t.prototype.rgb=void 0;t.prototype.population=1;t.yiq=0;t.prototype.getHsl=function(){return this.hsl?this.hsl:this.hsl=r.rgbToHsl(this.rgb[0],this.rgb[1],this.rgb[2])};t.prototype.getPopulation=function(){return this.population};t.prototype.getRgb=function(){return this.rgb};t.prototype.getHex=function(){return"#"+(16777216+(this.rgb[0]<<16)+(this.rgb[1]<<8)+this.rgb[2]).toString(16).slice(1,7)};t.prototype.getTitleTextColor=function(){this._ensureTextColors();return 200>this.yiq?"#fff":"#000"};t.prototype.getBodyTextColor=function(){this._ensureTextColors();return 150>this.yiq?"#fff":"#000"};t.prototype._ensureTextColors=function(){if(!this.yiq)return this.yiq=(299*this.rgb[0]+587*this.rgb[1]+114*this.rgb[2])/1e3};return t}();window.Vibrant=r=function(){function r(t,r,n){this.swatches=o(this.swatches,this);var s,a,h,u,l,c,f,p;"undefined"===typeof r&&(r=64);"undefined"===typeof n&&(n=5);l=new i(t);f=l.getImageData().data;c=l.getPixelCount();t=[];for(u=0;u<c;)s=4*u,p=f[s+0],h=f[s+1],a=f[s+2],s=f[s+3],125<=s&&(250<p&&250<h&&250<a||t.push([p,h,a])),u+=n;this._swatches=this.quantize(t,r).vboxes.map(function(t){return function(t){return new e(t.color,t.vbox.count())}}(this));this.maxPopulation=this.findMaxPopulation;this.generateVarationColors();this.generateEmptySwatches();l.removeCanvas()}r.prototype.quantize=t("quantize");r.prototype._swatches=[];r.prototype.TARGET_DARK_LUMA=.26;r.prototype.MAX_DARK_LUMA=.45;r.prototype.MIN_LIGHT_LUMA=.55;r.prototype.TARGET_LIGHT_LUMA=.74;r.prototype.MIN_NORMAL_LUMA=.3;r.prototype.TARGET_NORMAL_LUMA=.5;r.prototype.MAX_NORMAL_LUMA=.7;r.prototype.TARGET_MUTED_SATURATION=.3;r.prototype.MAX_MUTED_SATURATION=.4;r.prototype.TARGET_VIBRANT_SATURATION=1;r.prototype.MIN_VIBRANT_SATURATION=.35;r.prototype.WEIGHT_SATURATION=3;r.prototype.WEIGHT_LUMA=6;r.prototype.WEIGHT_POPULATION=1;r.prototype.VibrantSwatch=void 0;r.prototype.MutedSwatch=void 0;r.prototype.DarkVibrantSwatch=void 0;r.prototype.DarkMutedSwatch=void 0;r.prototype.LightVibrantSwatch=void 0;r.prototype.LightMutedSwatch=void 0;r.prototype.HighestPopulation=0;r.prototype.generateVarationColors=function(){this.VibrantSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1);this.LightVibrantSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1);this.DarkVibrantSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1);this.MutedSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION);this.LightMutedSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION);return this.DarkMutedSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION);
};r.prototype.generateEmptySwatches=function(){var t;void 0===this.VibrantSwatch&&void 0!==this.DarkVibrantSwatch&&(t=this.DarkVibrantSwatch.getHsl(),t[2]=this.TARGET_NORMAL_LUMA,this.VibrantSwatch=new e(r.hslToRgb(t[0],t[1],t[2]),0));if(void 0===this.DarkVibrantSwatch&&void 0!==this.VibrantSwatch)return t=this.VibrantSwatch.getHsl(),t[2]=this.TARGET_DARK_LUMA,this.DarkVibrantSwatch=new e(r.hslToRgb(t[0],t[1],t[2]),0)};r.prototype.findMaxPopulation=function(){var t,i,e,r,o;e=0;r=this._swatches;t=0;for(i=r.length;t<i;t++)o=r[t],e=Math.max(e,o.getPopulation());return e};r.prototype.findColorVariation=function(t,i,e,r,o,n){var s,a,h,u,l,c,f,p;u=void 0;l=0;c=this._swatches;s=0;for(a=c.length;s<a;s++)if(p=c[s],f=p.getHsl()[1],h=p.getHsl()[2],f>=o&&f<=n&&h>=i&&h<=e&&!this.isAlreadySelected(p)&&(h=this.createComparisonValue(f,r,h,t,p.getPopulation(),this.HighestPopulation),void 0===u||h>l))u=p,l=h;return u};r.prototype.createComparisonValue=function(t,i,e,r,o,n){return this.weightedMean(this.invertDiff(t,i),this.WEIGHT_SATURATION,this.invertDiff(e,r),this.WEIGHT_LUMA,o/n,this.WEIGHT_POPULATION)};r.prototype.invertDiff=function(t,i){return 1-Math.abs(t-i)};r.prototype.weightedMean=function(){var t,i,e,r,o,s;o=1<=arguments.length?n.call(arguments,0):[];for(t=e=i=0;t<o.length;)r=o[t],s=o[t+1],i+=r*s,e+=s,t+=2;return i/e};r.prototype.swatches=function(){return{Vibrant:this.VibrantSwatch,Muted:this.MutedSwatch,DarkVibrant:this.DarkVibrantSwatch,DarkMuted:this.DarkMutedSwatch,LightVibrant:this.LightVibrantSwatch,LightMuted:this.LightMuted}};r.prototype.isAlreadySelected=function(t){return this.VibrantSwatch===t||this.DarkVibrantSwatch===t||this.LightVibrantSwatch===t||this.MutedSwatch===t||this.DarkMutedSwatch===t||this.LightMutedSwatch===t};r.rgbToHsl=function(t,i,e){var r,o,n,s,a;t/=255;i/=255;e/=255;s=Math.max(t,i,e);a=Math.min(t,i,e);o=void 0;n=(s+a)/2;if(s===a)o=a=0;else{r=s-a;a=.5<n?r/(2-s-a):r/(s+a);switch(s){case t:o=(i-e)/r+(i<e?6:0);break;case i:o=(e-t)/r+2;break;case e:o=(t-i)/r+4}o/=6}return[o,a,n]};r.hslToRgb=function(t,i,e){var r,o,n;r=o=n=void 0;r=function(t,i,e){0>e&&(e+=1);1<e&&(e-=1);return e<1/6?t+6*(i-t)*e:.5>e?i:e<2/3?t+(i-t)*(2/3-e)*6:t};0===i?n=o=r=e:(i=.5>e?e*(1+i):e+i-e*i,e=2*e-i,n=r(e,i,t+1/3),o=r(e,i,t),r=r(e,i,t-1/3));return[255*n,255*o,255*r]};return r}();window.CanvasImage=i=function(){function t(t){this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d");document.body.appendChild(this.canvas);this.width=this.canvas.width=t.width;this.height=this.canvas.height=t.height;this.context.drawImage(t,0,0,this.width,this.height)}t.prototype.clear=function(){return this.context.clearRect(0,0,this.width,this.height)};t.prototype.update=function(t){return this.context.putImageData(t,0,0)};t.prototype.getPixelCount=function(){return this.width*this.height};t.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};t.prototype.removeCanvas=function(){return this.canvas.parentNode.removeChild(this.canvas)};return t}()}).call(this)},{quantize:1}]},{},[2]);
//rebuild by neat 