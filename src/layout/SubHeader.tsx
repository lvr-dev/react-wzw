import CookieMonster from '../assets/cookie-monster.png';
import React, {FunctionComponent} from 'react';

export const SubHeader:FunctionComponent<{title:string}> = ({title}) => {

    return (
        <div className="sub-header">
        <img src={CookieMonster} alt="cookie monster"/>
        <h1>{ title }</h1>
        </div>
    );
}
