var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var running=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var div=$(this),ul=$("ul:first",div),tLi=$(".car",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v;}
var li=$(".car",ul),itemLength=li.size(),curr=o.start;div.css("visibility","visible");li.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({padding:"0",position:"relative","list-style-type":"none","z-index":"1"});div.css({overflow:"hidden","z-index":"2"});var liSize=o.vertical?height(li):width(li);var ulSize=liSize*itemLength;var divSize=liSize*v;li.css({width:li.width()});ul.css(sizeCss,ulSize+"px").css(animCss,-(curr*liSize));div.css(sizeCss,divSize+"px");if(o.btnPrev)
$(o.btnPrev).click(function(){return go(curr-o.scroll);});if(o.btnNext)
$(o.btnNext).click(function(){return go(curr+o.scroll);});if(o.btnGo)
$.each(o.btnGo,function(i,val){$(val).click(function(){return go(o.circular?o.visible+i:i);});});if(o.mouseWheel&&div.mousewheel)
div.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll);});if(o.auto)
setInterval(function(){go(curr+o.scroll);},o.auto+o.speed);function vis(){return li.slice(curr).slice(0,v);};function go(to){if(!running){if(o.beforeStart)
o.beforeStart.call(this,vis());if(o.circular){if(to<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*liSize)+"px");curr=to==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll;}else if(to>=itemLength-v+1){ul.css(animCss,-((v)*liSize)+"px");curr=to==itemLength-v+1?v+1:v+o.scroll;}else curr=to;}else{if(to<0||to>itemLength-v)return;else curr=to;}
running=true;ul.animate(animCss=="left"?{left:-(curr*liSize)}:{top:-(curr*liSize)},o.speed,o.easing,function(){if(o.afterEnd)
o.afterEnd.call(this,vis());running=false;});if(!o.circular){$(o.btnPrev+","+ o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled");}}
return false;};});};function css(el,prop){return parseInt($.css(el[0],prop))||0;};function width(el){return el[0].offsetWidth+ css(el,'marginLeft')+ css(el,'marginRight');};function height(el){return el[0].offsetHeight+ css(el,'marginTop')+ css(el,'marginBottom');};})(jQuery);

}
/*
     FILE ARCHIVED ON 11:18:26 Mar 16, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:39:28 Jan 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 118.391
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.064
  cdx.remote: 0.061
  esindex: 0.01
  LoadShardBlock: 43.111 (3)
  PetaboxLoader3.datanode: 105.309 (5)
  load_resource: 149.611 (2)
  PetaboxLoader3.resolve: 71.367 (2)
*/