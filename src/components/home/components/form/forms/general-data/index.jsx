import { useContext, useCallback, useMemo, useState } from "react";

import Inputs from "../../../../../ui/inputs";
import { FormContext } from "../../context/context";
import useGeneralDataLists from "./context/useGeneralDataLists";
import Alert from "../../../../../ui/alert";
import { Button } from "../../../../../ui/button";
import { fetchDocumentToDownload, updateInsuredData } from "../../context/useInsuredInformation";
import useCompletedFields from "../../../../../../utils/hooks/useCompletedFields";
import { listOfAddressRequiredFields, listOfJuridicRequiredFields, listOfNaturalRequiredFields, listOfOccupationalRequiredFields } from "../../decider";
import useCorrectEmail from "../../../../../../utils/hooks/useCorrectEmail";
import { formDataMapToAPI } from "../../../../../../domain/mappers/form/formDataMapToAPI";

export default function GeneralData({images, setImages}){
    const lists = useGeneralDataLists();

    const {data: provinces, error: provincesError} = lists.provinces
    const {data: districts, error: districtsError} = lists.districts
    const {data: corregimiento, error: corregimientoError} = lists.corregimiento
    const {data: genders, error: gendersError} = lists.genders
    const {data: nationalities, error: nationalitiesError} = lists.nationalities
    const {data: civilStatus, error: civilStatusError} = lists.civilStatus
    const {data: professions, error: professionsError} = lists.professions
    const {data: directions, error: directionsError} = lists.directions
    const {data: economicActivities, error: economicActivitiesError} = lists.economicActivities
    const {data: typeDocuments, error: typeDocumentsError} = lists.typeDocuments
    const {data: typePersons, error: typePersonsError} = lists.typePersons
    const {data: residentialCountries, error: residentialCountriesError} = lists.residentialCountries
    const {data: isPEP, error: isPEPError} = lists.isPEP

    const {dispatch, state} = useContext(FormContext);
    const {generalData, addressData, occupationalData} = state
    
    const [stateUpload, setStateUpload] = useState("");

    async function onContinue(){
        try {
            dispatch({ type: "SET_ACTIVE_STEP", payload: { data: 2 } });
        } catch (error) {
            console.error("error:", error)
        }
    }

    async function selectFiles(e){
        const files = [...e.target.files]
        const list = [...images]
        
        Promise.all(files.map(async (file) => {
            list.push({
                url: "",
                file: file
            })
        }))

        setTimeout(() => {
            setImages(prv => ([...prv, ...list]))
        }, files.length * 1000);

    }

    async function downloadDocument(){
        
        if(!generalData?.IdTipoPersona) return;

        const data = await fetchDocumentToDownload(generalData?.IdTipoPersona)
        
        if(!data) return;
        
        const docBase64 = data[0] ? data[0]["Documento"] : null;

        if(!docBase64) return;
        
        const pdfText = docBase64.replace(" ", "")
        const linkSource = `data:application/pdf;base64,${pdfText}`;
        const downloadLink = document.createElement("a");
        const fileName = "file.pdf";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    const completedNaturalForm = useCompletedFields({
        object: generalData,
        list: listOfNaturalRequiredFields,
    });

    const completedJuridicForm = useCompletedFields({
        object: generalData,
        list: listOfJuridicRequiredFields,
    });

    const completedOccupationalForm = useCompletedFields({
        object: occupationalData,
        list: listOfOccupationalRequiredFields,
    });

    const correctEmail = useCorrectEmail(generalData?.Email);

    const setGeneralDataField = useCallback((field, cb) => (e) => {
        const value = e.target.value;
        dispatch({
            type: 'SET_GENERAL_DATA',
            payload: { data: { [field]: value } },
        });
        if (typeof cb === 'function') cb(value);
    }, [dispatch]);

    const setAddressField = useCallback((field, cb) => (e) => {
        const value = e.target.value;
        dispatch({
            type: 'SET_ADDRESS_DATA',
            payload: { data: { [field]: value } },
        });
        if (typeof cb === 'function') cb(value);
    }, [dispatch]);
    
    const setOccupationalField = useCallback((field, cb) => (e) => {
        const value = e.target.value;
        dispatch({
            type: 'SET_OCCUPATIONAL_DATA',
            payload: { data: { [field]: value } },
        });
        if (typeof cb === 'function') cb(value);
    }, [dispatch]);

    const isNatural = useMemo(()=> {
        return generalData["IdTipoPersona"].toString() !== "1"
    },[generalData["IdTipoPersona"]])

    const districtsAfterFilter = useMemo(()=>{
        if(!addressData["IdProvincia"] || !districts) return districts;
        return districts.filter(elem => elem["IdProvincia"].toString() === addressData["IdProvincia"].toString())
    },[addressData["IdProvincia"], districts])

    const corregimientoAfterFilter = useMemo(()=>{
        if(!addressData["IdDistrito"] || !corregimiento) return corregimiento;
        return corregimiento.filter(elem => elem["IdDistrito"].toString() === addressData["IdDistrito"].toString())
    }, [addressData["IdDistrito"], corregimiento])

    return(
        <>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar provinces" show={!!provincesError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar districts" show={!!districtsError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar corregimiento" show={!!corregimientoError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar genders" show={!!gendersError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar nationalities" show={!!nationalitiesError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar civilStatus" show={!!civilStatusError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar professions" show={!!professionsError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar directions" show={!!directionsError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar economicActivities" show={!!economicActivitiesError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar typeDocuments" show={!!typeDocumentsError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar typePersons" show={!!typePersonsError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar residentialCountries" show={!!residentialCountriesError}/>
            <Alert type="error" title="Ha ocurrido un error" body="No se han podido cargar isPEP" show={!!isPEPError}/>
            <div className="w-full h-fit flex flex-col justify-start items-center relative bg-white rounded-xl border border-slate-200 p-4">
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Datos Generales</h3>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative gap-4">
                        <Inputs.Group
                            label="Tipo de Persona"
                        >
                            <Inputs.select 
                                value={generalData?.IdTipoPersona ?? ""}
                                onChange={setGeneralDataField("IdTipoPersona")}
                            >
                                <option>Seleccionar {generalData?.IdTipoPersona}</option>
                                {(typePersons ?? []).map((elem, i) => <option value={elem["IdTipoPersona"]} key={i}>{elem["TipoPersona"]}</option> )}
                            </Inputs.select>
                        </Inputs.Group>
                        {

                            isNatural ? 
                                <Inputs.Group
                                    required
                                    label={`Primer Nombre`}
                                >
                                    <Inputs.input
                                        value={generalData?.Nombres ?? ""}
                                        onChange={setGeneralDataField('Nombres')}
                                    />
                                </Inputs.Group>
                            :
                                <Inputs.Group
                                    required
                                    label={`Nombre comercial`}
                                >
                                    <Inputs.input
                                        value={generalData?.RazonSocial ?? ""}
                                        onChange={setGeneralDataField('RazonSocial')}
                                    />
                                </Inputs.Group>
                        }
                        {
                            isNatural && <>
                                <Inputs.Group
                                    label={`Segundo Nombre`}
                                >
                                    <Inputs.input/>
                                </Inputs.Group>
                                <Inputs.Group
                                    required
                                    label="Apellido Paterno"
                                >
                                    <Inputs.input 
                                        value={generalData?.Apellido ?? ""}
                                        onChange={setGeneralDataField("Apellido")}
                                    />
                                </Inputs.Group>
                                <Inputs.Group
                                    label="Apellido Materno"
                                >
                                    <Inputs.input 
                                        onChange={setGeneralDataField("")}
                                    />
                                </Inputs.Group>
                                <Inputs.Group
                                    label="Apellido de Casada/o"
                                >
                                    <Inputs.input 
                                        value={generalData?.ApellidoCasada ?? ""}
                                        onChange={setGeneralDataField("ApellidoCasada")}
                                    />
                                </Inputs.Group>
                                <Inputs.Group
                                    required
                                    label="Fecha de Nacimiento"
                                >
                                    <Inputs.input 
                                        type="date" 
                                        value={generalData?.FechaNacimiento ?? ""}
                                        onChange={setGeneralDataField("FechaNacimiento")}
                                    />
                                </Inputs.Group>
                            </>
                        }
                        {
                            !isNatural && 
                            <>
                                <Inputs.Group
                                    required
                                    label="Representante legal"
                                >
                                    <Inputs.input 
                                        value={generalData?.ReprecentanteLegal ?? ""}
                                        onChange={setGeneralDataField("ReprecentanteLegal")}
                                    />
                                </Inputs.Group>
                                <Inputs.Group
                                    required
                                    label="Identificacion representante"
                                >
                                    <Inputs.input 
                                        value={generalData?.IdentificacionReprecentanteLegal ?? ""}
                                        onChange={setGeneralDataField("IdentificacionReprecentanteLegal")}
                                    />
                                </Inputs.Group>
                                <Inputs.Group
                                    required
                                    label="Actividad comercial principal"
                                >
                                    <Inputs.select 
                                        value={generalData?.IdActividadEconomica ?? ""}
                                        onChange={setGeneralDataField("IdActividadEconomica")}
                                    >
                                        <option>Seleccionar</option>
                                        {(economicActivities ?? []).map((elem, i) => <option value={elem["IdActividadEconomica"]} key={i}>{elem["ActividadEconomica"]}</option> )}
                                    </Inputs.select>
                                </Inputs.Group>
                            </>
                        }
                        { isNatural &&
                            <Inputs.Group
                                required
                                label="Tipo de Identificacion"
                            >
                                <Inputs.select 
                                    value={generalData?.IdTipoCedula ?? ""}
                                    onChange={setGeneralDataField("IdTipoCedula")}
                                > 
                                    <option>Seleccionar</option>
                                    {(typeDocuments ?? []).map((elem, i) => <option value={elem["IdTipoCedula"]} key={i}>{elem["TipoCedula"]}</option> )}
                                </Inputs.select>
                            </Inputs.Group>
                        }
                        <Inputs.Group
                            required
                            label="Identificacion"
                        >
                            <Inputs.input 
                                value={generalData?.Identificacion ?? ""}
                                onChange={setGeneralDataField("Identificacion")}
                            />
                        </Inputs.Group>
                        {isNatural && <>

                            <Inputs.Group
                                required
                                label="Estado Civil"
                            >
                                <Inputs.select
                                    value={generalData?.IdEstadoCivil ?? ""}
                                    onChange={setGeneralDataField("IdEstadoCivil")}
                                >
                                    <option>Seleccionar</option>
                                    {(civilStatus ?? []).map((elem, i) => <option value={elem["IdEstadoCivil"]} key={i}>{elem["EstadoCivil"]}</option> )}
                                </Inputs.select>
                            </Inputs.Group>
                            <Inputs.Group
                                required
                                label="Sexo"
                            >
                                <Inputs.select
                                    value={generalData?.IdSexo ?? ""}
                                    onChange={setGeneralDataField("IdSexo")}
                                >
                                    <option>Seleccionar</option>
                                    {(genders ?? []).map((elem, i) => <option value={elem["IdSexo"]} key={i}>{elem["Sexo"]}</option> )}
                                </Inputs.select>
                            </Inputs.Group>
                            <Inputs.Group
                                required
                                label="Nacionalidad"
                            >
                                <Inputs.select
                                    value={generalData?.IdNacionalidad ?? ""}
                                    onChange={setGeneralDataField("IdNacionalidad")}
                                >
                                    <option>Seleccionar</option>
                                    {(nationalities ?? []).map((elem, i) => <option value={elem["IdNacionalidad"]} key={i}>{elem["Nacionalidad"]}</option> )}
                                </Inputs.select>
                            </Inputs.Group>
                        </>}
                        <Inputs.Group
                            label="País de Residencia"
                        >
                            <Inputs.select onChange={setGeneralDataField("")}>
                                <option>Seleccionar</option>
                                {(residentialCountries ?? []).map((elem, i) => <option value={elem["IdPais"]} key={i}>{elem["Pais"]}</option> )}
                            </Inputs.select>
                        </Inputs.Group>
                        <Inputs.Group
                            label="Apartado Postal"
                        >
                            <Inputs.input onChange={setGeneralDataField("")}/>
                        </Inputs.Group>
                        <Inputs.Group
                            label="Dirección Residencial"
                        >
                            <Inputs.input onChange={setGeneralDataField("")}/>
                        </Inputs.Group>
                        <Inputs.Group
                            label="Teléfono Residencial"
                        >
                            <Inputs.Phone 
                                value={generalData?.Telefono ?? ""}
                                onComplete={setGeneralDataField("Telefono")}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            required
                            label="Celular"
                        >
                            <Inputs.Phone 
                                value={generalData?.Celular ?? ""}
                                onComplete={setGeneralDataField("Celular")}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            required
                            label="Correo Electrónico Personal"
                        >
                            <Inputs.input 
                                value={generalData?.Email ?? ""}
                                onChange={setGeneralDataField("Email")}
                            />
                        </Inputs.Group>
                        {
                            !isNatural &&
                            <Inputs.Group
                                label="Correo electrónico adicional"
                            >
                                <Inputs.input 
                                    value={generalData?.EmailAdicional ?? ""}
                                    onChange={setGeneralDataField("EmailAdicional")}
                                />
                            </Inputs.Group>
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Documentos</h3>
                    <div className="w-full grid grid-cols-4 relative gap-4">
                        <Inputs.Group
                            label="Documento de identidad"
                        >
                            <Inputs.input 
                                type="file"
                                onChange={selectFiles}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            label="Licencia de conducir"
                        >
                            <Inputs.input 
                                type="file"
                                onChange={selectFiles}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            label="Subir formulario"
                        >
                            <Inputs.input 
                                type="file"
                                onChange={selectFiles}
                            />
                        </Inputs.Group>
                        <div className="w-full flex flex-col justify-center items-start relative gap-1">
                            <p className="text-slate-950 font-light text-sm">
                                Formulario conoce a tu cliente
                            </p>
                            <Button
                                onClick={()=>{
                                    downloadDocument();
                                }}
                                variant="default"
                            >
                                Descargar
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Direccion</h3>
                    <div className="w-full grid grid-cols-4 relative gap-4">
                        <Inputs.Group
                            required
                            label="Provincia"
                        >
                            <Inputs.select
                                value={addressData?.IdProvincia ?? ""}
                                onChange={setAddressField('IdProvincia')}
                            >
                                <option>Seleccionar</option>
                                {(provinces ?? []).map((elem, i) => <option value={elem["IdProvincia"]} key={i}>{elem["Provincia"]}</option> )}
                            </Inputs.select>
                        </Inputs.Group>
                        
                        <Inputs.Group
                            required
                            label="Distrito"
                        >
                            <Inputs.select
                                value={addressData?.IdDistrito ?? ""}
                                onChange={setAddressField('IdDistrito')}
                            >
                                <option>Seleccionar</option>
                                {(districtsAfterFilter ?? []).map((elem, i) => <option value={elem["IdDistrito"]} key={i}>{elem["Distrito"]}</option> )}
                            </Inputs.select>
                        </Inputs.Group>
                        <Inputs.Group
                            required
                            label="Corregimiento"
                        >
                            <Inputs.select
                                value={addressData?.IdCorregimiento ?? ""}
                                onChange={setAddressField('IdCorregimiento')}
                            >
                                <option>Seleccionar</option>
                                {(corregimientoAfterFilter ?? []).map((elem, i) => <option value={elem["IdCorregimiento"]} key={i}>{elem["Corregimiento"]}</option> )}
                            </Inputs.select>
                        </Inputs.Group>
                        <Inputs.Group
                            label="Urbanización"
                        >
                            <Inputs.input
                                value={addressData?.Urbanizacion ?? ""}
                                onChange={setAddressField('Urbanizacion')}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            label="Calle"
                        >
                            <Inputs.input
                                value={addressData?.AvenidaCalle ?? ""}
                                onChange={setAddressField('AvenidaCalle')}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            required
                            label={`Direccion`}
                        >
                            <Inputs.input
                                value={addressData?.Direccion ?? ""}
                                onChange={setAddressField('Direccion')}
                            />
                        </Inputs.Group>
                        
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">Datos Ocupacionales</h3>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative gap-4">
                        <Inputs.Group
                            required
                            label="Profesión"
                        >
                            <Inputs.select 
                                value={occupationalData?.IdProfesion ?? ""}
                                onChange={setOccupationalField('IdProfesion')}
                            >
                                <option value="">Seleccionar</option>
                                {(professions ?? []).map((elem, i) => <option value={elem["IdProfesion"]} key={i}>{elem["Profesion"]}</option> )}
                            </Inputs.select>
                        </Inputs.Group>
                        <Inputs.Group
                            label="Ocupación"
                        >
                            <Inputs.input 
                                value={occupationalData?.Ocupacion ?? ""}
                                onChange={setOccupationalField('Ocupacion')}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            label="Nombre de la Empresa"
                        >
                            <Inputs.input 
                                value={occupationalData?.NombreEmpresaNegocio ?? ""}
                                onChange={setOccupationalField('NombreEmpresaNegocio')}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            label="Dirección de la Empresa"
                        >
                            <Inputs.input 
                                value={occupationalData?.DireccionEmpresaNegocio ?? ""}
                                onChange={setOccupationalField('DireccionEmpresaNegocio')}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            label="Teléfono"
                        >
                            <Inputs.Phone 
                                value={occupationalData?.TelefonoEmpresaNegocio ?? ""}
                                onComplete={setOccupationalField('TelefonoEmpresaNegocio')}
                            />
                        </Inputs.Group>
                        <Inputs.Group
                            label="Correo Electrónico"
                        >
                            <Inputs.input 
                                value={occupationalData?.EmailEmpresa ?? ""}
                                onChange={setOccupationalField('EmailEmpresa')}
                            />
                        </Inputs.Group>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-center relative gap-3">
                    <div className="w-full flex flex-col justify-center items-start relative">
                        <h3 className="w-full text-2xl font-medium text-primary py-4 text-left">PEP (PERSONA POLÍTICAMENTE EXPUESTA)</h3>
                        <p className="text-xs text-slate-500 font-normal">Las personas políticamente expuestas son aquellas que desempeñan o han desempeñado funciones públicas destacadas en un país extranjero o en su propio país, por ejemplo, Jefes de Estado o de un gobierno, políticos de alta jerarquía, funcionarios gubernamentales, judiciales o militares de alta jerarquía, altos ejecutivos de empresas estatales, funcionarios importantes de partidos políticos.</p>
                    </div>
                    <div className="w-full grid grid-cols-2 relative gap-4">
                        <Inputs.Checkbox 
                            checked={generalData["IdPep"] === "1"}
                            onCheck={()=>{
                                dispatch({
                                    type: 'SET_GENERAL_DATA',
                                    payload: { data: { IdPep: "1" } },
                                });
                            }} 
                            label="Si" 
                        />
                        <Inputs.Checkbox 
                            checked={generalData["IdPep"] === "2"}
                            onCheck={()=>{
                                dispatch({
                                    type: 'SET_GENERAL_DATA',
                                    payload: { data: { IdPep: "2" } },
                                });
                            }} 
                            label="No" 
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end items-center relative gap-3 mt-10">
                    <Button
                        disabled={
                            !generalData ||
                            !addressData ||
                            (generalData?.IdTipoPersona.toString() === "2" ? completedNaturalForm == false : completedJuridicForm == false) ||
                            (generalData?.IdTipoPersona.toString() === "2" ? completedOccupationalForm == false : false) ||
                            !correctEmail
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