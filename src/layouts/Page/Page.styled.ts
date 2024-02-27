import styled from "@emotion/styled";
import {
  LAYOUT_WIDTH,
  MAIN_GAP,
  MAIN_GAP_M,
  MEDIA,
  TIME,
  NOT_FONT_SIZE,
  VARS,
} from "@/styles";

const MARGIN = `calc(${MAIN_GAP} * 4 + ${VARS.component.button.s.size})`;

export const Component = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;

  transition: color ${TIME.s} ease-out;

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
      margin ${TIME.m} ease,
      padding ${TIME.m} ease;

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

      transition: padding ${TIME.m} ease;

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
`;
