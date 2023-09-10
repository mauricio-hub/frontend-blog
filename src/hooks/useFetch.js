import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

function useFetch(url, token = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const headers = {};

      // Agregar el encabezado de autorización solo si se proporciona un token
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await axios.get(url, { headers });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [url, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Aquí utilizamos fetchData como dependencia

  return { data, loading, error };
}

export default useFetch;
