import {
  COLOR,
  FONT,
  FONT_SIZE,
  GLASS_SET,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
  type Value,
} from "@/styles";
import styled from "@emotion/styled";

const GAP = NOT_FONT_SIZE.s;
const ITEM_GAP = NOT_FONT_SIZE.l;
const DATE_WIDTH = "6rem";
const HEADING_MIN_WIDTH = `calc(${GAP} * 12)`;
const POINT_3_PADDING = `calc(${NOT_FONT_SIZE["2xs"]} - ${NOT_FONT_SIZE["6xs"]})`;
export const POINT_2_PADDING = NOT_FONT_SIZE["3xs"];
const POINT_1_SIZE = NOT_FONT_SIZE["2xs"];
const LINE_WIDTH = NOT_FONT_SIZE["6xs"];

interface ConstProvider {
  item: {
    pointer: {
      pointerLine: {
        left: Value;
        height: Value;
      };
    };
  };

  itemGap: {
    paddingLeft: Value;
  };

  MEDIA_74: {
    itemGap: {
      paddingLeft: Value;
    };
  };
}

const pointRadius = `calc(${POINT_3_PADDING} + ${POINT_2_PADDING} + ${POINT_1_SIZE} * 0.5)`;
const halfLineWidth = `calc(${LINE_WIDTH} * 0.5)`;

const cp: ConstProvider = {
  item: {
    pointer: {
      pointerLine: {
        left: `calc(50% - ${halfLineWidth})`,
        height: `calc(50% - ${pointRadius})`,
      },
    },
  },

  itemGap: {
    paddingLeft: `calc(${DATE_WIDTH} + ${GAP} + ${pointRadius} + ${halfLineWidth})`,
  },

  MEDIA_74: {
    itemGap: {
      paddingLeft: `calc(${pointRadius} + ${halfLineWidth})`,
    },
  },
};

enum ITEM_L {
  date = "date",
  pointer = "pointer",
  line = "line",
  layout = "layout",
}

export const Component = styled.li`
  display: flex;
  flex-direction: column;

  .item {
    display: grid;

    grid-template:
      "${ITEM_L.date} ${ITEM_L.pointer} ${ITEM_L.layout}" auto /
      ${DATE_WIDTH} auto 1fr;

    column-gap: ${GAP};

    .pointer {
      grid-area: ${ITEM_L.pointer};

      position: relative;
      display: flex;
      justify-items: center;
      align-items: center;

      .point-3 {
        padding: ${POINT_3_PADDING};
        border-width: ${LINE_WIDTH};
        border-style: dashed;
        border-color: ${COLOR.g_6};
        border-radius: ${NOT_FONT_SIZE["6xl"]};
        transition: border-color ${MICROINTERACTION.s} ease-out;

        .point-1 {
          width: ${POINT_1_SIZE};
          height: ${POINT_1_SIZE};
          border-radius: ${NOT_FONT_SIZE["6xl"]};
          background-color: ${COLOR.b};
        }
      }

      .pointer-line {
        position: absolute;
        left: ${cp.item.pointer.pointerLine.left};
        height: ${cp.item.pointer.pointerLine.height};
      }

      .top {
        top: 0;
      }

      .bot {
        bottom: 0;
      }
    }

    .extension-line {
      grid-area: ${ITEM_L.line};
      justify-self: center;

      display: none;
    }

    .date {
      grid-area: ${ITEM_L.date};

      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: ${FONT_SIZE.xs};
      word-spacing: calc(0.0625rem / 4);
    }

    .layout {
      grid-area: ${ITEM_L.layout};

      display: flex;
      gap: ${GAP};

      .certificate {
        flex-grow: 1.5;
        flex-basis: 0;

        display: flex;
        aspect-ratio: 16 / 9;
        background-image: url("/bg_pattern.png");
        background-color: ${COLOR.g_2};
        border-radius: ${NOT_FONT_SIZE["2xs"]};
        ${GLASS_SET.content}
        box-shadow: ${shadowAdapter(2)};
        overflow: hidden;
        transition: background-color ${MICROINTERACTION.s} ease-out;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .group {
        flex-grow: 3;
        flex-basis: 0;

        display: flex;
        flex-direction: column;
        gap: ${GAP};

        .heading {
          /* min-width: ${HEADING_MIN_WIDTH}; */

          .heading-content {
            display: flex;
            flex-direction: column;
            gap: ${GAP};

            .title {
              font-family: ${FONT.s};
              font-size: ${FONT_SIZE.l};
              line-height: 1.25;
            }

            .subtitle {
              color: ${COLOR.b};
              font-size: ${FONT_SIZE.xs};
            }
          }
        }

        .links {
          display: flex;
          align-items: flex-start;
        }
      }
    }
  }

  .item-gap {
    height: ${ITEM_GAP};
    padding-left: ${cp.itemGap.paddingLeft};

    .gap-line {
      height: 100%;
    }
  }

  .line {
    width: ${LINE_WIDTH};
    background-color: ${COLOR.g_6};
    transition: background-color ${MICROINTERACTION.s} ease-out;
  }

  @media (max-width: 65.625rem) {
    .item {
      grid-template:
        "${ITEM_L.pointer}  ${ITEM_L.date}" auto
        "${ITEM_L.line}     ${ITEM_L.layout}" auto /
        auto 1fr;

      .extension-line {
        display: initial;
      }

      .date {
        justify-self: flex-start;
      }

      .layout {
        margin-top: calc(${GAP} - ((2.625rem - ${FONT_SIZE.xs}) / 2));

        .certificate {
          flex-grow: 2;
        }
      }
    }

    .item-gap {
      padding-left: ${cp.MEDIA_74.itemGap.paddingLeft};
    }
  }

  @media (max-width: 32.8125rem) {
    .item {
      .layout {
        flex-direction: column;

        .certificate {
          flex-grow: 1;
          flex-basis: initial;

          /*
            TODO: en cierta medida (para algunos items) se podria mejorar la visual.
            El "certificate" podria ser igual de largo que el "heading".
          */
        }
      }
    }
  }

  body[data-dark-mode="true"] & {
    .item {
      .layout .certificate {
        background-image: url("/bg_pattern_dark.png");
        background-color: ${COLOR.g_15};
      }

      .pointer .point-3 {
        border-color: ${COLOR.g_10};
      }
    }

    .line {
      background-color: ${COLOR.g_10};
    }
  }
`;
