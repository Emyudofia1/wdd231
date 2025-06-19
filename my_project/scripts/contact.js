document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    // Prevent the default form action to control redirect
    event.preventDefault();

    // Get values from form fields
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Save to localStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
  });
});
