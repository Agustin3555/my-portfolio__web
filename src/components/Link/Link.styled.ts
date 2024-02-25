import styled from "@emotion/styled";
import { COLOR, TIME, VARS } from "@/styles";

export const Component = styled.a`
  text-decoration: none;

  transition:
    color ${TIME.s} ease-out,
    ${VARS.component.link.translate.transition};

  :hover {
    color: ${COLOR.gs_19};
    translate: ${VARS.component.link.translate.value};
  }

  body[data-dark-mode="true"] & {
    :hover {
      color: ${COLOR.gs_0};
    }
  }
`;
