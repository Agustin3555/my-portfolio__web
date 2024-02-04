import styled from "@emotion/styled";
import { NOT_FONT_SIZE, type Size, type Value, VARS } from "@/styles";
import { type SerializedStyles } from "@emotion/react";

interface Provider {
  borderRadius: Value;

  before: {
    borderRadius: Value;
  };

  content: {
    padding: Value;
    borderRadius: Value;
  };

  styled?: Value;
}

export interface Props {
  padding?: Size;
  borderRadius?: Size;
  styled?: SerializedStyles;
}

export const adapter = ({
  padding = NOT_FONT_SIZE["3xs"],
  borderRadius = NOT_FONT_SIZE["4xs"],
  styled,
}: Props): Provider => {
  return {
    borderRadius,

    before: {
      borderRadius,
    },

    content: {
      padding,
      borderRadius,
    },

    styled,
  };
};

export const Component = styled.div<{ p: Provider }>`
  border-radius: ${({ p }) => p.borderRadius};
  box-shadow: ${VARS.decorator.shadow[1]};

  ::before {
    border-radius: ${({ p }) => p.before.borderRadius};
  }

  > div {
    padding: ${({ p }) => p.content.padding};
    border-radius: ${({ p }) => p.content.borderRadius};
  }

  ${({ p }) => p.styled};
`;
