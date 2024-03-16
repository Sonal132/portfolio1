document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Here you can perform any additional validation if required

    // Simulate sending the form data (replace this with your actual backend logic)
    setTimeout(function() {
      // Show success message
      document.getElementById("successMessage").style.display = "block";
      // Clear form fields
      document.getElementById("contactForm").reset();
      // Hide success message after 3 seconds
      setTimeout(function() {
        document.getElementById("successMessage").style.display = "none";
      }, 3000);
    }, 1000);
  });