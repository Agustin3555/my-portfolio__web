import styled from "@emotion/styled";
import {
  COLOR,
  FONT_SIZE,
  TIME,
  NOT_FONT_SIZE,
  type Value,
  VARS,
} from "@/styles";

const POINT_3_PADDING = `calc(${NOT_FONT_SIZE["2xs"]} - ${NOT_FONT_SIZE["6xs"]})`;
export const POINT_2_PADDING = NOT_FONT_SIZE["3xs"];
const POINT_1_SIZE = NOT_FONT_SIZE["2xs"];

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

  MEDIA_405: {
    itemGap: {
      paddingLeft: Value;
    };
  };
}

const pointRadius = `calc(${POINT_3_PADDING} + ${POINT_2_PADDING} + ${POINT_1_SIZE} * 0.5)`;
const halfLineWidth = `calc(var(--line-thickness) * 0.5)`;

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
    paddingLeft: `calc(var(--time-width) + var(--gap) + ${pointRadius} + ${halfLineWidth})`,
  },

  MEDIA_405: {
    itemGap: {
      paddingLeft: `calc(${pointRadius} + ${halfLineWidth})`,
    },
  },
};

// TODO: Eliminar todo lo anterior

enum GRID_L {
  header = "header",
  aboutTime = "about-time",
  links = "links",
  bullet = "bullet",
  lineExtensionLayout = "line-extension-layout",
}

export const Component = styled.li`
  --gap: ${VARS.size.gold};
  --time-width: 7rem;
  --line-thickness: ${NOT_FONT_SIZE["6xs"]};

  display: flex;
  flex-direction: column;

  .item {
    display: grid;

    grid-template:
      "${GRID_L.aboutTime}  ${GRID_L.bullet}              ${GRID_L.header}" auto
      ".                    ${GRID_L.lineExtensionLayout} ${GRID_L.links}" auto /
      var(--time-width) auto 1fr;

    column-gap: var(--gap);

    header {
      grid-area: ${GRID_L.header};
      justify-self: flex-start;

      .header-content {
        display: flex;
        flex-direction: column;
        gap: var(--gap);

        .institution-name {
          font-size: ${FONT_SIZE.xs};

          color: ${COLOR.b};
        }
      }
    }

    .about-time {
      grid-area: ${GRID_L.aboutTime};
      align-self: center;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      word-spacing: calc(0.0625rem / 4);

      > * {
        font-size: ${FONT_SIZE.xs};
      }

      .end-date {
        color: ${COLOR.b_d2};
      }

      .duration {
        color: ${COLOR.gs_10};
      }
    }

    .links {
      grid-area: ${GRID_L.links};

      display: flex;
      align-items: flex-start;
      margin-top: var(--gap);
    }

    .bullet {
      grid-area: ${GRID_L.bullet};

      position: relative;
      display: flex;
      justify-items: center;
      align-items: center;

      .point-3 {
        padding: ${POINT_3_PADDING};
        border-width: var(--line-thickness);

        border-style: dashed;
        border-radius: ${NOT_FONT_SIZE["6xl"]};
        border-color: ${COLOR.gs_8};

        transition: border-color ${TIME.s} ease-out;

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

    .line-extension-layout {
      grid-area: ${GRID_L.lineExtensionLayout};
      justify-self: center;
    }
  }

  .item-gap {
    height: calc(var(--gap) * 3);
    padding-left: ${cp.itemGap.paddingLeft};

    .gap-line {
      height: 100%;
    }
  }

  .line {
    width: var(--line-thickness);
    background-color: ${COLOR.gs_6};
    transition: background-color ${TIME.s} ease-out;
  }

  @media (max-width: 40.5rem) {
    .item {
      grid-template:
        "${GRID_L.bullet}               ${GRID_L.aboutTime}" auto
        "${GRID_L.lineExtensionLayout}  ${GRID_L.header}" auto
        "${GRID_L.lineExtensionLayout}  ${GRID_L.links}" auto /
        auto 1fr;

      header {
        margin: var(--gap) 0;
      }

      .links {
        margin: 0;
      }

      .about-time {
        justify-self: flex-start;

        align-items: flex-start;
      }
    }

    .item-gap {
      padding-left: ${cp.MEDIA_405.itemGap.paddingLeft};
    }
  }

  body[data-dark-mode="true"] & {
    .item {
      .about-time {
        .end-date {
          color: ${COLOR.b_l2};
        }

        .duration {
          color: ${COLOR.gs_6};
        }
      }

      .bullet .point-3 {
        border-color: ${COLOR.gs_9};
      }
    }

    .line {
      background-color: ${COLOR.gs_10};
    }
  }
`;
