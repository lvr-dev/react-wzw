import React, { FunctionComponent } from 'react';
import './EmployeeList.css';
import Employee from '../types/Employee';
import useApiGetHook from '../hooks/useApiGetHook';
import { EmployeeList } from './EmployeeList';
import { SearchBar } from '../search-bar/SearchBar';
import ShootingStars from '../assets/shooting-stars.png';

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
                <div className="searchbar-wrapper">
                    <SearchBar setSearch={setSearchValue}/>
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
