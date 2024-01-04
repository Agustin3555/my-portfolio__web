import { COLOR, MICROINTERACTION } from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.a`
  text-decoration: none;
  transition:
    color ${MICROINTERACTION.s} ease-out,
    translate ${MICROINTERACTION.s} ease-out;

  :hover {
    translate: 0 -12.5%;
    color: ${COLOR.g_19};
  }

  body[data-dark-mode="true"] & {
    :hover {
      color: ${COLOR.g_0};
    }
  }
`;
