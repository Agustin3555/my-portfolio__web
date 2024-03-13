import styled from "@emotion/styled";
import { COLOR, FONT_SIZE, TIME, NOT_FONT_SIZE, VARS } from "@/styles";

export const Component = styled.div`
  --gap-s: ${NOT_FONT_SIZE["3xs"]};
  --bar-height: ${VARS.size.gold};
  --tech-padding: var(--gap-s);
  --tech-height: calc(var(--tech-padding) * 2 + var(--bar-height));
  --bullet-point-width: ${VARS.size.gold};
  --bullet-point-node-gap: var(--gap-s);

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: var(--gap-s);

  .tech {
    display: flex;
    justify-content: space-between;
    gap: calc(var(--gap-s) * 3);
    padding: var(--tech-padding);
    padding-left: calc(var(--tech-padding) * 2);
    border-radius: ${NOT_FONT_SIZE["3xs"]};

    transition:
      background-color ${TIME.s} ease-out,
      opacity ${TIME.s} ease-out;

    :hover {
      background-color: ${COLOR.gs_3};

      .names {
        color: ${COLOR.gs_18};
      }
    }

    .names {
      display: flex;
      align-items: center;
      gap: calc(var(--gap-s) * 2);
      width: calc(
        var(--names-max-width) -
          (var(--bullet-point-node-gap) + var(--bullet-point-width)) *
          var(--node-level)
      );

      transition: color ${TIME.s} ease-out;

      .name {
        font-size: ${FONT_SIZE.xs};

        white-space: nowrap;
      }
    }

    .graphics {
      flex-grow: 0.5;

      display: flex;
      align-items: center;
      gap: calc(var(--gap-s) * 3);
      justify-content: space-between;

      .icons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--gap-s);
        width: var(--icons-max-width);

        .icon {
          --icon-size: ${FONT_SIZE.l};

          width: var(--icon-size);
          height: var(--icon-size);

          object-fit: contain;

          transition: filter ${TIME.s} ease-out;
        }

        .invert-in-dark-mode {
          --invert-in-dark-mode: invert(0.5) brightness(180%);
        }
      }

      .level-bar {
        flex-grow: 1;

        min-width: calc(var(--bar-height) * var(--levels));

        .bar {
          height: var(--bar-height);
          border-radius: ${NOT_FONT_SIZE["4xs"]};

          background-color: ${COLOR.b};
        }
      }
    }

    @media (width < 32rem) {
      .names {
        display: none;
      }

      .graphics {
        flex-grow: 1;

        gap: var(--bar-height);

        .icons {
          justify-content: flex-start;
          width: calc(
            var(--icons-max-width) -
              (var(--bullet-point-node-gap) + var(--bullet-point-width)) *
              var(--node-level)
          );
        }

        .level-bar {
          flex-grow: 1;
        }
      }
    }
  }

  .techs-children {
    display: flex;
    flex-direction: column;

    > li {
      display: flex;
      gap: var(--bullet-point-node-gap);

      :not(:nth-last-of-type(1)) {
        --techs-children-gap: var(--gap-s);

        .bullet-point .line {
          width: ${NOT_FONT_SIZE["6xs"]};
        }
      }

      .bullet-point {
        --line-color: ${VARS.color.a.line.light};

        position: relative;
        width: var(--bullet-point-width);
        height: calc(var(--tech-height) + var(--techs-children-gap));

        > * {
          position: absolute;
          left: 50%;
        }

        .box {
          width: ${NOT_FONT_SIZE["2xs"]};
          height: calc(var(--tech-height) / 2);
          border-bottom-left-radius: ${NOT_FONT_SIZE["3xs"]};

          border-width: 0;
          border-left-width: ${NOT_FONT_SIZE["6xs"]};
          border-bottom-width: ${NOT_FONT_SIZE["6xs"]};
          border-style: solid;
          border-color: var(--line-color);

          transition: border-color ${TIME.s} ease-out;
        }

        .line {
          height: 100%;

          background-color: var(--line-color);

          transition: background-color ${TIME.s} ease-out;
        }
      }
    }
  }

  body[data-dark-mode="true"] & {
    .tech {
      :hover {
        background-color: ${COLOR.gs_14};

        .names {
          color: ${COLOR.gs_0};
        }
      }

      .graphics .icons .icon {
        filter: var(--invert-in-dark-mode);
      }
    }

    .techs-children > li .bullet-point {
      --line-color: ${VARS.color.a.line.dark};
    }
  }
`;
