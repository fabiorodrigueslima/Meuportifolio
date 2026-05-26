import { useEffect } from "react";

function useReveal() {
    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, {
            threshold: 0.2,
        });

        reveals.forEach((el) => observer.observe(el));

        return () => {
            reveals.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);
}

export default useReveal;
