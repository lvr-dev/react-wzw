import React, { FunctionComponent, useState } from 'react';
import './EmployeeRow.css';
import { Employee } from '../types/Employee';
import { getFullName } from '../lib/utils';
import { EmployeeDetails } from '../employee-details/EmployeeDetails';
import { StatusIcon } from '../layout/StatusIcon';


export const EmployeeRow: FunctionComponent<{employee:Employee}> = ({employee}) => {
    const fullName = getFullName(employee);
    const [ showDetails, toggleDetails ] = useState(false);
    return (
       <li className={"main-row " + (showDetails ? "active-row" : "")} onClick={() => toggleDetails(!showDetails)}>
            <div>
                <span className="main-row-title">{fullName}</span>
                <div className="main-row-icon"><StatusIcon assignmentStatus={employee.status}/></div>
            </div>
            {
                showDetails
                    ? <EmployeeDetails employee={employee}/>
                    : false
            }
       </li>
    );
};