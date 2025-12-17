import { useContext, useEffect, useMemo, useRef, useState } from "react"
import Steps from "../steps"
import { FormContext } from "../context/context";
import GeneralData from "../forms/general-data";
import FinancialProfile from "../forms/financial-profile";
import References from "../forms/references";
import { useQuery } from "@tanstack/react-query";
import { fetchInsuredData } from "../context/useInsuredInformation";
import { useSearchParams } from "react-router-dom";
import { 
    addressDataAPIToMap, 
    generalDataAPIToMap, 
    occupationalDataAPIToMap,
    referencesDataAPIToMap,
    financialProfileDataAPIToMap
} from "../../../../../domain/mappers/generalData/generalDataMapper";


export const listOfNaturalRequiredFields = [
    "IdTipoCedula",
    "Identificacion",
    "IdSexo",
    "IdNacionalidad",
    "IdEstadoCivil",
    "Nombres",
    "Apellido",
    "Email",
    "Celular",
    "FechaNacimiento"
]

export const listOfJuridicRequiredFields = [
    "Identificacion",
    "RazonSocial",
    "ReprecentanteLegal",
    "IdentificacionReprecentanteLegal",
    "IdActividadEconomica",
    "Celular",
    "Email"
]

export const listOfAddressRequiredFields = [
    "IdProvincia",
    "IdDistrito",
    "IdCorregimiento",
    "Direccion"
]

export const listOfOccupationalRequiredFields = [
    "IdProfesion"
]

export default function Decider(){
    
    const [searchParams] = useSearchParams();
    const token = searchParams.get('TokenEntidad');
    
    const {state, dispatch} = useContext(FormContext);
    const { activeStep } = state

    const [image, setImage] = useState("");
    const [images, setImages] = useState([]);

    const commonStale = 1000 * 60 * 5;
    const {data: insuredQueryResponse, isLoading, isError, isSuccess} = useQuery({ queryKey: ['insuredData', 20], queryFn: () => fetchInsuredData(token), staleTime: commonStale });
    
    function handleAutoCompleteData(){
        const object = insuredQueryResponse[0]

        setImage(`data:image/png;base64,${object["LogoCorredor"]}`)

        dispatch({
            type: 'SET_GENERAL_DATA',
            payload: { 
                data: { 
                    ...generalDataAPIToMap(object)
                }
            },
        });

        dispatch({
            type: 'SET_ADDRESS_DATA',
            payload: { 
                data: { 
                    ...addressDataAPIToMap(object)
                }
            },
        });

        dispatch({
            type: 'SET_OCCUPATIONAL_DATA',
            payload: { 
                data: { 
                    ...occupationalDataAPIToMap(object)
                }
            },
        });

        dispatch({
            type: 'SET_REFERENCES_DATA',
            payload: { 
                data: { 
                    ...referencesDataAPIToMap(object)
                }
            },
        });
        
        dispatch({
            type: 'SET_FINANCIAL_DATA',
            payload: { 
                data: { 
                    ...financialProfileDataAPIToMap(object)
                }
            },
        });

    }

    const effectRef = useRef(false);
    
    useEffect(()=>{
        if(isSuccess && !effectRef.current){
            handleAutoCompleteData();

            effectRef.current = true;
        }
    },[isSuccess])
    
    if(isLoading){
        return(
            <div className="w-full h-screen relative flex flex-col justify-center items-center">
                <p className="text-slate-950 font-bold text-lg">Cargando...</p>
                <p className="text-slate-500 font-normal text-sm">Espere un momento mientras se carga la informacion necesaria para completar el formulario</p>
            </div>
        )
    }

    if(isError){
        return(
            <div className="w-full h-screen relative flex flex-col justify-center items-center">
                <p className="text-slate-950 font-bold text-lg">Ha ocurrido un error</p>
                <p className="text-slate-500 font-normal text-sm">Al parecer no se ha podido obtener la informacion necesaria para completar el formulario</p>
            </div>
        )
    }

    return(
        <div className="w-full flex flex-col justify-start items-center relative gap-8">
            <div className="w-full flex justify-center items-center relative">
                <span className="w-[15vw] overflow-hidden relative">
                    <img className="w-full h-full object-contain object-center" src={image} />
                </span>
            </div>
            <Steps/>
            {activeStep === 1 && <GeneralData
                images={images}
                setImages={setImages}
            />}
            {activeStep === 2 && <FinancialProfile
                images={images}
            />}
            {activeStep === 3 && <References
                images={images}
            />}
        </div>
    )
}