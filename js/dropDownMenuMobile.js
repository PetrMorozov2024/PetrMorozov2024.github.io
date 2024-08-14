(function(){
    window.addEventListener("load", initializationMobile)
      function initializationMobile(){
        document.getElementById("dropButtonMobile").addEventListener("click", dropMenu)
      }
      function dropMenu() {
          document.getElementById("dropDownMobile").classList.toggle("show");
      }
      window.onclick = function(event) {
        if (!event.target.matches('.dropButtonMobile')) {
  
        var dropdowns = document.getElementsByClassName("dropElementsMobile");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('showMobile')) {
              openDropdown.classList.remove('showMobile');
          }
        }
      }
    }
  })();