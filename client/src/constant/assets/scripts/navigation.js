document.addEventListener('DOMContentLoaded', function() {
    var corporatesAnchor = document.getElementById('corporatesAnchor');
    var dropdownGrid = corporatesAnchor.nextElementSibling;
  
    var corporatesAnchor2 = document.getElementById('corporatesAnchor2');
    var dropdownGrid2 = corporatesAnchor2.nextElementSibling;
  
    corporatesAnchor.addEventListener('click', function(e) {
      e.preventDefault();
      corporatesAnchor.parentNode.classList.toggle('active')
      dropdownGrid.classList.toggle('show');
      dropdownGrid2.classList.remove('show');
      corporatesAnchor2.parentNode.classList.remove('active');
    });
  
    corporatesAnchor2.addEventListener('click', function(e) {
      e.preventDefault();
      corporatesAnchor2.parentNode.classList.toggle('active')
      dropdownGrid2.classList.toggle('show');
      dropdownGrid.classList.remove('show');
      corporatesAnchor.parentNode.classList.remove('active');
    });
  
    document.body.addEventListener('click', function(e) {
      if (!e.target.closest('.nav_bar_wrapper')) {
          dropdownGrid.classList.remove('show');
          dropdownGrid2.classList.remove('show');
          corporatesAnchor.parentNode.classList.remove('active');
          corporatesAnchor2.parentNode.classList.remove('active');
      }
      });
  });
  
function mainMenuHide(){
    var showes = document.querySelectorAll('.top_head_dropdown_grid');
    var actives = document.querySelectorAll('.top_head_has_Drop');
    [].forEach.call(showes, function(elem) {  
        elem.classList.remove("show");
    });
    [].forEach.call(actives, function(elem) {  
        elem.classList.remove("active");
    });
}
// 13/02/2024 new js for Corporates and Advisor Dropdown end

// 23/05/2024 corporate advisors overlay remove js start
document.addEventListener('DOMContentLoaded', function() {
    var od1 = document.getElementById('corporate-overlay');
    var od2 = document.getElementById('advisor-overlay');
    var topHeadDrop = document.querySelectorAll('.top_head_has_Drop');
    var topHeadDropdownGrids = document.querySelectorAll('.top_head_dropdown_grid');

    if (od1 && od2 && topHeadDrop.length > 0 && topHeadDropdownGrids.length > 0) {

        od1.addEventListener('click', function () {
            topHeadDrop.forEach(function(element) {
                element.classList.remove('active');
            });
            topHeadDropdownGrids.forEach(function(element) {
                element.classList.remove('show');
            });
        });

        od2.addEventListener('click', function () {
            topHeadDrop.forEach(function(element) {
                element.classList.remove('active');
            });
            topHeadDropdownGrids.forEach(function(element) {
                element.classList.remove('show');
            });
        });
    } else {
        console.error('One or more elements are missing: #od1, #od2, .top_head_has_Drop, .top_head_dropdown_grid');
    }
});

