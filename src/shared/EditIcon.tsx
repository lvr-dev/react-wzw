import React, { FunctionComponent} from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../assets/edit.png';

type IconProps = {
    path: string,
    id?: string
}

export const EditIcon: FunctionComponent<IconProps> = ({path, id}) => {
    const linkPath = path;
    const linkId = id;

    const fullPath = linkId ? `/${linkPath}/${linkId}` :  `/${linkPath}`;
    return (
        <div className="main-row-icon">
            <Link to={fullPath}><img src={PencilIcon} alt="status icon" width="28" height="28"/></Link>
        </div>
    )
};
