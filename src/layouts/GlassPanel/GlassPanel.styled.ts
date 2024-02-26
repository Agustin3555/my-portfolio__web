import styled from "@emotion/styled";
import { NOT_FONT_SIZE, type Size, type Value, VARS } from "@/styles";

interface Provider {
  borderRadius: Value;

  before: {
    borderRadius: Value;
  };

  content: {
    padding: Value;
    borderRadius: Value;
  };
}

export interface Props {
  padding?: Size;
  borderRadius?: Size;
}

export const adapter = ({
  padding = NOT_FONT_SIZE["3xs"],
  borderRadius = NOT_FONT_SIZE["4xs"],
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
`;
