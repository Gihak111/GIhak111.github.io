document.addEventListener("DOMContentLoaded", function() {
  var sidebarRight = document.getElementById("sidebar-right");
  if (sidebarRight) {
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
