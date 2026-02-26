import { useState, useEffec, useEffect} from 'react'
import { getEquipos } from '../features/equipos/services/equipoServices'

export const useFecthEquipo = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const getListEquipos = async () => {
        try {
            setIsLoading(true);
            setError('')
            const response = await getEquipos();
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getListEquipos()
    }, []);

  return { data, isLoading, error}
}
