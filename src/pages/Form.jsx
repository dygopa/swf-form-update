import React, { useState, useEffect } from 'react'
import apiProvider from '../services/apiProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import Compress from "react-image-file-resizer"
import { FiColumns } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import { RiLayoutRowLine } from 'react-icons/ri';
import moment from 'moment';
import InputMask from 'react-input-mask';

function Form() {

    let data = useLocation()
    let history = useNavigate()

    const [loadedURL, setLoadedURL] = useState(false)
    const [loadedEntity, setLoadedEntity] = useState(false)
    const [loadedAPI, setLoadedAPI] = useState(false)
    const [loadingFiles, setLoadingFiles] = useState(false)
    const [warningStatus, setWarningStatus] = useState(false)
    const [successStatus, setSuccessStatus] = useState(false)
    const [errorStatus, setErrorStatus] = useState(false)
    const [loadedYears, setLoadedYears] = useState(false)
    const [hasQuery, setHasQuery] = useState(false)
    const [isNatural, setIsNatural] = useState(false)
    const [validEmail, setValidEmail] = useState(false)

    const [loadedDistrict, setLoadedDistrict] = useState(false)
    const [loadedCorreccion, setLoadedCorreccion] = useState(false)

    const minYear = moment().subtract(10, "y").format("YYYY-MM-DD").toString()
    const maxDateBirth = moment().format("YYYY-MM-DD").toString()

    const [urlImage, setUrlImage] = useState("")
    const [warningMessage, setWarningMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("Ocurrio un error, intentelo otra vez ")

    const [formObject, setFormObject] = useState({
        IdTipoPersona: 2
    })

    const [listOfErrors, setListOfErrors] = useState([])
    const [listOfGenre, setListOfGenre] = useState([])
    const [listOfCivilStatus, setListOfCivilStatus] = useState([])
    const [listOfProfesion, setListOfProfesion] = useState([])
    
    const [listOfProvincias, setListOfProvincias] = useState([])
    const [listOfDistritos, setListOfDistritos] = useState([])
    const [listOfCorregimientos, setListOfCorregimientos] = useState([])

    const [listOfDistritosMain, setListOfDistritosMain] = useState([])
    const [listOfCorregimientosMain, setListOfCorregimientosMain] = useState([])
    
    const [listOfNationalitys, setListOfNationalitys] = useState([])
    const [listOfTypeDocument, setListOfTypeDocument] = useState([])
    const [listOfTypePersona, setListOfTypePersona] = useState([])
    const [listOfDirections, setListOfDirections] = useState([])

    const [listOfCountries, setListOfCountries] = useState([])
    const [listOfYears, setListOfYears] = useState([])
    const [listOfEconomicActivity, setListOfEconomicActivity] = useState([])
    
    const [filesImg, setFilesImg] = useState([])

    async function selectFiles(e){
        setLoadingFiles(true)
        let files = [...e.target.files]
        var list = [...filesImg]
        
        console.log(files)
        
        Promise.all(files.map(async (file) => {
            list.push({
                url: "",
                file: file
            })
        }))
        setTimeout(() => {
            setFilesImg(list)
            console.log(list)
            setLoadingFiles(false)
        }, files.length * 1000);

    }

    function formatListsOfManzanero(id, type){
        switch (type){
            case "d":
                let _listOfDistritos = [...listOfDistritosMain].filter((prv)=>( parseInt(prv["IdProvincia"]) === parseInt(id) ))
                setFormObject({...formObject, IdProvincia: id})
                
                setListOfDistritos(_listOfDistritos)
                setLoadedDistrict(true)
                break;
            case "c":
                let _listOfCorregimientos = [...listOfCorregimientosMain].filter((prv)=>( parseInt(prv["IdDistrito"]) === parseInt(id) ))
                setFormObject({...formObject, IdDistrito: id})
                
                setListOfCorregimientos(_listOfCorregimientos)
                setLoadedCorreccion(true)
                break;
            default:
                break;
        }
    }

    function loadEntity(){
        let query = window.location.search
        if(query){
            apiProvider.getActualizaciondatosaseguradoEndPoint(query).then((res)=>{
                
                formatListsOfManzanero(res.data[0]["IdProvincia"], "d")
                formatListsOfManzanero(res.data[0]["IdDistrito"], "c")

                let dateBirth = moment(res.data[0]["FechaNacimiento"], "DD-MM-YYYY").format("DD/MM/YYYY").toString()
                
                setFormObject({
                    ...res.data[0],
                    FechaNacimiento: dateBirth
                })
                let pngText = res.data[0]["LogoCorredor"]
                const linkSource = `data:image/png;base64,${pngText}`;

                setUrlImage(linkSource)
                console.log(formObject)
            }).catch((e)=>{
                console.log(e)
            })
            setHasQuery(true)
        }else{
            setHasQuery(false)
        }
        setLoadedEntity(true)
    }

    async function chargeAPI(){

        await apiProvider.getDatosFormularioEndPoint("?Tipo=7").then((res)=>{
            setListOfProvincias(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=8").then((res)=>{
            //setListOfDistritos(res.data)
            setListOfDistritosMain(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=9").then((res)=>{
            //setListOfCorregimientos(res.data)
            setListOfCorregimientosMain(res.data)
        }).catch((e)=>{
            console.log(e)
        })

        await apiProvider.getDatosFormularioEndPoint("?Tipo=1").then((res)=>{
            setListOfGenre(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=2").then((res)=>{
            setListOfNationalitys(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=3").then((res)=>{
            setListOfCivilStatus(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=4").then((res)=>{
            setListOfProfesion(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=5").then((res)=>{
            setListOfDirections(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=11").then((res)=>{
            setListOfEconomicActivity(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=10").then((res)=>{
            setListOfTypeDocument(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        await apiProvider.getDatosFormularioEndPoint("?Tipo=12").then((res)=>{
            setListOfTypePersona(res.data)
        }).catch((e)=>{
            console.log(e)
        })

        loadEntity()

        setLoadedAPI(true)
    }

    function onClickTypePersona(type){
        //Natural
        if(type !== 1){
            setFormObject({
                ...formObject,
                IdTipoPersona: type,
                RazonSocial: null,
                ReprecentanteLegal: null,
                IdentificacionReprecentanteLegal: null,
                ActividadEconomica: null,
            })
            //Juridic
        }else{
            setFormObject({
                ...formObject,
                IdTipoPersona: type,
                IdTipoCedula: null,
                IdSexo: null,
                Nombres: null,
                Apellido: null,
                FechaNacimiento: null,
                IdNacionalidad: null,
                IdEstadoCivil: null,
                IdProfesion: null,
                Ocupacion: null,
            })
        }
    }

    function changeInTypePersona(type, typePersona){
        onClickTypePersona(typePersona);
    }

    async function downloadDocument(){
        await apiProvider.getDocumentosFormularioEndPoint().then((res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
    }

    function chargeYears(){
        let list = []
        
        for (let i = 0; i < 11; i++) {
            const yearNumber = i;
            const year = moment().subtract(yearNumber, "y").format("YYYY").toString()
            list.push(year)
        }

        setListOfYears(list)
    }

    const AlertComponent = ({type, msg, state}) => {
        return(
            <div onClick={()=>{ state(false) }} className={`transition shadow-md z-20 rounded p-[1%_2%] text-left h-auto w-auto cursor-pointer fixed right-[2.3%] bottom-[5%] block ${type === 1 
                ? "hover:bg-green-300 bg-green-200 text-green-900"
                : type === "2" ? "hover:bg-red-300 bg-red-200 text-red-900"
                : "hover:bg-yellow-300 bg-yellow-200 text-yellow-900"
            }
            `}>
                <p className={`font-semibold`}>{type === 1 ? "Exitos" : type === "2" ? "Error" : "Aviso"}</p>
                <p className={`font-light`}>{msg !== "" ? msg : "Mensaje de prueba para creacion de plan"}</p>
            </div>
        )
    }

    useEffect(() => {
        chargeYears()
    }, [loadedYears])

    useEffect(() => {
        chargeAPI()
    }, [loadedAPI])

    return (
        <div className="w-full flex flex-col justify-start items-center relative h-fit bg-gray-100 lg:p-8 md:p-4 sm:p-0 xs:p-4">
            {warningStatus && <AlertComponent state={setWarningStatus} type={"3"} msg={warningMessage} />}
            {successStatus && <AlertComponent state={setSuccessStatus} type={"1"} msg={successMessage} />}
            {errorStatus && <AlertComponent state={setErrorStatus} type={"2"} msg={errorMessage} />}
            {!loadedAPI && 
                <div className='z-20 w-fit h-fit block fixed mx-auto top-5 bg-white border border-slate-200 p-[1.5%_4%] rounded font-semibold text-primary'>Cargando informacion...</div>
            }
            <div className="my-4 lg:w-[75%] md:w-[75%] sm:w-[75%] xs:w-[100%] relative bg-white p-[2%] rounded-md border">
                <div className="flex flex-wrap justify-between items-center mb-[5%]">
                    <p className={`lg:w-1/2 md:w-1/2 sm:w-full xs:w-full title-section text-orange-900`}>Datos personales</p>
                    <div className="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-[10vh]">
                        <img srcSet={urlImage} src={urlImage} className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-wrap content-start relative">
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Tipo persona<span className='text-primary font-bold'>*</span></p>
                        <div className="flex flex-wrap justify-between items-center">
                        {listOfErrors.includes("") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                            {listOfTypePersona.map((type, i)=>{
                                return(
                                    <p key={i} className="input-label flex items-center leading-[2px] mr-2">
                                        {type["TipoPersona"]}
                                        <div className="ml-3 w-1/4">
                                            <div onClick={()=>{ 
                                                changeInTypePersona(type["Tipo"], type["IdTipoPersona"])
                                            }} className="group rounded-full w-5 h-5 border-solid border-[2.2px] p-[0.9px] box-border border-slate-500 overflow-hidden cursor-pointer flex justify-center items-center">
                                                <span className={`rounded-full transition w-full content-none h-full relative ${formObject["IdTipoPersona"] === type["IdTipoPersona"] ? "group-hover:bg-slate-500 bg-orange-700" : "group-hover:bg-orange-500 bg-slate-300"}`}></span>
                                            </div>
                                        </div>
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    {formObject["IdTipoPersona"] === 2 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Documento de identidad <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdTipoCedula"]} onChange={(e)=>{ setFormObject({...formObject, IdTipoCedula: e.target.value})  }} className="form-control">
                            <option value="">Seleccione el tipo de documento de identidad</option>
                            {listOfTypeDocument.map((type, i)=> <option key={i} value={type["IdTipoCedula"]}>{type["TipoCedula"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdTipoCedula") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Número de identificación <span className='text-primary font-bold'>*</span></p>
                        <input defaultValue={formObject["Identificacion"]} placeholder="Ingrese el número de identificación" onChange={(e)=>{ setFormObject({...formObject, Identificacion: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("Identificacion") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Género <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdSexo"]} onChange={(e)=>{ setFormObject({...formObject, IdSexo: e.target.value})  }} className="form-control">
                            <option value="">Seleccione el género</option>
                            {listOfGenre.map((type, i)=> <option key={i} value={type["IdSexo"]}>{type["Sexo"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdSexo") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Nombre(s) <span className='text-primary font-bold'>*</span></p>
                        <input value={formObject["Nombres"]} placeholder="Ingrese los nombres" onChange={(e)=>{ setFormObject({...formObject, Nombres: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("Nombres") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Apellido(s) <span className='text-primary font-bold'>*</span></p>
                        <input value={formObject["Apellido"]} placeholder="Ingrese los apellidos" onChange={(e)=>{ setFormObject({...formObject, Apellido: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("Apellido") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] === 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Nombre comercial <span className='text-primary font-bold'>*</span></p>
                        <input value={formObject["RazonSocial"]} placeholder="Ingrese el nombre comercial" onChange={(e)=>{ setFormObject({...formObject, RazonSocial: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("RazonSocial") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] === 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Representante legal <span className='text-primary font-bold'>*</span></p>
                        <input value={formObject["ReprecentanteLegal"]} placeholder="Ingrese el representante legal" onChange={(e)=>{ setFormObject({...formObject, ReprecentanteLegal: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("ReprecentanteLegal") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] === 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Identificacion representante<span className='text-primary font-bold'>*</span></p>
                        <input value={formObject["IdentificacionReprecentanteLegal"]} placeholder="Ingrese la identificacion del representante legal" onChange={(e)=>{ setFormObject({...formObject, IdentificacionReprecentanteLegal: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("IdentificacionReprecentanteLegal") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] === 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Actividad comercial principal <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdActividadEconomica"]} onChange={(e)=>{ setFormObject({...formObject, IdActividadEconomica: e.target.value})  }} className="form-control">
                            <option value="">Selecciona la actividad economica</option>
                            {listOfEconomicActivity.map((type, i)=> <option key={i} value={type["IdActividadEconomica"]}>{type["ActividadEconomica"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdActividadEconomica") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Fecha de nacimiento <span className='text-primary font-bold'>*</span></p>
                        <InputMask placeholder='DD/MM/YYYY' value={formObject["FechaNacimiento"]}  onChange={(e)=>{ setFormObject({...formObject, FechaNacimiento: e.target.value}) }} className="form-control" mask="99/99/9999" maskPlaceholder={formObject["FechaNacimiento"]} maskChar=" " />
                        {/* <input defaultValue={formObject["FechaNacimiento"]} onChange={(e)=>{ setFormObject({...formObject, FechaNacimiento: e.target.value}) }} type="date" className="form-control" /> */}
                        {listOfErrors.includes("FechaNacimiento") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Correo electrónico <span className='text-primary font-bold'>*</span></p>
                        <input defaultValue={formObject["Email"]} placeholder="Ingrese el correo electrónico" onChange={(e)=>{ setFormObject({...formObject, Email: e.target.value}) }} type="email" className="form-control" />
                        {validEmail && <p className='text-red-500 font-semibold text-[12px] mt-2'>Email invalido</p>}
                        {listOfErrors.includes("Email") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    {formObject["IdTipoPersona"] === 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Correo electrónico adicional<span className='text-primary font-bold'>*</span></p>
                        <input defaultValue={formObject["EmailAdicional"]} placeholder="Ingrese el correo electrónico adicional" onChange={(e)=>{ setFormObject({...formObject, EmailAdicional: e.target.value}) }} type="email" className="form-control" />
                        {validEmail && <p className='text-red-500 font-semibold text-[12px] mt-2'>Email adicional invalido</p>}
                    </div>}
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Número telefónico</p>
                        <input value={formObject["Telefono"]} placeholder="Ingrese el número telefónico" onChange={(e)=>{ setFormObject({...formObject, Telefono: e.target.value}) }} type="phone" className="form-control" />
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Celular <span className='text-primary font-bold'>*</span></p>
                        <input value={formObject["Celular"]} placeholder="Ingrese el celular" onChange={(e)=>{ setFormObject({...formObject, Celular: e.target.value}) }} type="phone" className="form-control" />
                        {listOfErrors.includes("Celular") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Celular 2</p>
                        <input value={formObject["CelularII"]} placeholder="Ingrese el número telefónico" onChange={(e)=>{ setFormObject({...formObject, CelularII: e.target.value}) }} type="phone" className="form-control" />
                    </div>
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Nacionalidad <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdNacionalidad"]} onChange={(e)=>{ setFormObject({...formObject, IdNacionalidad: e.target.value})  }} className="form-control">
                            <option value="">Seleccione la nacionalidad</option>
                            {listOfNationalitys.map((type, i)=> <option key={i} value={type["IdNacionalidad"]}>{type["Nacionalidad"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdNacionalidad") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Estado civil <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdEstadoCivil"]}  onChange={(e)=>{ setFormObject({...formObject, IdEstadoCivil: e.target.value})  }} className="form-control">
                            <option value="">Seleccione el estado civil</option>
                            {listOfCivilStatus.map((type, i)=> <option key={i} value={type["IdEstadoCivil"]}>{type["EstadoCivil"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdEstadoCivil") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Profesión <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdProfesion"]} onChange={(e)=>{ setFormObject({...formObject, IdProfesion: e.target.value})  }} className="form-control">
                            <option value="">Seleccione la profesión</option>
                            {listOfProfesion.map((type, i)=> <option key={i} value={type["IdProfesion"]}>{type["Profesion"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdProfesion") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>}
                    {formObject["IdTipoPersona"] !== 1 && <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Ocupación</p>
                        <input value={formObject["Ocupacion"]} placeholder="Ingrese la ocupacion" onChange={(e)=>{ setFormObject({...formObject, Ocupacion: e.target.value}) }} type="text" className="form-control" />
                    </div>}
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Documento de identidad</p>
                        <input placeholder="Seleccionar" onChange={selectFiles} type="file" className="form-control" />
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Licencia de conducir</p>
                        <input placeholder="Seleccionar" onChange={selectFiles} type="file" className="form-control" />
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Subir formulario</p>
                        <input placeholder="Seleccionar" onChange={selectFiles} type="file" className="form-control" />
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Formulario conoce a tu cliente</p>
                        <a download href={formObject["IdTipoPersona"] !== 1 ? "/docs/ctc-natural.pdf" : '/docs/ctc-juridica.pdf'} className='btn btn-primary'>Descargar</a>
                    </div>

                </div>
            </div>

            <div className="my-4 lg:w-[75%] md:w-[75%] sm:w-[75%] xs:w-[100%] relative bg-white p-[2%] rounded-md border">
                <p className='title-section text-orange-900'>Direccion</p>
                <div className="flex flex-wrap content-start relative h-fit">

                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Provincia <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdProvincia"]} onChange={(e)=>{ formatListsOfManzanero(e.target.value, "d") }} className="form-control">
                            <option value="">Seleccione la provincia</option>
                            {listOfProvincias.map((type, i)=> <option key={i} value={type["IdProvincia"]}>{type["Provincia"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdProvincia") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Distrito <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdDistrito"]} onChange={(e)=>{ formatListsOfManzanero(e.target.value, "c") }} className="form-control">
                            <option value="">Seleccione el distrito</option>
                            {loadedDistrict && formObject["IdProvincia"] && listOfDistritos.map((type, i)=> <option key={i} value={type["IdDistrito"]}>{type["Distrito"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdDistrito") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Corregimiento <span className='text-primary font-bold'>*</span></p>
                        <select value={formObject["IdCorregimiento"]} onChange={(e)=>{ setFormObject({...formObject, IdCorregimiento: e.target.value}) }} className="form-control">
                            <option value="">Seleccione el corregimiento</option>
                            {loadedCorreccion && formObject["IdDistrito"] && listOfCorregimientos.map((type, i)=> <option key={i} value={type["IdCorregimiento"]}>{type["Corregimiento"]}</option> )}
                        </select>
                        {listOfErrors.includes("IdCorregimiento") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Urbanización</p>
                        <input value={formObject["Urbanizacion"]} placeholder='Escriba la urbanización' onChange={(e)=>{ setFormObject({...formObject, Urbanizacion: e.target.value})  }} type="text" className="form-control"/>
                        {listOfErrors.includes("Urbanizacion") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Calle</p>
                        <input value={formObject["AvenidaCalle"]} placeholder={"Escriba la calle"} onChange={(e)=>{ setFormObject({...formObject, AvenidaCalle: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("AvenidaCalle") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                    <div className={`lg:w-1/4 mb-3 px-3 sm:w-full md:w-1/2 xs:w-full`}>
                        <p className="input-label">Direccion <span className='text-primary font-bold'>*</span></p>
                        <input value={formObject["Direccion"]} placeholder={"Escriba la direccion"} onChange={(e)=>{ setFormObject({...formObject, Direccion: e.target.value}) }} type="text" className="form-control" />
                        {listOfErrors.includes("Direccion") && <p className='text-red-500 font-semibold text-[12px] mt-2'>Campo requerido</p>}
                    </div>
                </div>
            </div>
            <div className="flex justify-end  lg:w-[75%] md:w-[75%] w-full p-[2%]">
                <div onClick={()=>{ manageUpdateEntity() }} className="btn btn-primary btn-block">Actualizar</div>
            </div>
        </div>
    )

    function handleVerifyEmail(prop){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(prop)){
            setValidEmail(false)
            return "2"
        }
        setValidEmail(true)
        return "1"
    }

    function handleValidationFunction(){

        let list = []
        let listOfRequiredValues = []

        let listOfJuridic = [
            "Identificacion",
            "RazonSocial",
            "ReprecentanteLegal",
            "IdentificacionReprecentanteLegal",
            "IdActividadEconomica",
            "Celular",
            "Email",
            "IdProvincia",
            "IdDistrito",
            "IdCorregimiento",
            "Direccion"
        ]

        let listOfNatural = [
            "IdTipoCedula",
            "Identificacion",
            "IdSexo",
            "IdNacionalidad",
            "IdEstadoCivil",
            "IdProfesion",
            "Nombres",
            "Apellido",
            "Email",
            "Celular",
            "IdProvincia",
            "FechaNacimiento",
            "IdDistrito",
            "IdCorregimiento",
            "Direccion"
        ]

        listOfRequiredValues = formObject["IdTipoPersona"] === 1 ? listOfJuridic : listOfNatural

        //Muestre los mensajes de requerido
        for (const key in formObject) {
            let value = formObject[key]
            if((value === "" || value === null || value === undefined) && listOfRequiredValues.includes(key)){
                list.push(key)
            }
        }
        
        let object = {}

        if(list.length === 0){
            let Corregimiento = listOfCorregimientos.find((prv)=>( parseInt(prv["IdCorregimiento"]) === parseInt(formObject["IdCorregimiento"]) ))["Corregimiento"]
            let Distrito = listOfDistritos.find((prv)=>( parseInt(prv["IdDistrito"]) === parseInt(formObject["IdDistrito"]) ))["Distrito"]
            let Provincia = listOfProvincias.find((prv)=>( parseInt(prv["IdProvincia"]) === parseInt(formObject["IdProvincia"]) ))["Provincia"]
            
            object = {
                ...formObject,
                Corregimiento,
                Distrito,
                Provincia,
                FechaNacimiento: moment(formObject["FechaNacimiento"], "DD/MM/YYYY").format("YYYY-MM-DD").toString()
            }
        }

        handleVerifyEmail(formObject["Email"]) === "1" && list.push("Email")
        
        console.log(formObject)
        console.log(list)
        setListOfErrors(list)

        return list.length > 0 ? false : object
    }

    //4748
    function manageUpdateEntity(){
        console.log(listOfTypePersona)
        console.log(formObject["IdTipoPersona"])
        let object = handleValidationFunction() !== false ? JSON.stringify(handleValidationFunction()) : "error"

        if(object !== "error"){

            let list = []
            
            list.push(object)
            
            const form_data = new FormData()
            form_data.append("DataJson", JSON.stringify(list))
            
            filesImg.forEach((file, i)=>{
                form_data.append(`Documento${i}`, file["file"])
            })
        
            apiProvider.updateActualizardatosaseguradoEndPoint(form_data).then((res)=>{
                if(res.data){
                    console.log(res.data)
                    history("/success") 
                }
            }).catch(function (e) {
                setSuccessStatus(false)
                setErrorStatus(true)
                setValidatingPolicy(false)
                console.log("Error")
                if (e.response) {
                    let status = e.response.status
                    console.log(e.response)
                    if(status === 401){
                        setErrorMessage("Hubo un error, intentelo mas tarde")    
                    }else{
                        setErrorMessage(e.response.data[0].Error)
                    }
                }
            });

        }
    }

}

export default Form