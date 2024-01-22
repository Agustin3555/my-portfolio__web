import { MAIN_GAP, MEDIA, MICROINT, NOT_FONT_SIZE, type Value } from "@/styles";
import styled from "@emotion/styled";

const GAP = MAIN_GAP;

interface ConstProvider {
  left: Value;
  bottom: Value;
  gap: Value;

  nav: {
    gap: Value;
  };
}

const cp: ConstProvider = {
  left: GAP,
  bottom: GAP,
  gap: GAP,

  nav: {
    gap: GAP,
  },
};

export const Component = styled.div`
  position: fixed;
  left: ${cp.left};
  bottom: ${cp.bottom};
  display: flex;
  flex-direction: column;
  gap: ${cp.gap};
  transition: left ${MICROINT.m} ease;

  @media (max-width: ${MEDIA.m}) {
    left: calc(${NOT_FONT_SIZE.m} * -1);
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: ${cp.nav.gap};

    > * {
      opacity: 0;
      transform: translateX(-100%);
      filter: blur(${NOT_FONT_SIZE["5xs"]});
      transition:
        opacity ${MICROINT.m} ease,
        transform ${MICROINT.m} ease,
        filter ${MICROINT.m} ease;
      transition-delay: calc(${MICROINT.s} * var(--i));

      body[data-social-nets-in-left-nav="true"] & {
        opacity: 1;
        transform: initial;
        filter: initial;
      }
    }
  }
`;
