import { useState, useEffect} from 'react'
import { comentByTicket } from '../features/tickets/services/getTickets'

export const useFetchIDComent = (id) => {

    const [dataComent, setDataComent] = useState([])
    const [isLoadingComent, setIsLoadingComent] = useState(true)
    const [errorComent, setErrorComent] = useState('')

    const getDetail = async (id) => {
        try {
            setIsLoadingComent(true);
            setErrorComent('');
            const response = await comentByTicket(id);
            setDataComent(response);
        } catch (error) {
            setErrorComent(error);
        } finally {
            setIsLoadingComent(false)
        }
    }

    useEffect(() => {
        getDetail(id)
    }, []);

  return { dataComent, isLoadingComent, errorComent}
}
