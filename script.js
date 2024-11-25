
$(document).ready(function () {
  let currentInput = ""; // Stores the current input

  // Handle button clicks
  $(".btn").on("click", function () {
      const value = $(this).data("value");

      if (value === "C") {
          // Clear the display
          currentInput = "";
      } else if (value === "=") {
          try {
              // Evaluate the current input and show the result
              currentInput = eval(currentInput).toString();
          } catch (error) {
              // Handle invalid input
              currentInput = "Error";
          }
      } else {
          // Append the clicked value to the current input
          currentInput += value;
      }

      // Update the display
      $("#display").val(currentInput);
  });
});
