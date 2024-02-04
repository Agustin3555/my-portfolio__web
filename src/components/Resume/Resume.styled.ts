import styled from "@emotion/styled";
import { FONT_SIZE, MAIN_GAP, NOT_FONT_SIZE, VARS } from "@/styles";

const GAP = MAIN_GAP;

export const Component = styled.section`
  .title {
    margin-bottom: ${FONT_SIZE.xs};
  }

  .subtitle {
    margin-bottom: calc(${GAP} * 3);
  }

  .cv {
    width: 100%;
    height: 1174px;
    border-radius: ${NOT_FONT_SIZE["2xs"]};
    box-shadow: ${VARS.decorator.shadow[1]};
  }
`;
