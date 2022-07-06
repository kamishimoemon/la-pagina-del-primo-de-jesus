/*CSS Browser Selector 0.6.0 Dev*/
function css_browser_selector(a){function t(){var a=window.outerWidth||r.clientWidth;var e=window.outerHeight||r.clientHeight;b.orientation=a<e?"portrait":"landscape";r.className=r.className.replace(/ ?orientation_\w+/g,"").replace(/ [min|max|cl]+[w|h]_\d+/g,"");for(ww=d-1;ww>=0;ww--){if(a>=c[ww]){b.maxw=c[ww];break}}widthClasses="";for(var f in b){widthClasses+=" "+f+"_"+b[f]}r.className=r.className+widthClasses;return widthClasses}var b={},c=[320,480,640,768,1024,1152,1280,1440,1680,1920,2560],d=c.length,e=a.toLowerCase(),f=function(a){return RegExp(a,"i").test(e)},g="gecko",h="webkit",i="chrome",j="firefox",k="safari",l="opera",m="mobile",n="android",o="blackberry",p="lang_",q="device_",r=document.documentElement,s=[!/opera|webtv/i.test(e)&&/msie\s(\d+)/.test(e)?"ie ie"+(/trident\/4\.0/.test(e)?"8":RegExp.$1):f("firefox/")?g+" "+j+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(e)?" "+j+RegExp.$2+" "+j+RegExp.$2+"_"+RegExp.$4:""):f("gecko/")?g:f("opera")?l+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(e)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$4:/opera(\s|\/)(\d+)\.(\d+)/.test(e)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$3:""):f("konqueror")?"konqueror":f("blackberry")?o+(/Version\/(\d+)(\.(\d+)+)/i.test(e)?" "+o+RegExp.$1+" "+o+RegExp.$1+RegExp.$2.replace(".","_"):/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(e)?" "+o+RegExp.$2+(RegExp.$3?" "+o+RegExp.$2+RegExp.$3:""):""):f("android")?n+(/Version\/(\d+)(\.(\d+))+/i.test(e)?" "+n+RegExp.$1+" "+n+RegExp.$1+RegExp.$2.replace(".","_"):"")+(/Android (.+); (.+) Build/i.test(e)?" device_"+RegExp.$2.replace(/ /g,"_").replace(/-/g,"_"):""):f("chrome")?h+" "+i+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(e)?" "+i+RegExp.$2+(RegExp.$4>0?" "+i+RegExp.$2+"_"+RegExp.$4:""):""):f("iron")?h+" iron":f("applewebkit/")?h+" "+k+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(e)?" "+k+RegExp.$2+" "+k+RegExp.$2+RegExp.$3.replace(".","_"):/ Safari\/(\d+)/i.test(e)?RegExp.$1=="419"||RegExp.$1=="417"||RegExp.$1=="416"||RegExp.$1=="412"?" "+k+"2_0":RegExp.$1=="312"?" "+k+"1_3":RegExp.$1=="125"?" "+k+"1_2":RegExp.$1=="85"?" "+k+"1_0":"":""):f("mozilla/")?g:"",f("mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?m:"",f("j2me")?"j2me":f("iphone")?"iphone":f("ipod")?"ipod":f("ipad")?"ipad":f("playbook")?"playbook":f("kindle|silk")?"kindle":f("mac")?"mac"+(/mac os x ((\d+)[.|_](\d+))/.test(e)?" mac"+RegExp.$1.replace(".","_"):""):f("win")?"win"+(f("windows nt 6.2")?" win8":f("windows nt 6.1")?" win7":f("windows nt 6.0")?" vista":f("windows nt 5.2")||f("windows nt 5.1")?" win_xp":f("windows nt 5.0")?" win_2k":f("windows nt 4.0")||f("WinNT4.0")?" win_nt":""):f("freebsd")?"freebsd":f("x11|linux")?"linux":"",/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(e)?(p+RegExp.$2).replace("-","_")+(RegExp.$3!=""?(" "+p+RegExp.$1).replace("-","_"):""):""];window.onresize=t;t();var u=s.join(" ").replace(/ +/g," ")+" js ";r.className=(u+r.className.replace(/(no[-|_]?)?js/g,"")).replace(/^ /,"");return u}function log(a){if(window.console&&showLog){console.log(a)}}showLog=true;css_browser_selector(navigator.userAgent);

/*****jQUERY*****/
$(function(){
	
	jQuery("#Acordion").accordion({
		autoheight: false,
		header: 'h3'
	});
	
	$("#Slider").carouFredSel({
		width: "100%",
		height: 383,
		items: {
			visible: 1,
			width: 1280,
			height: 383
		},
		scroll: {
			items: 1,
			fx: "crossfade",
			duration: 900
		},
		auto: {
			play: true
		},
		pagination: {
			container: ".Controls"
		}
	});
	
	$("#BannerSlider").carouFredSel({
		width: 828,
		height: 340,
		items: {
			visible: 3,
			width: 276
		},
		scroll: {
			items: 3,
			duration: 1200
		},
		auto: {
			play: true
		},
		prev: {
			button: ".Prev"
		},
		next: {
			button: ".Next"
		}
	});
	
	/*ANCHOR*/
	$("a.anchorLink").anchorAnimate();
	
	/*PLACEHOLDER*/
	if(!$.support.placeholder) { 
		var active = document.activeElement;
		$(':text').focus(function () {
			if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function () {
			$(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
		});
	}
	
	/*COLUMNAS*/
	function equalHeight(group) {
	   tallest = 0;
	   group.each(function() {
		  thisHeight = $(this).height();
		  if(thisHeight > tallest) {
			 tallest = thisHeight;
		  }
	   });
	   group.height(tallest);
	}
	//equalHeight($(".Column"));
	
});

/*ANCHOR*/
jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")
			  var destination = $(elementClick).offset().top;
  			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
  				window.location.hash = elementClick
  			});
		  	return false;
		})
	})
}