import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url: string) => {

    type RandomUser = {
        name: {
            first: string
            last: string
        }
        email: string;
        location: {
            country: string
        }
        phone: string;
        picture: {
            large: string
        }
      };

    const [result, setResult] = useState<RandomUser>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async() => {
        try {
            let response = await axios.get<RandomUser>(url);
            setResult(response.data);
            setLoading(false);
        } 
        catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { fetchData, result, loading, error };
}

export default useFetch