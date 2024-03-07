import styled from "@emotion/styled";
import { COLOR, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.a`
  --size: 100%;
  --size-as-scroll-up: ${NOT_FONT_SIZE.l};
  --size-logo: ${NOT_FONT_SIZE["2xl"]};

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);

  background-color: ${COLOR.a};
  box-shadow: ${VARS.decorator.shadow[1]};
  cursor: pointer;

  transition:
    left ${TIME.m} ease,
    width ${TIME.l} ease,
    height ${TIME.l} ease,
    border-radius ${TIME.l} ease,
    box-shadow 0s ${TIME.l} ease;

  .logo {
    width: var(--size-logo);
    height: var(--size-logo);

    transition:
      width ${TIME.l} ease,
      height ${TIME.l} ease;

    object-fit: cover;
  }

  &[data-loaded="true"] {
    --size: var(--size-as-scroll-up);
    --size-logo: var(--size);

    border-bottom-right-radius: ${NOT_FONT_SIZE["2xs"]};

    @media (max-width: ${VARS.screen.width.l}) {
      left: calc(var(--size-as-scroll-up) * -1);

      box-shadow: initial;
    }
  }
`;
