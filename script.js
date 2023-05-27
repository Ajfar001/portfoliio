// This code is not necessary, but it can be used to add some interactivity to the website.

window.onload = function() {
    // Add a click listener to the "Contact Me" button.
    var contactButton = document.getElementById("contactButton");
    contactButton.addEventListener("click", function() {
      // Open a new email message with my email address as the recipient.
      window.location.href = "mailto:myemail@example.com";
    });
  };
  