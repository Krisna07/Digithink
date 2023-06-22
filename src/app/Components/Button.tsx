import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Define the button variants and states
const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default:
        "w-fit grid place-items-center rounded-full text-white hover:text-gray-100 bg-slate-900 hover:bg-slate-800",
      primary:
        "w-fit grid place-items-center rounded-full text-gray-100 bg-slate-900 hover:bg-slate-800 hover:text-gray-200",
      ghost:
        "w-fit grid place-items-center rounded-full bg-slate-200 text-black  hover:text-slate-800",
    },

    size: {
      default: "text-[16px] px-4 py-2 ",
      sm: "font-semibold text-sm px-4 py-2",
      lg: "font-bold text-lg px-4 py-2",
    },
    color: {},
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  },
});

export interface btnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  label: string;
  className: any;
}

const Button: React.FC<btnProps> = ({
  label,
  onClick,
  size,
  disabled = false,
  variant,
  className,
}) => {
  return (
    <button
      className={clsx(buttonVarients({ variant, size, className }))}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
