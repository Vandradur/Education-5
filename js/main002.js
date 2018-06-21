$(function() {
    function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container .menu-list").animate(
        {
          left: activeState ? "0%" : "-100%"
        },
        400
      );
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
  
    $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
  
      $(".menu-list .accordion-content")
        .not($(this).next())
        .slideUp("fast")
        .removeClass("open");
      $(".menu-list .accordion-toggle")
        .not(jQuery(this))
        .removeClass("active-tab")
        .find(".menu-link")
        .removeClass("active");
    });
  
  
  
  }); // jQuery load
  
  function myFunction() {
   var element = document.getElementById("sidebar__1");
  
   element.classList.toggle("mystyle");
  
  }
  function myFunction2() {
   var element = document.getElementById("sidebar__1");
  
   element.classList.toggle("mystyle2");
  
  }
  
  
  // BUTTON CLICK TO EXPAND

  var exContent = document.getElementById("extra__content");
  var highlightBtn = document.getElementById("card__highlight");

  highlightBtn.onclick = function() {
    if(exContent.className == "open"){
      content.className = "";
      highlightBtn.innerHTML = "Show More";
    } else {
      exContent.className = "open";
      highlightBtn.innerHTML = "Show Less";
    }
  };
  
  
  
  
  
  
  
  
  
  
  