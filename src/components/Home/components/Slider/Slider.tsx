import * as SliderStyled from "./Slider.styled";
import Icon from "@/components/Icon/Icon";
import GlassButton from "@/components/GlassButton/GlassButton";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { type HandlingClass, asClassName, sleep } from "@/tools";
import { FONT_SIZE, MICROINTERACTION, getCSSVarValue } from "@/styles";
import { useFullscreen } from "@/hooks";

const Slider = ({
  picturesLength,
  children,
  style = {},
  handlingClass,
}: {
  picturesLength: number;
  children: ReactNode;
  style?: SliderStyled.Props;
  handlingClass?: HandlingClass;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsContainerRef = useRef<HTMLDivElement | null>(null);
  const [changing, setChanging] = useState(false);

  const rightButtonHandleClick = useCallback(async () => {
    setChanging(true);

    if (!itemsContainerRef.current) return;

    const itemsContainer = itemsContainerRef.current.children[0];
    const children = itemsContainer.children;
    const childWidth = children[0].clientWidth;

    if (children.length < 0) return;

    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);

    itemsContainer.style.transform = `translateX(-${childWidth}px)`;
    itemsContainer.style.transition = `transform ${getCSSVarValue(
      MICROINTERACTION.l,
    )} ease-out`;

    await sleep(1000);

    itemsContainer.style.transform = "initial";
    itemsContainer.style.transition = "initial";

    const firstChild = children[0];
    itemsContainer.appendChild(firstChild);

    setChanging(false);
  }, []);

  const leftButtonHandleClick = useCallback(async () => {
    setChanging(true);

    if (!itemsContainerRef.current) return;

    const itemsContainer = itemsContainerRef.current.children[0];
    const children = itemsContainer.children;

    if (children.length < 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1,
    );

    const firstChild = children[0];
    const childWidth = firstChild.clientWidth;
    const lastChild = children[children.length - 1];

    itemsContainer.insertBefore(lastChild, firstChild);

    itemsContainer.style.transform = `translateX(-${childWidth}px)`;
    itemsContainer.style.transition = "initial";

    await sleep(10);

    itemsContainer.style.transform = "initial";
    itemsContainer.style.transition = `transform ${getCSSVarValue(
      MICROINTERACTION.l,
    )} ease-out`;

    await sleep(1000);

    setChanging(false);
  }, []);

  const { elementRef, isFullscreen, toggleFullscreen } =
    useFullscreen<HTMLDivElement>();

  return (
    <SliderStyled.Component
      className={asClassName(handlingClass)}
      ref={elementRef}
      data-fullscreen={isFullscreen}
      p={SliderStyled.adapter(style)}
    >
      <div className="items-C" ref={itemsContainerRef}>
        {children}
      </div>
      <div className="controls-C">
        <div className="controls">
          <GlassButton
            title="Retroceder"
            handleClick={changing ? undefined : leftButtonHandleClick}
            handlingClass="control"
          >
            <Icon
              handlingClass="button-icon"
              iconName="fa-solid fa-chevron-left"
              style={{ size: FONT_SIZE.xs }}
            />
          </GlassButton>
          <div className="indicators">
            {Array.from({ length: picturesLength }, (_, i) => (
              <div
                className="item"
                key={i}
                data-activated={i === currentIndex}
              />
            ))}
          </div>
          <GlassButton
            title="Avanzar"
            handleClick={changing ? undefined : rightButtonHandleClick}
            handlingClass="control"
          >
            <Icon
              handlingClass="button-icon"
              iconName="fa-solid fa-chevron-right"
              style={{ size: FONT_SIZE.xs }}
            />
          </GlassButton>
          <GlassButton
            title={
              isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"
            }
            handlingClass="control"
            handleClick={toggleFullscreen}
          >
            <Icon
              iconName={
                isFullscreen ? "fa-solid fa-compress" : "fa-solid fa-expand"
              }
              style={{ size: FONT_SIZE.xs }}
            />
          </GlassButton>
        </div>
      </div>
    </SliderStyled.Component>
  );
};

export default Slider;
