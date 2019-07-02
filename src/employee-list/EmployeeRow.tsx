import React, { FunctionComponent, useState } from 'react';
import './EmployeeList.css';
import  Employee  from '../types/Employee';
import { getFullName } from '../lib/utils';
import { EmployeeInfo } from './EmployeeInfo';
import { StatusIcon } from '../shared/StatusIcon';
import { EditIcon } from '../shared/EditIcon';


export const EmployeeRow: FunctionComponent<{employee:Employee}> = ({employee}) => {
    const fullName = getFullName(employee);
    const [ showDetails, toggleDetails ] = useState(false);
    return (
      <div>
       <div className={"main-row " + (showDetails ? "active-row" : "")}>
           <div>
            <div className="row-read-content" onClick={() => toggleDetails(!showDetails)}>
                <div className="main-row-statusicon"><StatusIcon assignmentStatus={employee.status}/></div>
                <span className="main-row-title">{fullName}</span>
                <span className="main-row-title">{employee.client}</span>

            </div>
           <div>
                <div className="main-row-icon"><EditIcon path='employees' id={employee.id} /></div>
            </div>
           </div>
       </div>
        {
            showDetails
                ? <EmployeeInfo employee={employee}/>
                : false
        }
      </div>
    );
};
