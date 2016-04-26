/*
* Owl-notify
* v1.0.0
* license: MIT
* homepage: http://vnbstudio.ru
* Date: 2016-04-26
*/
(function(){
  function OwlNotify(){
    this.config = {
      'timeout':5000,
      'backgroundColor':'#ffffff',
      'fontColor':'rgb(0, 0, 0)',
    };
  }
  OwlNotify.prototype.setConfig=function(config){
    if (config.timeout!==undefined) { this.config.timeout=config.timeout; }
    if (config.backgroundColor!==undefined) { this.config.backgroundColor=config.backgroundColor; }
    if (config.fontColor!==undefined) { this.config.fontColor=config.fontColor; }
  };
  OwlNotify.prototype.show = function(mess,config){
    this.build(mess,config);
  };
  OwlNotify.prototype.build = function(text,config){
    var self = this;
    var conf = this.config;
    if(config!==undefined){
      conf = $.extend({},conf,config);
    }
    var nt = null;
    if($('#owlNotify').length>0)
    {
      nt = $("#owlNotify");
      nt.html(text);
      clearTimeout(set);
    }
    else
    {
      $("body").prepend("<div id='owlNotify'></div>");
      nt = $("#owlNotify");
      nt.css({
          'z-index':'999',
          'margin':'auto',
          'top':$(window).scrollTop(),
          'left':'0',
          'right'	:'0',
          'padding':'10px',
          'font-size':'18px',
          'position':'absolute',
          'width':'300px',
          'text-align':'center',
          '-webkit-box-shadow':'-4px 9px 14px -9px rgba(51,51,51,1)',
          '-moz-box-shadow':'-4px 9px 14px -9px rgba(51,51,51,1)',
          'box-shadow':'-4px 9px 14px -9px rgba(51,51,51,1)',
          'display':'block',
          'background':conf.backgroundColor,
          'color':conf.fontColor,
      });
      nt.html(text);
      nt.animate({ top: +$(window).scrollTop()+12 }, 500).animate({ top: +$(window).scrollTop()+10 }, 200);
    }
    var set = setTimeout(function(){
      nt.remove();
    },conf.timeout);
  };
  OwlNotify.prototype.next = function(callback){
    callback();
  };
  window.OwlNotify = new OwlNotify();
})();
