import styled from "@emotion/styled";
import { COLOR, TIME, VARS } from "@/styles";

export const Component = styled.a`
  --border-radius: ${VARS.component.button.s.borderRadius};

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
    color: ${COLOR.b_l2};
    translate: ${VARS.component.link.translate.value};
  }

  .content {
    padding: ${VARS.component.button.s.padding};
    border-radius: var(--border-radius);
  }
`;
