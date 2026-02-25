import api from "../../../api/axios"

export const createComent = async (id, dataComent) => {
    const response = await api.post(`/comentarios/${id}/`, dataComent);
    return response.data
}