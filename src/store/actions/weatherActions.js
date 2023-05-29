
import fetchCurrentWeatherData from "../../services/weatherService";
import { ActionTypes } from "../constants/action-types";

export const getCurrentWeatherDetails = (city) => {

    return async (dispatch) => {

        dispatch({ type: ActionTypes.GET_CURRENT_WEATHER_DETAILS_REQUEST })

        try {
            const weatherData = await fetchCurrentWeatherData(city);
            dispatch({
                type: ActionTypes.GET_CURRENT_WEATHER_DETAILS_SUCCESS,
                payload: weatherData
            })
        } catch (err) {
            dispatch({
                type: ActionTypes.GET_CURRENT_WEATHER_DETAILS_FALIURE,
                payload: err
            })
        }
    }
}