import {
  type Color,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  type Size,
  type Value,
} from "@/styles";
import styled from "@emotion/styled";

export interface Props {
  long?: Size;
  thickness?: Size;
  invert?: boolean;
  backgroundColor: {
    bright?: Color;
    dark: Color;
  };
}

interface NormalizedProps {
  long?: Size;
  thickness: Size;
  invert: boolean;
  backgroundColor: {
    bright: Color;
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
  const normalizedProps: NormalizedProps = {
    long: style.long,
    thickness: style.thickness || NOT_FONT_SIZE["6xs"],
    invert: style.invert || false,
    backgroundColor: {
      bright: style.backgroundColor.bright || style.backgroundColor.dark,
      dark: style.backgroundColor.dark,
    },
  };

  const { long, thickness, invert, backgroundColor } = normalizedProps;

  const longAux = long || "100%";

  return {
    width: invert ? longAux : thickness,
    height: invert ? thickness : longAux,
    backgroundColor: backgroundColor.bright,

    DARK_MODE: {
      backgroundColor: backgroundColor.dark,
    },
  };
};

export const Component = styled.div<{ p: Provider }>`
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};
  border-radius: ${NOT_FONT_SIZE["6xl"]};
  background-color: ${({ p }) => p.backgroundColor};
  transition: background-color ${MICROINTERACTION.s} ease-out;

  body[data-dark-mode="true"] & {
    background-color: ${({ p }) => p.DARK_MODE.backgroundColor};
  }
`;
