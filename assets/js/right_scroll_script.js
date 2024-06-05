// your-scroll-script.js

// 스크롤을 따라오는 요소를 고정하는 함수
function fixSidebar() {
    var sidebar = document.getElementById('sidebar');
    var sticky = sidebar.offsetTop;
    
    if (window.scrollY > sticky) {
      sidebar.classList.add('fixed');
    } else {
      sidebar.classList.remove('fixed');
    }
  }
  
  // 스크롤 이벤트 리스너 등록
  window.onscroll = function() {
    fixSidebar();
  };
  