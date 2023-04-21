/** @format */

function validateForm() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confpassword = document.getElementById("confpassword").value;

  if (firstName === "") {
    showAlert("First name is required");
    return false;
  }

  if (lastName === "") {
    showAlert("Last name is required");
    return false;
  }

  if (age < 18 || age > 100) {
    showAlert("Age should be between 18 and 100");
    return false;
  }

  if (phone === "") {
    showAlert("Mobile number is required");
    return false;
  }

  if (email === "") {
    showAlert("Invalid email address");
    return false;
  }

  if (password === "") {
    showAlert("Password is required");
    return false;
  }

  if (password.length < 6) {
    showAlert("Password should be at least 6 characters");
    return false;
  }

  if (confpassword !== password) {
    showAlert("Passwords do not match");
    return false;
  }

  // If all validations pass, show success message and return true
  showSuccess("Form submitted successfully!");
  return true;
}

function showAlert(message) {
  const alertBox = document.getElementById("alert");
  alertBox.innerHTML = message;
  alertBox.style.display = "block";
  setTimeout(() => (alertBox.style.display = "none"), 3000);
}

function showSuccess(message) {
  const successBox = document.getElementById("success");
  successBox.innerHTML = message;
  successBox.style.display = "block";
  setTimeout(() => (successBox.style.display = "none"), 3000);
}

// ----------------eye-------------

const eyeIcon = document.getElementById("eye");
const eyeIcon2 = document.getElementById("eye2");
// Add click event listeners to the eye icons
eyeIcon.addEventListener("click", togglePasswordVisibility);
eyeIcon2.addEventListener("click", togglePasswordVisibility);

function togglePasswordVisibility(event) {
  const targetInput = event.target.parentNode.previousElementSibling;
  if (targetInput.type === "password") {
    targetInput.type = "text";
  } else {
    targetInput.type = "password";
  }
}

// Created by prajwal ramteke
