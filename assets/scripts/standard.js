function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');
  
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon.src = "../images/menu-toggle-icon.png";
    } else {
      menuMobile.classList.add('open');
      icon.src = "../images/Cross-Icon.png";
    }
  }
  