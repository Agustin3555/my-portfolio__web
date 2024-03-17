import styled from "@emotion/styled";
import { COLOR, TIME } from "@/styles";

const SIZE = "3rem";
const PARTICLE_SIZE = "1.5rem";
const ANIMATION_DURATION = 1.375;

export const Component = styled.div`
  position: relative;
  width: ${SIZE};
  height: ${SIZE};
  animation: rotation 1.375s linear infinite;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ::after,
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${PARTICLE_SIZE};
    height: ${PARTICLE_SIZE};
  }

  ::after {
    background-color: ${COLOR.gs_12};
    transform: scale(0.5) translate(0, 0);
    transition: background-color ${TIME.s} ease-out;
    animation: loader ${ANIMATION_DURATION}s infinite ease-in-out;
  }

  ::before {
    background-color: ${COLOR.b};
    transform: scale(0.5) translate(-${SIZE}, -${SIZE});
    animation:
      loader ${ANIMATION_DURATION}s infinite ease-in-out,
      overlap ${ANIMATION_DURATION * 2}s infinite;

    @keyframes overlap {
      25% {
        z-index: 1;
      }
    }
  }

  @keyframes loader {
    from,
    to {
      border-radius: 27.5%;
    }
    50% {
      border-radius: 50%;
      transform: scale(1) translate(-50%, -50%);
    }
  }

  body[data-dark-mode="true"] & {
    ::after {
      background-color: ${COLOR.gs_5};
    }
  }
`;
