import {
  COLOR,
  COLOR_BRIGHT_A,
  COLOR_DARK_A,
  TIME,
  NOT_FONT_SIZE,
  VARS,
} from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.button`
  --size: ${VARS.component.button.m.size};
  --thickness: 0.1875rem;
  --mid-top: calc(50% - var(--thickness) * 0.5);

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: var(--size);
  height: var(--size);

  transition:
    width ${TIME.m} ease,
    height ${TIME.m} ease;

  .bar {
    position: absolute;
    height: var(--thickness);
    border-radius: ${NOT_FONT_SIZE["6xl"]};

    background-color: ${COLOR_BRIGHT_A};

    transition: background-color ${TIME.s} ease-out;
  }

  > * {
    --icon-size: ${VARS.component.button.m.iconSize};

    position: absolute;
    width: var(--icon-size);
    height: var(--icon-size);

    transition:
      scale ${TIME.s} ease,
      filter ${TIME.s} ease,
      opacity ${TIME.s} ease;
  }

  .hamburger-icon {
    .top {
      top: var(--thickness);
      width: 50%;
    }

    .mid {
      top: var(--mid-top);
      width: 100%;
    }

    .bot {
      bottom: var(--thickness);
      width: 75%;
    }
  }

  .x-icon {
    left: -0.265625rem;

    scale: 0;
    filter: blur(${NOT_FONT_SIZE["4xs"]});
    opacity: 0;

    > * {
      top: var(--mid-top);
      width: 109%;
    }

    .a {
      rotate: 45deg;
    }

    .b {
      rotate: -45deg;
    }
  }

  :hover .bar {
    background-color: ${COLOR.gs_19};
  }

  body[data-hamburger-menu-is-open="true"] & {
    --size: ${VARS.component.button.m.iconSize};

    .hamburger-icon {
      scale: 0;
      filter: blur(${NOT_FONT_SIZE["4xs"]});
      opacity: 0;
    }

    .x-icon {
      scale: initial;
      filter: initial;
      opacity: initial;
    }
  }

  body[data-dark-mode="true"] & {
    :hover .bar {
      background-color: ${COLOR.gs_0};
    }

    .bar {
      background-color: ${COLOR_DARK_A};
    }
  }
`;
