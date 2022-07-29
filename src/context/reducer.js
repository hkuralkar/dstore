import { SET_CATEGORIES, SET_LOADING } from "./action.types";




export default (state, action)=>{

    switch (action.type) {
        case SET_LOADING:
            return {...state, setLoading: action.payload}

        case SET_CATEGORIES:
            
            return {...state, categories: action.payload}
    
        default:
            return state;
    }

}