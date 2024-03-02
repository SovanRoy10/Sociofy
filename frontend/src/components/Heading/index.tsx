import React from "react";

const sizes = {
  xl: "text-3xl font-bold leading-[37px]",
  s: "text-sm font-bold leading-[17px]",
  md: "text-base font-bold leading-[22px]",
  xs: "text-xs font-bold leading-[15px]",
  lg: "text-[22px] font-bold leading-[27px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
