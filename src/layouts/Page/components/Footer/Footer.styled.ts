import {
  COLOR,
  FONT_SIZE,
  MAIN_GAP,
  MEDIA,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
} from "@/styles";
import styled from "@emotion/styled";

const GAP = MAIN_GAP;

export const Component = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(${GAP} * 2);
  padding-bottom: ${GAP};
  color: ${COLOR.g_15};
  border-top-left-radius: ${NOT_FONT_SIZE.xs};
  border-top-right-radius: ${NOT_FONT_SIZE.xs};
  background-color: ${COLOR.g_6};
  box-shadow: ${shadowAdapter(2)};
  transition:
    padding ${MICROINTERACTION.s} ease-out,
    color ${MICROINTERACTION.s} ease-out,
    background-color ${MICROINTERACTION.s} ease-out;

  @media (max-width: 23.4375rem) {
    padding-inline: ${GAP};
  }

  .text {
    font-size: ${FONT_SIZE.xs};
  }

  .separator {
    margin-block: ${GAP};
  }

  .sections {
    display: flex;
    gap: calc(${GAP} * 2);
    padding-bottom: ${GAP};

    @media (max-width: ${MEDIA.xs}) {
      flex-direction: column;
    }

    .item {
      display: flex;
      flex-direction: column;

      .title {
        width: max-content;
        font-weight: 500;
        color: ${COLOR.g_18};
        transition: color ${MICROINTERACTION.s} ease-out;
      }

      .acknowledgments {
        column-width: calc(${NOT_FONT_SIZE["3xl"]} + ${NOT_FONT_SIZE.xs});
        column-gap: ${FONT_SIZE.xs};
        text-wrap: pretty;

        li {
          display: flex;
          gap: ${NOT_FONT_SIZE["2xs"]};

          .emoji {
            flex-shrink: 0;

            display: inline-flex;
            justify-content: center;
            width: ${FONT_SIZE.l};
            filter: grayscale(0.25);
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
    color: ${COLOR.g_4};
    background-color: ${COLOR.g_14};

    .sections .item .title {
      color: ${COLOR.g_0};
    }
  }
`;
