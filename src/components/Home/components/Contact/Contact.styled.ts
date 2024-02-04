import styled from "@emotion/styled";
import {
  COLOR,
  FONT_SIZE,
  TIME,
  NOT_FONT_SIZE,
  VARS,
  TIMING_FUNC,
} from "@/styles";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${NOT_FONT_SIZE["2xl"]};

  .bar {
    --padding-gap: ${NOT_FONT_SIZE["3xs"]};
    --padding-gap-compensated: calc(
      (
          (${VARS.component.button.s.padding} * 2 + ${FONT_SIZE.m}) -
            ${VARS.global.fontSize}
        ) / 2 + var(--padding-gap)
    );

    display: flex;
    align-items: center;
    gap: calc(var(--padding-gap-compensated) * 2);
    padding: var(--padding-gap);
    padding-left: var(--padding-gap-compensated);
    border-radius: calc(
      ${VARS.component.button.s.borderRadius} + var(--padding-gap)
    );

    color: ${COLOR.gs_1};
    background-color: ${COLOR.gs_14};
    box-shadow: ${VARS.decorator.shadow[1]}, ${VARS.decorator.bevelHighlight};

    transition: background-color ${TIME.s} ease-out;

    /* TODO: responsive */
    /* width: 250px; */

    span {
      flex-grow: 1;

      font-weight: 500;
      line-height: initial;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .controls {
      display: flex;
      gap: var(--padding-gap);

      button {
        --size: calc(${VARS.component.button.s.padding} * 2 + ${FONT_SIZE.m});

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--size);
        height: var(--size);
        border-radius: ${VARS.component.button.s.borderRadius};

        color: ${COLOR.gs_14};
        background-color: ${COLOR.gs_1};

        transition:
          background-color ${TIME.s} ease-out,
          box-shadow ${TIME.m} ${TIMING_FUNC.a},
          translate ${TIME.m} ${TIMING_FUNC.a};

        :hover {
          box-shadow: ${VARS.decorator.shadow[1]};
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
    .bar {
      color: ${COLOR.gs_14};
      background-color: ${COLOR.gs_4};

      .controls button {
        color: ${COLOR.gs_4};
        background-color: ${COLOR.gs_14};
      }
    }
  }
`;
