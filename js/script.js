var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example3'
})


var option={
  animation: true,
  delay :2000
};

function Toasty(){
  var toastHTMLElement = document.getElementById("EpicToast");
  var toastElement = new bootstrap.Toast(toastHTMLElement, option);
  toastElement.show()
  
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})