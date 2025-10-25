document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate");
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Smooth scroll
  document.querySelectorAll("a.nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
        document.getElementById("nav-menu").classList.remove("active");
      }
    });
  });

  // Mobile menu
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => nav.classList.toggle("active"));
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target))
      nav.classList.remove("active");
  });
});
