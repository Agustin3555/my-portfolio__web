import styled from "@emotion/styled";
import { LAYOUT_WIDTH, VARS } from "@/styles";

export const Component = styled.span`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;

  overflow: hidden;

  .background {
    position: fixed;
    width: 100%;
    height: 100%;

    background-size: 1.5rem 1.5rem;
    background-image: radial-gradient(
      rgba(138, 117, 240, 0.2) 1px,
      transparent 0
    );
    mask-image: radial-gradient(
      ellipse 50% 50% at 50% 50%,
      #000 70%,
      transparent 100%
    );

    [data-dark-mode="true"] & {
      background-size: initial;
      background-image: radial-gradient(
        ellipse 87.5% 87.5% at 50% 0,
        rgba(153, 138, 229, 0.2),
        hsla(0, 0%, 100%, 0)
      );
      mask-image: initial;
    }
  }

  .center-particles {
    flex-grow: 0;

    flex-basis: ${LAYOUT_WIDTH};
  }

  /* .lateral-particles {
    flex-grow: 1;
    width: calc(
      ${VARS.size.gold} * 4 + ${VARS.component.button.s.size} + 40.5px
    );

    background-color: rgba(118, 107, 140, 1);
  }

  .center-particles {
    flex-grow: 0;

    flex-basis: ${LAYOUT_WIDTH};

    background-color: rgba(138, 117, 240, 0.2);
  }

  @media (max-width: calc(100vw - 1062px)) {
    .lateral-particles {
    }
  } */
`;
