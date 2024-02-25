import styled from "@emotion/styled";
import { COLOR, TIME, TIMING_FUNC, VARS } from "@/styles";

export const Component = styled.a`
  position: relative;
  display: flex;
  padding: ${VARS.component.button.s.padding};
  border-radius: ${VARS.component.button.s.borderRadius};

  text-decoration: none;
  color: ${COLOR.gs_0};
  box-shadow: ${VARS.decorator.shadow[1]}, ${VARS.decorator.bevelHighlight};
  overflow: hidden;

  transition:
    box-shadow ${TIME.m} ${TIMING_FUNC.a},
    ${VARS.component.link.translate.transition};

  &::before {
    content: "";
    position: absolute;
    inset: -15%;
    width: 130%;
    height: 130%;

    background: linear-gradient(45deg, ${COLOR.d_l2} 12.5%, ${COLOR.b} 100%);
  }

  :hover {
    translate: ${VARS.component.link.translate.value};

    ::before {
      animation: spin ${TIME.l} linear infinite;

      @keyframes spin {
        to {
          rotate: 360deg;
        }
      }
    }
  }

  &[data-email-sender="true"] {
    box-shadow: ${VARS.decorator.bevelHighlight};

    :hover {
      box-shadow: ${VARS.decorator.shadow[0]}, ${VARS.decorator.bevelHighlight};
      translate: 0 -0.0625rem;
    }
  }
`;
