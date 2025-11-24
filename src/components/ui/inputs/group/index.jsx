import { twMerge } from "tailwind-merge";
import Inputs from "..";

function Group({
    label,
    required,
    children
}){
    return(
        <div className="w-full flex flex-col justify-center items-start relative gap-1">
            <div className="w-full flex justify-start items-center relative gap-1">
                <Inputs.Label label={label}/>
                {required && <span className="text-red-600 font-bold text-xs">*</span>}
            </div>
            {children}
        </div>
    )
}

export default Group;