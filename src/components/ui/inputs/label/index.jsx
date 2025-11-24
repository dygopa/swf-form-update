import { twMerge } from "tailwind-merge";

function Label({
    label,
    className,
}){
    return(
        <label
            className={twMerge([
                "text-slate-950 font-light text-sm",
                className
            ])}
        >
            {label}
        </label>
    )
}

export default Label;