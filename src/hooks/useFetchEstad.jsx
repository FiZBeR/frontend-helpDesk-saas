import { useState, useEffect } from 'react'
import { getInfo } from '../features/estadisticas/services/getEstadisticas';

export const useFetchEstad = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const getEstad = async () => {
        try {
            setIsLoading(true);
            setError('');
            const response = await getInfo();
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getEstad();
    }, [])
    
  return { data, isLoading, error}
}
