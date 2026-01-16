const form = document.getElementById("login");
const loginBtn = document.getElementById("loginBtn");
const roleSelect = document.getElementById("role");
let selectedRole = roleSelect.value; // gets "admin" / "candidate" / "recruiter"

const correctEmail = "test123@gmail.com";
const correctPassword = "test123";

loginBtn.addEventListener("click", function (event) {
  event.preventDefault(); // stop page refresh

  const enteredEmail = form.elements.email.value;
  const enteredPassword = form.elements.password.value;

  // remove old message if exists
  let oldMsg = document.getElementById("errorMsg");
  if (oldMsg) {
    oldMsg.remove();
  }

  if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
    if (selectedRole === "admin") {
        location.href = "../users/administrator/dashboard.html";
    } else if (selectedRole === "candidate") {
        location.href = "../users/job-seeker/dashboard.html";
    } else if (selectedRole === "recruiter") {
        location.href = "../users/recruiter/dashboard.html";
    } else {
        // show error if role not selected
        console.log("Please select a role");
    }
}
 else {
    const p = document.createElement("p");
    p.id = "errorMsg";
    p.innerText = "❌ Email or password does not match";
    p.style.color = "red";

    form.appendChild(p);
  }
});
