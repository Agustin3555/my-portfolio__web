import styled from "@emotion/styled";
import { COLOR, TIME, NOT_FONT_SIZE, VARS, TIMING_FUNC } from "@/styles";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${NOT_FONT_SIZE["2xl"]};

  address {
    --button-size: ${VARS.component.button.s.size};
    --gap: ${NOT_FONT_SIZE["3xs"]};
    --gap-compensated: calc(
      (var(--button-size) - ${VARS.global.fontSize}) / 2 + var(--gap)
    );

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: calc(var(--gap-compensated) * 1.25);
    padding: var(--gap);
    padding-left: var(--gap-compensated);
    border-radius: calc(${VARS.component.button.s.borderRadius} + var(--gap));

    color: ${COLOR.gs_1};
    background-color: ${COLOR.gs_14};
    box-shadow: ${VARS.decorator.shadow[1]}, ${VARS.decorator.bevelHighlight};

    transition: background-color ${TIME.s} ease-out;

    .email {
      flex-grow: 1;
      flex-basis: 0;

      line-height: initial;

      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .controls {
      display: flex;
      gap: var(--gap);

      #button-copy-email {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--button-size);
        height: var(--button-size);

        color: ${COLOR.gs_14};
        border-radius: ${VARS.component.button.s.borderRadius};
        background-color: ${COLOR.gs_1};
        box-shadow: ${VARS.decorator.bevelHighlight};

        transition:
          background-color ${TIME.s} ease-out,
          box-shadow ${TIME.m} ${TIMING_FUNC.a},
          translate ${TIME.m} ${TIMING_FUNC.a};

        :hover {
          box-shadow: ${VARS.decorator.shadow[0]},
            ${VARS.decorator.bevelHighlight};
          translate: 0 -0.0625rem;
        }

        > * {
          position: absolute;

          transition:
            opacity ${TIME.m} ease-out,
            scale ${TIME.m} ${TIMING_FUNC.a},
            filter ${TIME.m} ${TIMING_FUNC.a};
        }

        .check {
          opacity: 0;
          scale: 0;
          filter: blur(${NOT_FONT_SIZE["4xs"]});
        }

        &[data-copying="true"] {
          box-shadow: initial;
          translate: initial;

          .copy {
            opacity: 0;
            scale: 0;
            filter: blur(${NOT_FONT_SIZE["4xs"]});
          }

          .check {
            opacity: 1;
            scale: 1;
            filter: initial;
          }
        }
      }
    }
  }

  body[data-dark-mode="true"] & {
    address {
      color: ${COLOR.gs_14};
      background-color: ${COLOR.gs_4};

      .controls #button-copy-email {
        color: ${COLOR.gs_4};
        background-color: ${COLOR.gs_14};
      }
    }
  }
`;
