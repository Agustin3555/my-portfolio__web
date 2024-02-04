import {
  COLOR,
  COLOR_BRIGHT_B,
  COLOR_DARK_B,
  FONT,
  FONT_SIZE,
  MEDIA,
  TIME,
  NOT_FONT_SIZE,
  type Value,
} from "@/styles";
import styled from "@emotion/styled";

const GAP = NOT_FONT_SIZE.s;

interface ConstProvider {
  headerGlass: {
    transform: Value;
    header: {
      types: {
        gap: Value;
        itemC: {
          gap: Value;
        };
      };
    };
  };
  slider: {
    hover: {
      headerGlass: {
        transform: Value;
      };
    };
  };

  title: {
    color: Value;
  };

  DARK_MODE: {
    title: {
      color: Value;
    };
  };
}

const cp: ConstProvider = {
  headerGlass: {
    transform: `translate(calc(${GAP} * -1), calc(${GAP} * 2))`,
    header: {
      types: {
        gap: `calc(${GAP} * 0.5)`,
        itemC: {
          gap: `calc(${GAP} * 0.5)`,
        },
      },
    },
  },
  slider: {
    hover: {
      headerGlass: {
        transform: `translate(calc(${GAP} * -1), 0)`,
      },
    },
  },

  title: {
    color: COLOR_BRIGHT_B,
  },

  DARK_MODE: {
    title: {
      color: COLOR_DARK_B,
    },
  },
};

export const Component = styled.div`
  display: grid;

  grid-template:
    "header ." auto
    "slider techs" auto
    "slider links" 1fr
    "desc   ." auto /
    2.5fr 1fr;

  gap: ${GAP};
  padding-left: ${GAP};

  // TODO: esta medida es segun se rompa el texto en el grid
  @media (max-width: 75rem) {
    grid-template:
      "header"
      "slider"
      "techs"
      "desc"
      "links";
  }

  @media (max-width: ${MEDIA.xs}) {
    padding-left: 0;
  }

  .header-glass {
    grid-area: header;

    transform: ${cp.headerGlass.transform};

    transition: transform ${TIME.l} ease-in-out;

    .header {
      display: flex;
      flex-direction: column;
      gap: ${FONT_SIZE.s};

      .types {
        display: flex;
        gap: ${cp.headerGlass.header.types.gap};

        .item-C {
          display: flex;
          gap: ${cp.headerGlass.header.types.itemC.gap};
          align-items: center;
        }
      }
    }
  }

  .slider {
    grid-area: slider;

    :hover ~ .header-glass {
      transform: ${cp.slider.hover.headerGlass.transform};
    }
  }

  .desc {
    grid-area: desc;

    text-wrap: pretty;
  }

  .links {
    grid-area: links;

    display: flex;
    align-items: flex-start;
    gap: ${FONT_SIZE.xs};
  }

  .used-techs {
    grid-area: techs;

    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: ${FONT_SIZE.xs};

    .item {
      padding: 0.5313rem;
      font-size: ${FONT_SIZE.xs};
      color: ${COLOR.b_d2};
      background-color: ${COLOR.gs_1};
      border-radius: ${NOT_FONT_SIZE["3xs"]};

      transition: background-color ${TIME.s} ease-out;

      span {
        margin-left: ${NOT_FONT_SIZE["2xs"]};
        font-size: ${FONT_SIZE.xs};
        color: ${COLOR.gs_10};
      }
    }
  }

  body[data-dark-mode="true"] & {
    .section__title {
      color: ${cp.DARK_MODE.title.color};
    }

    .used-techs .item {
      color: ${COLOR.b_l2};
      background-color: ${COLOR.gs_16};

      span {
        color: ${COLOR.gs_8};
      }
    }
  }
`;
