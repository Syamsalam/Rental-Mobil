import axios from 'axios';
import useSWR from 'swr';

const Productlist = () => {
    const fetch = async () => {
        const response = axios.get("http://localhost:8000/list-rental");
        return response.data;
    };
    const {data} = useSWR('list-rental',fetch);
    if(!data) return <h2>Loading...</h2>;
}
