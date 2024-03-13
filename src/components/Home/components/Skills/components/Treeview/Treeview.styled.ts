import styled from "@emotion/styled";
import { NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.div`
  --border-radius: ${NOT_FONT_SIZE.xs};

  flex-grow: 2;

  box-shadow: ${VARS.decorator.shadow[1]};

  .items {
    display: flex;
    flex-direction: column;
    gap: ${NOT_FONT_SIZE["3xs"]};
    padding: ${VARS.size.gold};
  }
`;
