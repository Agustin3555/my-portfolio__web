import { COLOR, NOT_FONT_SIZE, TIME, VARS } from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.a`
  position: relative;
  display: flex;
  padding: ${VARS.component.button.s.padding};
  border-radius: ${VARS.component.button.s.borderRadius};

  text-decoration: none;
  color: ${COLOR.gs_0};
  overflow: hidden;

  transition: translate ${TIME.s} ease-out;

  &::before {
    content: "";
    position: absolute;
    inset: -15%;
    width: 130%;
    height: 130%;

    background: linear-gradient(45deg, ${COLOR.d_l2} 12.5%, ${COLOR.b} 100%);
  }

  :hover {
    translate: 0 calc((${NOT_FONT_SIZE["3xs"]} / 2) * -1);

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
