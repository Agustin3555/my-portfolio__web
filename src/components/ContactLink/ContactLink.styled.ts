import { COLOR, NOT_FONT_SIZE, TIME } from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.a`
  position: relative;
  display: flex;
  padding: ${NOT_FONT_SIZE["2xs"]};
  border-radius: 15%;

  text-decoration: none;
  color: ${COLOR.gs_0};
  overflow: hidden;

  transition: translate ${TIME.s} ease-out;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: -15%;
    width: 130%;
    height: 130%;

    background: linear-gradient(45deg, ${COLOR.d_l2} 12.5%, ${COLOR.b} 100%);
  }

  :hover {
    translate: 0 -12.5%;

    ::before {
      animation: spin ${TIME.l} linear infinite;

      @keyframes spin {
        to {
          rotate: 360deg;
        }
      }
    }
  }
`;
