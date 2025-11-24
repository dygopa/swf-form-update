import { memo } from "react"
import { twMerge } from "tailwind-merge";

function Step({
    step,
    onClick,
    activeStep
}){

    const {id, title} = step

    return(
        <button
            onClick={()=>{ onClick(id); }}
            className="w-fit flex flex-col justify-center items-center relative gap-2"
        >
            <span
                className={twMerge([
                    "w-[52px] h-[52px] flex-none relative flex flex-col justify-center items-center rounded-full text-[#7F7F7F]/50 bg-white border border-[#505050]",
                    activeStep == id && "border-primary text-primary",
                    id < activeStep && "bg-green-600 text-white border-white cursor-pointer"
                ])}
            >
                <p className="text-inherit font-normal">{id}</p>
            </span>
            <p className="max-w-[40px] relative flex justify-center items-center text-paragraph text-center text-[12px]">{title}</p>
        </button>
    )
}

export default memo(Step)