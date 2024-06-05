document.addEventListener("DOMContentLoaded", function() {
  var toc = document.querySelector("nav.toc");
  if (toc) {
    var sidebarRight = document.getElementById("sidebar-right");
    var offset = sidebarRight.offsetTop;

    window.addEventListener("scroll", function() {
      if (window.scrollY > offset) {
        sidebarRight.classList.add("fixed");
      } else {
        sidebarRight.classList.remove("fixed");
      }
    });
  }
});
