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
  --border-radius: ${({ p }) => p.borderRadius};

  position: relative;
  border-radius: var(--border-radius);

  background-color: hsl(0, 0%, 50%);
  box-shadow: ${VARS.decorator.shadow[1]}, ${VARS.decorator.bevelHighlight.full};
  overflow: hidden;

  .imgs {
    --aspect-ratio: ${({ p }) => p.imgs.aspectRatio};

    display: flex;
    flex-direction: column;
    aspect-ratio: var(--aspect-ratio);

    overflow: hidden auto;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;

    li {
      position: relative;
      flex-shrink: 0;

      aspect-ratio: var(--aspect-ratio);
      width: 100%;
      height: 100%;

      overflow: hidden;
      scroll-snap-align: start;

      img,
      span {
        width: 100%;
        height: 100%;
      }

      .background {
        object-fit: cover;
        filter: blur(8rem);
      }

      .image {
        position: absolute;

        object-fit: contain;
      }
    }
  }

  .controls {
    --padding: var(--border-radius);
    --button-size: calc(var(--padding) * 2 + ${FONT_SIZE.m});

    position: absolute;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: calc(var(--padding) * 0.25);
    width: 100%;

    color: ${COLOR.b_l2};
    background: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.3) 32.5%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.75) 100%
    );

    .scroll-indicator {
      width: var(--button-size);
      height: var(--button-size);

      color: ${COLOR.gs_0};
    }

    .position-counter {
      font-size: ${FONT_SIZE.xs};
      word-spacing: calc(0.03125rem * -1);
      margin-bottom: var(--padding);

      strong {
        font-size: ${FONT_SIZE.xs};

        font-weight: initial;
        color: ${COLOR.gs_0};
      }
    }

    .toggle-fullscreen {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: var(--button-size);
      height: var(--button-size);

      transition: color ${TIME.xs} ease-out;

      :hover {
        color: ${COLOR.gs_0};
      }

      > * {
        position: absolute;
      }

      .compress {
        display: none;
      }

      .expand {
        display: flex;
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
    .imgs {
      flex-direction: row;

      overflow: auto hidden;
      scroll-snap-type: x mandatory;
    }
  }
`;
