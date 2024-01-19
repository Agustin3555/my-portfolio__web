import {
  COLOR,
  NOT_FONT_SIZE,
  type Color,
  type NotFontSize,
  type Value,
  shadowAdapter,
} from "@/styles";
import { dropRandom, randomInt } from "@/tools";
import styled from "@emotion/styled";

const MAX_CENTER_OFFSET = 128;
const MIN_DURATION = 30;
const MAX_DURATION = 60;

const DIMENSIONS: NotFontSize[] = [
  NOT_FONT_SIZE.s,
  NOT_FONT_SIZE.m,
  NOT_FONT_SIZE.l,
  NOT_FONT_SIZE.xl,
];

interface Provider {
  left: Value;
  width: Value;
  height: Value;
  backgroundColor: Value;
  animation: Value;
}

export interface Props {
  xPosition: number;
}

const colors: Color[] = [COLOR.a, COLOR.b, COLOR.c, COLOR.d];

export const adapter = (style: Props): Provider => {
  const { xPosition } = style;

  let centerOffset = randomInt({ max: MAX_CENTER_OFFSET });

  if (randomInt({ max: 1 }) === 0) centerOffset *= -1;

  const dimensions = dropRandom(DIMENSIONS);
  const duration = randomInt({ min: MIN_DURATION, max: MAX_DURATION });

  return {
    left: `${xPosition + centerOffset}px`,
    width: dimensions,
    height: dimensions,
    backgroundColor: dropRandom(colors),
    animation: `lavaLampMotion ${duration}s ease-in infinite alternate`,
  };
};

export const Component = styled.div<{ p: Provider }>`
  position: absolute;
  left: ${({ p }) => p.left};
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};
  border-radius: ${NOT_FONT_SIZE["2xs"]};
  box-shadow: ${shadowAdapter(1)};
  background-color: ${({ p }) => p.backgroundColor};
  animation: ${({ p }) => p.animation};

  @keyframes lavaLampMotion {
    0% {
      bottom: calc(${DIMENSIONS.at(-1)} * -1);
      transform: rotate(0);
    }
    100% {
      bottom: calc(100% + ${DIMENSIONS.at(-1)});
      transform: rotate(360deg);
    }
  }
`;
