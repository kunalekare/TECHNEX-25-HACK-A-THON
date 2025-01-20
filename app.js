document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const graduationYear = document.getElementById("graduationYear").value;
  const degree = document.getElementById("degree").value;
  const phone = document.getElementById("phone").value;

  // Simple validation to check if all fields are filled
  if (name && email && graduationYear && degree && phone) {
      // Display the confirmation message
      document.getElementById("confirmationMessage").classList.remove("hidden");
      document.getElementById("registrationForm").reset();
  } else {
      alert("Please fill all fields.");
  }
});
