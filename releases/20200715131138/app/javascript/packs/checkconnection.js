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
