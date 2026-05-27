import React, { useEffect, useRef, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Each tech ball is its own WebGL Canvas. Most browsers cap the number of
// simultaneous WebGL contexts (~8–16), so we lazy-mount each canvas only
// when its tile enters the viewport. Idle tiles show the raw icon.
const LazyTechBall = ({ name, icon }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-28 h-28" title={name}>
      {inView ? (
        <BallCanvas icon={icon} />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={icon}
            alt={name}
            className="w-16 h-16 object-contain opacity-80"
          />
        </div>
      )}
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <LazyTechBall key={technology.name} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
