import React, { FunctionComponent } from 'react';
import { StatusOptions } from '../shared/StatusOptions';
import { Select } from 'semantic-ui-react';

export const EmployeeForm: FunctionComponent = () => {

    return (<div>
            <div className="center-wrapper">
                <div className="sub-header">
                </div>
                <form>
                <div>
                    <label>voornaam</label>
                    <input type="text" name="firstName" />
                    <label>tussenvoegsel(s)</label>
                    <input type="text" name="prefix" />
                    <label>achternaam</label>
                    <input type="text" name="lastName" required />
                 </div>
                <div>
                     <label>Opdrachtgever</label>
                    <input type="text" name="client" />
                </div>
                <div>
                    <label>van</label>
                    <input type="date" name="since"/>
                    <label>tot</label>
                    <input type="date" name="since"/>
                </div>
                <div>
                    <Select placeholder='Inzetstatus' options={StatusOptions} />
                </div>
                <button type="submit">Opslaan</button>
                </form>
            </div>
        </div>
    );
};
