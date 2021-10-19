import { Card } from '@material-ui/core'
import PushPinIcon from '@material-ui/icons/PushPin';
import React from 'react'
import Client3Details from './Client3Details';
import "./Client3.css"


function Client3() {
    const [values, setValue] = React.useState('0');
    const handleClick = (event) => {
        setValue('1');
      };
    return (
       
        <div className="">
       
        <Card style={{width:"30%",height:"300px",marginLeft:"30px"}}>
            <h3 className="ClientCardHeader">Client3</h3>
            <div className="pushIcon">
            <PushPinIcon onClick={handleClick} value={values} />
            </div>
             <Card style={{height:"100px",marginTop:"0%"}}>
                 <p className="AccountingHeader">Accounting</p>
             </Card>
             <Card style={{height:"100px",marginTop:"0%"}}>
                    <p className="AccountingHeader">Reconciliation</p>
                </Card>
         </Card>
         {(() => { 
 if (values==='1') {
    return(<Client3Details/>)
 }
})()}
         </div>
    )
}

export default Client3
