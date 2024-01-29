import {
  COLOR,
  MAIN_GAP,
  TIME,
  NOT_FONT_SIZE,
  type Value,
  shadowAdapter,
} from "@/styles";
import styled from "@emotion/styled";

const INDICATOR_SIZE = "0.6875rem";
const GAP = `calc(${MAIN_GAP} * 0.5)`;
const PATTERN_BACKGROUND_GAP = MAIN_GAP;
const PATTERN_DOT_SIZE = NOT_FONT_SIZE["6xs"];

export interface Props {
  aspectRatio?: number[];
}

interface Provider {
  aspectRatio: Value;

  itemsC: {
    item: {
      aspectRatio: Value;
    };
  };
}

interface NormalizedProps {
  aspectRatio: number[];
}

export const adapter = (style?: Props): Provider => {
  const { aspectRatio }: NormalizedProps = {
    aspectRatio: style?.aspectRatio || [16, 9],
  };

  const aspectRatioInCommon = [aspectRatio[0], aspectRatio[1]].join(" / ");

  return {
    aspectRatio: aspectRatioInCommon,

    itemsC: {
      item: {
        aspectRatio: aspectRatioInCommon,
      },
    },
  };
};

interface ConstProvider {
  backgroundImage: Value;
  backgroundSize: Value;
  backgroundPosition: Value;
  controls: {
    indicators: {
      item: {
        ACTIVATED: {
          width: Value;
        };
      };
    };
  };
  DARK_MODE: {
    backgroundImage: Value;
  };
}

const patternBackgroundBright = `
  radial-gradient(
    ${COLOR.gs_6} ${PATTERN_DOT_SIZE}, transparent ${PATTERN_DOT_SIZE}
  )
`;

const patternBackgroundDark = `
  radial-gradient(
    ${COLOR.gs_12} ${PATTERN_DOT_SIZE}, transparent ${PATTERN_DOT_SIZE}
  )
`;

const cp: ConstProvider = {
  backgroundImage: `${patternBackgroundBright}, ${patternBackgroundBright}`,
  backgroundSize: `calc(${PATTERN_BACKGROUND_GAP} * 2) calc(${PATTERN_BACKGROUND_GAP} * 2)`,
  backgroundPosition: `0 0, ${PATTERN_BACKGROUND_GAP} ${PATTERN_BACKGROUND_GAP}`,
  controls: {
    indicators: {
      item: {
        ACTIVATED: {
          width: `calc(${INDICATOR_SIZE} * 3)`,
        },
      },
    },
  },
  DARK_MODE: {
    backgroundImage: `${patternBackgroundDark}, ${patternBackgroundDark}`,
  },
};

export const Component = styled.div<{ p: Provider }>`
  position: relative;
  aspect-ratio: ${({ p }) => p.aspectRatio};
  border-radius: ${NOT_FONT_SIZE.xs};
  box-shadow: ${shadowAdapter(2)};
  overflow: hidden;

  :hover .controls-C .controls .control {
    opacity: 1;
  }

  .items-C {
    height: 100%;

    astro-slot {
      display: flex;
      height: 100%;

      img {
        flex-grow: 0;
        flex-shrink: 0;

        width: 100%;
        height: 100%;
        aspect-ratio: ${({ p }) => p.itemsC.item.aspectRatio};
        object-fit: contain;
      }
    }
  }

  .controls-C {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    color: ${COLOR.gs_4};

    .controls {
      display: flex;
      align-items: center;
      gap: ${GAP};
      margin: calc(${GAP} * 2);

      .control {
        opacity: 0;
        transition:
          box-shadow ${TIME.xs} ease-out,
          opacity ${TIME.s} ease-out;

        @media (hover: none) and (any-hover: none) {
          opacity: 1;
        }
      }

      .indicators {
        display: flex;
        gap: ${INDICATOR_SIZE};

        .item {
          width: ${INDICATOR_SIZE};
          height: ${INDICATOR_SIZE};
          border-radius: ${NOT_FONT_SIZE["6xl"]};
          background-color: ${COLOR.gs_12};
          box-shadow: ${shadowAdapter(2)};
          opacity: 0.75;
          transition:
            width ${TIME.l} ease-out,
            background-color ${TIME.s} ease-out;

          &[data-activated="true"] {
            width: ${cp.controls.indicators.item.ACTIVATED.width};
            background-color: ${COLOR.gs_4};
          }
        }
      }
    }
  }

  &[data-fullscreen="true"] {
    border-radius: 0;

    .items-C img {
      width: 100vw;
      height: 100vh;
    }
  }
`;
