import {
  COLOR,
  FONT_SIZE,
  GLASS_SET,
  TIME,
  NOT_FONT_SIZE,
  shadowAdapter,
} from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${NOT_FONT_SIZE["2xl"]};

  .email-link {
    position: relative;
    margin-bottom: ${NOT_FONT_SIZE.xl};

    .link {
      display: inline-block;
      padding: ${FONT_SIZE.s} calc(${FONT_SIZE.s} * 2);
      border-radius: ${NOT_FONT_SIZE["3xs"]};

      text-decoration: none;
      color: ${COLOR.gs_0};
      background-color: ${COLOR.gs_14};

      ${GLASS_SET.content};

      transition:
        color ${TIME.s} ease-out,
        background-color ${TIME.s} ease-out,
        box-shadow ${TIME.m} ease-out,
        scale ${TIME.m} ease-out;

      :hover {
        box-shadow: ${shadowAdapter(2)};
        scale: 1.06;
      }
    }

    :hover {
      .b-1 {
        bottom: -3rem;
        left: -4.5rem;
      }

      .b-2 {
        top: -4rem;
        right: -2rem;
      }

      .b-3 {
        bottom: -5rem;
        left: 60%;
      }
    }

    .box {
      position: absolute;

      transition:
        top 1.5s ease-in-out,
        bottom 1.5s ease-in-out,
        left 1.5s ease-in-out,
        right 1.5s ease-in-out;
    }

    .b-1 {
      bottom: -2rem;
      left: -3.5rem;
    }

    .b-2 {
      top: -3rem;
      right: -1rem;
    }

    .b-3 {
      bottom: -4rem;
      left: 50%;
    }
  }

  body[data-dark-mode="true"] & {
    .email-link .link {
      color: ${COLOR.gs_19};
      background-color: ${COLOR.gs_4};
    }
  }
`;
