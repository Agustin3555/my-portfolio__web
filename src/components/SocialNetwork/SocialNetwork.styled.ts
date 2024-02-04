import styled from "@emotion/styled";
import { COLOR, TIME, TIMING_FUNC } from "@/styles";

export const Component = styled.a`
  text-decoration: none;

  /* TODO: no se aplica el translate */
  transition:
    color ${TIME.s} ease-out,
    translate ${TIME.m} ${TIMING_FUNC.a};

  :hover {
    color: ${COLOR.b_l2};
    translate: 0 -12.5%;
  }
`;
