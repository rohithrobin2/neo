import { Card, makeStyles, TextField } from '@material-ui/core';

import React from 'react';
import "./profile.css";


const useStyles = makeStyles({
  root: {
    "& .MuiInput-root" :{
      color:"",
     
    }
  }
  
});
    export const LifeCycle  = props =>{
      const classes = useStyles();
    return ( <div className="body_background" >
        <Card className="LC1" elevation={8}> 
    
       <label >
          DOJ:  
      </label>
      
          <TextField
        id="date"
        type="date"
        disabled
        defaultValue="2017-05-24"
        className={classes.root}
        style={{paddingLeft:"10px",paddingRight:"10px" }}
        InputLabelProps={{
      
         marginTop:"20px"
         
        }}
        
      />   
      
      
        <label>
          DOT:  
       </label>
        <TextField
        id="date"
        
        type="date"
        disabled
         className={classes.root}
        defaultValue="2017-05-24"
        
        style={{paddingLeft:"10px",paddingRight:"10px" }}
        
       />   
       
          
         <p>Current Designation:</p>
         <p>Effective From:</p>
         <p>Reporting time:</p>
         <p>Previous Employee-ID: </p>
         <p>Current Status:</p>    
        
        </Card>
        <Card className="LC2" elevation={8}>
        <p>Designation:</p>
        <p>From:</p>
        <p>To:</p>
        <p>Qualification:</p>
        <p>Prior years of experience:</p>
        <p>Years of experience:</p>
        </Card>

        </div>
    )
    }