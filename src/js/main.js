
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
        links = document.querySelectorAll('.link'),
        section = document.querySelector("#ourstory"),
        sections = document.querySelectorAll("section");

    links[0].addEventListener("click", function(){
      scrollIt(sections[0]);
    });

    links[1].addEventListener("click", function(){
      scrollIt(sections[1]);
    });

    links[2].addEventListener("click", function(){
      scrollIt(sections[2]);
    });

    links[3].addEventListener("click", function(){
      scrollIt(sections[3]);
    });
    
    link.addEventListener("click", function() {
    scrollIt(section);
    });
  } scrollDown();
  

  


