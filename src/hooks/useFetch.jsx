import { useState, useEffect } from "react";
import { getTickets } from "../features/tickets/services/getTickets";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getApiTickets = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getTickets();
      setData(response);
      setIsLoading(false)
    } catch (error) {
        setError(error);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiTickets();
  }, []);

  console.log(data);

  return { data, isLoading, error}
};
