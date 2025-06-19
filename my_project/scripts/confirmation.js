

// confirmation.js

document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("contactName") || "Not provided";
  const email = localStorage.getItem("contactEmail") || "Not provided";
  const message = localStorage.getItem("contactMessage") || "No message received.";

  document.getElementById("confirm-name").textContent = name;
  document.getElementById("confirm-email").textContent = email;
  document.getElementById("confirm-message").textContent = message;
});
