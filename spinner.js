
      // Cache DOM
      var european = document.querySelector("#european");
      var asian = document.querySelector("#asian");
      var african = document.querySelector("#african");
      var afgr = document.querySelector("#afgr");

      // Define array
      var items = [
        "Nigerian Couple",
        "Nigerian Couple",
        "Nigerian Couple",
        "Nigerian Couple",
        "Nigerian Couple",
        "Nigerian Couple",
        "Nigerian Couple",
        "Nigerian Couple",

      ];
      var idents = [
        "European",
        "Asian",
        "African"
      ];

      // Populate DOM
      items.forEach(appendItem);
      idents.forEach(appendIdents);

      function appendItem(item, index) {
        $("#machine").append(`<div>${item}</div>`);
      }
      function appendIdents(item, index) {
        $("#machine2").append(`<div>${item}</div>`);
      }

      $(document).ready(function() {
        // Init Slot Machine
        var machine = $("#machine").slotMachine({
          active: 0,
          delay: 500,
          onComplete(active) {
            // Enable shuffle button
            $("#shuffle").removeClass("avoid-clicks");
            console.log(`Index: ${this.active}`);
            console.log(items[this.active]);
            // Change box color when shuffle is complete
          }
          /*randomize() {
				return this.nextIndex;
			}*/
        });
        var machine2 = $("#machine2").slotMachine({
          active: 1,
          delay: 500,
          onComplete(active) {
            // Enable shuffle button
            console.log(`Index: ${this.active}`);
            console.log(idents[this.active]);
            // Change box color when shuffle is complete
            changeBoxColor(idents[this.active]);
          },
          randomize() {
            return this.nextIndex;
          }
        });

        // Bind events
        $("#shuffle").click(function() {
          machine.shuffle();
          machine2.shuffle();
          // Disable shuffle button
          $(this).addClass("avoid-clicks");
        });

        $("#return").click(function() {
          window.location.reload(false); 
        });

        $("#accept").click(function() {
          document.getElementById('aframe').style.opacity = "1";
          document.getElementById('wrap').style.opacity = "0";
          document.getElementById('gen').style.height = "0px";
          document.getElementById('im').style.opacity = "1";

        });

        // Change box color based on shuffle output
        function changeBoxColor(data) {
          if (data == "European") {
            african.setAttribute("visible", "false");
            asian.setAttribute("visible", "false");
            afgr.setAttribute("visible", "false");
            asian.setAttribute("visible", "false");
            european.setAttribute("visible", "true");
            machine2.addClass("avoid-clicks");   
          } else if (data == "Asian") {
            asian.setAttribute("visible", "true");
            afgr.setAttribute("visible", "false");
            european.setAttribute("visible", "false");
            african.setAttribute("visible", "false");
            machine2.addClass("avoid-clicks");
          } else if (data == "African") {
            european.setAttribute("visible", "false");
            asian.setAttribute("visible", "false");
            african.setAttribute("visible", "true");
            afgr.setAttribute("visible", "true");
            machine2.addClass("avoid-clicks");

          }
        }
      });
