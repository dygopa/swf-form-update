import moment from "moment";

export function generalDataAPIToMap(data){
    return {
        IdTipoPersona: data["IdTipoPersona"] ?? "",
        IdTipoCedula: data["IdTipoCedula"] ? data["IdTipoCedula"].toString() : "",
        Identificacion: data["Identificacion"] ?? "",
        IdSexo: data["IdSexo"] ?? "",
        Nombres: data["NombresI"] ?? "",
        NombresSegundo: data["NombresII"] ?? "",
        Apellido: data["ApellidoI"] ?? "",
        ApellidoMaterno: data["ApellidoII"] ?? "",
        ApellidoCasada: data["ApellidoCasada"] ?? "",
        RazonSocial: data["RazonSocial"] ?? "",
        FechaNacimiento: data["FechaNacimiento"] ? moment(data["FechaNacimiento"], "DD-MM-YYYY").format("YYYY-MM-DD") : "",
        Email: data["Email"] ?? "",
        Telefono: data["Telefono"] ?? "",
        Celular: data["Celular"] ?? "",
        CelularII: data["CelularII"] ?? "",
        IdNacionalidad: data["IdNacionalidad"] ?? "",
        IdEstadoCivil: data["IdEstadoCivil"] ?? "",
        IdPaisResidencia: data["IdPaisResidencia"] ?? "",
        CodigoPostal: data["CodigoPostal"] ?? "",
        IdPep: data["IdPep"] ? data["IdPep"].toString() : "",
    }
}

export function addressDataAPIToMap(data){
    return {
        IdProvincia: data["IdProvincia"] ?? "",
        IdDistrito: data["IdDistrito"] ?? "",
        IdCorregimiento: data["IdCorregimiento"] ?? "",
        Urbanizacion: data["Urbanizacion"] ?? "",
        AvenidaCalle: data["AvenidaCalle"] ?? "",
        Direccion: data["Direccion"] ?? "",
    }
}

export function occupationalDataAPIToMap(data){
    return {
        IdProfesion: data["IdProfesion"] ?? "",
        Ocupacion: data["Ocupacion"] ?? "",
        NombreEmpresaNegocio: data["NombreEmpresaNegocio"] ?? "",
        DireccionEmpresaNegocio: data["DireccionEmpresaNegocio"] ?? "",
        TelefonoEmpresaNegocio: data["TelefonoEmpresaNegocio"] ?? "",
        EmailEmpresa: data["EmailAdicional"] ?? "",
    }
}

export function referencesDataAPIToMap(data){
    return {
        NombreReferenciaBancaria: data["NombreReferenciaBancaria"] ?? "",
        NombreReferenciaComercial: data["NombreReferenciaComercial"] ?? "",
        NombreReferenciaPersonal: data["NombreReferenciaPersonal"] ?? "",
        RelacionClienteReferenciaBancaria: data["RelacionClienteReferenciaBancaria"] ?? "",
        RelacionClienteReferenciaComercial: data["RelacionClienteReferenciaComercial"] ?? "",
        RelacionClienteReferenciaPersonal: data["RelacionClienteReferenciaPersonal"] ?? "",
        TelefonoReferenciaBancaria: data["TelefonoReferenciaBancaria"] ?? "",
        TelefonoReferenciaComercial: data["TelefonoReferenciaComercial"] ?? "",
        TelefonoReferenciaPersonal: data["TelefonoReferenciaPersonal"] ?? "",
        ActividadReferenciaBancaria: data["ActividadReferenciaBancaria"] ?? "",
        ActividadReferenciaComercial: data["ActividadReferenciaComercial"] ?? "",
        ActividadReferenciaPersonal: data["ActividadReferenciaPersonal"] ?? "",
    }
}

export function financialProfileDataAPIToMap(data){
    return {
        IdSupera10MILK: data["IdSupera10MILK"] ?? "",
        IdPerfilFinanciero: data['IdPerfilFinanciero'] ?? "",
        ActividadEmpresaNegocio: data['ActividadEmpresaNegocio'] ?? "",
    }
}