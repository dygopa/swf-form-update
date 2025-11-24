import {
    useQuery
} from "@tanstack/react-query";
import { GET_LISTS_ENDPOINT } from '../../../../../../../infraestructure/api/dictionary';

async function fetchListById(id) {
    const token = localStorage.getItem("token")
    const headers = new Headers({
        'Authorization': token ? `Bearer ${token}` : '',
    });

    const res = await fetch(`${GET_LISTS_ENDPOINT}?Tipo=${id}`, {
        method: 'GET',
        headers
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error fetching list ${id}: ${res.status} ${text}`);
    }

    const data = await res.json();
    // Normaliza o transforma si hace falta: p.ej. asegurar array
    return Array.isArray(data) ? data : [];
}

function useGeneralDataLists() {
    const commonStale = 1000 * 60 * 5; // 5 minutes

    const genders = useQuery({ queryKey: ['genders', 1], queryFn: () => fetchListById(1), staleTime: commonStale });
    const nationalities = useQuery({ queryKey: ['nationalities', 2], queryFn: () => fetchListById(2), staleTime: commonStale });
    const civilStatus = useQuery({ queryKey: ['civilStatus', 3], queryFn: () => fetchListById(3), staleTime: commonStale });
    const professions = useQuery({ queryKey: ['professions', 4], queryFn: () => fetchListById(4), staleTime: commonStale });
    const directions = useQuery({ queryKey: ['directions', 5], queryFn: () => fetchListById(5), staleTime: commonStale });
    const provinces = useQuery({ queryKey: ['provinces', 7], queryFn: () => fetchListById(7), staleTime: commonStale });
    const districts = useQuery({ queryKey: ['districts', 8], queryFn: () => fetchListById(8), staleTime: commonStale });
    const corregimiento = useQuery({ queryKey: ['corregimiento', 9], queryFn: () => fetchListById(9), staleTime: commonStale });
    const typeDocuments = useQuery({ queryKey: ['typeDocuments', 10], queryFn: () => fetchListById(10), staleTime: commonStale });
    const economicActivities = useQuery({ queryKey: ['economicActivities', 11], queryFn: () => fetchListById(11), staleTime: commonStale });
    const typePersons = useQuery({ queryKey: ['typePersons', 12], queryFn: () => fetchListById(12), staleTime: commonStale });
    const residentialCountries = useQuery({ queryKey: ['residentialCountry', 13], queryFn: () => fetchListById(13), staleTime: commonStale });
    const isPEP = useQuery({ queryKey: ['isPEP', 14], queryFn: () => fetchListById(14), staleTime: commonStale });
    const overpass10K = useQuery({ queryKey: ['overpass10K', 15], queryFn: () => fetchListById(15), staleTime: commonStale });
    const financialProfiles = useQuery({ queryKey: ['financialProfiles', 16], queryFn: () => fetchListById(16), staleTime: commonStale });

    return {
        provinces,
        districts,
        corregimiento,
        genders,
        nationalities,
        civilStatus,
        professions,
        directions,
        economicActivities,
        typeDocuments,
        typePersons,
        residentialCountries,
        isPEP,
        overpass10K,
        financialProfiles
    };
}

export default useGeneralDataLists;