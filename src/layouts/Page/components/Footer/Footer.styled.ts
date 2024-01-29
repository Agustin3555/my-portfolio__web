import styled from "@emotion/styled";
import {
  COLOR,
  FONT_SIZE,
  MAIN_GAP,
  MEDIA,
  TIME,
  NOT_FONT_SIZE,
  shadowAdapter,
} from "@/styles";

const GAP = MAIN_GAP;

export const Component = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(${GAP} * 2);
  padding-bottom: ${GAP};
  color: ${COLOR.gs_15};
  border-top-left-radius: ${NOT_FONT_SIZE.xs};
  border-top-right-radius: ${NOT_FONT_SIZE.xs};
  background-color: ${COLOR.gs_6};
  box-shadow: ${shadowAdapter(2)};

  transition:
    padding ${TIME.s} ease-out,
    color ${TIME.s} ease-out,
    background-color ${TIME.s} ease-out;

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
        color: ${COLOR.gs_18};

        transition: color ${TIME.s} ease-out;
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
    color: ${COLOR.gs_4};
    background-color: ${COLOR.gs_14};

    .sections .item .title {
      color: ${COLOR.gs_0};
    }
  }
`;
