import { GET_LISTS_ENDPOINT } from "../api/dictionary";

const myHeaders = new Headers();

const token = localStorage.getItem('token');
myHeaders.append(
    "Authorization",
    `Bearer ${token}`
);

export class CoreRepository {
    async getListByID(obj) {
        try {
            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };

            const query = `?Tipo=${obj["id"]}`
            const URL = GET_LISTS_ENDPOINT + query;
            const response = await fetch(URL, requestOptions);

            if (response.status > 201) {
                throw new Error("HA OCURRIDO UN ERROR OBTENIENDO LAS LISTAS");
            }

            const data = await response.json();
            
            console.log("getListByID:", data)
            return data ?? [];
        } catch (error) {
            return new Error(error);
        }
    }
}
