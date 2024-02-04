import styled from "@emotion/styled";
import { FONT_SIZE, type Size, type Value } from "@/styles";
import { type SerializedStyles } from "@emotion/react";

export interface Props {
  size?: Size;
  styled?: SerializedStyles;
}

interface Provider {
  size: Value;

  styled?: SerializedStyles;
}

interface NormalizedProps {
  size: Size;
}

export const adapter = (style?: Props): Provider => {
  const { size }: NormalizedProps = {
    size: style?.size || FONT_SIZE.xs,
  };

  return {
    size,

    styled: style?.styled,
  };
};

export const Component = styled.i<{ p: Provider }>`
  --size: ${({ p }) => p.size};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  font-size: var(--size);

  ${({ p }) => p.styled};
`;
