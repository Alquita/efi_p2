document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".nav-link");
  
    menuItems.forEach(item => {
      if (item.getAttribute("href") === currentLocation) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('faqAccordion');
    if (accordion) {
      accordion.addEventListener('show.bs.collapse', function (event) {
        const opened = accordion.querySelector('.accordion-collapse.show');
        if (opened && opened !== event.target) {
          const bsCollapse = bootstrap.Collapse.getInstance(opened);
          bsCollapse.hide();
        }
      });
    }
  });