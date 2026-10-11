import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Space to leave above an anchor target: its CSS scroll-margin-top if set
 * (which also covers sticky in-page menus), otherwise the fixed header height.
 */
const anchorOffset = (element: HTMLElement) => {
  const header = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const margin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  return Math.max(margin, header);
};

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to a new page without hash
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Wait for DOM to be ready, then scroll to hash with header offset
    const timeoutId = setTimeout(() => {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const headerOffset = anchorOffset(element);
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  // Handle clicks on same-page anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') && !href.includes('/#')) return;
      
      // Extract hash from href
      const hashPart = href.includes('/#') ? href.split('/#')[1] : href.slice(1);
      if (!hashPart) return;
      
      const element = document.getElementById(hashPart);
      if (!element) return;
      
      // Only handle same-page navigation
      if (href.startsWith('#') || (href.includes('/#') && href.startsWith('/'))) {
        e.preventDefault();
        
        const headerOffset = anchorOffset(element);
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Update URL without triggering navigation
        window.history.pushState(null, '', `#${hashPart}`);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null;
};

export default ScrollToHash;
