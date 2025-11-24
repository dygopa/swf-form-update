import { memo } from "react"
import { twMerge } from "tailwind-merge";

function Select({
    value,
    className,
    onChange,
    children
}){
    return(
        <select
            className={twMerge([
                "transition-all w-full h-10 flex rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
            ])}
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    )
}

export default memo(Select);