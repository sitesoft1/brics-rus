function promoCode(d,g){g.preventDefault();var a=$(document.body).find("#order-promo-code").val(),f=$(document.body).find(".js-promocode"),b=$(document.body).find(".js-haspromo");f.find("label.error").remove(),$.ajax({url:"assets/components/ajaxspace/webconnector.php",dataType:"json",method:"post",beforeSend:function(){f.addClass("box-loaded"),$(d).prop("disabled",!0)},complete:function(){f.removeClass("box-loaded"),$(d).prop("disabled",!1)},data:{action:"resource/promocode",promo:a},success:function(j){var k=j.object.promo;if(k){var h='<div class="cart-summary__text"><small>Промокод был активирован</small></div>';h+='<div class="cart-summary__text">Промокод:<div class="cart-summary__sum"><div class="cart-summary__value"> '+k.discount+"%</div></div></div>",h+='<div class="cart-summary__text">Скидка:<div class="cart-summary__sum"><div class="cart-summary__value">'+miniShop2.Utils.formatPrice(k.cost)+'&nbsp;<span class="rouble">₽</span></div></div></div>',h+='<input type="hidden" name="extfld_promocode" value="Промокод \''+k.name+" - "+k.discount+"%' был активирован\">",b.html(h),$(document.body).find(".js-order-cost").text(miniShop2.Utils.formatPrice(k.total_cost)),$(document.body).find(".js-close-promo-popup").trigger("click")}else{$("#order-promo-code").after('<label for="order-promo-code" class="error">Недействительный промокод</label>')}console.log(j)}})}function promoCodeOnload(){var a=$(document.body).find(".js-haspromo");$.ajax({url:"assets/components/ajaxspace/webconnector.php",dataType:"json",method:"post",data:{action:"resource/promocodeonload"},complete:function(b){console.log(b)},success:function(d){var f=d.object.promo;if(console.log(d),f){var b='<div class="cart-summary__text"><small>Промокод был активирован</small></div>';b+='<div class="cart-summary__text promo-text"><span class="lbl">Промокод:</span><div class="cart-summary__sum"><div class="cart-summary__value"> '+f.discount+"%</div></div></div>",b+='<div class="cart-summary__text promo-text"><span class="lbl">Скидка:</span><div class="cart-summary__sum"><div class="cart-summary__value">'+miniShop2.Utils.formatPrice(f.cost)+'&nbsp;<span class="rouble">₽</span></div></div></div>',b+='<input type="hidden" name="extfld_promocode" value="Промокод \''+f.name+" - "+f.discount+"%' был активирован\">",a.html(b),$(document.body).find(".js-order-cost").text(miniShop2.Utils.formatPrice(f.total_cost)),$(document.body).find(".js-close-promo-popup").trigger("click")}}})}function ajaxMessage(){parent.jQuery.fancybox.getInstance()&&parent.jQuery.fancybox.getInstance().close(),$.fancybox.open({src:"#thnx",animationDuration:350,btnTpl:{close:'<button class="popup__close-btn js-close-popup" type="button"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button>',smallBtn:'<button class="popup__close-btn js-close-popup" type="button"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button>'},afterShow:function(a,b){setTimeout(function(){parent.jQuery.fancybox.getInstance().close()},2000)}})}function ajaxAlert(b,d){var a='<div class="popup popup--msg" id="popup-helper" style="display:none">';b&&(a+='<div class="popup__title js-popup-title">'+b+"</div>"),a+='<button class="popup__close-btn" type="button" onclick="parent.jQuery.fancybox.getInstance().close();"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button>',d&&(a+='<div class="popup__inner"><div class="popup__msg">'+d+"</div></div>"),a+="</div>",$("body").remove("#popup-helper").append(a),$.fancybox.open({src:"#popup-helper",animationDuration:350,clickSlide:"close",opts:{afterShow:function(f,g){}},btnTpl:{close:!1,smallBtn:!1}})}function PopupCenter(j,f,m,d){var p=null!=window.screenLeft?window.screenLeft:window.screenX,h=null!=window.screenTop?window.screenTop:window.screenY,k=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-m/2+p,b=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-d/2+h,g=window.open(j,f,"scrollbars=yes, width="+m+", height="+d+", top="+b+", left="+k);window.focus&&g.focus()}function doAnimations(a){a.each(function(){var d=$(this),g=d.data("delay"),b=d.data("duration"),f="animated "+d.data("animation");d.css({"animation-delay":g,"-webkit-animation-delay":g,"animation-duration":b,"-webkit-animation-duration":b}),d.addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(f)})})}function accordion(j,f,m,d,p){var h=j,k=$("."+f).not(h),b="parent"===d?h.find("."+m):h.siblings("."+m),g=$("."+m).not(b);if(h.hasClass("opened")){b.slideUp(150,function(){h.removeClass("opened")})}else{if(1===p){return g.slideUp(150),void b.slideDown(150,function(){k.removeClass("opened"),h.addClass("opened")})}b.slideDown(150,function(){h.addClass("opened")})}}function sortTable(k){var g,q,f,u,j,p,b,h,m=0;for(g=document.getElementById("cart-table"),f=!0,h="asc";f;){for(f=!1,q=g.getElementsByTagName("tr"),u=1;u<q.length-1;u++){if(b=!1,j=q[u].getElementsByTagName("td")[k],p=q[u+1].getElementsByTagName("td")[k],"asc"==h){if(j.innerHTML.toLowerCase()>p.innerHTML.toLowerCase()){b=!0;break}}else{if("desc"==h&&j.innerHTML.toLowerCase()<p.innerHTML.toLowerCase()){b=!0;break}}}b?(q[u].parentNode.insertBefore(q[u+1],q[u]),f=!0,m++):0==m&&"asc"==h&&(h="desc",f=!0)}}Number.isFinite||(Number.isFinite=function(a){return"number"==typeof a&&isFinite(a)}),Number.isInteger||(Number.isInteger=function(a){return"number"==typeof a&&isFinite(a)&&Math.floor(a)===a}),window.requestAnimationFrame||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,1000/60)}),window.cancelAnimationFrame||(window.cancelAnimationFrame=window.mozCancelAnimationFrame||function(a){clearTimeout(a)}),function(e){var w=this,j=null,s=0,k={},t=0,x=0;function q(d,h){var a,f,b=Date.now();return 2<arguments.length?f=k[a=arguments[2]]:(f={id:a=t++,start:b},k[a]=f),f&&(b-f.start<h?requestAnimationFrame(q.bind(w,d,h,a)):(delete k[a],d())),a}function u(a){delete k[a]}function o(){if(this===w){for(id in j){var a;u((a=j[id]).debounceHandler),a.debounceHandler=q(g.bind(a),a.settings.debounce)}}else{u((a=this).debounceHandler),a.debounceHandler=q(g.bind(a),a.settings.debounce)}}function g(){var m=this.$el,v=this.settings;m.find('img, input[type="image"]').toArray().every(function(a){return !!(a.complete||a.height||parseInt(getComputedStyle(a).height))})||(u(this.debounceHandler),this.debounceHandler=q(this.debouncedResize,v.debounce));var f=e(v.target);if(f.length){return m.height(f.height()),u(this.debounceHandler),void (this.debounceHandler=q(this.debouncedResize,v.debounce))}var p=null;if(v.compact){var h=1;if("number"==typeof v.columnCount){h=v.columnCount}else{if("calc"===v.columnCount){var d=m.get(0).parentNode,b="";do{if(b=Number(getComputedStyle(d).columnCount),Number.isInteger(b)&&1<b){h=b;break}d=d.parentNode}while(d.parentNode)}}p=1<h?function(B,D){for(var z=B.length,C=[],A=Math.ceil(z/D),y=0;y<z;y++){var l=y%A;Math.floor(y/A),void 0===C[l]&&(C[l]=[]),C[l].push(B.get(y))}return{grouped:C,rows:A,cols:D}}(m,h):function(A){for(var C=A.length,y=[],B=null,z=0;z<C;z++){var l=A.eq(z).offset().top;if(B!==l){if(null!==B){break}B=l}}for(rows=Math.ceil(C/z),i=0;i<C;i++){r=Math.floor(i/z),c=i%z,void 0===y[r]&&(y[r]=[]),y[r].push(A.get(i))}return{grouped:y,rows:rows,cols:z}}(m)}else{p=function(y){var A=y.length,a=[],z=A;a[0]=[];for(var l=0;l<A;l++){a[0].push(y.get(l))}return{grouped:a,rows:1,cols:z}}(m)}!function(D,A,I){for(var z=A.grouped,J=A.rows,C=0;C<J;C++){for(var G=0,y=z[C],B=y.length,E=0;E<B;E++){var F=y[E],H=e(F);I.responsive&&(F.style.height="auto"),G=Math.max(G,H.height())}e(y).height(G)}}(0,p,v)}e.fn.sameHeight=function(v){var h=e.extend({compact:!1,responsive:!0,target:null,observe:window,debounce:1,columnCount:1},v);e.isNumeric(h.debounce)?(h.debounce=Number(h.debounce),h.debounce<1&&(h.debounce=1)):h.debounce=1,e.isNumeric(h.columnCount)?(h.columnCount=Number(h.columnCount),h.columnCount<1&&(h.columnCount=1)):"calc"!==h.columnCount&&(h.columnCount=1);var C={$el:e(this),settings:h},f="",D=Object.prototype.toString.call(h.observe);"[object String]"===D&&(f="query"),"[object Window]"===D?f="window":"[object HTMLCollection]"===D?f="element":0===D.indexOf("[object HTML")&&(f="element");var p="";"window"===f?p="Window":f&&(p="ResizeObserver" in window?"ResizeObserver":"ResizeSensor" in window?"ResizeSensor":"requestAnimationFrame"),C.observeMethod=p;var A=new function(a){this.$el=a.$el,this.settings=a.settings,this.debounceHandler=null,this.observerHandler=null;var d=a.observeMethod;"Window"===d&&(this.windowObserverHandlerId=x),this.debouncedResize=o.bind(this),this.stop=function(){switch(d){case"Window":delete j[this.windowObserverHandlerId];break;case"ResizeObserver":this.observerHandler.disconnect();break;case"ResizeSensor":this.observerHandler.detach();break;case"requestAnimationFrame":u(this.observerHandler)}}}(C);switch(p){case"Window":if(null===j){j={};var b=e(window);b.on("resize",o),b.on("load",o)}x=s++,j[x]=A;break;case"ResizeObserver":var m=new ResizeObserver(A.debouncedResize);m.observe(h.observe),A.observerHandler=m;break;case"ResizeSensor":var y=new ResizeSensor(h.observe,A.debouncedResize);A.observerHandler=y;break;case"requestAnimationFrame":var z=[],B=[];!function v(F){var E=[],l=[],d=A.settings;A.$el.each(function(H,I){var G=e(I);E.push(G.width()),l.push(G.height())});for(var a=E.length;a--;){if(E[a]!==z[a]||l[a]!==B[a]){z=E,B=l,A.debouncedResize();break}}A.observerHandler=q(v,d.debounce)}()}return A.debouncedResize(),A}}(jQuery),function(){$(function(){var R;$("#order-upload").on("click",function(){$("#form-upload").remove(),$("body").prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>'),$("#form-upload input[name='file']").trigger("click"),void 0!==R&&clearInterval(R),R=setInterval(function(){""!=$("#form-upload input[name='file']").val()&&(clearInterval(R),$.ajax({url:"assets/components/ajaxspace/webconnector.php?action=resource/orderfile",type:"post",dataType:"json",data:new FormData($("#form-upload")[0]),cache:!1,contentType:!1,processData:!1,beforeSend:function(){$("#order-upload").val("загрузка..."),$("#order-upload").prop("disabled",!0)},complete:function(a){$("#order-upload").prop("disabled",!1)},success:function(a){a.object.success&&($("#order-upload").val(a.object.file_name),$('input[name="extfld_file"]').val(a.object.file)),a.object.error&&(alert(a.object.error),$("#order-upload").val("прикрепить файл"))},error:function(b,d,a){console.log(a+"\r\n"+b.statusText+"\r\n"+b.responseText)}}))},500)}),$(".soft-item__top").sameHeight(),$(".soft-item__features").sameHeight();var J=window.matchMedia("(min-width: 1201px)"),D=(window.matchMedia("(min-width: 993px)"),window.matchMedia("(min-width: 769px)"),window.matchMedia("(max-width: 1200px)")),I=window.matchMedia("(max-width: 992px)"),E=window.matchMedia("(max-width: 768px)"),N=window.matchMedia("(max-width: 580px)"),V=$(window),G=$("body"),L=$(".page-header"),S=$(".js-promo-slider"),T=$(".js-comparison-slider"),B=$(".js-top-slider"),H=$(".js-soft-slider"),K=$(".js-update-slider"),Q=$(".js-second-slider");$("input, select").styler({onSelectOpened:function(){$(this).parents(".select-wrap").addClass("focus")},onSelectClosed:function(){$(this).parents(".select-wrap").removeClass("focus")}});var A=$(".js-animated-slider");A.on("init",function(a,b){doAnimations($(this).find("div.slider-item:first-child").find("[data-animation]"))}),A.on("beforeChange",function(b,f,a,d){doAnimations($(this).find('div.slider-item[data-slick-index="'+d+'"]').find("[data-animation]"))}),B.on("afterChange",function(a,b){$(".parallax").parallax()}),S.on("afterChange",function(a,b){$(".parallax").parallax()}),J.matches&&(S.on("init",function(a,b){$(this).find("div.slider-item:first-child").find(".parallax").parallax()}),S.on("beforeChange",function(b,f,a,d){$(this).find('div.slider-item[data-slick-index="'+a+'"]').find(".parallax").parallax("destroy"),$(this).find('div.slider-item[data-slick-index="'+d+'"]').find(".parallax").parallax()}),B.on("init",function(a,b){$(this).find("div.slider-item:first-child").find(".parallax").parallax()}),B.on("beforeChange",function(b,f,a,d){$(this).find('div.slider-item[data-slick-index="'+a+'"]').find(".parallax").parallax("destroy"),$(this).find('div.slider-item[data-slick-index="'+d+'"]').find(".parallax").parallax()})),V.resize(function(){$(".parallax").parallax()}),S.not(".slick-initialized").slick({dots:!0,arrows:!1,fade:!0,speed:1000,autoplay:!0,autoplaySpeed:8000,useTransform:!0,useCss:!0,autoplay:!0,autoplaySpeed:intervalSlide_,appendDots:$(".promo-slider-wrap .slider-dots"),prevArrow:$(".promo-slider-wrap .slider-nav__item--prev"),nextArrow:$(".promo-slider-wrap .slider-nav__item--next"),responsive:[{breakpoint:971,settings:{}}]}),B.not(".slick-initialized").slick({dots:!0,arrows:!1,fade:!0,speed:1000,autoplay:!0,autoplaySpeed:8000,useTransform:!0,useCss:!0,autoplay:!0,autoplaySpeed:intervalSlide_,appendDots:$(".top-slider-wrap .slider-dots"),prevArrow:$(".top-slider-wrap .slider-nav__item--prev"),nextArrow:$(".top-slider-wrap .slider-nav__item--next"),responsive:[{breakpoint:971,settings:{}}]});setInterval(function(){$(".clients-row").each(function(){var a=$(this),b=800*a.index();setTimeout(function(){!function(d){for(var f=0;f<4;f++){d.find(".js-clients-item").eq(f).find("div").toggleClass("active")}}(a)},b)})},5000);T.on("init reInit",function(h,l,f,j){for(var g=(f||0)+1;g<l.slideCount+1;g++){var d=$(l.$slides[g-1]).find(".slide-count-number"),b=$(l.$slides[g-1]).find(".slide-count-total");d.text(g),b.text(l.slideCount)}}),T.not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,speed:600,fade:!0,useTransform:!0,useCss:!0,prevArrow:$(".comparison-slider-wrap .slider-nav__item--prev"),nextArrow:$(".comparison-slider-wrap .slider-nav__item--next"),autoplay:!0,autoplaySpeed:intervalSlide_,responsive:[{breakpoint:971,settings:{}}]}),$(".js-phone").inputmask({mask:"+7 (999) 999-99-99",clearMaskOnLostFocus:!1});$(".comparison-slider-finance").on("init reInit",function(h,l,f,j){for(var g=(f||0)+1;g<l.slideCount+1;g++){var d=$(l.$slides[g-1]).find(".slide-count-number"),b=$(l.$slides[g-1]).find(".slide-count-total");d.text(g),b.text(l.slideCount)}}),$(".comparison-slider-finance").slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,speed:600,fade:!0,useTransform:!0,useCss:!0,prevArrow:$(".slider-finance .slider-nav__item--prev"),nextArrow:$(".slider-finance .slider-nav__item--next"),autoplay:!0,autoplaySpeed:intervalSlide_,responsive:[{breakpoint:971,settings:{}}]});var O=$(".main-menu"),U=$(".main-menu-btn");U.on("click",function(){var a=$(this),b=$(".menu-overlay");O.hasClass("opened")?(O.removeClass("opened"),a.removeClass("active"),G.removeClass("has-overlay"),b.fadeOut(300,function(){$(this).remove()})):(O.addClass("opened"),a.addClass("active"),$.when(G.addClass("has-overlay").find(".page-header").append('<div class="menu-overlay"></div>')).then(function(){$(".menu-overlay").fadeIn(300)}))}),$(".js-menu-close").on("click",function(){O.removeClass("opened"),U.removeClass("active"),G.removeClass("has-overlay"),$(".menu-overlay").fadeOut(300,function(){$(this).remove(),$(".sub-menu-btn.opened").click()})}),$(document).mouseup(function(a){O.is(a.target)||0!==O.has(a.target).length||(O.removeClass("opened"),G.removeClass("has-overlay"),$(".main-menu-btn").removeClass("active"),$(".menu-overlay").fadeOut(300,function(){$(this).remove()}))}),$(".comparison-tbl .comp-mark").each(function(){var a=$(this),b=1*a.text();a.text(""),1==b?a.append('<span class="yes-mark" title="Поддерживается"></span>'):a.append('<span class="no-mark" title="Не поддерживается"></span>')}),$(".sort-tbl").on("click",function(){var a=$(this);a.hasClass("is-sorted-asc")?a.removeClass("is-sorted-asc").addClass("is-sorted-desc"):a.removeClass("is-sorted-desc").addClass("is-sorted-asc")});var z,P=$(".js-form-input");P.blur(function(){var a=$(this);a.parent().removeClass("focus"),a.val()&&a.parent().addClass("filled")}),P.focus(function(){var a=$(this);a.parent().addClass("focus"),a.val()||a.parent().removeClass("filled")}),P.change(function(){var a=$(this);a.val()||a.parent().removeClass("filled")}),$(".js-open-promo-code").on("click",function(){var a=$(this).parent().find(".promo-code-popup");a.hasClass("opened")?a.fadeOut(300,function(){a.removeClass("opened")}):a.fadeIn(300,function(){a.addClass("opened")})}),$(".js-close-promo-popup").on("click",function(){var a=$(this).parents(".promo-code-popup");a.fadeOut(300,function(){a.removeClass("opened")})}),J.matches&&($(".is-parent").hover(function(){var a=$(this);z=setTimeout(function(){a.addClass("opened").children(".js-menu-dropdown").slideDown(150)},200)},function(){var a=$(this);setTimeout(function(){a.children(".js-menu-dropdown").slideUp(150)},200),a.removeClass("opened"),clearTimeout(z)}),$(window).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){600<(self.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop)?L.addClass("fixed"):L.removeClass("fixed")}));D.matches&&$(".sub-menu-btn").on("click",function(){accordion($(this),"sub-menu-btn","js-sub-menu","",0)}),I.matches&&(H.not(".slick-initialized").slick({settings:"unslick",dots:!1,arrows:!0,slidesToShow:2,speed:1000,useTransform:!0,useCss:!0,infinite:!1,prevArrow:$(".soft-slider-wrap .slider-nav__item--prev"),nextArrow:$(".soft-slider-wrap .slider-nav__item--next"),responsive:[{breakpoint:601,settings:"unslick",settings:{slidesToShow:1,adaptiveHeight:!0}}]}),$(".js-footer-title").on("click",function(){accordion($(this),"js-footer-title","secondary-menu-wrap","",0)})),E.matches&&(K.not(".slick-initialized").each(function(){var a=$(this);a.slick({settings:"unslick",dots:!1,arrows:!0,slidesToShow:2,speed:1000,useTransform:!0,useCss:!0,infinite:!1,prevArrow:a.parent().find(".slider-nav__item--prev"),nextArrow:a.parent().find(".slider-nav__item--next"),responsive:[{breakpoint:481,settings:"unslick",settings:{slidesToShow:1,adaptiveHeight:!0}}]})}),$(".top__right").removeClass("parallax").removeAttr("data-parallax")),N.matches&&Q.each(function(){var a=$(this);a.slick({dots:!1,arrows:!0,slidesToShow:1,speed:1000,useTransform:!0,useCss:!0,adaptiveHeight:!0,prevArrow:a.parent().find(".slider-nav__item--prev"),nextArrow:a.parent().find(".slider-nav__item--next")})});var q=$(".js-search-wrap");$(".js-search-open-btn").on("click",function(){q.fadeIn(300,function(){$(this).addClass("opened")})}),$(".js-search-close-btn").on("click",function(){q.fadeOut(300,function(){$(this).removeClass("opened")})}),$(".js-open-form").fancybox({animationDuration:350,slideClass:"popup-form",smallBtn:!1,toolbar:!1}),$(".js-buy-soft").on("click",function(){var a=$(this).data("soft");$("#buy").find(".js-popup-title span").text("Купить "+a)}),$(".js-buy-app").on("click",function(){var a=$(this).data("soft");$("#buy-app").find(".js-popup-title span").text("Заказать "+a)}),$(".js-buy-module").on("click",function(){var a=$(this).data("soft");$("#buy-module").find(".js-popup-title span").text("Купить "+a)}),$(".js-buy-tools").on("click",function(){var a=$(this).data("soft");$("#buy-tools").find(".js-popup-title span").text("Купить "+a)}),$(".js-buy-module-tools").on("click",function(){var a=$(this).data("soft");$("#buy-module-tools").find(".js-popup-title span").text("Купить "+a),$("select").trigger("refresh")}),$(".js-prolong-tools").on("click",function(){var a=$(this).data("soft");$("#prolong-tools").find(".js-popup-title span").text("Продлить "+a),$("select").trigger("refresh")}),$(".js-lease-soft").on("click",function(){var a=$(this).data("soft");$("#lease").find(".js-popup-title span").text("Аренда "+a),$("select").trigger("refresh")}),$(".js-lease-module").on("click",function(){var a=$(this).data("soft");$("#lease-module").find(".js-popup-title span").text("Аренда "+a),$("select").trigger("refresh")}),$(".js-update-module").on("click",function(){var a=$(this).data("soft");$("#update-module").find(".js-popup-title span").text("Обновить модуль "+a),$("select").trigger("refresh")}),$(".js-open-data-form").on("click",function(){var d,b=$(this),f=$(b.attr("href")),a=b.data("price");d=b.data(),f.find(".js-data-input").each(function(){var h=$(this);for(var j in d){var g=j+"-input";h.hasClass(g)&&h.val(d[j])}}),f.find(".price-value").text(a)}),$(document.body).delegate(".js-close-popup","click",function(a){a.preventDefault(),$.fancybox.close()}),$("input.js-input-with-feat").change(function(b){var d=$(this),a=d.parents(".checkbox-wrap").siblings(".feat");d.is(":checked")?a.removeClass("disabled"):a.addClass("disabled")}),$("input.js-all-in").change(function(){var b=$(this),d=b.parents("form").find(".js-network"),a=b.parents("form").find(".js-local");alert("commom.js");b.is(":checked")?d.removeAttr("disabled"):(d.is(":checked")&&(d.prop("checked",!1),a.prop("checked",!0),d.trigger("refresh"),a.trigger("refresh")),d.attr("disabled","disabled")),d.trigger("refresh")});var k=$(".count-input");k.each(function(){var a=$(this),b=a.data("unit");a.val().indexOf(b)+1||a.val(a.val()+" "+b)}),k.on("change",function(){var a=$(this),b=a.data("unit");a.val(a.val()+" "+b)}),$(".js-plus").click(function(f){f.preventDefault();var h=$(this),b=h.parent().find("input"),g=b.data("unit"),d=g||"",a=parseInt(b.val());isNaN(a)?b.val(1+d):(b.val(a+1+" "+d),h.parent().find(".js-minus").removeClass("disabled")),msExtraFields&&msExtraFields.updateprice($(document.body).find(".ms2_form").serialize()+"&ms2_action=order/updateprice")});var F=$(".js-minus");if(F.each(function(){var a=$(this),b=a.parent().find("input");1===parseInt(b.val())&&a.addClass("disabled")}),F.click(function(h){h.preventDefault();var l=$(this),f=l.parent().find("input"),j=f.data("unit"),g=j||"",d=parseInt(f.val()),b=d;!isNaN(d)&&1<d?(f.val(d-1+" "+g),1===(d=parseInt(f.val()))&&l.addClass("disabled")):(f.val("1 "+g),l.addClass("disabled")),!isNaN(b)&&1<b&&msExtraFields&&msExtraFields.updateprice($(document.body).find(".ms2_form").serialize()+"&ms2_action=order/updateprice")}),$("input.is-number").keypress(function(b){var d,a;if(!b){b=window.event}return b.keyCode?d=b.keyCode:b.which&&(d=b.which),null==d||0==d||8==d||13==d||9==d||46==d||37==d||39==d||(a=String.fromCharCode(d),!!/\d/.test(a)&&void 0)}),$(".js-open-popup").fancybox({animationDuration:350,slideClass:"popup-wrap",smallBtn:!1,toolbar:!1}),$(".js-open-video").fancybox({animationDuration:350,animationEffect:"material",btnTpl:{close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="Закрыть"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button>'}}),$(".js-open-img").fancybox({protect:!0,toolbar:!1,buttons:[],btnTpl:{close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="Закрыть"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button>'},arrows:!1,smallBtn:!0,zoomOpacity:!0,afterShow:function(a,b){$(b.$smallBtn).addClass("visible")}}),!sessionStorage.getItem("wt")||"on"==sessionStorage.getItem("wt")){var M=$(".warning-top");M.length&&setTimeout(function(){M.slideDown(350,function(){$(".warning-top").addClass("visible")}),sessionStorage.setItem("wt","on"),G.addClass("top-warning-visible")},2000)}sessionStorage.getItem("wb")&&"on"!=sessionStorage.getItem("wb")||$(".warning-bottom").length&&setTimeout(function(){$(".warning-bottom").slideUp(350,function(){$(".warning-bottom").addClass("visible")}),sessionStorage.setItem("wb","on"),G.addClass("bottom-warning-visible")},2000);$(document.body).delegate(".js-close-warning","click",function(a){a.preventDefault();var b=$(this).parents(".warning");b.hasClass("warning-top")?sessionStorage.setItem("wt","off"):sessionStorage.setItem("wb","off"),b.fadeOut(350,function(){b.removeClass("visible")}),G.removeClass("top-warning-visible")}),$(".js-acc-title").on("click",function(a){a.preventDefault(),accordion($(this),"js-acc-item","js-acc-content","",1)}),$(".js-tabs").on("click","li:not(.current)",function(){$(this).addClass("current").siblings().removeClass("current").parents("div.js-tabs-wrap").find("div.box").eq($(this).index()).fadeIn(300).addClass("visible").siblings("div.box").hide().removeClass("visible")}),$(window).scroll(function(){600<$(this).scrollTop()?$(".js-fixed-controls").show().addClass("visible").find(".js-fixed-btn").addClass("animated bounceIn"):$(".js-fixed-controls").fadeOut(300,function(){$(this).removeClass("visible").find(".js-fixed-btn").removeClass("animated bounceIn")})}),$(document.body).delegate(".js-fixed-open-nav-btn","click",function(){var a=$(this),b=a.parent().find(".controls-box");b.hasClass("visible")?b.fadeOut(300,function(){a.toggleClass("active"),b.removeClass("visible")}):b.fadeIn(300,function(){a.toggleClass("active"),b.addClass("visible")})}),$(".js-fixed-scroll-btn").click(function(a){a.preventDefault(),setTimeout(function(){L.removeClass("fixed")},300),$("body,html").animate({scrollTop:0},800)}),$(".js-animated-svg").hover(function(){}),$.validator.addMethod("isRequired",$.validator.methods.required,"Поле не может быть пустым"),$.validator.addMethod("isMinLength",$.validator.methods.minlength,$.validator.format("Введите не  меньше {0} символов")),$.validator.addMethod("isPhone",function(a,b){return 10<a.replace(/\D+/g,"").length},"Слишком короткий номер"),$.validator.addMethod("isEmail",$.validator.methods.email,"Введите корректный E-mail"),$.validator.addClassRules({"is-required":{isRequired:!0,isMinLength:2},"is-phone":{isPhone:!0},"is-email":{isEmail:!0}}),$(".ajax-form").each(function(){$(this).validate({})})})}();