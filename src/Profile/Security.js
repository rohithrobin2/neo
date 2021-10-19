import { Card,Button, TextField, } from '@material-ui/core';
import React from 'react';
import "./profile.css";
import { makeStyles } from "@material-ui/core/styles";


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
      borderColor:"", 
      fontSize:"20px"
      
    },  "& .MuiOutlinedInput-root" :{
      color:""
    },
    "&:hover .MuiOutlinedInput-root" :{
      backgroundColor:  "",
    },
  },
  formLabel: {
    color: '',
    '&.Mui-focused': {
      color: '',fontSize:"20px",
    }
  }
  
});

    export const Security  = props =>{

      const classes = useStyles();

    return (  <div className="body_background" >
        <Card className="P4" elevation={8}>
          
           
  <form>
    <label>
   
    <TextField style={{marginBottom:"5px"}}
    className={classes.root}
    type="password" id="name" label="Existing Password"
    placeholder="Enter the password" 
    defaultValue="hello"
     variant="outlined" 
     InputLabelProps={{
      className: classes.formLabel
     } }
  />
   </label>
   
   <label>
 
   <TextField style={{marginBottom:"5px",paddinRight:"30pc"}}
   className={classes.root}
   type="password" id="name" label="New Password"
    placeholder="New Password" variant="outlined" 
     InputLabelProps={{
      className: classes.formLabel
     } }
    />
   
   </label>
  
   <label>
   
   <TextField
   className={classes.root}
   type="password" id="name" label="Confirm Password" 
   placeholder="Confirm Password" variant="outlined" 
   InputLabelProps={{
    className: classes.formLabel
   } }
  />
   </label>

  <Button style={{backgroundColor:'#688eff' ,color:'azure', borderRadius:"20px",marginTop:"8px",outline:"none" }} variant="contained">Save Changes</Button>
</form>
       
       
        </Card>
        </div>
    )
    }