import React from 'react'
import './AddNewTimeSheet.css'
import { Formik, Form, Field, FieldArray } from 'formik';
import { Row, Col,Container,Badge,Table } from 'react-bootstrap';
import Select from 'react-select';
import AddIcon from '@material-ui/icons/Add';
import { Clear } from '@material-ui/icons';

const initialValues = {
  others: [
    {
    timeSheetCode: "",
    time:""
   
  },
   
  ]
};

export const TimeSheetCodeTable= () => (

  <div>


    <Container className="container">
    <Formik

      initialValues={initialValues}

 
      render={({ values }) => (

        <Form>
              <Row>
                        <Col>
                        <span>
                          <h4 style={{fontWeight:600,marginTop:"20px"}}>Others</h4>
                        </span>
                        </Col>
                      </Row>
          <FieldArray

            name="others"

            render={arrayHelpers => (

              <div>
          
                {values.others && values.others.length > 0 ? (

                  values.others.map((other, index) => (

                    <div key={index}>
                    
                      <Row style={{marginTop:"20px"}}>
                 
                        <Col>
                      <Field
                            name={`others.${index}.timeSheetCode`}
                            component={Select}
                            placeholder="Time sheet code "
                            onChange={''}
                            type="text"
                            className="field"
                          />
                          </Col>
                        
                          <Col style={{marginLeft:"20px",marginRight:"10px"}} sm={4} >
                            <Field
                             name={`others.${index}.time`}
                            placeholder="hh:mm"
                            component={Select}
                            onChange={''}
                            type="text"
                            className="field"
                            />
                            </Col>
                            
                            <Col  sm={1} style={{marginLeft:"-100px"}}>
                      <Clear
                       onClick={() => arrayHelpers.remove(index)} // remove a client from the list
                      />
                           </Col>
                     
                      <Col style={{marginLeft:"0",}} >
                      <AddIcon
                      onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        />
                     </Col>
                      
                      </Row>
                    </div>

                  ))

                ) : (

                  <button style={{width:"200px",borderRadius:"20px",outline:"none"}} type="button" class="btn btn-success" onClick={() => arrayHelpers.push('')}>

                    {/* show this when user has removed all friends from the list */}

                    Add Time sheet code

                  </button>

                )}
              
             
              
              </div>
       
            )}

          />
       
        </Form>
       
      )}

    />
 </Container>
  </div>

);


export default TimeSheetCodeTable
