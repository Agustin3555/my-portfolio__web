import styled from "@emotion/styled";
import {
  COLOR_BRIGHT_A,
  COLOR_DARK_A,
  GLASS_BUTTON_SIZE,
  LAYOUT_WIDTH,
  MAIN_GAP,
  MAIN_GAP_M,
  MEDIA,
  MICROINT,
  NOT_FONT_SIZE,
} from "@/styles";

const MARGIN = `calc(${MAIN_GAP} * 4 + ${GLASS_BUTTON_SIZE})`;

export const Component = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: ${COLOR_BRIGHT_A};
  overflow: hidden;

  transition: color ${MICROINT.s} ease-out;

  .static {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: calc(${NOT_FONT_SIZE.l} * 3);
    margin: 0 ${MARGIN};
    padding-top: calc(${NOT_FONT_SIZE.l} * 3);
    max-width: ${LAYOUT_WIDTH};
    min-height: 100vh;

    transition:
      margin ${MICROINT.m} ease,
      padding ${MICROINT.m} ease;

    @media (max-width: ${MEDIA.m}) {
      margin: 0;
      padding-top: calc(${NOT_FONT_SIZE.l} * 2);

      .main {
        padding: 0 ${MAIN_GAP_M};
      }
    }

    @media (max-width: ${MEDIA.xs}) {
      .main {
        padding: 0 ${MAIN_GAP};
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      gap: calc(${NOT_FONT_SIZE.l} * 3);

      transition: padding ${MICROINT.m} ease;

      > * {
        :nth-of-type(1) {
          scroll-margin-top: ${NOT_FONT_SIZE["6xl"]};
        }

        :not(:nth-of-type(1)) {
          scroll-margin-top: ${MAIN_GAP};
        }
      }
    }
  }

  body[data-dark-mode="true"] & {
    color: ${COLOR_DARK_A};
  }
`;
