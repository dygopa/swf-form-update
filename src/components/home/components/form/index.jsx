import { useState, useEffect } from 'react'
import apiProvider from '../../../../services/apiProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment';
import Decider from './decider';

function Form() {

    let data = useLocation()
    let history = useNavigate()

    const [formObject, setFormObject] = useState({
        IdTipoPersona: 2
    })

    const [listOfErrors, setListOfErrors] = useState([])
    
    const [listOfProvincias, setListOfProvincias] = useState([])
    const [listOfDistritos, setListOfDistritos] = useState([])
    const [listOfCorregimientos, setListOfCorregimientos] = useState([])
    const [listOfTypePersona, setListOfTypePersona] = useState([])

    const [filesImg, setFilesImg] = useState([])

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

    return (
        <Decider/>
    )

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

    //47978
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