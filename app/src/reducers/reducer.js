import { FETCH_CHARACTER_FAIL, FETCH_CHARACTER_LOADING, FETCH_CHARACTER_SUCCESS } from "../actions/actions";

const initialState = {
    character: {
        name: "",
        gender: "",
        status: "",
        species: "",
        image: ""},
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_CHARACTER_LOADING):
          return ({
            ...state,
            isFetching: true,
          })
        case(FETCH_CHARACTER_SUCCESS): 
          return ({
            ...state,
            isFetching: false,
            character: action.payload,
          })
        case(FETCH_CHARACTER_FAIL): 
          return ({
            ...state,
            isFetching: false,
            error: action.payload,
          })
        default:
          return state;
      }
};