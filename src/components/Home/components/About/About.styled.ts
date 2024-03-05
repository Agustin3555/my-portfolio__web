import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.div`
  --gap-xs: calc(var(--gap-s) / 2);
  --gap-s: ${VARS.size.gold};
  --gap-m: calc(var(--gap-s) * 3);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  flex-wrap: wrap;
  gap: ${NOT_FONT_SIZE.l};
  min-height: calc(100vh - ${NOT_FONT_SIZE.l} * 5.5);

  .a {
    flex-grow: 1;
    flex-basis: calc(${NOT_FONT_SIZE["4xl"]} - ${NOT_FONT_SIZE.l} * 2);

    display: flex;
    flex-direction: column;
    gap: var(--gap-m);

    header {
      .hello {
        margin-bottom: var(--gap-m);
      }
    }

    .subsections .element-slider {
      h4 {
        color: ${COLOR.gs_14};
      }

      > li > * {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${VARS.size.gold};
      }

      .hobbies-and-likes {
        display: flex;
        flex-wrap: wrap;
        gap: var(--gap-xs);

        li {
          --compensated-padding: calc(${VARS.component.button.s.padding} * 1.5);

          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--compensated-padding);
          padding: ${VARS.component.button.s.padding};
          padding-right: var(--compensated-padding);
          border-radius: ${VARS.component.button.s.borderRadius};

          background-color: ${VARS.color.c.bg.light};

          transition: background-color ${TIME.s} ease-out;

          span {
            font-size: ${FONT_SIZE.l};
          }

          p {
            font-size: ${FONT_SIZE.xs};

            color: ${VARS.color.c.content.light};

            transition: color ${TIME.s} ease-out;
          }
        }
      }
    }
  }

  .b {
    --gap: ${NOT_FONT_SIZE.m};

    flex-basis: calc(
      ${NOT_FONT_SIZE["4xl"]} - ${NOT_FONT_SIZE["m"]} + var(--gap)
    );

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${NOT_FONT_SIZE.s};

    .x {
      position: relative;
      aspect-ratio: 1 / 1;

      .slider {
        width: calc(100% - var(--gap));
      }

      .glass-panel {
        position: absolute;
        right: 0;
        bottom: 0;
        aspect-ratio: 1 / 1;
        width: calc(100% - var(--gap));
      }

      @media (max-width: ${VARS.screen.width.xs}) {
        --gap: ${NOT_FONT_SIZE.s};
      }
    }

    nav {
      display: flex;
      gap: ${NOT_FONT_SIZE.s};

      > * {
        display: flex;
        opacity: 0;
        translate: 0 100%;

        transition:
          opacity ${TIME.m} ease,
          translate ${TIME.m} ease;
        transition-delay: calc(${TIME.s} * var(--i));

        body[data-social-nets-in-left-nav="false"] & {
          opacity: 1;
          translate: initial;
        }

        @media (max-width: ${VARS.screen.width.l}) {
          translate: initial;
          opacity: initial;
        }
      }
    }
  }

  body[data-dark-mode="true"] & {
    .a .subsections {
      border-color: ${VARS.color.a.line.dark};
      scrollbar-color: ${COLOR.gs_14} transparent;

      h4 {
        color: ${COLOR.gs_1};
      }

      .hobbies-and-likes li {
        background-color: ${VARS.color.c.bg.dark};

        p {
          color: ${VARS.color.c.content.dark};
        }
      }
    }
  }
`;
