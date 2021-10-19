import React from 'react'
import { makeStyles, TextField, Toolbar } from "@material-ui/core";
import "./App.css"
import MenuIcon from '@material-ui/icons/Menu';

import MenuItem from '@material-ui/core/MenuItem';
import Indigo from "./Indigo";
import Rainbow from "./Rainbow";
import Client3 from "./Client3";

const dropValues= [
    {
      value: 'Indigo',
      label: 'Indigo',
    },
    {
      value: 'Rainbow',
      label: 'Rainbow',
    },
    {
      value: 'Client3',
      label: 'client3',
    },
   
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
       
      },
    },
  }));
function HomeScreen() {

    const classes = useStyles();
    const [values, setValue] = React.useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <div>
              <Toolbar style={{background:"white"}}>
        <MenuIcon/>
      </Toolbar>
      <div>
      <header className="">
      <h3 style={{marginLeft:"30px"}}>Status Monitor</h3>
      <div style={{marginLeft:"30px"}}>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          
          id="standard-select-currency"
          select
          label="Clients"
          value={values}
          onChange={handleChange}
          helperText="Please select your Value"
          variant="outlined"
          style={{marginRight:"40px",}}
        
          >
             {dropValues.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
         <TextField
          required
          select
          id="outlined"
          value={values}
          onChange={handleChange}
          label="Service"
          defaultValue=""
          variant="outlined"
          style={{marginRight:"40px"}}
         
        />
         <TextField
         select
          required
          id="outlined"
          label="Tasks"
          defaultValue=""
          variant="outlined"
          value={values}
          onChange={handleChange}
          style={{marginRight:"40px",paddingRight:"30px"}}
        />
          <TextField
         select
          required
          id="outlined"
          label="Search here"
          defaultValue=""
          variant="outlined"
          value={values}
          onChange={handleChange}
          style={{marginRight:"40px",paddingRight:"30px"}}
        />
        </form>
        </div>
    </header>
    </div>

{(() => { 
 switch  (values) {
    case 'Indigo':
      return <Indigo/>
      case 'Rainbow':
        return <Rainbow/>
        case 'Client3':
          return <Client3/>
    

     default:
        return("")
 }
})()}
        </div>
    )
}

export default HomeScreen
