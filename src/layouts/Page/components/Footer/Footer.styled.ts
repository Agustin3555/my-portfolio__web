import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${VARS.size.gold} * 2);
  padding-bottom: ${VARS.size.gold};

  color: ${VARS.color.b.content.light};
  background-color: ${VARS.color.b.bg.light};
  border-top-left-radius: ${NOT_FONT_SIZE.xs};
  border-top-right-radius: ${NOT_FONT_SIZE.xs};
  box-shadow: ${VARS.decorator.shadow[1]}, ${VARS.decorator.bevelHighlight.top},
    ${VARS.decorator.bevelHighlight.left},
    ${VARS.decorator.bevelHighlight.right};

  transition:
    padding ${TIME.s} ease-out,
    color ${TIME.s} ease-out,
    background-color ${TIME.s} ease-out;

  @media (width < 23.4375rem) {
    padding: ${VARS.size.gold};
    padding-top: calc(${VARS.size.gold} * 2);
  }

  .text {
    font-size: ${FONT_SIZE.xs};
  }

  .separator {
    margin: ${VARS.size.gold} 0;
  }

  .sections {
    display: flex;
    gap: calc(${VARS.size.gold} * 2);
    padding-bottom: ${VARS.size.gold};

    @media (width < ${VARS.screen.width.s}) {
      flex-direction: column;
    }

    > *:first-of-type {
      flex-grow: 1;
    }

    article {
      display: flex;
      flex-direction: column;

      h4 {
        white-space: nowrap;
        color: ${COLOR.gs_18};
      }

      .acknowledgments {
        column-width: calc(${NOT_FONT_SIZE["3xl"]} + ${NOT_FONT_SIZE.xs});
        column-gap: ${FONT_SIZE.xs};

        li {
          p {
            display: flex;
            gap: ${NOT_FONT_SIZE["2xs"]};
            text-wrap: initial;

            .emoji {
              flex-shrink: 0;

              display: inline-flex;
              justify-content: center;
              width: ${FONT_SIZE.l};
            }
          }
        }
      }

      .link-page {
        font-size: ${FONT_SIZE.xs};
        line-height: 1.5;
      }
    }
  }

  .copyright {
    text-align: center;
  }

  body[data-dark-mode="true"] & {
    color: ${VARS.color.b.content.dark};
    background-color: ${VARS.color.b.bg.dark};

    .sections article h4 {
      color: ${COLOR.gs_0};
    }
  }
`;
