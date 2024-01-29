import {
  COLOR,
  FONT_SIZE,
  MAIN_GAP,
  TIME,
  NOT_FONT_SIZE,
  type Value,
  shadowAdapter,
} from "@/styles";
import styled from "@emotion/styled";

const GAP = MAIN_GAP;
const TOGGLE_UI_HEIGHT = FONT_SIZE.s;

interface ConstProvider {
  item: {
    toggle: {
      toggleUI: {
        width: Value;
      };
    };
  };
}

const cp: ConstProvider = {
  item: {
    toggle: {
      toggleUI: {
        width: `calc(${TOGGLE_UI_HEIGHT} * 2)`,
      },
    },
  },
};

export const Component = styled.fieldset`
  flex-grow: 1.5;
  flex-basis: 13.125rem;

  container-type: inline-size;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${NOT_FONT_SIZE.m};
  padding: 0;
  border: none;

  .item {
    flex-grow: 1;
    flex-basis: 5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${GAP};
    text-wrap: pretty;

    @container (width <= 40.625rem) {
      flex-basis: 25rem;
    }

    .toggle {
      display: flex;
      align-items: center;
      gap: ${GAP};
      font-size: ${FONT_SIZE.xs};
      color: ${COLOR.b};
      cursor: pointer;

      input {
        display: none;

        :checked + .ui {
          ::before {
            width: calc(${TOGGLE_UI_HEIGHT} * 1.5);
          }

          ::after {
            transform: translateX(${TOGGLE_UI_HEIGHT});
          }
        }
      }

      .ui {
        position: relative;
        width: ${cp.item.toggle.toggleUI.width};
        height: ${TOGGLE_UI_HEIGHT};
        border-radius: ${NOT_FONT_SIZE["6xl"]};
        background-color: ${COLOR.gs_10};
        transition: background-color ${TIME.s} ease-out;

        ::before {
          content: "";
          display: block;
          width: calc(${TOGGLE_UI_HEIGHT} * 0.5);
          height: ${TOGGLE_UI_HEIGHT};
          border-top-left-radius: ${NOT_FONT_SIZE["6xl"]};
          border-bottom-left-radius: ${NOT_FONT_SIZE["6xl"]};
          background-color: ${COLOR.b};
          transition: width ${TIME.s} ease;
        }

        ::after {
          content: "";
          position: absolute;
          top: calc(${NOT_FONT_SIZE["6xs"]} * -1);
          left: calc(${NOT_FONT_SIZE["6xs"]} * -1);
          display: block;
          width: ${TOGGLE_UI_HEIGHT};
          height: ${TOGGLE_UI_HEIGHT};
          border-radius: 50%;
          border-width: ${NOT_FONT_SIZE["6xs"]};
          border-style: solid;
          border-color: ${COLOR.gs_6};
          background-color: ${COLOR.gs_2};
          box-shadow: ${shadowAdapter(2)};
          transition:
            border-color ${TIME.s} ease-out,
            background-color ${TIME.s} ease-out,
            transform ${TIME.s} ease;
        }
      }
    }
  }

  body[data-dark-mode="true"] & .item .toggle .ui {
    background-color: ${COLOR.gs_12};

    ::after {
      border-color: ${COLOR.gs_10};
      background-color: ${COLOR.gs_4};
    }
  }
`;
