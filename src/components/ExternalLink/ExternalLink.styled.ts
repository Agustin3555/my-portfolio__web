import styled from "@emotion/styled";
import { COLOR, TIME, VARS, TIMING_FUNC } from "@/styles";

export const Component = styled.a`
  border-radius: ${VARS.component.button.xs.borderRadius};

  text-decoration: none;
  box-shadow: ${VARS.decorator.shadow[1]};

  transition:
    color ${TIME.s} ease-out,
    translate ${TIME.m} ${TIMING_FUNC.a};

  ::before {
    border-radius: ${VARS.component.button.xs.borderRadius};
  }

  :hover {
    color: ${COLOR.b};
    translate: 0 -0.1875rem;
  }

  .content {
    display: flex;
    align-items: center;
    gap: calc(${VARS.component.button.xs.padding} * 1.25);
    padding: 0 ${VARS.component.button.xs.padding};
    height: calc(
      ${VARS.component.button.xs.padding} * 2 +
        ${VARS.component.button.xs.fontSize}
    );
    border-radius: ${VARS.component.button.xs.borderRadius};

    p {
      font-size: ${VARS.component.button.xs.fontSize};
    }
  }
`;
