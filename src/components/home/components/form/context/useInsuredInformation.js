import { GET_DATA_ENDPOINT, GET_DOCUMENT_FORM_ENDPOINT, UPDATE_DATA_ENDPOINT } from "../../../../../infraestructure/api/dictionary";

export async function fetchInsuredData(id) {
    const token = localStorage.getItem("token")
    const headers = new Headers({
        'Authorization': token ? `Bearer ${token}` : '',
    });

    const res = await fetch(`${GET_DATA_ENDPOINT}?TokenEntidad=${id}`, {
        method: 'GET',
        headers
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error fetching list ${id}: ${res.status} ${text}`);
    }

    const data = await res.json();
    return data;
}

export async function fetchDocumentToDownload(idTypePerson) {
    const token = localStorage.getItem("token")
    const headers = new Headers({
        'Authorization': token ? `Bearer ${token}` : '',
    });

    const res = await fetch(`${GET_DOCUMENT_FORM_ENDPOINT}?Tipo=1&IdTipoPersona=${idTypePerson}`, {
        method: 'GET',
        headers
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error fetching document: ${res.status} ${text}`);
    }

    const data = await res.json();
    return data;
}

export async function updateInsuredData(formData) {
    const token = localStorage.getItem("token")
    const headers = new Headers({
        'Authorization': token ? `Bearer ${token}` : '',
    });

    const res = await fetch(UPDATE_DATA_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error fetching document: ${res.status} ${text}`);
    }

    return "SUCCESS";
}