import { COLOR, TIME } from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.a`
  text-decoration: none;
  transition:
    color ${TIME.s} ease-out,
    translate ${TIME.s} ease-out;

  :hover {
    translate: 0 -12.5%;
    color: ${COLOR.gs_19};
  }

  body[data-dark-mode="true"] & {
    :hover {
      color: ${COLOR.gs_0};
    }
  }
`;
