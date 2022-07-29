import { AppBar, IconButton, Menu, MenuItem, Toolbar,Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from './ddtoreLodo.png';
const PrimaryAppBar = ()=>{

    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) =>{
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = ()=>{
        setAnchorEl(null)
    }

    const menuId = 'primary-search-account-menu'

    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}

        id={menuId}
        keepMounted
        transformOrigin={{
            vertical:"top",
            horizontal:"right"

        }}

        open={isMenuOpen}
        onClose={handleMenuClose}
        >



            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
        </Menu>
    )













    return(
        <Box
        sx={{
            flexGrow:1
        }}>



            <AppBar
            sx={{backgroundColor:"#444444"}}
            position="static"
        >

                <Toolbar>
                    
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{mr:2}}>
                        <MenuIcon></MenuIcon>

                    </IconButton>
                    <Box sx={{height:64}} component="img" src={logo}></Box>
                   


                    {/* <Typography variant="h6" noWrap component="div" sx={{display:{sx:"none", sm:"block"}}}>MUI</Typography> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}



export default PrimaryAppBar