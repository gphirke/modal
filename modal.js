//click on trigger button
      var trigger = document.querySelector(".trigger");
      trigger.addEventListener("click", function(){
        toggleClass();
      });

      //click on close(x) button modal 
      var closeButton = document.querySelector(".modal-content span.close-button");
      closeButton.addEventListener("click", function(){
        toggleClass();
      });

      //add or remove the class show-modal
      function toggleClass(){
        var modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
      }
      
