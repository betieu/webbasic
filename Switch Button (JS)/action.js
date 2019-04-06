document.addEventListener("DOMContentLoaded",function(){

  var x = document.querySelectorAll('.cha');
  var i = 0;
  x[0].onclick = function(){
    if(i==0){
      i++;
      var y = document.getElementsByClassName('con');
      y[0].classList.remove('dichuyen2');
      y[0].classList.add('dichuyen1');     
      var z = document.getElementsByClassName('cha');
      z[0].classList.remove('mau2');
      z[0].classList.add('mau1');   
    }
    else if(i==1){
      i--;
      var y = document.getElementsByClassName('con');
      y[0].classList.remove('dichuyen1');
      y[0].classList.add('dichuyen2');
      var z = document.getElementsByClassName('cha');
      z[0].classList.remove('mau1');
      z[0].classList.add('mau2');      
    }
  }

},false)