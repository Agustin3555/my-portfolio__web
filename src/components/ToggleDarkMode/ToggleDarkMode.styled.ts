import {
  BGC_BRIGHT_A,
  BGC_DARK_A,
  COLOR,
  TIME,
  NOT_FONT_SIZE,
  type Value,
} from "@/styles";
import styled from "@emotion/styled";

const SIZE = NOT_FONT_SIZE.m;
const GAP = NOT_FONT_SIZE["5xs"];

interface ConstProvider {
  width: Value;
  height: Value;
  padding: Value;
  backgroundColor: Value;

  fakeButton: {
    width: Value;
    height: Value;
    backgroundColor: Value;
  };

  DARK_MODE: {
    backgroundColor: Value;

    fakeButton: {
      backgroundColor: Value;
    };
  };
}

const buttonDimension = `calc(${SIZE} - ${GAP} * 2)`;

const cp: ConstProvider = {
  width: SIZE,
  height: SIZE,
  padding: GAP,
  backgroundColor: COLOR.gs_8,

  fakeButton: {
    width: buttonDimension,
    height: buttonDimension,
    backgroundColor: BGC_BRIGHT_A,
  },

  DARK_MODE: {
    backgroundColor: COLOR.gs_18,

    fakeButton: {
      backgroundColor: BGC_DARK_A,
    },
  },
};

export const Component = styled.button`
  width: ${cp.width};
  height: ${cp.height};
  padding: ${cp.padding};
  border: none;
  border-radius: ${NOT_FONT_SIZE["6xl"]};
  background-color: ${cp.backgroundColor};
  cursor: pointer;
  overflow: hidden;
  transition: background-color ${TIME.s} ease-out;

  :hover .fake-button {
    rotate: -22.5deg;
  }

  :active .fake-button {
    scale: 87.5%;
  }

  .fake-button {
    position: relative;
    width: ${cp.fakeButton.width};
    height: ${cp.fakeButton.height};
    border-radius: ${NOT_FONT_SIZE["6xl"]};
    background-color: ${cp.fakeButton.backgroundColor};
    transition:
      background-color ${TIME.s} ease-out,
      scale ${TIME.xs} ease-out,
      rotate ${TIME.m} ease-out;

    .sun,
    .moon {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition:
        opacity ${TIME.m} ease-out,
        scale ${TIME.m} ease-out,
        rotate ${TIME.m} ease-out;
    }

    .sun {
      color: ${COLOR.gs_4};
      opacity: 0;
      scale: 0;
      rotate: 135deg;
    }

    .moon {
      color: ${COLOR.gs_12};
      opacity: 1;
      scale: initial;
      rotate: initial;
    }
  }

  body[data-dark-mode="true"] & {
    background-color: ${cp.DARK_MODE.backgroundColor};

    .fake-button {
      background-color: ${cp.DARK_MODE.fakeButton.backgroundColor};

      .sun {
        opacity: 1;
        scale: initial;
        rotate: initial;
      }

      .moon {
        opacity: 0;
        scale: 0;
        rotate: 135deg;
      }
    }
  }
`;
