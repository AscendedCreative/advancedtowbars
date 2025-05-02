export function animateTimelineLine() {
  const line = document.getElementById("timeline-line");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const timeline = entry.target;
        timeline.style.height = timeline.parentElement.scrollHeight + "px";
      }
    },
    {
      threshold: 0.1,
    }
  );

  if (line) observer.observe(line);
}
