
  function navigationMenu() {
    var button = document.querySelector(".navigation-button"),
          menu = document.querySelector(".navigation-menu"),
          body = document.querySelector("body");
    
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      menu.classList.toggle("active");

      if (button.classList.contains("active")) {
        this.setAttribute("aria-expanded", "true")
      } else {
        this.setAttribute("aria-expanded", "false") 
      }
    });

  } navigationMenu();
  
  function scrollDown() {
    function scrollIt(element) {
      window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
      });
    }

    var link = document.querySelector('.header-arrow'),
      section = document.querySelector("#ourstory");

    link.addEventListener("click", function() {
    scrollIt(section);
    });
  } scrollDown();
  

  


