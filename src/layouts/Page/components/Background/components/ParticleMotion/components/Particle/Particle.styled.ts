import styled from "@emotion/styled";
import {
  COLOR,
  NOT_FONT_SIZE,
  FONT_SIZE,
  type Color,
  type Value,
  type Size,
  VARS,
} from "@/styles";
import { dropRandom, randomInt } from "@/tools";

const MAX_CENTER_OFFSET = 128;
const MIN_DURATION = 30;
const MAX_DURATION = 60;

const DIMENSIONS: Size[] = [FONT_SIZE.l, NOT_FONT_SIZE.m, NOT_FONT_SIZE.l];

interface Provider {
  left: Value;
  width: Value;
  height: Value;
  backgroundColor: Value;
  animation: Value;
}

export interface Props {
  xPosition: number;
  distanceToGo: number;
}

const colors: Color[] = [COLOR.a, COLOR.b, COLOR.c, COLOR.d];

export const adapter = ({ xPosition, distanceToGo }: Props): Provider => {
  let centerOffset = randomInt({ max: MAX_CENTER_OFFSET });

  if (randomInt({ max: 1 }) === 0) centerOffset *= -1;

  const dimensions = dropRandom(DIMENSIONS);

  const duration =
    randomInt({ min: MIN_DURATION, max: MAX_DURATION }) *
    distanceToGo *
    0.000625;

  const delay = randomInt({ max: duration });

  return {
    left: `${xPosition + centerOffset}px`,
    width: dimensions,
    height: dimensions,
    backgroundColor: dropRandom(colors),
    animation: `lavaLampMotion ${duration}s -${delay}s ease-in infinite alternate`,
  };
};

export const Component = styled.div<{ p: Provider }>`
  position: absolute;
  left: ${({ p }) => p.left};
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};
  border-radius: 15%;
  box-shadow: ${VARS.decorator.shadow[0]};
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
