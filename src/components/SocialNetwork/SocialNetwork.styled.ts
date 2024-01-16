import {
  COLOR,
  GLASS_SET,
  MICROINT,
  NOT_FONT_SIZE,
  shadowAdapter,
} from "@/styles";
import { type SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

const BORDER_RADIUS = NOT_FONT_SIZE["3xs"];
const SIZE = NOT_FONT_SIZE.m;

export interface Props {
  styled?: SerializedStyles;
}

interface Provider {
  styled?: SerializedStyles;
}

export const adapter = ({ styled }: Props): Provider => {
  return {
    styled,
  };
};

export const Component = styled.a<{ p: Provider }>`
  position: relative;
  width: ${SIZE};
  height: ${SIZE};
  border-radius: ${BORDER_RADIUS};
  text-decoration: none;
  box-shadow: ${shadowAdapter(2)};
  transition:
    box-shadow ${MICROINT.xs} ease-out,
    transform ${MICROINT.xs} ease-out;
  ${GLASS_SET.this}

  :hover {
    color: ${COLOR.b};
  }

  :active {
    box-shadow: ${shadowAdapter(1)};
  }

  .external-network__glass-refleccion {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${BORDER_RADIUS};
    ${GLASS_SET.refleccion}
  }

  .external-network__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: ${BORDER_RADIUS};
    ${GLASS_SET.content}
  }

  ${({ p }) => p.styled};
`;
