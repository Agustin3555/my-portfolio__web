import {
  BGC_BRIGHT_A,
  BGC_DARK_A,
  COLOR,
  TIME,
  NOT_FONT_SIZE,
  VARS,
  TIMING_FUNC,
} from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.button`
  --size: ${VARS.component.button.s.size};
  --padding: ${NOT_FONT_SIZE["5xs"]};

  width: var(--size);
  height: var(--size);
  padding: var(--padding);
  border-radius: 100%;

  color: ${COLOR.gs_12};
  background-color: ${COLOR.gs_8};

  transition:
    color ${TIME.s} ease-out,
    background-color ${TIME.s} ease-out;

  :hover .switch {
    rotate: -22.5deg;
  }

  :active .switch {
    scale: 90%;
  }

  .switch {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;

    background-color: ${BGC_BRIGHT_A};

    transition:
      background-color ${TIME.s} ease-out,
      scale ${TIME.s} ${TIMING_FUNC.a},
      rotate 0.6s ${TIMING_FUNC.a};

    > * {
      position: absolute;

      transition:
        scale ${TIME.m} ease-out,
        rotate ${TIME.m} ease-out,
        opacity ${TIME.m} ease-out;
    }

    .sun {
      scale: 0;
      rotate: 135deg;
      opacity: 0;
    }
  }

  body[data-dark-mode="true"] & {
    color: ${COLOR.gs_4};
    background-color: ${COLOR.gs_18};

    .switch {
      background-color: ${BGC_DARK_A};

      .sun {
        scale: initial;
        rotate: initial;
        opacity: initial;
      }

      .moon {
        scale: 0;
        rotate: 135deg;
        opacity: 0;
      }
    }
  }
`;
