import React from "react";

const shapes = {
  round: "rounded-lg",
  square: "rounded-[0px]",
} as const;
const variants = {
  outline: {
    gray_500_33: "border-gray-500_33 border-2 border-solid text-gray-500",
    gray_500: "border-gray-500 border border-solid text-gray-500",
  },
  fill: {
    gray_800: "bg-gray-800",
    gray_900: "bg-gray-900 text-white-A700",
    gray_100: "bg-gray-100 text-gray-500",
    white_A700: "bg-white-A700 text-gray-500",
  },
} as const;
const sizes = {
  md: "h-9 pl-[9px] pr-[35px] text-sm",
  xs: "h-[26px] px-[3px] text-sm",
  sm: "h-8 pl-[9px] pr-[35px] text-sm",
  xl: "h-[58px] pl-5 pr-[35px] text-sm",
  lg: "h-12 px-3.5 text-sm",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "lg",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-gray-500 text-sm font-medium ${shapes[shape] || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
