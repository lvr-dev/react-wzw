import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApiGetHook<T>(initialData: T, initialUrl: string):[
    {
        data: T,
        isLoading: boolean,
        isError: boolean
    }, (item: string) => void
    ]  {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);
                console.log(result);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
}
