import axios from "axios"

export const FETCH_CAT_LOADING = "FETCH_CAT_LOADING"
export const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS"
export const FETCH_CAT_FAIL = "FETCH_CAT_FAIL"


export const getCat = () => {
    // 1. start load
    // 2. do our axios request
    // 3. successful dispatch success
    // 4. fail dispatch fail

    return dispatch => {
        dispatch(fetchCatLoading())
        axios.get(`https://http.cat/${Math.floor(Math.random() * 10) + 400}`)
            .then(res => {
                dispatch(fetchCatSuccess(res))
            })
            .catch(err => {
                dispatch(err.error)
            })
    }
}


export const fetchCatLoading = () => {
    return ({ type: FETCH_CAT_LOADING })
}

export const fetchCatSuccess = (cat) => {
    return ({ type: FETCH_CAT_SUCCESS, payload: cat}) 
}

export const fetchCatFail = (error) => {
    return ({ type: FETCH_CAT_FAIL, payload: error}) 
}