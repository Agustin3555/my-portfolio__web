import styled from "@emotion/styled";
import { FONT_SIZE, type Size, type Value } from "@/styles";

export interface Props {
  size?: Size;
}

interface Provider {
  size: Value;
}

export const adapter = ({ size = FONT_SIZE.xs }: Props): Provider => {
  return {
    size,
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
`;
