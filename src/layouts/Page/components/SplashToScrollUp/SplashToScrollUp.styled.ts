import {
  COLOR,
  MEDIA,
  MICROINT,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from "@/styles";
import styled from "@emotion/styled";

const DIMENSION = NOT_FONT_SIZE.l;

interface ConstProvider {
  width: Value;
  height: Value;

  mediaS: {
    left: Value;
  };
}

const cp: ConstProvider = {
  width: DIMENSION,
  height: DIMENSION,

  mediaS: {
    left: `calc(${DIMENSION} * -1)`,
  },
};

export const Component = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: ${NOT_FONT_SIZE["2xs"]};
  background-color: ${COLOR.a};
  box-shadow: ${shadowAdapter(2)};
  cursor: pointer;
  overflow: hidden;
  transition: left ${MICROINT.m} ease;
  animation: open-curtain 1s 1s ease forwards;

  @keyframes open-curtain {
    to {
      width: ${cp.width};
      height: ${cp.height};
    }
  }

  @media (max-width: ${MEDIA.s}) {
    @keyframes open-curtain {
      to {
        width: ${cp.width};
        height: ${cp.height};
        left: ${cp.mediaS.left};
      }
    }
  }

  .logo {
    width: ${NOT_FONT_SIZE["2xl"]};
    height: ${NOT_FONT_SIZE["2xl"]};
    object-fit: cover;
    animation: size 1s 1s ease forwards;
  }

  @keyframes size {
    to {
      width: ${cp.width};
      height: ${cp.height};
    }
  }
`;
