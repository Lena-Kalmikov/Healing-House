import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function useSectionAnimation(sectionId, setActiveSection) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionId);
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    }
  }, [inView, setActiveSection, hasAnimated, sectionId]);

  return { ref, hasAnimated };
}

export default useSectionAnimation;
