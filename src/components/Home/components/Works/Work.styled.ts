import styled from "@emotion/styled";
import { VARS } from "@/styles";

export const Component = styled.ul`
  container: work-container / inline-size;

  display: flex;
  flex-direction: column;
  gap: calc(${VARS.size.gold} * 4);
`;
