import { Card } from '@material-ui/core'
import PushPinIcon from '@material-ui/icons/PushPin';
import React from 'react'
import "./Indigo.css"
import IndigoDetails from './IndigoDetails';


function Indigo() {
    const [values, setValue] = React.useState('0');
    const handleClick = (event) => {
        setValue('1');
      };

    return (
        <div className="Card">
       
           <Card style={{width:"30%",height:"300px",marginLeft:"30px"}}>
               <h3 className="ClientCardHeader">Indigo</h3>
               <div className="pushIcon">
               <PushPinIcon  onClick={handleClick} value={values}/>
               </div>
                <Card style={{height:"100px",marginTop:"0%"}}>
                    <p className="AccountingHeader">Accounting</p>
                </Card>
                <Card style={{height:"100px",marginTop:"0%"}}>
                    <p className="AccountingHeader">Reconciliation</p>
                </Card>
            </Card>
            {(() => { 
 switch  (values) {
    case '1':
      return <IndigoDetails/>
     
     default:
        return("")
 }
})()}
        </div>
    )
}

export default Indigo
