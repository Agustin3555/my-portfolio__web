import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.fieldset`
  --gap: ${VARS.size.gold};

  container-type: inline-size;
  flex-grow: 1.5;
  flex-basis: 13.125rem;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: calc(var(--gap) * 2);
  padding: 0;

  border: none;

  @media (width < 47.4375rem) {
    order: -1;
  }

  .item {
    flex-grow: 1;
    flex-basis: 5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap);

    @container (width < 40.625rem) {
      flex-basis: 25rem;
    }

    .toggle {
      --toggle-ui-height: ${FONT_SIZE.s};

      display: flex;
      align-items: center;
      gap: var(--gap);
      font-size: ${FONT_SIZE.xs};

      color: ${COLOR.b_d1};
      cursor: pointer;

      input {
        display: none;

        :checked + .ui {
          ::before {
            width: calc(var(--toggle-ui-height) * 1.5);
          }

          ::after {
            transform: translateX(var(--toggle-ui-height));
          }
        }
      }

      .ui {
        position: relative;
        width: calc(var(--toggle-ui-height) * 2);
        height: var(--toggle-ui-height);
        border-radius: ${NOT_FONT_SIZE["6xl"]};

        color: ${COLOR.b};
        background-color: ${COLOR.gs_10};

        transition: background-color ${TIME.s} ease-out;

        ::before {
          content: "";
          display: block;
          width: calc(var(--toggle-ui-height) * 0.5);
          height: var(--toggle-ui-height);
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
          width: var(--toggle-ui-height);
          height: var(--toggle-ui-height);
          border-width: ${NOT_FONT_SIZE["6xs"]};
          border-radius: 50%;

          border-style: solid;
          border-color: ${COLOR.gs_6};
          background-color: ${COLOR.gs_2};
          box-shadow: ${VARS.decorator.shadow[1]};

          transition:
            border-color ${TIME.s} ease-out,
            background-color ${TIME.s} ease-out,
            transform ${TIME.s} ease;
        }
      }
    }
  }

  body[data-dark-mode="true"] & .item .toggle {
    color: ${COLOR.b};

    .ui {
      background-color: ${COLOR.gs_12};

      ::after {
        border-color: ${COLOR.gs_10};
        background-color: ${COLOR.gs_4};
      }
    }
  }
`;
