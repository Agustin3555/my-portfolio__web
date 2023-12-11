import * as IconStyled from "./Icon.styled";
import { type HandlingClass, asClassName } from "@/tools";

const Icon = ({
  handlingClass,
  iconName,
  style,
}: {
  handlingClass?: HandlingClass;
  iconName: string;
  style?: IconStyled.Props;
}) => (
  <IconStyled.Component
    className={asClassName(handlingClass)}
    p={IconStyled.adapter(style)}
  >
    <i className={`icon ${iconName}`} />
  </IconStyled.Component>
);

export default Icon;
