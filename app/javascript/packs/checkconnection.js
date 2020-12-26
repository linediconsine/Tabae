window.Checkconnection = () => {
  const body = document.querySelector("body");
  if (navigator.onLine) {
    
    body.classList.add("online");
    body.classList.remove("offline");
  } else {
    body.classList.add("offline");
    body.classList.remove("online");
  }
};
window.Checkconnection();
setInterval(function () {
  window.Checkconnection();
}, 3000);

/*
window.Checkconnection = () => {
  const body = document.querySelector("body");
    
    function isOnline(yes,no){
      var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
      xhr.onload = function(){
          if(yes instanceof Function){
            console.log("network is working")
              yes();
          }
      }
      xhr.onerror = function(){
          if(no instanceof Function){
            console.log("network is NOT working")
              no();
          }
      }
      xhr.open("GET","/404.html",true);
      xhr.send();
  }

  isOnline(
    ()=>{
    body.classList.add("online");
    body.classList.remove("offline");
  },()=>{
    body.classList.add("offline");
    body.classList.remove("online");
  })


}
window.Checkconnection();
setInterval(function () {
  //window.Checkconnection();
  console.log('check net')
}, 5000);

*/