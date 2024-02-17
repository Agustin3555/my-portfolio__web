import styled from "@emotion/styled";
import {
  COLOR,
  TIME,
  NOT_FONT_SIZE,
  type Value,
  VARS,
  FONT_SIZE,
  type Size,
} from "@/styles";

export interface Props {
  aspectRatio?: string;
  borderRadius?: Size;
}

interface Provider {
  borderRadius: Value;

  imgs: {
    aspectRatio: Value;
  };
}

export const adapter = ({
  aspectRatio = "16 / 9",
  borderRadius = NOT_FONT_SIZE.xs,
}: Props): Provider => {
  return {
    borderRadius,

    imgs: {
      aspectRatio,
    },
  };
};

export const Component = styled.div<{ p: Provider }>`
  position: relative;
  border-radius: ${({ p }) => p.borderRadius};

  box-shadow: ${VARS.decorator.shadow[1]};
  overflow: hidden;

  .controls {
    --padding: 0.75rem;
    --extra-padding: calc(var(--padding) * 1.5);
    --background-gradient: transparent, rgba(0, 0, 0, 0.3) 32.5%,
      rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.75) 100%;

    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: var(--padding);
    padding-left: var(--extra-padding);
    height: 100%;

    color: ${COLOR.b_l2};
    background: linear-gradient(90deg, var(--background-gradient));

    .scroll-indicator {
      rotate: 90deg;
    }

    .position-counter {
      font-size: ${FONT_SIZE.xs};
      word-spacing: calc(0.09375rem * -1);

      strong {
        font-size: ${FONT_SIZE.xs};

        font-weight: initial;
        color: ${COLOR.gs_0};
      }
    }

    .toggle-fullscreen {
      --size: ${FONT_SIZE.m};

      position: relative;
      padding: 0;
      width: var(--size);
      height: var(--size);

      transition: color ${TIME.xs} ease-out;

      :hover {
        color: ${COLOR.gs_0};
      }

      > * {
        position: absolute;
        top: 0;
      }

      .compress {
        display: none;
      }

      .expand {
        display: flex;
      }
    }
  }

  .imgs {
    --aspect-ratio: ${({ p }) => p.imgs.aspectRatio};

    display: flex;
    flex-direction: column;
    aspect-ratio: var(--aspect-ratio);

    overflow: hidden auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;

    li {
      flex-shrink: 0;

      aspect-ratio: var(--aspect-ratio);
      width: 100%;
      height: 100%;

      scroll-snap-align: start;

      img {
        width: 100%;
        height: 100%;

        object-fit: contain;
      }
    }
  }

  &[data-fullscreen="true"] {
    border-radius: 0;

    .controls .toggle-fullscreen {
      .compress {
        display: flex;
      }

      .expand {
        display: none;
      }
    }

    .imgs {
      width: 100vw;
      height: 100vh;
    }
  }

  // Para dispositivos táctiles
  @media (hover: none) and (any-hover: none) {
    .controls {
      bottom: 0;
      flex-direction: row;
      padding: var(--padding);
      padding-top: var(--extra-padding);
      width: 100%;
      height: auto;

      background: linear-gradient(var(--background-gradient) 100%);

      .scroll-indicator {
        rotate: initial;
      }
    }

    .imgs {
      flex-direction: row;

      overflow: auto hidden;
      scroll-snap-type: x mandatory;
    }
  }
`;
