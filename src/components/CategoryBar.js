import { AppBar, IconButton, Menu, MenuItem, Toolbar,Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const CategoryBar = ()=>{
    const {state, dispatch} = useContext(GlobalContext)
    console.log(state);
    const {categories} = state;


    return(
        <Box
        sx={{
            flexGrow:1,
            backgroundColor:"black",
            height:32,
            pt:1
        }}>

            <Typography variant="body1" sx={{color:"white", textTransform: 'uppercase',fontWeight: 'medium', fontSize: 16}}>{categories[0]}</Typography>

           



        
        </Box>
    )
}



export default CategoryBar