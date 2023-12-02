import {
  COLOR,
  COLOR_BRIGHT_B,
  FONT,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
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
  align-items: center;
  gap: ${NOT_FONT_SIZE.xl};

  @media (max-width: 98.4375rem) {
    flex-direction: column;
  }

  .desc {
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

  body[data-dark-mode="true"] & {
    .desc .title-group .name {
      color: ${cp.DARK_MODE.description.titleGroup.name.color};
    }
  }
`;
