import api from '../../../api/axios'

export const getTickets = async () => {
    const response = await api.get('/tickets/')
    return response.data;
}

export const createTicket = async (ticketData) => {
    const response = await api.post('/tickets/', ticketData);
    return response.data;
}