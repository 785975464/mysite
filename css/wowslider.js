// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider=function(t){function e(t){return V.css({left:-t+"00%"})}function n(t){return((t||0)+R)%R}function i(t,e){ue.pause(t.curIndex,e)}function a(t,e){ue.play(t,0,e)}function o(t,e,i){ae||(isNaN(t)&&(t=Y(ee,R)),t=n(t),ee!=t&&(D?D.load(t,function(){r(t,e,i)}):r(t,e,i)))}function s(t){for(var e="",n=0;n<t.length;n++)e+=String.fromCharCode(t.charCodeAt(n)^1+(t.length-n)%32);return e}function r(n,i,a){if(!ae){if(i||a)e(n);else{if(ae)return;oe=!1,function(e,n){se=se>=K.length-1?0:se+1;var i=K[se]||new window.ws_blinds(t,G,N);z(i).trigger("effectStart",{curIndex:e,nextIndex:n,cont:z(".ws_effect",q),start:function(){ie=!!((n-e+1)%G.length)^t.revers?0:1,i.go(n,e,ie)}})}(ee,n),q.trigger(z.Event("go",{index:n}))}ee=n,ee!=t.stopOn||--t.loop||(t.autoPlay=0),t.onStep&&t.onStep(n)}}function l(){q.find(".ws_effect").fadeOut(200),e(ee).fadeIn(200).find("img").css({visibility:"visible"})}function u(t,e,n,i,a,o){new c(t,e,n,i,a,o)}function c(e,n,i,a,o,s){var r,l,u,c,d=0,f=0,p=0;e[0]||(e=z(e)),e.on((n?"mousedown ":"")+"touchstart",function(e){var n=e.originalEvent.touches?e.originalEvent.touches[0]:e;t.gestures&&q.addClass("ws_grabbing"),d=0,n?(r=n.pageX,l=n.pageY,f=p=1,a&&(f=p=a(e))):f=p=0,e.originalEvent.touches||(e.preventDefault(),e.stopPropagation())}),z(window).on((n?"mousemove ":"")+"touchmove",e,function(t){if(f){var e=t.originalEvent.touches?t.originalEvent.touches[0]:t;d=1,u=e.pageX-r,c=e.pageY-l,i&&i(t,u,c),t.preventDefault(),t.stopPropagation()}}),z(window).on((n?"mouseup ":"")+"touchend",e,function(e){t.gestures&&q.removeClass("ws_grabbing"),f&&(d&&o&&o(e,u,c),!d&&s&&s(e),d&&(e.preventDefault(),e.stopPropagation()),d=0,f=0)}),e.on("click",function(t){p&&(t.preventDefault(),t.stopPropagation()),p=0})}function d(t){var e=t.css("transform"),n={top:0,left:0};return e&&(e=e.match(/(-?[0-9\.]+)/g),e?"3d"==e[1]?(n.left=parseFloat(e[2])||0,n.top=parseFloat(e[3])||0):(n.left=parseFloat(e[4])||0,n.top=parseFloat(e[5])||0):(n.left=0,n.top=0)),n}function f(e,n){if(we.length&&x(e),ye.length&&b(e),t.caption&&C(e,n),U){var i=z("A",j.get(e)).get(0);i?(U.setAttribute("href",i.href),U.setAttribute("target",i.target),U.style.display="block"):U.style.display="none"}t.responsive&&O()}function p(){be&&(be=0,setTimeout(function(){q.trigger(z.Event("stop",{}))},t.duration))}function h(){!be&&t.autoPlay&&(be=1,q.trigger(z.Event("start",{})))}function m(){g(),p()}function v(){g(),t.autoPlay?(ge=setTimeout(function(){xe||o()},t.delay),h()):p()}function g(){ge&&clearTimeout(ge),ge=null}function w(t,e,n,i){g(),t.preventDefault(),o(e,n,i),v(),qe&&ze&&ze.play()}function y(){function e(t){0>t&&(t=0),D&&D.loadTtip(t),z(f.get(v)).removeClass("ws_overbull"),z(f.get(t)).addClass("ws_overbull"),h.show();var e={left:f.get(t).offsetLeft-h.width()/2,"margin-top":f.get(t).offsetTop-f.get(0).offsetTop+"px","margin-bottom":-f.get(t).offsetTop+f.get(f.length-1).offsetTop+"px"},n=p.get(t),i={left:-n.offsetLeft+(z(n).outerWidth(!0)-z(n).outerWidth())/2};0>v?(h.css(e),m.css(i)):(document.all||(e.opacity=1),h.stop().animate(e,"fast"),m.stop().animate(i,"fast")),v=t}if(q.find(".ws_bullets a,.ws_thumbs a").click(function(t){w(t,z(this).index())}),ye.length){ye.hover(function(){Te=1},function(){Te=0});var n=ye.find(">div");ye.css({overflow:"hidden"});var i,a,o,s=q.find(".ws_thumbs");s.bind("mousemove mouseover",function(e){if(!o){clearTimeout(a);for(var s=.2,r=0;2>r;r++){var l=ye[r?"width":"height"](),u=n[r?"width":"height"](),c=l-u;if(0>c){var f,p,h=(e[r?"pageX":"pageY"]-ye.offset()[r?"left":"top"])/l;if(i==h)return;i=h;var m=t.support.transform&&t.support.transition?d(n)[r?"left":"top"]:n.position()[r?"left":"top"];if(n.css({transition:"0ms linear",transform:"translate3d("+m.left+"px,"+m.top+"px,0)"}),n.stop(!0),Ee>0){if(h>s&&1-s>h)return;f=.5>h?0:c-1,p=Ee*Math.abs(m-f)/(Math.abs(h-.5)-s)}else f=c*Math.min(Math.max((h-s)/(1-2*s),0),1),p=-Ee*u/2;t.support.transform&&t.support.transition?n.css({transition:p+"ms "+(Ee>0?"linear":"ease"),transform:"translate3d("+(r?f:0)+"px,"+(r?0:f)+"px,0)"}):n.animate(r?{left:f}:{top:f},p,Ee>0?"linear":"easeOutCubic")}else t.support.transform&&t.support.transition||n.css(r?"left":"top",r?c/2:0)}}}),s.mouseout(function(){a=setTimeout(function(){if(n.stop(),t.support.transform&&t.support.transition){var e=d(n);n.css({transition:"0ms linear",transform:"translate3d("+e.left+"px,"+e.top+"px,0)"})}},100)}),ye.trigger("mousemove");var r,l;t.gestures&&u(q,1,function(e,i,a){var o=Math.min(Math.max(r+i,ye.width()-n.width()),0),s=Math.min(Math.max(l+a,ye.height()-n.height()),0);t.support.transform&&t.support.transition?n.css({transition:"0ms linear",transform:"translate3d("+o+"px, "+s+"px,0)"}):(n.css("left",o),n.css("top",s))},function(e){if(!z(e.target).parents(".ws_thumbs").get(0))return!1;if(o=1,t.support.transform&&t.support.transition){var i=d(n);r=i.left,l=i.top}else r=parseFloat(n.css("left"))||0,l=parseFloat(n.css("top"))||0;return!0},function(){o=0},function(){o=0}),q.find(".ws_thumbs a").each(function(t,e){u(e,0,0,function(t){return!!z(t.target).parents(".ws_thumbs").get(0)},function(){o=1},function(t){w(t,z(e).index())})})}if(we.length){var c=we.find(">div"),f=z("a",we),p=f.find("IMG");if(p.length){var h=z('<div class="ws_bulframe"/>').appendTo(c),m=z("<div/>").css({width:p.length+1+"00%"}).appendTo(z("<div/>").appendTo(h));p.appendTo(m),z("<span/>").appendTo(h);var v=-1;f.hover(function(){e(z(this).index())});var g;c.hover(function(){g&&(clearTimeout(g),g=0),e(v)},function(){f.removeClass("ws_overbull"),document.all?g||(g=setTimeout(function(){h.hide(),g=0},400)):h.stop().animate({opacity:0},{duration:"fast",complete:function(){h.hide()}})}),c.click(function(t){w(t,z(t.target).index())})}}}function b(e){z("A",ye).each(function(n){if(n==e){var i=z(this);if(i.addClass("ws_selthumb"),!Te){var a,o=ye.find(">div"),s=i.position()||{};if(t.support.transform&&t.support.transition){a=d(o);var r=-Math.max(Math.min(s.left,-a.left),s.left+i.width()-ye.width()),l=-Math.max(Math.min(s.top,0),s.top+i.height()-ye.height());o.css({transition:"300ms ease",transform:"translate3d("+r+"px,"+l+"px,0)"})}else a=o.position()||{},o.stop(!0).animate({left:-Math.max(Math.min(s.left,-a.left),s.left+i.width()-ye.width()),top:-Math.max(Math.min(s.top,0),s.top+i.height()-ye.height())})}}else z(this).removeClass("ws_selthumb")})}function x(t){z("A",we).each(function(e){e==t?z(this).addClass("ws_selbull"):z(this).removeClass("ws_selbull")})}function _(t){var e=j[t],n=z("img",e).attr("title"),i=z(e).data("descr");return n.replace(/\s+/g,"")||(n=""),(n?"<span>"+n+"</span>":"")+(i?"<br><div>"+i+"</div>":"")}function C(e,n){var i=_(e),a=_(n),o=t.captionEffect;(Oe[z.type(o)]||Oe[o]||Oe.none)(o,Pe,ke,t.captionDuration,i,a)}function M(t,e){var n,i=document.defaultView;if(i&&i.getComputedStyle){var a=i.getComputedStyle(t,"");a&&(n=a.getPropertyValue(e))}else{var o=e.replace(/\-\w/g,function(t){return t.charAt(1).toUpperCase()});n=t.currentStyle?t.currentStyle[o]:t.style[o]}return n}function F(t,e,n){for(var i="padding-left|padding-right|border-left-width|border-right-width".split("|"),a=0,o=0;o<i.length;o++)a+=parseFloat(M(t,i[o]))||0;var s=parseFloat(M(t,"width"))||(t.offsetWidth||0)-a;return e&&(s+=a),n&&(s+=(parseFloat(M(t,"margin-left"))||0)+(parseFloat(M(t,"margin-right"))||0)),s}function S(t,e,n){for(var i="padding-top|padding-bottom|border-top-width|border-bottom-width".split("|"),a=0,o=0;o<i.length;o++)a+=parseFloat(M(t,i[o]))||0;var s=parseFloat(M(t,"height"))||(t.offsetHeight||0)-a;return e&&(s+=a),n&&(s+=(parseFloat(M(t,"margin-top"))||0)+(parseFloat(M(t,"margin-bottom"))||0)),s}function T(t,e,n,i,a){function o(t){var n=z(s[t]).css("opacity");z(s[t]).css({visibility:"visible"}).css({opacity:0}).animate({opacity:n},a,"easeOutCirc").animate({top:0,left:0},{duration:a,easing:e.easing||i,queue:!1})}var s=t.find(">span,>div").get();z(s).css({position:"relative",visibility:"hidden"}),t.show();for(var r in e)if(/\%/.test(e[r])){e[r]=parseInt(e[r])/100;var l=t.offset()[/left/.test(r)?"left":"top"],u=/left/.test(r)?"width":"height";e[r]*=e[r]<0?l:q[u]()-t[u]()-l}z(s[0]).css({left:(e.left1||0)+"px",top:(e.top1||0)+"px"}),z(s[1]).css({left:(e.left2||0)+"px",top:(e.top2||0)+"px"});var a=e.duration||a;o(0),setTimeout(function(){o(1)},a*(e.distance||n))}function E(t,e){var n={position:0,top:0,left:0,bottom:0,right:0};for(var i in n)n[i]=t.get(0).style[i];t.show();var a={width:F(t.get(0),1,1),height:S(t.get(0),1,1),"float":t.css("float"),overflow:"hidden",opacity:0};for(var i in n)a[i]=n[i]||M(t.get(0),i);var o=z("<div></div>").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});t.wrap(o),o=t.parent(),"static"==t.css("position")?(o.css({position:"relative"}),t.css({position:"relative"})):(z.extend(a,{position:t.css("position"),zIndex:t.css("z-index")}),t.css({position:"absolute",top:0,left:0,right:"auto",bottom:"auto"})),o.css(a).show();var s=e.direction||"left",r="up"==s||"down"==s?"top":"left",l="up"==s||"left"==s,u=e.distance||("top"==r?t.outerHeight(!0):t.outerWidth(!0));t.css(r,l?isNaN(u)?"-"+u:-u:u);var c={};c[r]=(l?"+=":"-=")+u,o.animate({opacity:1},{duration:e.duration,easing:e.easing}),t.animate(c,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){t.css(n),t.parent().replaceWith(t),e.complete&&e.complete()}})}function P(t,e,n){var i=1*new Date,a=function(){var o=(1*new Date-i)/e;o>=1?(t(1),cancelAnimationFrame(a),n&&n()):(t(o),requestAnimationFrame(a))};a()}function k(e,n,i,a,o,s){function r(e,n){return e.css(t.support.transform?{transform:"translate3d("+n+"px,0px,0px)"}:{marginLeft:n})}var l=15,u=5,c=q.width();if(l*=c/100,u*=c/100,i==a)r(e,u).fadeIn(o/3),r(z(">div,>span",e),0).css("display","inline-block");else{var d=z(">div",e).css("display","inline-block"),f=z(">div",n).css("display","inline-block"),p=z(">span",e),h=z(">span",n),m=l+c*(s?-1:1),v=u,g=u,w=l+c*(s?1:-1),y=(s?-1:1)*l,b=0;r(e,m).show(),r(n,g).show(),r(d,y),r(f,b),r(p,2*y),r(h,b),P(function(t){t=z.easing.swing(t),r(e,(1-t)*m+t*v),r(n,(1-t)*g+t*w)},t.duration);var x=.8;P(function(t){t*=x,r(p,2*(1-t)*y+t*b),r(d,(1-t)*y+t*b),r(h,(1-t)*b+-2*t*y),r(f,(1-t)*b+t*-y)},t.duration,function(){P(function(t){t=z.easing.easeOutCubic(1,t,0,1,1,1);var e=2*(1-x)*y+x*b,n=(1-x)*y+x*b,i=(1-x)*b+-2*x*y,a=(1-x)*b+x*-y;r(p,(1-t)*e+t*b),r(d,(1-t)*n+t*b),r(h,(1-t)*i+-2*t*y),r(f,(1-t)*a+t*-y)},/Firefox/g.test($)?1500:t.delay)})}}function A(){return!!document[Re.fullscreenElement]}function I(){A()?document[Re.exitFullscreen]():We[0][Re.requestFullscreen]()}function O(){var e=je?4:t.responsive,n=q.width()||t.width,i=z([G,H.find("img"),Q.find("img")]);if(e>0&&document.addEventListener&&q.css("fontSize",Math.max(10*Math.min(n/t.width||1,1),6)),2>e&&(q.css("height",""),i.each(function(){z(this).css({width:"100%",height:"auto",marginTop:0,marginLeft:0})})),2==e){var a=n/t.width-1,o=t.height*(1+a);q.css("height",o),i.each(function(){z(this).css({width:"100%",height:"auto",marginTop:0,marginLeft:0})})}if(3==e){var s=window.innerHeight-q.offset().top-45,r=t.width/t.height,l=r>n/s;q.css("height",s),i.each(function(){z(this).css({width:l?"auto":"100%",height:l?"100%":"auto",marginLeft:l?(n-s*r)/2:0,marginTop:l?0:(s-n/r)/2})})}if(4==e){var u=window.innerWidth,c=window.innerHeight,r=t.width/t.height,d=r>u/c;q.css({maxWidth:d?"100%":r*c,height:"",top:d?(c-u/r)/2:0}),i.each(function(){z(this).css({width:"100%",marginLeft:0,marginTop:0})})}else q.css({maxWidth:"",top:""})}var z=jQuery,q=this,L=q.get(0);t=z.extend({effect:function(){this.go=function(t){return e(t),t}},prev:"",next:"",duration:1e3,delay:2e3,captionDuration:1e3,captionEffect:0,width:855,height:360,thumbRate:1,gestures:!0,caption:!0,controls:!0,autoPlay:!0,autoPlayVideo:!1,responsive:1,support:jQuery.fn.wowSlider.support,stopOnHover:0,preventCopy:1},t);var N=z(".ws_images",q),V=N.find("ul").css("width","100%").wrap("<div class='ws_list'></div>").parent();q.wrap("<div></div>"),z("<div>").css({width:"100%",visibility:"hidden","font-size":0,"line-height":0}).append(N.find("li:first img:first").clone().css({width:"100%"})).prependTo(N),V.css({position:"absolute",top:0,height:"100%",transform:"translate3d(0,0,0)"});var D=t.images&&new wowsliderPreloader(this,t),j=N.find("li"),R=j.length,W=(V.width()/V.find("li").width(),{position:"absolute",top:0,height:"100%",overflow:"hidden"}),H=z("<div>").addClass("ws_swipe_left").css(W).prependTo(V),Q=z("<div>").addClass("ws_swipe_right").css(W).appendTo(V),$=navigator.userAgent;if(/MSIE/.test($)||/Trident/.test($)||/Safari/.test($)||/Firefox/.test($)){var B=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(R)));V.css({width:B+"00%"}),j.css({width:100/B+"%"}),H.css({width:100/B+"%",left:-100/B+"%"}),Q.css({width:100/B+"%",left:100*R/B+"%"})}else V.css({width:R+"00%",display:"table"}),j.css({display:"table-cell","float":"none",width:"auto"}),H.css({width:100/R+"%",left:-100/R+"%"}),Q.css({width:100/R+"%",left:"100%"});var Y=t.onBeforeStep||function(t){return t+1};t.startSlide=n(isNaN(t.startSlide)?Y(-1,R):t.startSlide),D&&D.load(t.startSlide,function(){}),e(t.startSlide);var X,U;t.preventCopy&&!/iPhone/.test(navigator.platform)&&(X=z('<div><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(q),U=X.find("A").get(0));var G=[],J=z(".ws_frame",q);j.each(function(){for(var t=z(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",this),e=z("<div></div>"),n=0;n<this.childNodes.length;)this.childNodes[n]!=t.get(0)&&this.childNodes[n]!=t.get(1)?e.append(this.childNodes[n]):n++;z(this).data("descr")||(e.text().replace(/\s+/g,"")?z(this).data("descr",e.html().replace(/^\s+|\s+$/g,"")):z(this).data("descr","")),z(this).css({"font-size":0}),z(this).data("type",t[0].tagName);z(">iframe",this).css("opacity",0);G[G.length]=z(">a>img",this).get(0)||z(">iframe+img",this).get(0)||z(">*",this).get(0)}),G=z(G),G.css("visibility","visible"),H.append(z(G[R-1]).clone()),Q.append(z(G[0]).clone());var K=[];for(var Z in t.effect){var te=z.extend({},t);"ws_brick"==t.effect[Z]&&(te.duration=4500),K.push(new window[t.effect[Z]](te,G,N))}var ee=t.startSlide,ne=ee,ie=1,ae=0,oe=!1;z(K).bind("effectStart",function(t,e){ae++,i(e,function(){e.cont&&z(e.cont).show().css("opacity",1),e.start&&e.start(),ne=ee,ee=e.nextIndex,f(ee,ne)})}),z(K).bind("effectEnd",function(){e(ee).stop(!0,!0).show(),a(ee,function(){ae--,v(),ue.start(ee)})}),t.loop=t.loop||Number.MAX_VALUE,t.stopOn=n(t.stopOn);var se=Math.floor(Math.random()*K.length);L.wsHideEffect=l;var re,le=z('<div class="ws_video_btn"><div></div></div>').appendTo(q),ue=new function(){function e(t){return f[t]?z(f[t].a||f[t].element):z("iframe",j[t])}function n(t){var n=e(t);return n=n[0]?n[0].src:"",/youtube/.test(n)?"youtube":/vimeo/.test(n)?"vimeo":!1}function i(t){le.removeClass("ws_vimeo ws_youtube").addClass("ws_"+n(t)),De&&De.addClass("ws_hide")}function a(t){le.removeClass("ws_vimeo ws_youtube"),t&&De&&De.removeClass("ws_hide")}function o(t,o){var s=e(t);re=!1,v(),s[0]&&f[t]?(q.removeClass(/MSIE/.test($)||/Trident/.test($)?"ws_video_playing_ie":"ws_video_playing"),J.show(),X&&X.show(),Pe.fadeIn(300),i(t),"youtube"==n(t)&&f[t].getPlayerState&&1==f[t].getPlayerState()?f[t].pauseVideo():"vimeo"==n(t)&&f[t].api("paused",function(e){e||f[t].api("pause")}),o&&a(1),s.css("opacity")>0?s.animate({opacity:0},500,o?o:0):o&&o()):o&&o()}function s(i,o,s){var r=e(i);r[0]&&(o||r.attr("data-autoplay-video")||t.autoPlayVideo)?(re=n(i),q.addClass(/MSIE/.test($)||/Trident/.test($)?"ws_video_playing_ie":"ws_video_playing"),m(),Pe.fadeOut(300),l(),J.hide(),X&&X.hide(),a(),"youtube"==re&&f[i]&&f[i].playVideo?f[i].playVideo():"vimeo"==re&&f[i]&&f[i].api("play"),r.css("opacity")<1?r.css("zIndex",1).animate({opacity:1},500,s?s:0):s&&s()):s&&s()}function r(e,n){(n.attr("data-autoplay-video")||t.autoPlayVideo)&&(re="youtube",m()),f[e]=new YT.Player(n[0],{events:{onStateChange:function(t){1==t.data||3==t.data?s(e,1):2!=t.data&&0!=t.data||"youtube"!=re||o(e)},onReady:function(){n.css.zIndex=1,s(e)}}})}function u(e,n){(n.attr("data-autoplay-video")||t.autoPlayVideo)&&(re="vimeo",m()),f[e]=$f(n[0]),f[e].addEvent("ready",function(){n.css.zIndex=1,f[e].addEvent("play",function(){s(e,1)}),f[e].addEvent("pause",function(){"vimeo"==re&&o(e)}),f[e].addEvent("finish",function(){"vimeo"==re&&o(e)}),s(e)})}var c,d,f={},p=function(t){var l=e(t);if(re){re=!1;for(var p in f)p!=t&&o(p)}l[0]?(i(t),f[t]?s(t):c&&"youtube"==n(t)?r(t,l):d&&"vimeo"==n(t)&&u(t,l)):a(!0)};"undefined"!=typeof $f&&(d=!0,p(ee)),window.onYouTubeIframeAPIReady=function(){c=!0,p(ee)},this.start=p,this.check=n,this.pause=o,this.play=s};le.on("click",function(){ae||ue.play(ee,1)}),t.gestures&&q.addClass("ws_gestures");var ce=N,de='$#"';if(de&&(de=s(de))){if(t.gestures){var fe,pe,he,me=0,ve=10;u(q,1,function(e,n){m(),V.stop(!0,!0),he&&(oe=!0,ae++,he=0,l()),me=n,n>fe&&(n=fe),-fe>n&&(n=-fe),t.support.transform&&t.support.transition?V.css("transform","translate3d("+n+"px,0,0)"):V.css("left",pe+n)},function(t){var e=/ws_playpause|ws_prev|ws_next|ws_bullets/g.test(t.target.className)||z(t.target).parents(".ws_thumbs, .ws_bullets").get(0);return e||re?!1:(he=1,fe=N.width(),pe=parseFloat(-ee*fe)||0,!0)},function(e,i){he=0;var a=N.width(),o=n(ee+(0>i?1:-1)),s=a*i/Math.abs(i);Math.abs(me)<ve&&(o=ee,s=0);var r=200+200*(a-Math.abs(i))/a;ae--,z(K[0]).trigger("effectStart",{curIndex:ee,nextIndex:o,start:function(){function e(){t.support.transform&&t.support.transition&&V.css({transition:"0ms",transform:"translate3d(0,0,0)"}),z(K[0]).trigger("effectEnd",{swipe:!0})}oe=!0,t.support.transform&&t.support.transition?(V.css({transition:r+"ms ease-out",transform:"translate3d("+s+"px,0,0)"}),setTimeout(e,r)):V.animate({left:pe+s},r,e)}})},function(){var t=z("A",j.get(ee)).get(0);if(t){var e=document.createEvent("HTMLEvents");e.initEvent("click",!0,!0),t.dispatchEvent(e)}})}var ge,we=q.find(".ws_bullets"),ye=q.find(".ws_thumbs"),be=t.autoPlay,xe=!1,_e=s('.P0|zt`n7+jfencqmtN{3~swuk"4S!QUWS+laacy0*041C<39');_e+=s("``}dxbeg2uciewkwE$ztokvxa-ty{py*v``y!xcsm=74t{9");var Ce=ce||document.body;if(de=de.replace(/^\s+|\s+$/g,""),ce=de?z("<div>"):0,z(ce).css({position:"absolute",padding:"0 0 0 0"}).appendTo(Ce),ce&&document.all){var Me=z('<iframe src="javascript:false"></iframe>');Me.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"}),Me.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"}),ce.append(Me)}if(z(ce).css({zIndex:11,right:"5px",bottom:"2px"}).appendTo(Ce),_e+=s("czvex5oxxd1amnamp9ctTp%{sun4~v{|xj(]elgim+M{iib`?!<"),_e=ce?z(_e):ce,_e&&_e.css({"font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"5px","-moz-border-radius":"5px",outline:"none"}).attr({href:"http://"+de.toLowerCase()}).html(de).bind("contextmenu",function(){return!1}).show().appendTo(ce||document.body).attr("target","_blank"),t.controls){var Fe=z('<a href="#" class="ws_next">'+t.next+"</a>"),Se=z('<a href="#" class="ws_prev">'+t.prev+"</a>");q.append(Fe),q.append(Se),Fe.bind("click",function(t){w(t,ee+1)}),Se.bind("click",function(t){w(t,ee-1)}),/iPhone/.test(navigator.platform)&&(Se.get(0).addEventListener("touchend",function(t){w(t,ee-1)},!1),Fe.get(0).addEventListener("touchend",function(t){w(t,ee+1)},!1))}var Te,Ee=t.thumbRate;if(t.caption){var Pe=z("<div class='ws-title' style='display:none'></div>"),ke=z("<div class='ws-title' style='display:none'></div>"),Ae=z("<div class='ws-title-wrapper'>").append(Pe,ke);q.append(Ae),Pe.bind("mouseover",function(){re||g()}),Pe.bind("mouseout",function(){re||v()})}var Ie=function(){this.filters&&this.style.removeAttribute("filter")},Oe={none:function(t,e,n,i,a){e.html(a),e.show()},fade:function(e,n,i,a,o){n.stop(1,1).fadeOut(t.captionDuration/3,function(){n.html(o),n.fadeIn(a,Ie)})},array:function(t,e,n){T(e,t[Math.floor(Math.random()*t.length)],.5,"easeOutElastic1",n)},move:function(e,n,i,a,o){n.stop(1,1).fadeOut(t.captionDuration/3,function(){n.html(o),Oe.array([{left1:"100%",top2:"100%"},{left1:"80%",left2:"-50%"},{top1:"-100%",top2:"100%",distance:.7,easing:"easeOutBack"},{top1:"-80%",top2:"-80%",distance:.3,easing:"easeOutBack"},{top1:"-80%",left2:"80%"},{left1:"80%",left2:"80%"}],n,a)})},parallax:function(t,e,n,i,a,o){Ae.css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}),e.html(a).css("width","100%").stop(1,1),n.html(o).css("width","100%").stop(1,1),k(e,n,a,o,i,ie)},slide:function(e,n,i,a,o){n.stop(1,1).fadeOut(t.captionDuration/3,function(){n.html(o),E(n,{direction:"left",easing:"easeInOutExpo",complete:function(){n.get(0).filters&&n.get(0).style.removeAttribute("filter")},duration:a})})}};Oe[0]=Oe.slide,(we.length||ye.length)&&y(),f(ee,ne),t.stopOnHover&&(this.bind("mouseover",function(){re||g(),xe=!0}),this.bind("mouseout",function(){re||v(),xe=!1})),re||v();var ze=q.find("audio").get(0),qe=t.autoPlay;if(ze){if(window.Audio&&ze.canPlayType&&ze.canPlayType("audio/mp3"))ze.loop="loop",t.autoPlay&&(ze.autoplay="autoplay",setTimeout(function(){ze.play()},100));else{ze=ze.src;var Le=ze.substring(0,ze.length-/[^\\\/]+$/.exec(ze)[0].length),Ne="wsSound"+Math.round(9999*Math.random());z("<div>").appendTo(q).get(0).id=Ne;var Ve="wsSL"+Math.round(9999*Math.random());window[Ve]={onInit:function(){}},swfobject.createSWF({data:Le+"player_mp3_js.swf",width:"1",height:"1"},{allowScriptAccess:"always",loop:!0,FlashVars:"listener="+Ve+"&loop=1&autoplay="+(t.autoPlay?1:0)+"&mp3="+ze},Ne),ze=0}q.bind("stop",function(){qe=!1,ze?ze.pause():z(Ne).SetVariable("method:pause","")}),q.bind("start",function(){ze?ze.play():z(Ne).SetVariable("method:play","")})}if(L.wsStart=o,L.wsRestart=v,L.wsStop=m,t.playPause){var De=z('<a href="#" class="ws_playpause"></a>');De.addClass(t.autoPlay?"ws_pause":"ws_play"),De.click(function(){return t.autoPlay=!t.autoPlay,t.autoPlay?(v(),De.removeClass("ws_play"),De.addClass("ws_pause"),ue.start(ee)):(L.wsStop(),De.removeClass("ws_pause"),De.addClass("ws_play")),!1}),this.append(De)}var je=0;if(t.fullScreen){var Re=function(){for(var t,e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenchange"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitfullscreenchange"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitfullscreenchange"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozfullscreenchange"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","MSFullscreenChange"]],i={},a=0,o=n.length;o>a;a++)if(t=n[a],t&&t[1]in document){for(a=0,e=t.length;e>a;a++)i[n[0][a]]=t[a];return i}return!1}();if(Re){var We=q.parent();document.addEventListener(Re.fullscreenchange,function(){A()?(We.addClass("ws_fs_wrapper"),je=1,O()):(We.removeClass("ws_fs_wrapper"),je=0,O())}),z("<a href='#' class='ws_fullscreen'></a>").on("click",I).appendTo(q),L.wsToggleFS=I}}return L.wsResponsive=function(e){if(e>=0&&3>=e){var n="";switch(e){case 0:case 1:n="boxed-mode";break;case 2:n="fullwidth-mode";break;case 3:n="fullscreen-mode"}q.removeClass("boxed-mode fullwidth-mode fullscreen-mode").addClass(n),t.responsive=e,O()}},t.responsive&&(z(O),z(window).on("load resize",O)),this}},jQuery.extend(jQuery.easing,{easeInOutExpo:function(t,e,n,i,a){return 0==e?n:e==a?n+i:(e/=a/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeOutCirc:function(t,e,n,i,a){return i*Math.sqrt(1-(e=e/a-1)*e)+n},easeOutCubic:function(t,e,n,i,a){return i*((e=e/a-1)*e*e+1)+n},easeOutElastic1:function(t,e,n,i,a){var o=Math.PI/2,s=1.70158,r=0,l=i;if(0==e)return n;if(1==(e/=a))return n+i;if(r||(r=.3*a),l<Math.abs(i)){l=i;var s=r/4}else var s=r/o*Math.asin(i/l);return l*Math.pow(2,-10*e)*Math.sin((e*a-s)*o/r)+i+n},easeOutBack:function(t,e,n,i,a,o){return void 0==o&&(o=1.70158),i*((e=e/a-1)*e*((o+1)*e+o)+1)+n}}),jQuery.fn.wowSlider.support={transform:function(){if(!window.getComputedStyle)return!1;var t=document.createElement("div");document.body.insertBefore(t,document.body.lastChild),t.style.transform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";var e=window.getComputedStyle(t).getPropertyValue("transform");return t.parentNode.removeChild(t),void 0!==e?"none"!==e:!1}(),perspective:function(){for(var t="perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" "),e=0;e<t.length;e++)if(void 0!==document.body.style[t[e]])return!!t[e];return!1}(),transition:function(){var t=document.body||document.documentElement,e=t.style;return void 0!==e.transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition}()},function(t){function e(){n&&(o(e),t.fx.tick())}for(var n,i=0,a=["webkit","moz"],o=window.requestAnimationFrame,s=window.cancelAnimationFrame;i<a.length&&!o;i++)o=window[a[i]+"RequestAnimationFrame"],s=s||window[a[i]+"CancelAnimationFrame"]||window[a[i]+"CancelRequestAnimationFrame"];o?(window.requestAnimationFrame=o,window.cancelAnimationFrame=s,t.fx.timer=function(i){i()&&t.timers.push(i)&&!n&&(n=!0,e())},t.fx.stop=function(){n=!1}):(window.requestAnimationFrame=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-i)),a=window.setTimeout(function(){t(e+n)},n);return i=e+n,a},window.cancelAnimationFrame=function(t){clearTimeout(t)})}(jQuery);