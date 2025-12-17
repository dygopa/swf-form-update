import { useCallback, useContext, useEffect, useState } from "react";
import Alert from "../../../../../ui/alert";
import Inputs from "../../../../../ui/inputs";
import { FormContext } from "../../context/context";
import useGeneralDataLists from "../general-data/context/useGeneralDataLists";
import { Button } from "../../../../../ui/button";
import moment from "moment";
import { formDataMapToAPI } from "../../../../../../domain/mappers/form/formDataMapToAPI";
import { updateInsuredData } from "../../context/useInsuredInformation";

export default function FinancialProfile({images}) {
    const lists = useGeneralDataLists();

    const { data: corregimiento } = lists.corregimiento
    const { data: districts } = lists.districts
    const { data: provinces } = lists.provinces

    const { data: overpass10K, error: overpass10KError } = lists.overpass10K
    const { data: financialProfiles, error: financialProfilesError } = lists.financialProfiles

    const { dispatch, state } = useContext(FormContext);
    const { generalData, addressData, occupationalData, financialData, referencesData } = state

    const [statusUpload, setStatusUpload] = useState("")

    async function onContinue() {

        try {
            
            if (financialData?.Supera10MILK.toString() === "1") {
                dispatch({ type: "SET_ACTIVE_STEP", payload: { data: 3 } });
                return;
            }

            setStatusUpload("LOADING")

            const Corregimiento = corregimiento.find((prv) => (Number(prv["IdCorregimiento"]) === Number(generalData["IdCorregimiento"])))
            const CorregimientoName = Corregimiento ? Corregimiento["Corregimiento"] : ""
            const Distrito = districts.find((prv) => (Number(prv["IdDistrito"]) === Number(generalData["IdDistrito"])))
            const DistritoName = Distrito ? Distrito["Distrito"] : ""
            const Provincia = provinces.find((prv) => (Number(prv["IdProvincia"]) === Number(generalData["IdProvincia"])))
            const ProvinciaName = Provincia ? Provincia["Provincia"] : ""

            const searchString = window.location.search
            const params = new URLSearchParams(searchString);
            const tokenEntidad = params.get('TokenEntidad');

            if (!tokenEntidad) return;

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

            console.log("object:", object)

            const form_data = new FormData()
            form_data.append("DataJson", JSON.stringify([object]))

            images.forEach((file, i) => {
                form_data.append(`Documento${i}`, file["file"])
            })

            const data = await updateInsuredData(form_data);

            if (!data) {
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

    useEffect(()=>{
        if(statusUpload === "SUCCESS"){
            //window.location.href = "/success"
        }
    },[statusUpload])

    const setFinancilDataField = useCallback((field, cb) => (e) => {
        const value = e.target.value;
        dispatch({
            type: 'SET_FINANCIAL_DATA',
            payload: { data: { [field]: value } },
        });
        if (typeof cb === 'function') cb(value);
    }, [dispatch]);

    return (
        <>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar overpass10K" show={!!overpass10KError} />
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar financialProfiles" show={!!financialProfilesError} />

            <div className="w-full h-fit flex flex-col justify-start items-center relative bg-white rounded-xl border border-slate-200 p-4 gap-4">
                <div className="w-full flex flex-col justify-start items-center relative">
                    <h3 className="w-full text-2xl font-medium text-primary py-2 text-left">Polizas con prima anual, igual o mayor a B/. 10,000.00</h3>
                    <Inputs.Group label="El total de las primas anuales que Usted paga, son iguales o superan los B/. 10,000.00">
                        <Inputs.select
                            onChange={setFinancilDataField("Supera10MILK")}
                        >
                            <option>Seleccionar</option>
                            {(overpass10K ?? []).map((elem, i) => <option value={elem["IdSupera10MILK"]} key={i}>{elem["Supera10MILK"]}</option>)}
                        </Inputs.select>
                    </Inputs.Group>
                </div>
                {financialData?.Supera10MILK.toString() === "1" &&
                    <>
                        <div className="w-full flex flex-col justify-start items-start relative">
                            <h3 className="w-full text-2xl font-medium text-primary py-2 text-left">Declaracion de fuente y origen de recursos de la transaccion</h3>
                            <p className="text-xs text-slate-500 font-normal">Declaro que todas mis actividades las ejerzo dentro de las normas legales y que los recursos utilizados para el pago de los seguros en mención, proviene de las siguientes fuentes.</p>
                            <Inputs.Group>
                                <Inputs.input
                                    placeholder="Detalle Actividad Comercial ó Negocio"
                                    value={financialData?.ActividadEmpresaNegocio ?? ""}
                                    onChange={setFinancilDataField("ActividadEmpresaNegocio")}
                                />
                            </Inputs.Group>
                        </div>
                        <div className="w-full flex flex-col justify-start items-center relative gap-3">
                            <h3 className="w-full text-2xl font-medium text-primary py-2 text-left">Perfil Financiero</h3>
                            <Inputs.select
                                value={financialData?.IdPerfilFinanciero ?? ""}
                                onChange={setFinancilDataField("IdPerfilFinanciero")}
                            >
                                <option>Seleccionar</option>
                                {(financialProfiles ?? []).map((elem, i) => <option value={elem["IdPerfilFinanciero"]} key={i}>{elem["PerfilFinanciero"]}</option>)}
                            </Inputs.select>
                        </div>
                    </>
                }
                <div className="w-full flex justify-end items-center relative gap-3 mt-10">
                    <Button
                        loading={statusUpload === "LOADING"}
                        disabled={
                            statusUpload === "LOADING" ||
                            !financialData.ActividadEmpresaNegocio ||
                            !financialData.IdPerfilFinanciero
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