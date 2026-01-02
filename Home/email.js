document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("2Ct8Jmf0npBv6bf9r");

  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (!form || !statusEl) return;

  const submitBtn = form.querySelector("button[type='submit']");
  let hideTimeout;

  function showStatus(message, color) {
    clearTimeout(hideTimeout);

    statusEl.textContent = message;
    statusEl.style.color = color;
    statusEl.style.opacity = "1";

    hideTimeout = setTimeout(() => {
      statusEl.style.opacity = "0";

      setTimeout(() => {
        statusEl.textContent = "";
      }, 400); // match CSS transition
    }, 3000);
  }

  // expose ONLY for debugging (safe)
  window.showStatus = showStatus;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusEl.textContent = "";

    emailjs
      .sendForm("service_xxo04xy", "template_ebpufsn", form)
      .then(() => {
        showStatus("Message sent successfully!", "green");
        form.reset();
      })
      .catch((err) => {
        showStatus("Failed to send message. Try again.", "red");
        console.error(err);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send";
      });
  });
});
