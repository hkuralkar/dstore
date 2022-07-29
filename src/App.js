import logo from './logo.svg';
import './App.css';
import { useReducer, useEffect } from 'react';
import reducer from './context/reducer';
import GlobalContext from './context/GlobalContext';
import PrimaryAppBar from './components/AppBar';
import CategoryBar from './components/CategoryBar';
import { SET_CATEGORIES } from './context/action.types';
const axios = require("axios").default;

const initialState = {
  setLoading: false,
  categories:[]
}


function App() {
  const [state, dispatch] = useReducer(reducer,initialState);

  useEffect(()=>{

    axios.get("https://dummyjson.com/products/categories")
    .then(res=>{
      console.log(res);
      
      dispatch({
        type: SET_CATEGORIES,
        payload: res.data
      })
    })
    .catch(err=>{
      console.log(err);
    })



  },[])
  return (

    <GlobalContext.Provider value={{state, dispatch}}>


    
    <PrimaryAppBar></PrimaryAppBar>
    <CategoryBar></CategoryBar>
    </GlobalContext.Provider>
  );
}

export default App;
