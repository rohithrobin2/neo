import React, { useState } from 'react'
import {Grid,Button,Paper, Switch, Box, Card, CssBaseline  } from "@material-ui/core";
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import ProfileDetails from '../Profile/index'
import "./DarkLight.css";
import { grey } from '@material-ui/core/colors';

function DarkLight() {

const [darkMode,setDarkMode]=useState(false);
const darkTheme = createMuiTheme({
     
      palette: {
        type: "dark",
        background: {
            paper: "#171c24",
            
          },  
      }
    })
    const lightTheme = createMuiTheme({
      
      palette: {
        type: "light",
         }
    })
    
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            
          <Paper>
                
                <ProfileDetails toggle="dark"/>
                <div className="Dark-Light" style={{position:"relative",marginTop:"30pc",marginLeft:"80pc"}}>
                <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} color="primary"/>
                </div>
               
                </Paper>
           
        </ThemeProvider>
            
        
    )
}

export default DarkLight
