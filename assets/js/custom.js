// 确保导航链接始终在当前页面中加载
document.addEventListener("DOMContentLoaded", function() {
  // 获取所有导航链接
  var links = document.querySelectorAll('.masthead__menu-item a');
  
  links.forEach(function(link) {
    // 只处理页内锚点链接
    if (link.getAttribute('href').startsWith('/#')) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认行为
        
        // 提取锚点
        var anchor = this.getAttribute('href').split('/')[1];
        
        // 如果已经在主页，直接跳转到锚点
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
          window.location.hash = anchor;
        } else {
          // 如果不在主页，先跳转到主页再到锚点
          window.location.href = '/' + anchor;
        }
      });
    }
  });
  
  // 特别处理English链接
  var englishLink = document.getElementById('english-link');
  if (englishLink) {
    englishLink.addEventListener('click', function(e) {
      e.preventDefault();
      // 在当前页面打开链接
      window.location.href = this.getAttribute('href');
    });
  }
}); 