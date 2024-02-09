import { css } from "@emotion/react";
import { COLOR, FONT, NOT_FONT_SIZE, FONT_SIZE } from "./palette";

export const VARS = {
  color: {
    a: {
      bg: {
        light: "var(--color-a-bg-light)",
        dark: "var(--color-a-bg-dark)",
      },
      font: {
        light: "var(--color-a-font-light)",
        dark: "var(--color-a-font-dark)",
      },
    },
  },
  size: {
    gold: "var(--size-gold)",
    layout: {
      with: "var(--size-layout-with)",
    },
    screen: {
      xs: "var(--size-screen-xs)",
      s: "var(--size-screen-s)",
      m: "var(--size-screen-m)",
    },
  },
  global: {
    fontSize: "var(--global-font-size)",
  },
  decorator: {
    shadow: {
      0: "var(--decorator-shadow-0)",
      1: "var(--decorator-shadow-1)",
      2: "var(--decorator-shadow-2)",
    },
    bevelHighlight: "var(--decorator-bevel-highlight)",
  },
  media: {
    // TODO: comentar el no uso variables
    xs: "23.4375rem",
    s: "26.5625rem",
    m: "56.25rem",
    l: "calc(47rem + (1.625rem * 4 + 2.625rem) * 2)",
  },
  component: {
    button: {
      s: {
        iconSize: "var(--component-button-s-icon-size)",
        padding: "var(--component-button-s-padding)",
        borderRadius: "var(--component-button-s-border-radius)",
      },
    },
  },
};

export const BGC_DARK_A = COLOR.gs_16;
export const BGC_BRIGHT_A = COLOR.gs_1;

export const BGC_DARK_B = COLOR.gs_14;
export const BGC_BRIGHT_B = COLOR.gs_5;

export const COLOR_DARK_A = COLOR.gs_5;
export const COLOR_BRIGHT_A = COLOR.gs_12;

export const COLOR_DARK_B = COLOR.gs_2;
export const COLOR_BRIGHT_B = COLOR.gs_14;

export const MAIN_GAP = NOT_FONT_SIZE.s;
export const MAIN_GAP_M = `calc(${MAIN_GAP} * 2)`;
export const LAYOUT_WIDTH = `calc(${NOT_FONT_SIZE["2xl"]} * 6)`;
export const GLASS_BUTTON_SIZE = NOT_FONT_SIZE.m;

export enum MEDIA {
  "2xs" = "23.4375rem",
  xs = "26.5625rem",
  s = "56.25rem",
  m = `calc(47rem + (1.625rem * 4 + 2.625rem) * 2)`,
}

export const GLASS_SET = {
  this: css`
    backdrop-filter: blur(15px);
  `,
  refleccion: css`
    background: linear-gradient(
      -30deg,
      rgba(160, 160, 160, 0.0375) 25%,
      rgba(160, 160, 160, 0.075) 75%,
      rgba(160, 160, 160, 0.1875) 100%
    );
  `,
  content: css`
    border-width: ${NOT_FONT_SIZE["6xs"]};
    border-style: solid;
    border-color: rgba(176, 176, 176, 0.025);
    border-top-color: rgba(176, 176, 176, 0.1);
    border-left-color: rgba(176, 176, 176, 0.05);
  `,
};
