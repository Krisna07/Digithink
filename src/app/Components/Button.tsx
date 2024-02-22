import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaChevronRight } from "react-icons/fa";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default:
        " outline-none w-fit flex items-center gap-2 rounded-[8px] text-black hover:text-gray-100 bg-[#BEBEBE] text-black hover:bg-slate-900",
      primary:
        "w-fit outline-none  flex items-center gap-2 rounded-[8px] text-gray-100 bg-black hover:bg-slate-800 hover:text-gray-200",
      ghost:
        "w-fit flex items-center  outline-none   gap-2 rounded-[8px] bg-slate-200 text-black  hover:text-slate-800 ",
    },

    size: {
      default: "text-[16px] p-[10px] ",
      sm: "font-semibold text-sm p-[10px] py-[4px]",
      lg: "font-bold text-lg p-[12px]",
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

export interface Btnprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  icon?: any;
  className?: string;
  rightIcon?: boolean;
  label: string;
}
const rightIcon = () => {};
const Button: React.FC<Btnprops> = ({
  label,
  onClick,
  size,
  disabled = false,
  variant,
  rightIcon,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      {...props}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? icon : ""} {label} {rightIcon && <FaChevronRight />}
    </button>
  );
};

export default Button;
