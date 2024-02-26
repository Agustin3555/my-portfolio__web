import styled from "@emotion/styled";
import { COLOR, TIME, VARS } from "@/styles";

export const Component = styled.a`
  --border-radius: ${VARS.component.button.xs.borderRadius};

  border-radius: var(--border-radius);

  text-decoration: none;
  box-shadow: ${VARS.decorator.shadow[1]};

  transition:
    color ${TIME.s} ease-out,
    ${VARS.component.link.translate.transition};

  ::before {
    border-radius: var(--border-radius);
  }

  :hover {
    color: ${COLOR.b};
    translate: ${VARS.component.link.translate.value};
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
    border-radius: var(--border-radius);

    p {
      font-size: ${VARS.component.button.xs.fontSize};
    }
  }
`;
