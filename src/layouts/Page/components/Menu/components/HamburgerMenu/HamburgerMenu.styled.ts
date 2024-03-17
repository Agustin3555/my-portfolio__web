import styled from "@emotion/styled";
import { COLOR, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.div`
  display: none;

  @media (width < ${VARS.screen.width.l}) {
    display: initial;
  }

  #deep-touch {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;

    background-color: ${COLOR.gs_19};
    pointer-events: none;
    opacity: 0;

    transition: opacity ${TIME.s} ease-out;
  }

  header {
    --padding: 0;
    --size: ${VARS.component.button.m.size};
    --gap: ${VARS.size.gold};
    --border-radius: ${VARS.component.button.m.borderRadius};

    position: fixed;
    top: 0;
    right: 0;
    padding: var(--padding);
    width: var(--size);
    height: var(--size);
    border-bottom-right-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);

    color: ${VARS.color.b.content.light};
    background-color: ${VARS.color.b.bg.light};
    box-shadow: ${VARS.decorator.shadow[1]},
      ${VARS.decorator.bevelHighlight.left},
      ${VARS.decorator.bevelHighlight.right},
      ${VARS.decorator.bevelHighlight.bottom};
    overflow: hidden;

    transition:
      padding ${TIME.m} ease,
      width ${TIME.m} ease,
      height ${TIME.m} ease,
      border-radius ${TIME.m} ease,
      background-color ${TIME.s} ease-out;

    body[data-dark-mode="true"] & {
      color: ${VARS.color.b.content.dark};
      background-color: ${VARS.color.b.bg.dark};
    }

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

  &[data-is-open="true"] {
    #deep-touch {
      opacity: 0.25;
      pointer-events: initial;
    }

    header {
      --padding: ${VARS.size.silver};
      --total-linear-padding: calc(var(--padding) * 2);
      --border-radius: ${NOT_FONT_SIZE.xs};

      width: calc(var(--total-linear-padding) + var(--content-width));
      height: calc(var(--total-linear-padding) + var(--content-height));
    }
  }
`;
