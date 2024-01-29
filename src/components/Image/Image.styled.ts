import { TIME, NOT_FONT_SIZE } from "@/styles";
import styled from "@emotion/styled";

export const Component = styled.figure`
  .loader-C {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition:
      display ${TIME.s} linear ${TIME.s},
      opacity ${TIME.s} ease-out;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: blur(${NOT_FONT_SIZE["4xs"]});
    opacity: 0;
    transition:
      filter ${TIME.s} ease-out ${TIME.s},
      opacity ${TIME.s} ease-out ${TIME.s};
  }

  &[data-loaded="true"] {
    .loader-C {
      opacity: 0;
      display: none;
    }

    .img {
      filter: initial;
      opacity: 1;
    }
  }
`;
