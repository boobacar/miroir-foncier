// Centralized motion variants to keep animations consistent
export const fadeIn = (delay = 0, y = 20) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export const fadeInX = (delay = 0, x = 20) => ({
  hidden: { opacity: 0, x },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut", delay } },
});

