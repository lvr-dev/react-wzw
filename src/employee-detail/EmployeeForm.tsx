import React, { FunctionComponent, SyntheticEvent } from 'react';
import { useFormValidator } from '../hooks/useFormValidator';
import './EmployeeUpdate.css';
import Employee from '../types/Employee';
import { StatusOptions } from '../shared/StatusOptions';
import { Dropdown, Input } from 'semantic-ui-react';


export const EmployeeForm:  FunctionComponent<{employee:Employee}> = ({employee}) => {

    const customErrorAttribute = {
        className: 'has-error',
    };

    const { values, setValues, useInput, isValid, errors } = useFormValidator(employee, customErrorAttribute);

    const handleSubmit = (event: SyntheticEvent) => {

        event.preventDefault();
        if (isValid) {
            
        }
        if (errors) {
            console.log(errors);
        }

    };

    const setStatus = (value:any) => {
        const addedValues = Object.assign(values, {status: value});
        setValues(addedValues);
    };

    return (<div>
                <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <Input fluid className="wzw-field" type="text" name="firstName" placeholder="voornaam" {...useInput('firstName', {})} />
                    <Input  className="wzw-field" type="text" name="prefix" placeholder="tussenvoegsel(s)" {...useInput('prefix', {})}/>
                    <Input fluid className="wzw-field" type="text" name="lastName" placeholder="achternaam"  {...useInput('lastName', {
                        isRequired: true
                    })} />
                    <Input fluid className="wzw-field" type="text" name="email" placeholder="emailadres" {...useInput('email', {
                        isRequired: true
                    })} />
                   <Input fluid className="wzw-field" type="text" name="client" placeholder="client" {...useInput('client', {})}/>
                   <Input fluid label='startdatum' className="wzw-field" type="date" name="since" {...useInput('since', {})}/>
                   <Input fluid label='einddatum' className="wzw-field" type="date" name="until" {...useInput('until', {})}/>
                   <div className="ui input fluid wzw-field">
                        <Dropdown selection placeholder='Inzetstatus'
                                  options={StatusOptions}
                                  name="status"
                                  onChange={(e, { value }) => setStatus(value)}
                                  defaultValue={StatusOptions[0].value}/>
                   </div>
                    <div className="wzw-field">
                        <button className="ui button" type="submit">Opslaan</button>
                    </div>
                </div>
                </form>
            </div>

    );
};
