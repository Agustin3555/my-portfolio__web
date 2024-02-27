import styled from "@emotion/styled";
import { NOT_FONT_SIZE, type Size, type Value, VARS } from "@/styles";

export interface Props {
  width?: Size;
  height?: Size;
  borderRadius?: Size;
}

interface NormalizedProps {
  width: Size;
  height: Size;
  borderRadius: Size;
}

interface Provider {
  borderRadius: Value;

  span: {
    width: Value;
    height: Value;
  };
}

export const adapter = (style: Props): Provider => {
  const { width, height, borderRadius }: NormalizedProps = {
    width: style.width || "100%",
    height: style.height || "100%",
    borderRadius: style.borderRadius || NOT_FONT_SIZE.xs,
  };

  return {
    borderRadius,

    span: {
      width,
      height,
    },
  };
};

export const Component = styled.span<{ p: Provider }>`
  --border-radius: ${({ p }) => p.borderRadius};

  border-radius: var(--border-radius);

  box-shadow: ${VARS.decorator.shadow[1]};

  ::before {
    border-radius: var(--border-radius);
  }

  span {
    width: ${({ p }) => p.span.width};
    height: ${({ p }) => p.span.height};
    border-radius: var(--border-radius);
  }
`;
