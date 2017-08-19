console.log('Loaded!');
var element=document.getElementById('main-text');

element.innerHTML='WELCOME!!';


var img=document.getElementById('madi');
  var marginleft=0;
function moveRight(){
    marginleft=marginleft+5;
    img.style.marginleft=marginleft+'px';
}
img.onlick=function(){
    var interval=setInterval(moveRight,50);
};
