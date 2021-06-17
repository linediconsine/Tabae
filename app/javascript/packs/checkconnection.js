const Checkconnection = () => {
  const body = document.querySelector("body");
  if (navigator.onLine) {
    
    body.classList.add("online");
    body.classList.remove("offline");
  } else {
    body.classList.add("offline");
    body.classList.remove("online");
  }
};


const DetectMob = () => {
  const body = document.querySelector("body");
  console.log(`window.innerWidth: ${window.innerWidth}   window.innerHeight: ${window.innerHeight}`)
  if  ( window.innerWidth <= 800 )   {
    console.log("mobile")
    body.classList.add("mobile");
    body.classList.remove("desktop");
  } else {
    console.log("desktop")
    body.classList.remove("mobile");
    body.classList.add("desktop");
  }
};

Checkconnection();
DetectMob();
setInterval(function () {
  Checkconnection();
  DetectMob();
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