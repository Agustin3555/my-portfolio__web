import styled from "@emotion/styled";
import { COLOR, NOT_FONT_SIZE, VARS, type Size, type Value } from "@/styles";
import { dropRandom, randomInt } from "@/tools";

const ANIMATION_DURATION = 8;
const ANIMATION_MISMATCH = NOT_FONT_SIZE.xs;

type Color = COLOR.a | COLOR.b | COLOR.c | COLOR.d;

export interface Props {
  size?: Size;
  borderRadius?: Size;
  backgroundColor?: Color;
}

export interface NormalizedProps {
  size: Size;
  borderRadius: Size;
  backgroundColor: Color;
}

interface Provider {
  width: Value;
  height: Value;
  borderRadius: Value;
  backgroundColor: Value;
  animationDelay: Value;
}

const colors: Color[] = [COLOR.a, COLOR.b, COLOR.c, COLOR.d];

export const adapter = (style?: Props): Provider => {
  const normalizedProps: NormalizedProps = {
    size: style?.size || NOT_FONT_SIZE.l,
    borderRadius: style?.borderRadius || NOT_FONT_SIZE.xs,
    backgroundColor: style?.backgroundColor || dropRandom(colors),
  };

  const size = normalizedProps.size;

  return {
    width: size,
    height: size,
    borderRadius: normalizedProps.borderRadius,
    backgroundColor: normalizedProps.backgroundColor,
    animationDelay: `${randomInt({ max: ANIMATION_DURATION })}s`,
  };
};

export const Component = styled.div<{ p: Provider }>`
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};
  border-radius: ${({ p }) => p.borderRadius};
  background-color: ${({ p }) => p.backgroundColor};
  box-shadow: ${VARS.decorator.shadow[1]};
  transform: translateY(${ANIMATION_MISMATCH});
  animation: levitation ${ANIMATION_DURATION}s ease-in-out infinite alternate;
  animation-delay: ${({ p }) => p.animationDelay};

  @keyframes levitation {
    from {
      transform: translateY(${ANIMATION_MISMATCH});
    }
    to {
      transform: translateY(calc(${ANIMATION_MISMATCH} * -1));
    }
  }
`;
