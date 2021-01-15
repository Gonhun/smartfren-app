import axios from 'axios';

export const GET_DATAS = "GET_DATAS";
export const GET_DATA_DETAILS = "GET_DATA_DETAILS";

export const getDatas = () => {
    return dispatch => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(function  (response) {
            dispatch({
                type: GET_DATAS,
                payload:{
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_DATAS,
                payload:{
                    data: false,
                    errorMessage: 'Gagal mengambil data'
                }
            })
        })
    }
}

export const getDataDetails = (id) => {
    return dispatch => {
        axios.get("https://jsonplaceholder.typicode.com/todos/"+ id)
        .then(function  (response) {
            dispatch({
                type: GET_DATA_DETAILS,
                payload:{
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_DATA_DETAILS,
                payload:{
                    data: false,
                    errorMessage: 'Gagal mengambil data'
                }
            })
        })
    }
}

export const clearDataDetails = () => {
    return dispatch => {
        dispatch({
            type: GET_DATA_DETAILS,
            payload:{
                data: false,
                errorMessage: false
            }
        })
    }
}
