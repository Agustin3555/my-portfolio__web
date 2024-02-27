import styled from "@emotion/styled";
import {
  type Color,
  TIME,
  NOT_FONT_SIZE,
  type Size,
  type Value,
} from "@/styles";

export interface Props {
  long?: Size;
  invert?: boolean;
  color: {
    light: Color;
    dark: Color;
  };
}

interface NormalizedProps {
  long?: Size;
  invert: boolean;
  color: {
    light: Color;
    dark: Color;
  };
}

interface Provider {
  width: Value;
  height: Value;
  backgroundColor: Value;

  DARK_MODE: {
    backgroundColor: Value;
  };
}

export const adapter = (style: Props): Provider => {
  const { long, invert, color }: NormalizedProps = {
    long: style.long,
    invert: style.invert || false,
    color: { light: style.color.light, dark: style.color.dark },
  };

  const longAux = long || "100%";
  const thickness = NOT_FONT_SIZE["6xs"];

  return {
    width: invert ? thickness : longAux,
    height: invert ? longAux : thickness,
    backgroundColor: color.light,

    DARK_MODE: {
      backgroundColor: color.dark,
    },
  };
};

export const HrComponent = styled.hr<{ p: Provider }>`
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};

  border: none;
  border-radius: ${NOT_FONT_SIZE["6xl"]};
  background-color: ${({ p }) => p.backgroundColor};

  transition: ${TIME.s} ease-out;

  body[data-dark-mode="true"] & {
    background-color: ${({ p }) => p.DARK_MODE.backgroundColor};
  }
`;

export const SpanComponent = styled.span<{ p: Provider }>`
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};

  border: none;
  border-radius: ${NOT_FONT_SIZE["6xl"]};
  background-color: ${({ p }) => p.backgroundColor};

  transition: ${TIME.s} ease-out;

  body[data-dark-mode="true"] & {
    background-color: ${({ p }) => p.DARK_MODE.backgroundColor};
  }
`;
