


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nameHeader").style.fontSize = "0px";
    document.getElementById("descHeader").style.fontSize = "0px";
    document.getElementById("arrowImage").style.display = "none";
   
  } else {
    document.getElementById("nameHeader").style.fontSize = "100px";
    document.getElementById("descHeader").style.fontSize = "60px";
    document.getElementById("arrowImage").style.display = "block";
   
  }
}


AOS.init();