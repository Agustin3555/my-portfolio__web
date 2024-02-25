import styled from "@emotion/styled";
import { MEDIA, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.nav`
  --padding: ${VARS.size.gold};
  --gap: calc(var(--padding) * 1.5);
  --border-radius: ${NOT_FONT_SIZE["2xs"]};

  position: fixed;
  top: 0;
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);

  box-shadow: ${VARS.decorator.shadow[1]};

  transition:
    top ${TIME.m} ease,
    box-shadow ${TIME.m} ease;

  @media (max-width: ${MEDIA.m}) {
    display: none;
  }

  &::before {
    border-bottom-right-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  nav {
    display: flex;
    gap: var(--gap);
    padding: var(--padding) var(--gap);
    border-bottom-right-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);

    box-shadow: ${VARS.decorator.bevelHighlightLeft},
      ${VARS.decorator.bevelHighlightRight},
      ${VARS.decorator.bevelHighlightBottom};
  }

  body[data-vertical-scroll="true"] & {
    top: calc((var(--padding) * 2 + ${VARS.global.fontSize}) * -1);

    box-shadow: initial;
  }
`;
