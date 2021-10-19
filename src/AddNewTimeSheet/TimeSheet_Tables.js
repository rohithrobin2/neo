import React from 'react'
import './AddNewTimeSheet.css'
import { Formik, Form, Field, FieldArray } from 'formik';
import { Row, Col,Container,Badge,Table } from 'react-bootstrap';
import Select from 'react-select';
import AddIcon from '@material-ui/icons/Add';
import { Clear } from '@material-ui/icons';


const initialValues = {
  projects: [
    {
      client: "Klaus",
    project: "klaus@formik.com",
    time:"hh:mm"
   
  },
   
  ]
};

export const TimeSheetTables= () => (

  <div>


    <Container className="container">
    <Formik

      initialValues={initialValues}

 
      render={({ values }) => (

        <Form>
              <Row>
                        <Col>
                        <span>
                          <h4 style={{fontWeight:600}}>Projects</h4>
                        </span>
                        </Col>
                      </Row>
          <FieldArray

            name="projects"

            render={arrayHelpers => (

              <div>
          
                {values.projects && values.projects.length > 0 ? (

                  values.projects.map((project, index) => (

                    <div key={index}>
                    
                      <Row style={{marginTop:"20px"}}>
                 
                        <Col>
                      <Field
                            name={`projects.${index}.client`}
                            component={Select}
                            placeholder="Client"
                            onChange={''}
                            type="text"
                            className="field"
                          />
                          </Col>
                          <Col>
                             <Field
                            name={`projects.${index}.project`}
                            component={Select}
                            placeholder="Project"
                            onChange={''}
                            type="text"
                            className="field"
                          /></Col>
                          <Col >
                            <Field
                             name={`projects.${index}.time`}
                            placeholder="hh:mm"
                            component={Select}
                            onChange={''}
                            type="text"
                            className="field"
                            />
                            </Col>
                            <Col sm={1} >
                      <Clear
                       onClick={() => arrayHelpers.remove(index)} // remove a client from the list
                      />
                           </Col>
                     
                      <Col sm={2}>
                      <AddIcon
                      onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        />
                     </Col>
                      
                      </Row>
                    </div>

                  ))

                ) : (

                  <button style={{width:"100px",borderRadius:"20px",outline:"none"}} type="button" class="btn btn-success" onClick={() => arrayHelpers.push('')}>

                    {/* show this when user has removed all friends from the list */}

                    Add Client

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



export default TimeSheetTables
