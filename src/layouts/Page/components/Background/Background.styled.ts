import styled from "@emotion/styled";
import { LAYOUT_WIDTH } from "@/styles";

export const Component = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .center-particles {
    flex-shrink: 0;

    width: ${LAYOUT_WIDTH};
  }
`;
