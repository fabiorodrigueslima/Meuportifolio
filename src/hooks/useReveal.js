import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal:not(.active)");

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("active"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default useReveal;
