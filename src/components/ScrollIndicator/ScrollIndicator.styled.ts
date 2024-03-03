import styled from "@emotion/styled";
import { NOT_FONT_SIZE } from "@/styles";

export const Component = styled.span`
  --size: ${NOT_FONT_SIZE.s};

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);

  // Para dispositivos táctiles
  @media (hover: none) and (any-hover: none) {
    rotate: 90deg;
  }

  .swipe-icon {
    --translate: 0.25rem;

    position: absolute;

    animation: sliding 8s ease infinite;

    @keyframes sliding {
      0% {
        translate: 0 var(--translate);
        rotate: 0deg;
        opacity: 1;
      }
      37.5% {
        translate: 0 calc(var(--translate) * -1);
        rotate: 0deg;
        opacity: 0;
      }
      45% {
        rotate: 180deg;
        opacity: 0;
      }
      50% {
        translate: 0 calc(var(--translate) * -1);
        opacity: 1;
      }
      87.5% {
        translate: 0 var(--translate);
        rotate: 180deg;
        opacity: 0;
      }
      95% {
        rotate: 0deg;
        opacity: 0;
      }
      100% {
        translate: 0 var(--translate);
        opacity: 1;
      }
    }
  }
`;
