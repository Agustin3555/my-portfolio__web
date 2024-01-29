import {
  COLOR,
  GLASS_SET,
  TIME,
  NOT_FONT_SIZE,
  FONT_SIZE,
  shadowAdapter,
} from "@/styles";
import styled from "@emotion/styled";

const BORDER_RADIUS = NOT_FONT_SIZE["4xs"];
const TEXT_FONT_SIZE = FONT_SIZE.xs;

const b = `calc((${FONT_SIZE.s} - ${TEXT_FONT_SIZE}) / 2)`;
const a = `calc((${TEXT_FONT_SIZE} - ${b}) / 2)`;
const c = `calc(${a} + ${b})`;

export const Component = styled.a`
  position: relative;
  border-radius: ${BORDER_RADIUS};
  text-decoration: none;
  box-shadow: ${shadowAdapter(2)};
  ${GLASS_SET.this}

  transition:
    box-shadow ${TIME.xs} ease-out,
    transform ${TIME.xs} ease-out;

  :hover {
    color: ${COLOR.b};
  }

  :active {
    box-shadow: ${shadowAdapter(1)};
  }

  .external-link__glass-refleccion {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${BORDER_RADIUS};
    ${GLASS_SET.refleccion}
  }

  .external-link__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${c};
    padding: ${a};
    padding-right: ${c};
    font-size: ${TEXT_FONT_SIZE};
    border-radius: ${BORDER_RADIUS};
    transition: color ${TIME.xs} ease-out;
    ${GLASS_SET.content}
  }
`;
