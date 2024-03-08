import styled from "@emotion/styled";
import { TIME, VARS, COLOR, FONT_SIZE } from "@/styles";

export const Component = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(${VARS.size.gold} * 2);

  .nav {
    --border-radius: ${VARS.component.button.xs.borderRadius};

    position: relative;
    border-radius: var(--border-radius);

    background-color: ${COLOR.gs_1};
    box-shadow: ${VARS.decorator.bevelHighlight.full},
      ${VARS.decorator.shadow[1]};

    transition: background-color ${TIME.s} ease-out;

    .bg-indicator {
      position: absolute;
      top: 0;
      height: 100%;
      border-radius: var(--border-radius);

      background-color: ${VARS.color.b.bg.light};

      transition:
        left ${TIME.s} ease,
        width ${TIME.s} ease,
        background-color ${TIME.s} ease-out;
    }

    fieldset {
      position: relative;
      display: inline-flex;
      margin: 0;
      padding: 0;

      border: none;

      label {
        --padding: ${VARS.component.button.xs.paddingBlock};

        position: relative;
        padding: var(--padding) calc(var(--padding) * 2);

        cursor: pointer;

        input {
          display: none;

          :checked + .title {
            color: ${COLOR.b_d2};
          }
        }

        .title {
          font-size: ${FONT_SIZE.xs};

          transition: color ${TIME.s} ease-out;
        }

        :hover .title {
          color: ${COLOR.gs_19};
        }
      }
    }

    body[data-dark-mode="true"] & {
      background-color: ${COLOR.gs_16};

      .bg-indicator {
        background-color: ${VARS.color.b.bg.dark};
      }

      fieldset label {
        input:checked + .title {
          color: ${COLOR.b_l2};
        }

        :hover .title {
          color: ${COLOR.gs_0};
        }
      }
    }
  }

  .element-slider {
    align-self: stretch;

    position: relative;

    transition:
      width ${TIME.s} ease,
      border-color ${TIME.s} ease-out;

    > {
      li {
        position: absolute;
        width: 100%;

        transition:
          scale ${TIME.s} ease,
          filter ${TIME.s} ease,
          opacity ${TIME.s} ease;
      }

      .inactive {
        scale: 0.95;
        filter: blur(0.25rem);
        opacity: 0;
        pointer-events: none;
      }

      .active {
        scale: 1;
        filter: initial;
        opacity: 1;
        pointer-events: initial;
      }
    }
  }
`;
