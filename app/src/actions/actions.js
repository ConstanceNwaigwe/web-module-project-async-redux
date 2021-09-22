import axios from "axios"

export const FETCH_CHARACTER_LOADING = "FETCH_CHARACTER_LOADING"
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS"
export const FETCH_CHARACTER_FAIL = "FETCH_CHARACTER_FAIL"

export const getCharacter = () => {

    return dispatch => {
      dispatch({ type: FETCH_CHARACTER_LOADING })
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results[0]})
        })
        .catch(err => {
          dispatch({ type: FETCH_CHARACTER_FAIL, payload: error })
        }) 
    }
  }