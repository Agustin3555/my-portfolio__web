import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, NOT_FONT_SIZE, VARS } from "@/styles";

enum GRID_L {
  header = "header",
  desc = "desc",
  onDevelopment = "on-development",
  slider = "slider",
}

export const Component = styled.article`
  --gap: ${VARS.size.gold};
  --gap-s: calc(var(--gap) / 2);

  display: grid;

  grid-template:
    "${GRID_L.header} ${GRID_L.onDevelopment}" auto
    "${GRID_L.header} ${GRID_L.desc}         " 1fr
    "${GRID_L.slider} ${GRID_L.slider}       " auto /
    auto 1fr;

  header {
    --border-radius: ${NOT_FONT_SIZE["2xs"]};

    grid-area: ${GRID_L.header};
    align-self: flex-start;
    justify-self: flex-start;
    margin-right: var(--gap);

    box-shadow: ${VARS.decorator.shadow[1]};

    .content {
      display: flex;
      flex-direction: column;
      gap: var(--gap);
      padding: var(--gap);

      .types {
        --types-gap: ${VARS.global.fontSize};

        display: flex;
        align-items: center;
        gap: var(--types-gap);

        li {
          display: flex;
          align-items: center;
          gap: var(--types-gap);

          p {
            font-size: ${FONT_SIZE.xs};
            white-space: nowrap;

            color: ${COLOR.b_d1};
          }
        }
      }
    }
  }

  .desc-container {
    --max-lines: 3;
    --gradient-width: 1.5rem;

    grid-area: ${GRID_L.desc};
    align-self: end;

    margin-block: calc((1em * 1.4375 - 1em) / -2);
    padding-right: var(--gap-s);
    max-height: calc(1em * 1.4375 * var(--max-lines));

    overflow: auto;
  }

  .on-development {
    --gradient-width: 1.5rem;

    grid-area: ${GRID_L.onDevelopment};
    align-self: end;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-s);
    margin-top: calc(var(--gap) * -1);
    padding-top: var(--gap);
    padding-bottom: var(--gap-s);

    overflow: auto;

    .links,
    .techs {
      display: flex;
      align-items: flex-start;
      flex-wrap: nowrap;
      gap: var(--gap-s);

      white-space: nowrap;
    }

    .techs {
      justify-content: flex-end;

      li p {
        color: ${COLOR.b_d2};

        small {
          margin-left: ${VARS.component.button.xs.gapElements};
          font-size: ${VARS.component.button.xs.fontSize};

          color: ${COLOR.gs_11};
        }
      }
    }
  }

  .slider {
    grid-area: ${GRID_L.slider};

    margin-block: var(--gap);
  }

  @container work-container (width < 52.5rem) {
    grid-template:
      "${GRID_L.header} ${GRID_L.onDevelopment}" auto
      "${GRID_L.desc}   ${GRID_L.desc}         " 1fr
      "${GRID_L.slider} ${GRID_L.slider}       " auto /
      auto 1fr;

    .desc-container {
      --max-lines: 5;

      margin-top: calc(var(--gap) - 0.25em);
      margin-bottom: -0.25em;
    }
  }

  @container work-container (47.5rem < width < 52.5rem) {
    .on-development {
      margin: 0;
      padding: 0;

      overflow: visible;

      .links,
      .techs {
        flex-wrap: wrap;
      }
    }
  }

  @container work-container (width < 36rem) {
    grid-template:
      "${GRID_L.header}       "
      "${GRID_L.desc}         "
      "${GRID_L.slider}       "
      "${GRID_L.onDevelopment}";
  }

  body[data-dark-mode="true"] & {
    header .content .types li p {
      color: ${COLOR.b};
    }

    .techs li p {
      color: ${COLOR.b_l2};

      small {
        color: ${COLOR.gs_8};
      }
    }
  }
`;
