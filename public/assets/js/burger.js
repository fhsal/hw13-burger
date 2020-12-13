// listener for the devour buttons

$(document).ready(function () {
  var burgerIcon = $("#burger-icon");

  $(".devour").on("click", function (event) {
    var id = $(this).data("burgerid");

    // animate burger shrinking when one is devoured

    burgerIcon.animate({ height: "5px", width: "5px" }, "normal");

    var updatedBurger = {
      devoured: true,
    };

    // Send the PUT request to save state of burger which will move it to the right as "devoured"

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedBurger,
    }).then(function () {
      console.log("changed burger", id);

      // Reload the page to display the updated 'to eat' and 'devoured' lists of burgers

      setTimeout(function () {
        location.reload();
      }, 500);
      // location.reload();
    });
  });
});
