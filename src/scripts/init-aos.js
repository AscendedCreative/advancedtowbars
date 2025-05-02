import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  duration: 800,
  offset: 120,
});

const timelineLine = document.getElementById("timeline-line");

if (timelineLine) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const stepCircles = document.querySelectorAll(".step-circle");
        const first = stepCircles[0];
        const last = stepCircles[stepCircles.length - 1];

        if (first && last) {
          const startY = first.getBoundingClientRect().top + window.scrollY;
          const endY =
            last.getBoundingClientRect().top +
            window.scrollY +
            last.offsetHeight / 2;

          const height = endY - startY;
          timelineLine.style.height = `${height}px`;

          timelineLine.classList.remove("timeline-line-start");
          timelineLine.classList.add("grow-line");
        }
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(timelineLine);
}
