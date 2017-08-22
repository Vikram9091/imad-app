var button=doucment.getElementById('counter');
button.onclick=function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
   if(request.onreadyState===XMLHttpRequest.DONE){
       if(request.status===200)
       {
            var counter=request.responseText;
            var span=doucment.getElementById('count');
            span.innerHTML=counter.toString();
       }
   }
  };
 request.open('GET', 'http://viky7star.imad.hasura-app.io/counter',true);
 request.send(null);
 
};