import { useContext, useState } from "react";
import listOfSteps from "./list";
import Step from "./step";
import { FormContext } from "../context/context";

export default function Steps(){

    const {dispatch, state} = useContext(FormContext);
    const { activeStep } = state

    return(
        <div className="w-full flex justify-between items-center relative">
            {listOfSteps.map((elem, i) => 
                <Step
                    onClick={value => {
                        dispatch({ type: "SET_ACTIVE_STEP", payload: { data: value } });
                    }} 
                    activeStep={activeStep} 
                    step={elem} 
                    key={i}
                /> 
            )}
        </div>
    )
}