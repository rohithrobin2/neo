import React, { Component } from "react";
import "./profile.css";
import {
    Toolbar,
    Avatar,
    withStyles,
    MenuItem,
    Menu,
    Paper
  } from '@material-ui/core';
  import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
  import  SearchOutlined from "@material-ui/icons/SearchOutlined";
import {GeneralDetails} from "./General";
import { LifeCycle } from "./LifeCycle";
import { Security } from "./Security";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';
import { Leave } from "./Leave";
import { ICAI } from "./ICAI";
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Themes from "./Themes";



const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
   
  },
  
  tabRoot: {
    "&:hover": {
      color: "#1795be",
    },
    "&$tabSelected": {
      color: "#1795be",
     
    },
    "&:focus": {
      color: "#1795be"
    }
  },


});

 class ProfileDetails extends Component {

     constructor(){
          super();
          this.state={
          name:"name",
          value:0,anchorEl:0, 
          clickedTabs: []
          
          };
         
        }
        handleChange = (event, value,) => {
          this.setState({ value,});
        
        };
        handleClick = event => this.setState({ anchorEl: event.currentTarget })
        handleClose = () => this.setState({ anchorEl: null })

        

        render(){
         const {classes} =this.props;
         const { anchorEl } = this.state;
        return(
          
        
        <div className="background" >
        <h1> {this.props.toggle}</h1>
    
          <Toolbar className="Tool" elevation={8}>

          <img src="./favicon.ico" alt="Logo" height={30} width={30} />
            <div  style={{
                marginLeft: "auto",
                 color:"",
                 justifyItems:"space-between",
                   marginRight:"15px"          
             }}>
              <SearchOutlined style={{color:"azure"}}/>
              </div>
              <Badge badgeContent={4} color="error" style={{marginRight:"15px",width:"30px"}}>
              <NotificationsIcon style={{color:"azure"}}/>
              </Badge>
             <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
             onClick={this.handleClick} style={{ height: '30px', width: '30px' ,marginRight:"20px"}}/>
           
            <Menu
              style={{marginTop:"30px",}}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              MenuListProps={{style:{}}}
             >
             
             <MenuItem style={{fontSize:"18px",fontWeight:700}} onClick={this.handleClose}>Profile</MenuItem>
             <MenuItem style={{fontSize:"18px",fontWeight:700}} onClick={this.handleClose}>My account</MenuItem>
             <MenuItem style={{fontSize:"18px",fontWeight:700}} onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>

        

<div style={{fontWeight:"700" ,paddingLeft:"20px"}} >
    <h2 >Dashboard</h2>
      
        </div>

<header className="Header" borderBottom={1} >
<Tabs 
        value={this.state.value}
        onChange={this.handleChange}
        aria-label="disabled tabs example"
        TabIndicatorProps={{style: {background:'#08698a',},}}>

 <Tab style={{outline:"none",}}  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
  onClick={()=>{this.setState({name:'name'})} }  label={<h3 className="P1">ACCOUNT</h3>}/>
 <Tab style={{outline:"none"}}  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
 onClick={()=>{this.setState({name:'Manage your plan'})} } label={<h3 className="P1">LIFE CYCLE</h3>}/>
 <Tab style={{outline:"none"}}  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
 onClick={()=>{this.setState({name:'ICAI'})} }  label={<h3 className="P1">ICAI</h3>}/>
 <Tab style={{outline:"none"}} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
 onClick={()=>{this.setState({name:'Change Password'})} }  label={<h3 className="P1">SECURITY</h3>}/>
 <Tab style={{outline:"none"}}  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
  onClick={()=>{this.setState({name:'Leave'})} }  label={<h3 className="P1">LEAVE</h3>}/>
</Tabs>
</header>  

<div style={{ borderTop: "2px solid grey ", marginLeft: 10, marginRight: 20 }}></div>

{(() => { 
 switch  (this.state.name) {
    case 'name':
      return <GeneralDetails toggle={this.props.toggle}/>
  
    case 'Manage your plan':
      return <LifeCycle/>
  
    case 'ICAI':
        return <ICAI/>
    case 'Change Password':
        return <Security/>

    case 'Leave':
        return <Leave/>

     default:
        return("")
 }
})()}

</div>


    )
}
}

export default withStyles(styles)(ProfileDetails);
