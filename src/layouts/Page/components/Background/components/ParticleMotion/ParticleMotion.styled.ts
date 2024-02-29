import styled from "@emotion/styled";
import { VARS } from "@/styles";

export const Component = styled.span`
  position: relative;
  width: 100%;
  height: 100%;

  .particle {
    position: absolute;

    filter: drop-shadow(0.3px 0.5px 0.7px rgba(0, 0, 0, 0.09))
      drop-shadow(0.7px 1.3px 1.7px rgba(0, 0, 0, 0.09))
      drop-shadow(1.3px 2.6px 3.3px rgba(0, 0, 0, 0.09))
      drop-shadow(2.6px 5.2px 6.5px rgba(0, 0, 0, 0.09))
      drop-shadow(5px 10px 12.6px rgba(0, 0, 0, 0.09));

    animation: movementLavaLampMotion var(--animation-duration)
      var(--animation-delay) ease-in infinite alternate;

    @keyframes movementLavaLampMotion {
      0% {
        bottom: calc(var(--max-size) * -1);
      }
      to {
        bottom: calc(100% + var(--max-size));
      }
    }

    .square {
      border-radius: 15%;

      animation: rotateLavaLampMotion var(--animation-duration)
        var(--animation-delay) ease-in infinite alternate;

      @keyframes rotateLavaLampMotion {
        0% {
          rotate: 0;
        }
        to {
          rotate: 2turn;
        }
      }
    }
  }
`;
