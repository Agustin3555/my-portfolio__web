import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, TIME, VARS } from "@/styles";

enum GRID_L {
  header = "header",
  slider = "slider",
  techs = "techs",
  desc = "desc",
  links = "links",
}

export const Component = styled.li`
  --gap: ${VARS.size.gold};

  display: grid;

  grid-template:
    "${GRID_L.header} ." auto
    "${GRID_L.slider} ${GRID_L.techs}" auto
    "${GRID_L.slider} ${GRID_L.links}" 1fr
    "${GRID_L.desc}   ." auto /
    2.5fr 1fr;

  /* grid-template:
    "${GRID_L.header} ${GRID_L.slider}" auto
    "${GRID_L.techs}  ${GRID_L.slider}" auto
    "${GRID_L.links}  ${GRID_L.slider}" 1fr
    "${GRID_L.desc}   ${GRID_L.desc}" auto /
    10rem 2.5fr; */

  gap: var(--gap);

  header {
    grid-area: ${GRID_L.header};
    justify-self: flex-start;
    width: max-content;

    .header-content {
      display: flex;
      flex-direction: column;
      gap: var(--gap);

      .types {
        display: flex;
        align-items: center;
        gap: ${VARS.global.fontSize};

        li p {
          font-size: ${FONT_SIZE.xs};

          color: ${COLOR.b};
        }
      }
    }
  }

  .slider {
    grid-area: ${GRID_L.slider};
  }

  .techs {
    --techs-gap: calc(var(--gap) / 2);

    grid-area: ${GRID_L.techs};

    display: flex;
    flex-wrap: wrap;
    gap: var(--techs-gap);

    li {
      padding: ${VARS.component.button.xs.padding};

      background-color: ${COLOR.gs_1};
      border-radius: ${VARS.component.button.xs.borderRadius};

      transition: background-color ${TIME.s} ease-out;

      p {
        font-size: ${VARS.component.button.xs.fontSize};

        color: ${COLOR.b_d2};

        small {
          margin-left: ${VARS.component.button.xs.fontSize};
          font-size: ${VARS.component.button.xs.fontSize};

          color: ${COLOR.gs_10};
        }
      }
    }
  }

  .desc {
    grid-area: ${GRID_L.desc};
  }

  .links {
    grid-area: ${GRID_L.links};

    display: flex;
    align-items: flex-start;
    gap: calc(var(--gap) / 2);
  }

  @media (max-width: 75rem) {
    grid-template:
      "${GRID_L.header}"
      "${GRID_L.slider}"
      "${GRID_L.techs}"
      "${GRID_L.desc}"
      "${GRID_L.links}";

    /* TODO: hacer scrolleable */
    /* .techs {
      --rows: 2;

      align-items: flex-start;
      max-height: calc(
        ${VARS.component.button.xs.height} * var(--rows) + var(--techs-gap) *
          (var(--rows) - 1)
      );
      scrollbar-width: none;

      overflow-y: auto;
    } */
  }

  body[data-dark-mode="true"] & {
    .techs li {
      background-color: ${COLOR.gs_16};

      p {
        color: ${COLOR.b_l2};

        small {
          color: ${COLOR.gs_8};
        }
      }
    }
  }
`;
