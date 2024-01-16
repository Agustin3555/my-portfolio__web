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
    className={asClassName(...handlingClass)}
    p={IconStyled.adapter(style)}
  >
    <i className={`icon ${iconName}`} />
  </IconStyled.Component>
);

export default Icon;
