import {
  COLOR,
  COLOR_BRIGHT_B,
  FONT,
  FONT_SIZE,
  MEDIA,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  type Value,
} from "@/styles";
import styled from "@emotion/styled";

interface ConstProvider {
  description: {
    titleGroup: {
      name: {
        color: Value;
      };
    };
  };
  DARK_MODE: {
    description: {
      titleGroup: {
        name: {
          color: Value;
        };
      };
    };
  };
}

const cp: ConstProvider = {
  description: {
    titleGroup: {
      name: {
        color: COLOR_BRIGHT_B,
      },
    },
  },
  DARK_MODE: {
    description: {
      titleGroup: {
        name: {
          color: COLOR.g_1,
        },
      },
    },
  },
};

export const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${NOT_FONT_SIZE.l};

  .desc {
    flex-grow: 1;
    flex-basis: calc(${NOT_FONT_SIZE["4xl"]} - ${NOT_FONT_SIZE.xl});

    display: flex;
    flex-direction: column;
    gap: ${NOT_FONT_SIZE.l};

    .title-group {
      .name {
        margin-bottom: ${NOT_FONT_SIZE.xs};
        font-family: ${FONT.s};
        font-size: ${FONT_SIZE["2xl"]};
        line-height: 1.25;
        word-spacing: initial;
        color: ${cp.description.titleGroup.name.color};
      }

      .rol {
        font-family: ${FONT.s};
        font-size: ${FONT_SIZE.l};
        word-spacing: initial;
        color: ${COLOR.b};
      }
    }

    .nav {
      display: flex;
      gap: ${NOT_FONT_SIZE.s};

      > * {
        opacity: 0;
        transform: translateY(100%);
        filter: blur(${NOT_FONT_SIZE["5xs"]});
        transition:
          opacity ${MICROINTERACTION.m} ease,
          transform ${MICROINTERACTION.m} ease,
          filter ${MICROINTERACTION.m} ease;
        transition-delay: calc(${MICROINTERACTION.s} * var(--i));
      }

      &[data-show="true"] > * {
        opacity: 1;
        transform: initial;
        filter: initial;
      }
    }
  }

  .extra-info {
    --gap: ${NOT_FONT_SIZE.m};

    flex-basis: calc(${NOT_FONT_SIZE["4xl"]} + var(--gap));

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${NOT_FONT_SIZE.s};

    .x {
      position: relative;
      aspect-ratio: 1 / 1;

      .slider {
        width: calc(100% - var(--gap));
      }

      .glass-panel {
        position: absolute;
        right: 0;
        bottom: 0;
        aspect-ratio: 1 / 1;
        width: calc(100% - var(--gap));

        .content {
          height: 100%;
        }
      }

      @media (max-width: ${MEDIA["2xs"]}) {
        --gap: ${NOT_FONT_SIZE.s};
      }
    }
  }

  body[data-dark-mode="true"] & {
    .desc .title-group .name {
      color: ${cp.DARK_MODE.description.titleGroup.name.color};
    }
  }
`;
