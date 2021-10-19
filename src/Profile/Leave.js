import { Card, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import "./profile.css";

const useStyles = makeStyles({
  root: {
    "& .MuiInput-root" :{
   
      fontWeight:700,
      fontSize:"20px",marginLeft:"10px"
    }
  }
  
});
    export const Leave  = props =>{
      const classes = useStyles();
    return (
      <div className="body_background" >
        <Card className="Leave"  elevation={8}>
          
          <label style={{fontWeight:700}}>
         Leaves taken in a year:
       
          <TextField
        id="date"
        
        disabled
        className={classes.root}
        defaultValue="20"
        
        style={{paddingLeft:"10px",paddingRight:"10px",color:"green" }}
        InputLabelProps={{
          style: { },
        }}
        
      />   
        </label>

        <Card>

        </Card>
        </Card>
        </div>
    )
    }