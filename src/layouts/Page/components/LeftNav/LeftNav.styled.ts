import styled from "@emotion/styled";
import { TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.div`
  --gap: ${VARS.size.gold};

  position: fixed;
  left: var(--gap);
  bottom: var(--gap);
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  transition:
    left ${TIME.m} ease,
    opacity ${TIME.m} ease;

  @media (max-width: ${VARS.screen.width.l}) {
    left: calc(${NOT_FONT_SIZE.m} * -1);

    opacity: 0;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: var(--gap);

    /* Debería ser "> *" */
    > :is(div, hr) {
      display: flex;
      translate: -100%;
      opacity: 0;

      transition:
        translate ${TIME.m} ease,
        opacity ${TIME.m} ease;
      transition-delay: calc(0.15s * var(--i));

      body[data-social-nets-in-left-nav="true"] & {
        translate: initial;
        opacity: 1;
      }
    }
  }
`;
