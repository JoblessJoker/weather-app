import { ActionTypes } from "../constants/action-types";


const initialState = {
    weather: null,
    err: null,
    loading: true
}


export const weatherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CURRENT_WEATHER_DETAILS_REQUEST:
            console.log("Get Current Weather Details");

            console.log("Reducer Request", payload);
            return { ...state, loading: true };

        case ActionTypes.GET_CURRENT_WEATHER_DETAILS_SUCCESS:
            console.log("Reducer Success", payload);
            return { weather: payload, err: null, loading: false };

        case ActionTypes.GET_CURRENT_WEATHER_DETAILS_FALIURE:
            console.log("Reducer Failure", payload);
            // alert(payload.message);
            return {weather: null, err: payload, loading: false};

        default:
            return state;
    }
}

export default weatherReducer;