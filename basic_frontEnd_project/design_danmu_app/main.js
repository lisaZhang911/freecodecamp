// 生成弹幕
var timers = [];

function createScreenBullet(text){
  var bulletItem = $('<div class="bullteItem">'+text+'</div>');
  var fontColor = 'rgb('+Math.floor(Math.random()*256)+','+ Math.floor(Math.random()*256)+','+ Math.floor(Math.random()*256)+')';
  var left = $('.container').width()+'px';
  var top = Math.floor(Math.random()*400)+'px';
  top = parseInt(top)>352?"352px":top;

  bulletItem.css({
    "position": 'absolute',
    "color": fontColor,
    "left": left,
    "top": top
  });
  $('.container').append(bulletItem);
  return bulletItem
}

//定时向左走
function addMove(bulletItem){
 var left = bulletItem.offset().left - $('.container').offset().left;

 var timer = setInterval(function(){
   left--;
   bulletItem.css('left', left+'px');
   if(bulletItem.offset().left+bulletItem.width() < $('.container').offset().left){
     bulletItem.remove();
     clearInterval(timer)
   }
 }, 10)
 timers.push(timer)
}

//监听“发送”按钮
$(".send").on("click", function(){
  var bulletItem = createScreenBullet($('#bulletText').val());
  addMove(bulletItem)
})
