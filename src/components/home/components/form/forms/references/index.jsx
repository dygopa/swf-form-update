import { useCallback, useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/context";
import { Button } from "../../../../../ui/button";
import Inputs from "../../../../../ui/inputs";
import useGeneralDataLists from "../general-data/context/useGeneralDataLists";
import moment from "moment";
import { updateInsuredData } from "../../context/useInsuredInformation";
import useCompletedFields from "../../../../../../utils/hooks/useCompletedFields";
import { formDataMapToAPI } from "../../../../../../domain/mappers/form/formDataMapToAPI";
import Alert from "../../../../../ui/alert";

export default function References({images}) {
    const lists = useGeneralDataLists();

    const {data: corregimiento} = lists.corregimiento
    const {data: districts} = lists.districts
    const {data: provinces} = lists.provinces

    const { dispatch, state } = useContext(FormContext);
    const { generalData, addressData, occupationalData, financialData, referencesData } = state

    const [statusUpload, setStatusUpload] = useState("")

    async function onContinue() {
        try {
            
            setStatusUpload("LOADING")
    
            const Corregimiento = corregimiento.find((prv)=>( Number(prv["IdCorregimiento"]) === Number(generalData["IdCorregimiento"]) ))
            const CorregimientoName = Corregimiento ? Corregimiento["Corregimiento"] : ""
            const Distrito = districts.find((prv)=>( Number(prv["IdDistrito"]) === Number(generalData["IdDistrito"]) ))
            const DistritoName = Distrito ? Distrito["Distrito"] : ""
            const Provincia = provinces.find((prv)=>( Number(prv["IdProvincia"]) === Number(generalData["IdProvincia"]) ))
            const ProvinciaName = Provincia ? Provincia["Provincia"] : ""
    
            const searchString = window.location.search
            const params = new URLSearchParams(searchString);
            const tokenEntidad = params.get('TokenEntidad');

            if(!tokenEntidad) return;

            const initialObject = {
                ...generalData,
                ...addressData,
                ...occupationalData,
                ...financialData,
                ...referencesData,
                Corregimiento: CorregimientoName,
                Distrito: DistritoName,
                Provincia: ProvinciaName,
                FechaNacimiento: moment(generalData["FechaNacimiento"], "DD/MM/YYYY").format("YYYY-MM-DD").toString(),
                IdEntidad: tokenEntidad
            }

            const object = formDataMapToAPI(initialObject)
            
            const form_data = new FormData()
            form_data.append("DataJson", JSON.stringify([object]))
            
            images.forEach((file, i)=>{
                form_data.append(`Documento${i}`, file["file"])
            })
            
            const data = await updateInsuredData(form_data);
            
            if(!data){
                throw new Error("FAILED TO UPDATE");                
            }

            setStatusUpload("SUCCESS")
        } catch (error) {
            console.error("error:", error)
            setStatusUpload("ERROR")
            setTimeout(() => {
                setStatusUpload("")
            }, 2000);
        }
    }

    const completedReferencesForm = useCompletedFields({
        object: referencesData,
        list: [
            "NombreReferenciaBancaria",
            "NombreReferenciaComercial",
            "NombreReferenciaPersonal",
            "RelacionClienteReferenciaBancaria",
            "RelacionClienteReferenciaComercial",
            "RelacionClienteReferenciaPersonal",
            "TelefonoReferenciaBancaria",
            "TelefonoReferenciaComercial",
            "TelefonoReferenciaPersonal"
        ],
    });

    const setReferencesField = useCallback((field, cb) => (e) => {
        const value = e.target.value;
        dispatch({
            type: 'SET_REFERENCES_DATA',
            payload: { data: { [field]: value } },
        });
        if (typeof cb === 'function') cb(value);
    }, [dispatch]);

    useEffect(()=>{
        if(statusUpload === "SUCCESS"){
            //window.location.href = "/success"
        }
    },[statusUpload])

    return (
        <>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido actualizar el formulario" show={statusUpload === "ERROR"}/>
            { statusUpload === "LOADING" &&
                <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-slate-900/50 backdrop-blur-md z-50">
                    <div className="w-[30vw] h-[20vh] bg-white rounded-md border p-5 flex flex-col justify-center items-center relative">
                        <p className="text-slate-950 font-bold text-xl text-center">Cargando...</p>
                        <p className="text-slate-500 font-normal text-base text-center">Espere mientras se actualiza la informacion del asegurado</p>
                    </div>
                </div>
            }
            <div className="w-full h-fit flex flex-col justify-start items-center relative bg-white rounded-xl border border-slate-200 p-4 z-10">

                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Referencias</h3>
                    <div className="w-full flex flex-col justify-center items-start relative gap-4">
                        <p className="text-slate-950 font-semibold text-slate-950 pb-2 border-b border-slate-200 w-full">Bancaria</p>
                        <div className="w-full grid grid-cols-3 gap-4">
                            <Inputs.Group
                                label="Nombre"
                            >
                                <Inputs.input 
                                    value={referencesData?.NombreReferenciaBancaria ?? ""}
                                    onChange={setReferencesField('NombreReferenciaBancaria')}
                                />
                            </Inputs.Group>
                            <Inputs.Group
                                label="Relacion con el cliente"
                            >
                                <Inputs.input 
                                    value={referencesData?.RelacionClienteReferenciaBancaria ?? ""}
                                    onChange={setReferencesField('RelacionClienteReferenciaBancaria')}
                                />
                            </Inputs.Group>
                            <Inputs.Group
                                label="Telefono"
                            >
                                <Inputs.input 
                                    value={referencesData?.TelefonoReferenciaBancaria ?? ""}
                                    onChange={setReferencesField('TelefonoReferenciaBancaria')}
                                />
                            </Inputs.Group>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start relative gap-4">
                        <p className="text-slate-950 font-semibold text-slate-950 pb-2 border-b border-slate-200 w-full">Comercial</p>
                        <div className="w-full grid grid-cols-3 gap-4">
                            <Inputs.Group
                                label="Nombre"
                            >
                                <Inputs.input 
                                    value={referencesData?.NombreReferenciaComercial ?? ""}
                                    onChange={setReferencesField('NombreReferenciaComercial')}
                                />
                            </Inputs.Group>
                            <Inputs.Group
                                label="Relacion con el cliente"
                            >
                                <Inputs.input 
                                    value={referencesData?.RelacionClienteReferenciaComercial ?? ""}
                                    onChange={setReferencesField('RelacionClienteReferenciaComercial')}
                                />
                            </Inputs.Group>
                            <Inputs.Group
                                label="Telefono"
                            >
                                <Inputs.input 
                                    value={referencesData?.TelefonoReferenciaComercial ?? ""}
                                    onChange={setReferencesField('TelefonoReferenciaComercial')}
                                />
                            </Inputs.Group>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start relative gap-4">
                        <p className="text-slate-950 font-semibold text-slate-950 pb-2 border-b border-slate-200 w-full">Personal</p>
                        <div className="w-full grid grid-cols-3 gap-4">
                            <Inputs.Group
                                label="Nombre"
                            >
                                <Inputs.input 
                                    value={referencesData?.NombreReferenciaPersonal ?? ""}
                                    onChange={setReferencesField('NombreReferenciaPersonal')}
                                />
                            </Inputs.Group>
                            <Inputs.Group
                                label="Relacion con el cliente"
                            >
                                <Inputs.input 
                                    value={referencesData?.RelacionClienteReferenciaPersonal ?? ""}
                                    onChange={setReferencesField('RelacionClienteReferenciaPersonal')}
                                />
                            </Inputs.Group>
                            <Inputs.Group
                                label="Telefono"
                            >
                                <Inputs.input 
                                    value={referencesData?.TelefonoReferenciaPersonal ?? ""}
                                    onChange={setReferencesField('TelefonoReferenciaPersonal')}
                                />
                            </Inputs.Group>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end items-center relative gap-3 mt-10">
                    <Button
                        loading={statusUpload === "LOADING"}
                        disabled={
                            !completedReferencesForm ||
                            statusUpload === "LOADING"
                        }
                        onClick={() => {
                            onContinue();
                        }}
                        variant="default"
                    >
                        Continuar
                    </Button>
                </div>

            </div>
        </>
    )
}