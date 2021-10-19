import React from 'react'
import './AddNewTimeSheet.css'
import TimeSheetCalender from './TimeSheetCalender'
import { Row, Col,Container,Badge,Table } from 'react-bootstrap';
import TimeSheetTables from './TimeSheet_Tables';
import { TextField } from '@material-ui/core';
import TimeSheetCodeTable from './TimeSheetCode_Table';



function AddNewTimeSheet() {

   
  
    return (
        
        <div>
          
        <div className="header-background ">
          <h3 style={{fontWeight:"600",}}>Book your time </h3>
          </div> 
          <div className="position">     
          <TimeSheetCalender/>
             <Row className="DateField">
              
                   <Col>
                   <label>Selected Date</label>
                      <input type="date" id="date" style={{ marginLeft:"10px",lineHeight:"3rem",lineWidth:"8rem",}}/>
                   </Col>
               </Row>
          </div>  
         {/*Client Table */}
           <TimeSheetTables/> 
         
         {/*Time sheet code table */}
           <TimeSheetCodeTable/>
            
             <div className="total">
             <Row style={{width:"50%"}} >
                 <Col >
                 <div style={{
                               display: "flex",
                               justifyContent: "right",
                               alignItems: "right",
                               marginTop:"50px",
                               marginLeft:"70px",
                              
                            }}>

                    <span>  <h5 style={{marginTop:"10px",marginRight:"20px"}} >Total:</h5> </span>
                     <TextField
                      id="total"
                      placeholder="hh:mm" 
                      style={{width:"8pc",marginLeft:"30px"}}
                       />
              
                  </div>
                  </Col>
             </Row>
             <Row style={{width:"50%"}} >
                 <Col>
                 <div style={{ display: "flex",
                           justifyContent: "right",
                           alignItems: "right",
                           marginTop:"10px"
                           }}>
                     <span>  <h5 style={{marginTop:"10px",marginRight:"30px"}} >Excess/Shortage:</h5> </span> 
                     <TextField
                      id="Excess"
                      placeholder="hh:mm" 
                      style={{width:"8pc"}}
                      />
                 </div>
                 </Col>
             </Row>
             </div>
             <Row className="save_button">
                   <Col style={{marginLeft:"65pc", marginTop:"40px", }}>
               <button style={{width:"100px",borderRadius:"20px",outline:"none"}} type="button"  >Save</button>
               </Col>
               </Row>
               
        </div>
    )
}

export default AddNewTimeSheet
