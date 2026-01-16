// Select the form and its elements
const form = document.querySelector("form");
const fullName = form.querySelector("input[type='text']");
const email = form.querySelector("input[type='email']");
const password = form.querySelector("input[type='password']:nth-of-type(1)");
const confirmPassword = form.querySelector("input[type='password']:nth-of-type(2)");
const roleSelect = form.querySelector("#role");

// Function to remove previous error messages
function clearMessage() {
  const oldMsg = document.getElementById("errorMsg");
  if (oldMsg) oldMsg.remove();
}

// Form submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing

  clearMessage();

  let error = "";

  // Validate Full Name
  if (fullName.value.trim() === "") {
    error = "❌ Full Name is required";
  }
  // Validate Email
  else if (email.value.trim() === "") {
    error = "❌ Email is required";
  }
  // Validate Role
  else if (roleSelect.value === "") {
    error = "❌ Please select a role";
  }
  // Validate Password
  else if (password.value === "") {
    error = "❌ Password is required";
  } 
  // Confirm Password Match
  else if (password.value !== confirmPassword.value) {
    error = "❌ Passwords do not match";
  }

  if (error !== "") {
    const p = document.createElement("p");
    p.id = "errorMsg";
    p.innerText = error;
    p.style.color = "red";
    p.style.marginTop = "10px";
    form.appendChild(p);
    return;
  }

  // If everything is correct
  const successMsg = document.createElement("p");
  successMsg.id = "errorMsg";
  successMsg.innerText = "✅ Account created successfully!";
  successMsg.style.color = "green";
  successMsg.style.marginTop = "10px";
  form.appendChild(successMsg);

  // Clear form fields
  fullName.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
  roleSelect.value = "";
});
