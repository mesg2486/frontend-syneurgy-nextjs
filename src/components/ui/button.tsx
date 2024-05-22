import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium gap-2 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0 outline-none active:ring-0 active:outline-none focus-visible:outline-none transition-all",
  {
    variants: {
      variant: {
        default:
          "rounded-full hover:opacity-90 text-foreground bg-background hover:bg-background gap-2",
        destructive:
          "bg-destructive rounded-full text-destructive-foreground shadow-sm hover:opacity-90 gap-2",
        outline:
          "rounded-full text-white hover:text-black border border-white/50 bg-transparent hover:bg-white gap-2",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
