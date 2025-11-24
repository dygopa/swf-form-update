import React from "react"
import { FiCheck } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

const Checkbox = React.forwardRef(
    ({ className, label, checked, onCheck, ...props }, ref) => {

        const Box = () => {
            return(
                <span
                    className={twMerge([
                        "w-[30px] h-[30px] border border-slate-400 rounded-md flex flex-col justify-center items-center relative transition-all ease-out",
                        checked ? "bg-green-500 text-white" : "bg-white group-hover:bg-slate-100"
                    ])}
                >
                    {checked && <FiCheck size={12} className="text-inherit" />}
                </span>
            )
        }

        return (
            <div
                onClick={onCheck}
                className={twMerge(
                    [
                        "w-fit h-fit flex justify-start items-center gap-2 relative cursor-pointer group",
                        className
                    ]
                )}
                ref={ref}
                {...props}
            >
                <Box/>
                <p className="transition-all ease-out text-slate-950 font-normal text-xs group-hover:font-medium">
                    {label}
                </p>
            </div>
        )
    }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }