import * as IconStyled from "./Icon.styled";
import { type HandlingClass, asClassName } from "@/tools";

const Icon = ({
  iconName,
  style,
  handlingClass = [],
}: {
  iconName: string;
  style?: IconStyled.Props;
  handlingClass?: HandlingClass;
}) => (
  <IconStyled.Component
    className={asClassName(iconName, ...handlingClass)}
    p={IconStyled.adapter(style)}
  />
);

export default Icon;
