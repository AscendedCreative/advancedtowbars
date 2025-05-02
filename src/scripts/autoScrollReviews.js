function autoScroll(containerId, direction = "left", speed = 2.5) {
  const el = document.getElementById(containerId);
  if (!el) return;

  let isHovered = false;

  el.addEventListener("mouseenter", () => (isHovered = true));
  el.addEventListener("mouseleave", () => (isHovered = false));

  function animateScroll() {
    if (!isHovered) {
      if (direction === "left") {
        el.scrollLeft += speed;
        // Reset to start when near the end
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0;
        }
      } else {
        el.scrollLeft -= speed;
        // Reset to end when near the start
        if (el.scrollLeft <= 0) {
          el.scrollLeft = el.scrollWidth;
        }
      }
    }

    requestAnimationFrame(animateScroll);
  }

  requestAnimationFrame(animateScroll);
}

window.addEventListener("DOMContentLoaded", () => {
  autoScroll("google-carousel", "left", 2.5);
  autoScroll("trustpilot-carousel", "right", 2.5);
});
