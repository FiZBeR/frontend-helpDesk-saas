import api from '../../../api/axios'

export const getTickets = async () => {
    const response = await api.get('/tickets/')
    return response.data;
}

export const createTicket = async (ticketData) => {
    const response = await api.post('/tickets/', ticketData);
    return response.data;
}

export const detailTicket = async (id) => {
    const response = await api.get(`/tickets/${id}`)
    return response.data
}

export const comentByTicket = async (id) => {
    const response = await api.get(`/tickets/${id}/comentarios/`);
    return response.data
}

export const resolverTicket = async (id) => {
    const response = await api.post(`/tickets/${id}/resolver_ticket/`);
    return response.data
}