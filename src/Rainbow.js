import { Card } from '@material-ui/core'
import PushPinIcon from '@material-ui/icons/PushPin';
import React from 'react'
import "./Rainbow.css"
import RainbowDetails from './RianbowDetails';


function Rainbow() {
    const [values, setValue] = React.useState('0');
    const handleClick = (event) => {
        setValue('1');
      };
    return (
       
          <div className="">
       
       <Card style={{width:"30%",height:"300px",marginLeft:"30px"}}>
           <h3 className="ClientCardHeader">Rainbow</h3>
           <div className="pushIcon">
           <PushPinIcon onClick={handleClick} value={values}/>
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
      return <RainbowDetails/>
     
     default:
        return("")
 }
})()}
        </div>
        
    )
}

export default Rainbow
