import * as ParticleMotionStyled from "./ParticleMotion.styled";
import { useEffect, useRef, useState } from "react";
import Particle from "./components/Particle/Particle";
import { asClassName, debounce, type HandlingClass } from "@/tools";

const ParticleMotion = ({
  gapBetween = 200,
  handlingClass = [],
}: {
  gapBetween?: number;
  handlingClass?: HandlingClass;
}) => {
  const [xPositionParticles, setXPositionParticles] = useState<number[]>([]);
  const [distanceToGo, setDistanceToGo] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (divRef.current) {
      const { clientWidth, clientHeight } = divRef.current;

      setDistanceToGo(clientHeight);

      const particles: number[] = [];

      for (let i = 0; i < clientWidth; i += gapBetween) particles.push(i);

      setXPositionParticles(particles);
    }
  };

  useEffect(() => {
    handleResize();

    const handleResizeDebounced = debounce(handleResize, 500);

    window.addEventListener("resize", handleResizeDebounced);

    return () => {
      window.removeEventListener("resize", handleResizeDebounced);
    };
  }, []);

  return (
    <ParticleMotionStyled.Component
      className={asClassName(...handlingClass)}
      ref={divRef}
    >
      {xPositionParticles.map((item) => (
        <Particle style={{ xPosition: item, distanceToGo }} key={item} />
      ))}
    </ParticleMotionStyled.Component>
  );
};

export default ParticleMotion;
