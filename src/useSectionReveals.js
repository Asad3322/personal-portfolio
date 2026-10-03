import { useEffect } from 'react';

// Elements remain visible by default. Unsupported APIs or failed animations
// simply leave the normal document in place.
export default function useSectionReveals() {
  useEffect(() => {
    const preference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (preference?.matches || !window.IntersectionObserver || !Element.prototype.animate) return;
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        try {
          const animation = target.animate(
            [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 380, easing: 'cubic-bezier(.2,.65,.3,1)' }
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        } catch { /* Visible fallback requires no cleanup or style reset. */ }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.about-visual, .about-copy, .section-heading, .skill-grid article, .contact > div, .contact form').forEach(el => observer.observe(el));
    const stop = () => {
      if (preference?.matches) {
        observer.disconnect();
        animations.forEach(animation => animation.cancel());
        animations.clear();
      }
    };
    preference?.addEventListener?.('change', stop);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      preference?.removeEventListener?.('change', stop);
    };
  }, []);
}
