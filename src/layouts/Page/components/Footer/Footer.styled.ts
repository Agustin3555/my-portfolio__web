import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, MEDIA, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${VARS.size.gold} * 2);
  padding-bottom: ${VARS.size.gold};

  color: ${COLOR.gs_15};
  background-color: ${COLOR.gs_6};
  border-top-left-radius: ${NOT_FONT_SIZE.xs};
  border-top-right-radius: ${NOT_FONT_SIZE.xs};
  box-shadow: ${VARS.decorator.shadow[1]}, ${VARS.decorator.bevelHighlightTop},
    ${VARS.decorator.bevelHighlightLeft}, ${VARS.decorator.bevelHighlightRight};

  transition:
    padding ${TIME.s} ease-out,
    color ${TIME.s} ease-out,
    background-color ${TIME.s} ease-out;

  @media (max-width: 23.4375rem) {
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

    @media (max-width: ${MEDIA.xs}) {
      flex-direction: column;
    }

    > *:first-of-type {
      flex-grow: 1;
    }

    article {
      display: flex;
      flex-direction: column;

      h4 {
        text-wrap: nowrap;
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

              filter: grayscale(0.25);
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
    color: ${COLOR.gs_4};
    background-color: ${COLOR.gs_14};

    .sections article h4 {
      color: ${COLOR.gs_0};
    }
  }
`;
