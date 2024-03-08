import styled from "@emotion/styled";

export const Component = styled.span`
  position: relative;
  width: 100%;
  height: 100%;

  .particle {
    position: absolute;
    bottom: calc(var(--square-size) * -1.414);

    filter: drop-shadow(0.3px 0.5px 0.7px rgba(0, 0, 0, 0.09))
      drop-shadow(0.7px 1.3px 1.7px rgba(0, 0, 0, 0.09))
      drop-shadow(1.3px 2.6px 3.3px rgba(0, 0, 0, 0.09))
      drop-shadow(2.6px 5.2px 6.5px rgba(0, 0, 0, 0.09))
      drop-shadow(5px 10px 12.6px rgba(0, 0, 0, 0.09));

    animation: translateLavaLampMotion var(--animation-duration)
      var(--animation-delay) ease-in infinite alternate;
    animation-play-state: var(--animation-play);

    @keyframes translateLavaLampMotion {
      to {
        translate: 0
          calc((var(--container-height) + var(--square-size) * 1.25 * 3) * -1);
      }
    }

    .square {
      width: var(--square-size);
      height: var(--square-size);
      border-radius: 15%;

      animation: rotateLavaLampMotion var(--animation-duration)
        var(--animation-delay) ease-in infinite alternate;
      animation-play-state: var(--animation-play);

      @keyframes rotateLavaLampMotion {
        to {
          rotate: 2turn;
        }
      }
    }
  }
`;
