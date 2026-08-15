// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu after tapping a link
  nav.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Copy-to-clipboard buttons (e.g. phone number)
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const value = btn.dataset.copy;
    if (!value) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        // fallback for non-secure contexts / older browsers
        const temp = document.createElement("textarea");
        temp.value = value;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }

      const originalLabel = btn.getAttribute("aria-label");
      btn.classList.add("is-copied");
      btn.setAttribute("aria-label", "Copied");

      clearTimeout(btn._copyTimeout);
      btn._copyTimeout = setTimeout(() => {
        btn.classList.remove("is-copied");
        btn.setAttribute("aria-label", originalLabel);
      }, 1800);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  });
});