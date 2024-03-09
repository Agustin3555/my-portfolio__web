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
    color: ${COLOR.b_d1};
    translate: ${VARS.component.link.translate.value};
  }

  .content {
    display: flex;
    align-items: center;
    gap: ${VARS.component.button.xs.gapElements};
    padding-inline: ${VARS.component.button.xs.paddingInline};
    height: ${VARS.component.button.xs.height};
    border-radius: var(--border-radius);

    p {
      font-size: ${VARS.component.button.xs.fontSize};
    }
  }

  body[data-dark-mode="true"] & {
    :hover {
      color: ${COLOR.b};
    }
  }
`;
