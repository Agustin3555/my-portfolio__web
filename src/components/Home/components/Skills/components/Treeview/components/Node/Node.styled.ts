import {
  COLOR,
  FONT_SIZE,
  MICROINT,
  NOT_FONT_SIZE,
  shadowAdapter,
  type Value,
} from "@/styles";
import styled from "@emotion/styled";

const GAP = NOT_FONT_SIZE["3xs"];
const NAME_FONT_SIZE = FONT_SIZE.xs;
const ICON_SIZE = NOT_FONT_SIZE.s;

interface ConstProvider {
  technology: {
    paddingLeft: Value;
  };
  childTech: {
    item: {
      bulletPoint: {
        width: Value;
      };
    };
    extensionContainer: {
      width: Value;
    };
  };
}

const bulletPointContainerSize = `calc(${GAP} * 5)`;

const cp: ConstProvider = {
  technology: {
    paddingLeft: `calc(${GAP} + (${ICON_SIZE} - ${NAME_FONT_SIZE}) * 0.5)`,
  },
  childTech: {
    item: {
      bulletPoint: {
        width: bulletPointContainerSize,
      },
    },
    extensionContainer: {
      width: bulletPointContainerSize,
    },
  },
};

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP};
  width: 100%;

  .tech {
    display: flex;
    justify-content: space-between;
    gap: calc(${GAP} * 3);
    padding: ${GAP};
    padding-left: ${cp.technology.paddingLeft};
    border-radius: ${NOT_FONT_SIZE["3xs"]};
    opacity: 0.25;

    transition:
      background-color ${MICROINT.s} ease-out,
      box-shadow ${MICROINT.s} ease-out,
      scale ${MICROINT.s} ease-out,
      opacity ${MICROINT.s} ease-out;

    :hover {
      background-color: ${COLOR.g_0};
      box-shadow: ${shadowAdapter(2)};
      scale: 1.005;

      .names {
        color: ${COLOR.g_18};
      }
    }

    &[data-show="true"] {
      opacity: 1;
    }

    .separator {
      width: ${NOT_FONT_SIZE["6xs"]};
      height: ${NOT_FONT_SIZE["2xs"]};
      border-radius: ${NOT_FONT_SIZE["6xl"]};
      background-color: ${COLOR.g_10};

      transition: background-color ${MICROINT.s} ease-out;
    }

    .names {
      display: flex;
      align-items: center;
      gap: calc(${GAP} * 2);
      /* TODO: comentar */
      width: calc(10.5rem - var(--level) * 36px);

      transition: color ${MICROINT.s} ease-out;

      /* white-space: nowrap; */
      /* overflow: hidden; */
      /* outline: solid 1px coral; */

      .name {
        font-size: ${NAME_FONT_SIZE};
        line-height: 1;

        /* text-overflow: ellipsis; */
      }
    }

    .graphics {
      flex-grow: 0.5;

      display: flex;
      align-items: center;
      gap: calc(${GAP} * 3);
      justify-content: space-between;

      .icons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: ${GAP};
        /* TODO: comentar */
        width: 4.0625rem;
        filter: saturate(0.9);

        .icon {
          width: ${ICON_SIZE};
          height: ${ICON_SIZE};
          object-fit: contain;

          transition: filter ${MICROINT.s} ease-out;
        }

        .invert-in-dark-mode {
          --invert-in-dark-mode: invert(0.5) brightness(180%);
        }
      }

      .level-bar {
        flex-grow: 1;

        position: relative;
        min-width: calc(${NOT_FONT_SIZE.s} * 4);
        height: ${NOT_FONT_SIZE.s};
        border-radius: calc(${NOT_FONT_SIZE["2xs"]} - ${NOT_FONT_SIZE["3xs"]});
        background-color: ${COLOR.g_2};

        transition: background-color ${MICROINT.s} ease-out;

        .bar {
          position: relative;
          height: 100%;
          border-radius: calc(
            ${NOT_FONT_SIZE["2xs"]} - ${NOT_FONT_SIZE["3xs"]}
          );
          background-color: ${COLOR.b};
        }

        .separators {
          position: absolute;
          right: 0.0625rem;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
          height: 100%;
        }
      }
    }

    @media (max-width: 30.875rem) {
      .names {
        display: none;
      }

      .graphics {
        flex-grow: 1;

        .icons {
          justify-content: flex-start;
          /* TODO: comentar */
          width: calc(
            (${ICON_SIZE} * 2 + ${GAP} * 2 + 0.0625rem) - var(--level) * 2.25rem
          );
        }

        .level-bar {
          flex-grow: 0.875;
          /* width: calc(${NOT_FONT_SIZE.s} * 4); */
        }
      }
    }
  }

  .child-tech {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: column;

      .line {
        width: ${NOT_FONT_SIZE["6xs"]};
        background-color: ${COLOR.g_6};

        transition: background-color ${MICROINT.s} ease-out;
      }

      .child-group {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${GAP};

        .bullet-point-container {
          position: relative;
          width: ${cp.childTech.item.bulletPoint.width};

          > * {
            position: absolute;
            left: 50%;
          }

          .box {
            width: 37.5%;
            height: 50%;
            border-width: 0;
            border-left-width: ${NOT_FONT_SIZE["6xs"]};
            border-bottom-width: ${NOT_FONT_SIZE["6xs"]};
            border-style: solid;
            border-color: ${COLOR.g_6};
            border-bottom-left-radius: ${NOT_FONT_SIZE["3xs"]};

            transition: border-color ${MICROINT.s} ease-out;
          }

          .next-extension {
            bottom: 0;
            height: calc(50% + ${NOT_FONT_SIZE["3xs"]});
          }
        }
      }

      .extension-container {
        width: ${cp.childTech.extensionContainer.width};
        height: ${GAP};

        .extension {
          position: relative;
          left: 50%;
          height: 100%;
        }
      }
    }
  }

  body[data-dark-mode="true"] & {
    .tech {
      :hover {
        background-color: ${COLOR.g_12};

        .names {
          color: ${COLOR.g_0};
        }
      }

      .separator {
        background-color: ${COLOR.g_6};
      }

      .graphics {
        .icons .icon {
          filter: var(--invert-in-dark-mode);
        }

        .level-bar {
          background-color: ${COLOR.g_15};
        }
      }
    }

    .child-tech .item {
      .line {
        background-color: ${COLOR.g_11};
      }

      .child-group .bullet-point-container .box {
        border-color: ${COLOR.g_11};
      }
    }
  }
`;
