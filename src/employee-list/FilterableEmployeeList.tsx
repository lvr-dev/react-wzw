import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';
import Employee from '../types/Employee';
import useApiGetHook from '../hooks/useApiGetHook';
import { EmployeeList } from './EmployeeList';
import { SearchBar } from '../search-bar/SearchBar';
import ShootingStars from '../assets/shooting-stars.png';
import Plus from '../assets/plus.png';

export const FilterableEmployeeList: FunctionComponent = () => {
    let employees:Employee[] = [];

    const [{ data, isLoading, isError }, doFetch] = useApiGetHook(
        employees,
        'http://localhost:3000/employee'
    );

    const setSearchValue = (key:string, value?:string) => {
        let queryParams = '';

        if (value) {
            queryParams = `?${key}=${value}`;
        }
        const queryUrl = `http://localhost:3000/employee${queryParams}`;
        doFetch(queryUrl);
    };

    return (
        <div>
            <div className="center-wrapper">
                <div className="sub-header">
                    <img src={ShootingStars} alt="shooting stars" />
                    <h1>Medewerkers</h1>
                </div>
                <div className="util-header">
                    <div className="flex-row">
                        <div className="filler"></div>
                        <div className="flexitem-large"><SearchBar setSearch={setSearchValue}/></div>
                        <div className="filler"></div>
                    </div>
                    <div className="flex-row">
                        <div className="filler"></div>
                        <div className="icon-wrapper icon-wrapper-right">
                            <Link to={'/employees/new'}>
                                <img src={Plus} alt="add icon" width="28" height="28"/>
                            </Link>
                        </div>
                    </div>
                </div>
                {isError && <div>Something went wrong ...</div>}
                {isLoading ? (
                    <div>Loading....</div>
                ) : (
                    <EmployeeList employees={data}/>
                )}
            </div>
        </div>
    );
};
