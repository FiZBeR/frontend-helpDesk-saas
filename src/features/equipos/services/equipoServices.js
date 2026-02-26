import api from "../../../api/axios";

export const createEquipo = async (data) => {
    const response = await api.post('/equipos/', data);
    return response.data;
}

export const getEquipos = async () => {
    const response = await api.get('/equipos/');
    return response.data
}

export const deleteEquipo = async (id) => {
    const response = await api.delete(`/equipos/${id}/`);
    return true
}