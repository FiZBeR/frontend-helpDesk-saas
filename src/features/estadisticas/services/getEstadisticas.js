import api from "../../../api/axios";

export const getInfo = async () => {
    const response = await api.get('/tickets/estadisticas/');
    return response.data;
}