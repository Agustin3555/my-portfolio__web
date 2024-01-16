import {
  COLOR,
  COLOR_BRIGHT_A,
  COLOR_DARK_A,
  FONT_SIZE,
  MICROINT,
  NOT_FONT_SIZE,
  Value,
} from "@/styles";
import styled from "@emotion/styled";

const SIZE = FONT_SIZE.xl;
const THICKNESS = "0.1875rem";

interface ConstProvider {
  width: Value;
  height: Value;
  hamburgerAC: {
    bar: {
      height: Value;
      hamburgerIcon: {
        top: {
          top: Value;
        };
        mid: {
          top: Value;
        };
        bot: {
          bottom: Value;
        };
      };
      xIcon: {
        xBar: {
          top: Value;
        };
      };
    };
  };
}

const midTop = `calc(50% - ${THICKNESS} * 0.5)`;

const cp: ConstProvider = {
  width: SIZE,
  height: SIZE,
  hamburgerAC: {
    bar: {
      height: THICKNESS,
      hamburgerIcon: {
        top: {
          top: THICKNESS,
        },
        mid: {
          top: midTop,
        },
        bot: {
          bottom: THICKNESS,
        },
      },
      xIcon: {
        xBar: {
          top: midTop,
        },
      },
    },
  },
};

export const Component = styled.button`
  position: relative;
  width: ${cp.width};
  height: ${cp.height};
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  > * {
    position: absolute;
    inset: 0;
    transition:
      opacity ${MICROINT.s} ease,
      scale ${MICROINT.s} ease,
      filter ${MICROINT.s} ease;
  }

  .bar {
    position: absolute;
    height: ${cp.hamburgerAC.bar.height};
    border-radius: ${NOT_FONT_SIZE["6xl"]};
    background-color: ${COLOR_BRIGHT_A};
    transition: background-color ${MICROINT.s} ease-out;
  }

  .hamburger-icon {
    width: 100%;
    height: 100%;

    body[data-hamburger-menu-is-open="true"] & {
      opacity: 0;
      scale: 0;
      filter: blur(${NOT_FONT_SIZE["4xs"]});
    }

    .top {
      top: ${cp.hamburgerAC.bar.hamburgerIcon.top.top};
      width: 50%;
    }

    .mid {
      top: ${cp.hamburgerAC.bar.hamburgerIcon.mid.top};
      width: 100%;
    }

    .bot {
      bottom: ${cp.hamburgerAC.bar.hamburgerIcon.bot.bottom};
      width: 75%;
    }
  }

  .x-icon {
    left: -0.2656rem;
    width: 100%;
    height: 100%;

    body[data-hamburger-menu-is-open="false"] & {
      opacity: 0;
      scale: 0;
      filter: blur(${NOT_FONT_SIZE["4xs"]});
    }

    .x-bar {
      top: ${cp.hamburgerAC.bar.xIcon.xBar.top};
      width: 109%;
    }

    .a {
      transform: rotate(45deg);
    }

    .b {
      transform: rotate(-45deg);
    }
  }

  :hover .bar {
    background-color: ${COLOR.g_19};
  }

  body[data-dark-mode="true"] & {
    .bar {
      background-color: ${COLOR_DARK_A};
    }

    :hover .bar {
      background-color: ${COLOR.g_0};
    }
  }
`;
