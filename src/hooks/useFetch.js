import { useState, useEffect } from "react";
import { loja } from "../data";

const useFetch = (url) => {
    const [data, setData] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const tienda = await res.json();
            setData({loja});
        };

        fetchData();
    }, [{loja}]);

    return { data };
};

export default useFetch;