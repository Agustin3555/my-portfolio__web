import styled from "@emotion/styled";
import { COLOR, MEDIA, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.div`
  display: none;

  @media (max-width: ${MEDIA.m}) {
    display: initial;
  }

  .deep-touch {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${COLOR.gs_19};
    pointer-events: none;
    opacity: 0;

    transition: opacity ${TIME.s} ease-out;
  }

  header {
    --gap: ${VARS.size.gold};
    --border-radius: ${VARS.component.button.m.borderRadius};

    position: fixed;
    top: 0;
    right: 0;
    border-bottom-right-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);

    box-shadow: ${VARS.decorator.shadow[1]};

    &::before {
      border-bottom-right-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    .adaptable {
      --size: ${VARS.component.button.m.size};
      --padding: 0;

      position: relative;
      padding: var(--padding);
      width: var(--size);
      height: var(--size);
      border-bottom-right-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);

      box-shadow: ${VARS.decorator.bevelHighlight.left},
        ${VARS.decorator.bevelHighlight.right},
        ${VARS.decorator.bevelHighlight.bottom};
      overflow: hidden;

      transition:
        padding ${TIME.m} ease,
        width ${TIME.m} ease,
        height ${TIME.m} ease;

      .content {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        width: fit-content;

        .controls {
          display: flex;
          justify-content: space-between;
        }

        nav {
          display: flex;
          flex-direction: column;
          gap: var(--gap);

          .external-networks {
            display: flex;
            gap: var(--gap);
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

    header {
      --border-radius: ${NOT_FONT_SIZE.xs};

      .adaptable {
        --padding: ${VARS.size.silver};
        --total-linear-padding: calc(var(--padding) * 2);

        width: calc(var(--total-linear-padding) + var(--content-width));
        height: calc(var(--total-linear-padding) + var(--content-height));
      }
    }
  }
`;
