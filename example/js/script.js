$(document).ready(function(){
  $('button').on('click',function(){
    OwlNotify.setConfig({timeout:2000,});
    OwlNotify.show('Notify 1',{
      'backgroundColor':'rgb(241, 207, 239)'
    });
    setTimeout(function(){
      OwlNotify.show('Notify 2',{timeout:5000});
    },2200);
  });
});
