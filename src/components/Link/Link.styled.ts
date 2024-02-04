import styled from "@emotion/styled";
import { COLOR, TIME, TIMING_FUNC } from "@/styles";

export const Component = styled.a`
  text-decoration: none;

  transition:
    color ${TIME.s} ease-out,
    translate ${TIME.m} ${TIMING_FUNC.a};

  :hover {
    color: ${COLOR.gs_19};
    translate: 0 -12.5%;
  }

  body[data-dark-mode="true"] & {
    :hover {
      color: ${COLOR.gs_0};
    }
  }
`;
