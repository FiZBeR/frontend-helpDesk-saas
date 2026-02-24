import { useState, useEffect} from 'react'
import { detailTicket } from '../features/tickets/services/getTickets'

export const useFetchID = (id) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getDetail = async (id) => {
        try {
            setIsLoading(true);
            setError('');
            const response = await detailTicket(id);
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getDetail(id)
    }, []);

  return { data, isLoading, error}
}
