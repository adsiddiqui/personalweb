// Optional: reveal on scroll (re-run animations when sections enter view)
(function () {
    const animated = document.querySelectorAll("[data-animate]");
    if (!animated.length) return;

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // If user prefers reduced motion, skip scroll animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        animated.forEach(function (el) {
            el.style.animation = "none";
            el.style.opacity = "1";
            el.style.transform = "none";
        });
        return;
    }

    animated.forEach(function (el) {
        observer.observe(el);
    });
})();
