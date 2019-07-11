import { useState, useCallback } from 'react';
import axios from 'axios';


export default function useApiPostHook<T>(payLoad: T,  url: string) {

    const [response, setResponse ] = useState({data: null, error:  null, isLoading: false});

    const usePostData = useCallback(async () => {
        setResponse(prevState => ({...prevState, isLoading: true}));
        try {
            const response = await axios.post(url, payLoad);
            setResponse({data: response.data, error: null, isLoading: false});
        } catch (error) {
            setResponse({data: null, error: error, isLoading: false});
        }
    }, []);

    return [response , usePostData];
}
