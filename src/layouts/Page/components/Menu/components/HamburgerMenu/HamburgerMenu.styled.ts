import {
  BGC_BRIGHT_A,
  BGC_DARK_A,
  COLOR,
  FONT_SIZE,
  GLASS_SET,
  MEDIA,
  MICROINT,
  NOT_FONT_SIZE,
  type Value,
  // colorAlphaAdapter,
  shadowAdapter,
} from "@/styles";
import styled from "@emotion/styled";

const BORDER_RADIUS = NOT_FONT_SIZE["2xs"];

interface Provider {
  EXPANDED: {
    glassMenu: {
      content: {
        MC: {
          width: Value;
          height: Value;
        };
      };
    };
  };
}

export const adapter = (childWidth: number, childHeight: number): Provider => {
  return {
    EXPANDED: {
      glassMenu: {
        content: {
          MC: {
            width: `${childWidth}px`,
            height: `${childHeight}px`,
          },
        },
      },
    },
  };
};

interface ConstProvider {
  glassMenu: {
    borderRadius: Value;

    glassRefleccion: {
      borderRadius: Value;
    };

    content: {
      borderRadius: Value;
    };
  };
}

const cp: ConstProvider = {
  glassMenu: {
    borderRadius: BORDER_RADIUS,

    glassRefleccion: {
      borderRadius: BORDER_RADIUS,
    },

    content: {
      borderRadius: BORDER_RADIUS,
    },
  },
};

export const Component = styled.header<{ p: Provider }>`
  display: none;

  @media (max-width: ${MEDIA.m}) {
    display: initial;
  }

  .deep-touch {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLOR.g_19};
    border: none;
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
    transition: opacity ${MICROINT.s} ease-out;
  }

  .glass-menu {
    position: fixed;
    top: 0;
    right: 0;
    border-radius: ${cp.glassMenu.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: ${shadowAdapter(2)};
    transition:
      background-color ${MICROINT.s} ease-out,
      top ${MICROINT.m} ease;
    ${GLASS_SET.this}

    .glass-refleccion {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${cp.glassMenu.glassRefleccion.borderRadius};
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      ${GLASS_SET.refleccion}
    }

    .content {
      position: relative;
      padding: calc(
        (${NOT_FONT_SIZE.l} - ${FONT_SIZE.xl}) * 0.5 - ${NOT_FONT_SIZE["6xs"]}
      );
      border-radius: ${cp.glassMenu.content.borderRadius};
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      ${GLASS_SET.content}
      border-top-width: 0;
      transition: padding ${MICROINT.m} ease;

      .MC {
        transition:
          width ${MICROINT.m} ease,
          height ${MICROINT.m} ease;

        body[data-hamburger-menu-is-open="false"] & {
          width: ${FONT_SIZE.xl} !important;
          height: ${FONT_SIZE.xl} !important;
        }

        .C {
          display: flex;
          flex-direction: column;
          gap: calc(${FONT_SIZE.s} * 2);
          width: fit-content;

          .group {
            display: flex;
            flex-direction: column;
            gap: calc(${FONT_SIZE.s} * 2);
            opacity: 0;
            transform: translateX(37.5%);
            transition:
              opacity ${MICROINT.xs} ease,
              transform ${MICROINT.xs} ease;

            .toggle-expand {
              padding: 0;
              border: none;
              background-color: transparent;
              cursor: pointer;

              :hover {
                color: ${COLOR.a};
              }
            }

            .nav {
              display: flex;
              flex-direction: column;
              gap: calc(${FONT_SIZE.s} * 2);
            }

            .nav--external-network {
              flex-direction: row;
            }
          }
        }
      }
    }
  }

  body[data-hamburger-menu-is-open="true"] & {
    .deep-touch {
      opacity: 0.5;
      pointer-events: initial;
    }

    .glass-menu {
      .content {
        padding: calc(${FONT_SIZE.s} * 2);

        .MC {
          .C .group {
            opacity: 1;
            transform: translateX(0);
            transition:
              opacity ${MICROINT.s} ${MICROINT.m} ease,
              transform ${MICROINT.s} ${MICROINT.m} ease;
          }
        }
      }
    }
  }

  body[data-dark-mode="true"] &[data-expanded="true"] {
    .glass-menu {
    }
  }
`;
