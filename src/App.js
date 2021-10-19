import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import ProfileDetails from './Profile/index'
import HomeScreen from "./HomeScreen";
import DarkLight from "./darkmode/DarkLight";
import Themes from "./Profile/Themes";
import AddNewTimeSheet from "./AddNewTimeSheet/AddNewTimeSheet";

function App() {
 
  return (
   <div className="App">
    
    
<Router>
  <Switch>
        <Route exact path='/profile' >
          <ProfileDetails/>
        </Route>
        <Route exact path='/' >
          <HomeScreen/>
        </Route>
        <Route exact path='/dark' >
          <DarkLight/>
        </Route>
        <Route exact path='/theme' >
          <Themes/>
        </Route>
        <Route exact path='/timesheet' >
          <AddNewTimeSheet/>
        </Route>
  </Switch>
</Router>        
   </div>
  );
}

export default App;
