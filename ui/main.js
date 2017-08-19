console.log('Loaded!');
var element=document.getElementById('main-text');

element.innerHTML('WELCOME!!');
  var marginleft=0;
function marginRight(){
    marginleft=marginleft+5;
    img.style.marginleft=marginleft+'px';
}

var img=document.getElementById('madi');
img.onlick=function(){
    var interval=setInterval(marginRight,50);
};
