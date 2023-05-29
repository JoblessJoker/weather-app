import axios from 'axios';

const fetchCurrentWeatherData = async (city) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (e) {
        console.error("Error Retrieveing Data :" + e);

        throw e;
    }
}

export default fetchCurrentWeatherData;