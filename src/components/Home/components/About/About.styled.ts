import {
  COLOR,
  COLOR_BRIGHT_B,
  FONT,
  FONT_SIZE,
  MEDIA,
  TIME,
  NOT_FONT_SIZE,
  type Value,
  VARS,
} from "@/styles";
import styled from "@emotion/styled";

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

    .subsections {
      gap: calc(${VARS.size.gold} * 2);
      padding-right: var(--gap-xs);
      padding-left: var(--gap-s);
      border-width: 0;
      border-left-width: ${NOT_FONT_SIZE["6xs"]};

      border-style: solid;
      border-color: ${COLOR.gs_8};
      scrollbar-width: thin;
      scrollbar-color: ${COLOR.gs_4} transparent;

      transition:
        border-color ${TIME.s} ease-out,
        scrollbar-color ${TIME.s} ease-out;

      h4 {
        color: ${COLOR.gs_14};
      }

      > li > :is(article, div) {
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

          background-color: ${VARS.color.a.bg.light};

          transition: background-color ${TIME.s} ease-out;

          span {
            font-size: ${FONT_SIZE.l};
          }

          p {
            font-size: ${FONT_SIZE.xs};

            color: ${VARS.color.a.font.light};

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

        .content {
          height: 100%;
        }
      }

      @media (max-width: ${MEDIA["2xs"]}) {
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
      }
    }
  }

  body[data-dark-mode="true"] & {
    .a .subsections {
      border-color: ${COLOR.gs_10};
      scrollbar-color: ${COLOR.gs_14} transparent;

      h4 {
        color: ${COLOR.gs_1};
      }

      .hobbies-and-likes li {
        background-color: ${VARS.color.a.bg.dark};

        p {
          color: ${VARS.color.a.font.dark};
        }
      }
    }
  }
`;
