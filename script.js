document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".line, .output");
    lines.forEach((el, i) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.opacity = 1;
      }, i * 200);
    });
  });
  