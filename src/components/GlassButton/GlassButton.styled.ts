import styled from "@emotion/styled";
import {
  COLOR,
  FONT_SIZE,
  GLASS_SET,
  TIME,
  NOT_FONT_SIZE,
  type Value,
  VARS,
} from "@/styles";

const SIZE = FONT_SIZE.xl;
const BORDER_RADIUS = NOT_FONT_SIZE["3xs"];

interface ConstProvider {
  width: Value;
  height: Value;
  borderRadius: Value;

  glassRefleccion: {
    borderRadius: Value;
  };

  content: {
    borderRadius: Value;
  };
}

const cp: ConstProvider = {
  width: SIZE,
  height: SIZE,
  borderRadius: BORDER_RADIUS,

  glassRefleccion: {
    borderRadius: BORDER_RADIUS,
  },

  content: {
    borderRadius: BORDER_RADIUS,
  },
};

export const Component = styled.button`
  position: relative;
  width: ${cp.width};
  height: ${cp.height};
  padding: 0;
  border: none;
  border-radius: ${cp.borderRadius};
  background-color: transparent;
  box-shadow: ${VARS.decorator.shadow[1]};
  cursor: pointer;
  transition: box-shadow ${TIME.xs} ease-out;
  ${GLASS_SET.this}

  :hover {
    color: ${COLOR.gs_0};
  }

  :active {
    box-shadow: ${VARS.decorator.shadow[0]};
  }

  .glass-button__glass-refleccion {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${cp.glassRefleccion.borderRadius};
    ${GLASS_SET.refleccion}
  }

  .glass-button__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: ${cp.content.borderRadius};
    ${GLASS_SET.content}
  }
`;
