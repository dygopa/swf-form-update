import axios from "axios"

let webDevURL = "https://formolarioswf.azurewebsites.net/"
let urlAPI = webDevURL

let loginEndPoint = "api/Configuration/login"
let getActualizaciondatosaseguradoEndPoint = "api/Polizas/get_actualizaciondatosasegurado"
let updateActualizardatosaseguradoEndPoint = "api/Polizas/update_actualizardatosasegurado"
let getDatosFormularioEndPoint = "api/Polizas/get_datos_formulario"
let getDocumentosFormularioEndPoint = "api/Polizas/get_documentos_formulario"


let token = localStorage.getItem('token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

class ApiProvider{

    async getDatosFormularioEndPoint(queryString){
        let url = urlAPI + getDatosFormularioEndPoint + queryString

        return await axios.get(url, config)
    }

    async getDocumentosFormularioEndPoint(queryString){
        let url = urlAPI + getDocumentosFormularioEndPoint + queryString

        return await axios.get(url, config)
    }

    async getActualizaciondatosaseguradoEndPoint(queryString){
        let url = urlAPI + getActualizaciondatosaseguradoEndPoint + queryString

        return await axios.get(url, config)
    }

    async updateActualizardatosaseguradoEndPoint(data){
        let url = urlAPI + updateActualizardatosaseguradoEndPoint
        return await axios.post(url, data, {})
    }

    async getUserLogin(data){
        let url = urlAPI + loginEndPoint
        return await axios.post(url, data, config)
    }
    
    async testAPI(){
        let url = urlAPI + "api/Configuration/test"
        return await axios.get(url, config)
    }

}

export default new ApiProvider()