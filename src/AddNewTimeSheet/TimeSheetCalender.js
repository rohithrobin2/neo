import { Card } from '@material-ui/core'
import React from 'react'
import DatePicker from 'react-datepicker'

function TimeSheetCalender() {
    return (
        <div>
            <div style={{height:"250px",width:"300px",border:"30px", marginTop:"5px",marginLeft:"20px"}}>
                <DatePicker
                        //selected={this.state.date}
                        onChange={''}
                        inline
                    />
            </div>
        </div>
    )
}

export default TimeSheetCalender
