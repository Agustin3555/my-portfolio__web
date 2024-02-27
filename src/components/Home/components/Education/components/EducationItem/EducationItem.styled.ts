import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

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
  --encapsulator-size: 2.125rem;
  --line-thickness: ${NOT_FONT_SIZE["6xs"]};
  --line-color: ${VARS.color.a.line.light};
  --compensation-to-align: 0.0625rem / 2;

  display: flex;
  flex-direction: column;

  .line {
    width: var(--line-thickness);

    background-color: var(--line-color);

    transition: background-color ${TIME.s} ease-out;
  }

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
      flex-direction: column;
      align-items: center;
      justify-content: center;

      color: ${COLOR.b_d2};

      .line {
        flex-grow: 1;
      }

      .encapsulator {
        color: ${COLOR.gs_10};

        transition: color ${TIME.s} ease-out;
        animation: spin 16.18s linear infinite;

        @keyframes spin {
          to {
            rotate: 360deg;
          }
        }
      }

      .icon {
        position: absolute;
      }
    }

    .line-extension-layout {
      grid-area: ${GRID_L.lineExtensionLayout};
      justify-self: center;
    }
  }

  .item-gap {
    height: calc(var(--gap) * 3);

    .line {
      display: block;
      margin-left: calc(
        var(--time-width) + var(--gap) + var(--encapsulator-size) / 2 - var(
            --compensation-to-align
          )
      );
      height: 100%;
    }
  }

  @media (max-width: 40.8125rem) {
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

    .item-gap .line {
      margin-left: calc(
        var(--encapsulator-size) / 2 - var(--compensation-to-align)
      );
    }
  }

  body[data-dark-mode="true"] & {
    --line-color: ${VARS.color.a.line.dark};

    .item {
      .about-time {
        .end-date {
          color: ${COLOR.b_l2};
        }

        .duration {
          color: ${COLOR.gs_6};
        }
      }

      .bullet {
        color: ${COLOR.b_l2};

        .encapsulator {
          color: ${COLOR.gs_8};
        }
      }
    }
  }

  &[data-first-item="true"] {
    .item .bullet > *.line:nth-of-type(1) {
      opacity: 0;
    }
  }

  &[data-last-item="true"] {
    .item-gap {
      display: none;
    }
  }
`;
