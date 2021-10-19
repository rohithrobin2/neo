import  Card  from '@material-ui/core/Card';
import React, { useState } from 'react';
import "./profile.css";
import Avatar from '@material-ui/core/Avatar';
import { Button, TextField,InputBase, CardContent  } from '@material-ui/core';
import { createMuiTheme, makeStyles, MuiThemeProvider, ThemeProvider } from "@material-ui/core/styles";





const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "",
      borderRadius:"20px"
      
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "",
     
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "", 
      fontSize:"20px"
       },

     "& .MuiOutlinedInput-root" :{
       color:"",
      
   
     },
    "&:hover .MuiOutlinedInput-root" :{
      backgroundColor:  "",
     
    },},
    formLabel: {
      color: '',
      '&.Mui-focused': {
        color: '',fontSize:"20px",
      }
    },
   
});
    export const GeneralDetails  = props =>{
      const classes = useStyles();
      const [darkMode,setDarkMode]=useState(false);
        
     
      const theme = createMuiTheme({
      
        
        palette: {
        
          
        
            
      
          type:darkMode? "dark":"light",
          background:
          {
           /* paper:"#222b36",*/
          },
        
           }
      })
 
  

    return (
<ThemeProvider theme={theme}>
    <div className="body_background" >
        <Card className="P4"  elevation={8}  >
         <CardContent>
           
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" style={{ height: '100px', width: '100px' }}/>
            <p style={{fontWeight:700,marginTop:"10px"}}>Jane Rontonson</p>
            <p>Access Level:</p>
            <Button style={{backgroundColor:'#688eff' ,color:'azure',borderRadius:"20px",outline:"none" }} variant="contained">Change Image</Button>
            </CardContent>
        </Card>
        
         <Card  className="body" border="1px solid #030120" elevation={8} style={{backgroundColor:"primary"}}>
        
         <h4 style={{fontWeight:600,marginTop:"10px",marginLeft:"10px",fontSize:"25px"}}>Edit Profile</h4>
         <div style={{ borderTop: "2px solid grey ", marginLeft: 10, marginRight: 20 ,marginBottom:20}}></div>
         <form >
           <div className="Pdetails">
         <TextField
       
            className={classes.root}
            style={{paddingBottom:"20px", paddingRight:"30px",marginLeft:"0", borderRadius:"20px"}}  
            id="name"
            label="Name"
            type="text"
            placeholder="Enter the Name"
            variant="outlined"
            InputLabelProps={{
              className: classes.formLabel
             } }
            
        />
<TextField
          
          className={classes.root}
         
         style={{paddingBottom:"20px",paddingRight:"30px"}}  
         id="email"
         label="Email Address"
         type="email"
         placeholder="Email Adress"
         variant="outlined"
         InputLabelProps={{
          className: classes.formLabel
         } }
       
       />
    
    <TextField 
          
          className={classes.root}
          style={{paddingBottom:"20px",paddingRight:"30px"}}  
         id="phone"
         type="tel"
         pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
         label="Phone Number"
         placeholder="Phone Number"
         variant="outlined"
         InputLabelProps={{
          className: classes.formLabel
         } }
       />
  <TextField
          className={classes.root}
          style={{paddingBottom:"20px",paddingRight:"30px",marginLeft:"5px"}}  
         id="country"
         label="Country"
         placeholder="Country"
         variant="outlined"
         InputLabelProps={{
          className: classes.formLabel
         } }
       />
  <TextField
          className={classes.root}
          style={{paddingBottom:"20px",paddingRight:"30px",marginRight:"15px",marginLeft:"10px"}}  
         id="state"
         label="State/Region"
         placeholder="Enter tha State/Region"
         variant="outlined"
         InputLabelProps={{
          className: classes.formLabel
         } }
       />
 <TextField 
        className={classes.root}   
        style={{paddingBottom:"20px",paddingRight:"30px",}}  
        id="city"
        label="City"
        placeholder="Enter the City"
        variant="outlined"
        InputLabelProps={{
        className: classes.formLabel
         } }
       />
       </div>
       <Button style={{backgroundColor:'#688eff' ,color:'azure',marginTop:"10px",marginLeft:"450px",marginBottom:"10px" ,borderRadius:"20px",outline:"none"}} variant="contained" type="submit">Save Changes</Button>
</form>
      
         </Card>
         {(() => { 
 if (props.toggle==='dark') {
    return(()=>setDarkMode(!darkMode) )
 }
})()} 
         </div>
         </ThemeProvider>
    )
    }
    /*    {(() => { 
 if (props.toggle==='dark') {
    return(setDarkMode(!darkMode))
 }
})()} */