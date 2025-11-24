import { useCallback, useContext } from "react";
import Alert from "../../../../../ui/alert";
import Inputs from "../../../../../ui/inputs";
import { FormContext } from "../../context/context";
import useGeneralDataLists from "../general-data/context/useGeneralDataLists";
import { Button } from "../../../../../ui/button";

export default function FinancialProfile() {
    const lists = useGeneralDataLists();

    const {data: overpass10K, error: overpass10KError} = lists.overpass10K
    const {data: financialProfiles, error: financialProfilesError} = lists.financialProfiles

    const {dispatch, state} = useContext(FormContext);
    const {financialData} = state

    function onContinue(){
        dispatch({ type: "SET_ACTIVE_STEP", payload: { data: 3 } });
    }

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
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar overpass10K" show={!!overpass10KError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar financialProfiles" show={!!financialProfilesError}/>

            <div className="w-full h-fit flex flex-col justify-start items-center relative bg-white rounded-xl border border-slate-200 p-4">
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Polizas con prima anual, igual o mayor a B/. 10,000.00</h3>
                    <Inputs.Group label="El total de las primas anuales que Usted paga, son iguales o superan los B/. 10,000.00">
                        <Inputs.select 
                            onChange={setFinancilDataField("")}
                        >
                            <option>Seleccionar</option>
                            {(overpass10K ?? []).map((elem, i) => <option value={elem["IdSupera10MILK"]} key={i}>{elem["Supera10MILK"]}</option> )}
                        </Inputs.select>
                    </Inputs.Group>
                </div>
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Declaracion de fuente y origen de recursos de la transaccion</h3>
                    <Inputs.Group label="Detalle Actividad Comercial ó Negocio">
                        <Inputs.input 
                            value={financialData?.ActividadEmpresaNegocio ?? ""}
                            onChange={setFinancilDataField("ActividadEmpresaNegocio")}
                        />
                    </Inputs.Group>
                </div>
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Perfil Financiero</h3>
                    <Inputs.select 
                        value={financialData?.IdPerfilFinanciero ?? ""}
                        onChange={setFinancilDataField("IdPerfilFinanciero")}
                    >
                        <option>Seleccionar</option>
                        {(financialProfiles ?? []).map((elem, i) => <option value={elem["IdPerfilFinanciero"]} key={i}>{elem["PerfilFinanciero"]}</option> )}
                    </Inputs.select>
                </div>
                <div className="w-full flex justify-end items-center relative gap-3 mt-10">
                    <Button
                        disabled={
                            !financialData.ActividadEmpresaNegocio ||
                            !financialData.IdPerfilFinanciero
                        }
                        onClick={()=>{
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