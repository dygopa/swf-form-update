/* eslint-disable react-refresh/only-export-components */
import { cva } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
    "inline-flex items-center cursor-pointer justify-center gap-3 whitespace-nowrap rounded-xl text-[0.9rem] font-normal ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white hover:bg-primary/70",
                destructive:
                    "bg-red-700 text-red-700-foreground hover:bg-red-700/90",
                secondary:
                    "bg-secondary text-white hover:bg-secondary/80",
                ghost:
                    "bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-slate-800",
                outline:
                    "border border-primary bg-transparent hover:bg-primary hover:text-white text-primary",
                outline_primary:
                    "border border-primary bg-transparent hover:bg-primary hover:text-white text-primary",
                outline_ghost:
                    "border border-slate-600 bg-transparent hover:bg-slate-300 hover:text-slate-700 text-slate-600",
                link:
                    "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-fit px-10 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                full: "w-full h-12 rounded-md",
                icon: "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Button = React.forwardRef(({
    className,
    variant,
    size,
    loading = false,
    loadingText,
    ...props
}, ref) => {

    const Component = "button"

        if (loading) {
            return (
                <Component
                    disabled={true}
                    className={buttonVariants({
                        variant, size, className
                    })}
                    ref={ref}
                    {...props}
                >
                    {size !== "icon" && (loadingText ?? "Cargando...")}
                </Component>
            )
        }

        return (
            <Component
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
