import styled from "@emotion/styled";
import { FONT_SIZE, TIME, VARS } from "@/styles";

export const Component = styled.div`
  display: flex;
  gap: ${VARS.component.button.xs.gapElements};
  align-items: center;
  padding-inline: ${VARS.component.button.xs.paddingInline};
  height: ${VARS.component.button.xs.height};
  border-radius: ${VARS.component.button.xs.borderRadius};

  background-color: ${VARS.color.c.bg.light};

  transition: background-color ${TIME.s} ease-out;

  p {
    font-size: ${FONT_SIZE.xs};
  }

  body[data-dark-mode="true"] & {
    background-color: ${VARS.color.c.bg.dark};
  }
`;
