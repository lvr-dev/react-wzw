import React, { FunctionComponent} from 'react';
import LowPriority from '../assets/low-priority.png';
import HighPriority from '../assets/high-priority.png';
import MediumPriority from '../assets/medium-priority.png';


export const StatusIcon:FunctionComponent<{assignmentStatus:string}> = ({assignmentStatus}) => {
    let iconType;
    switch (assignmentStatus) {
        case 'assigned':
            iconType = LowPriority;
            break;
        case 'unassigned':
            iconType = HighPriority;
            break;
        case 'lookout':
            iconType = MediumPriority;
            break;
        default:
            iconType = LowPriority;
            break;
    }
    return <img src={iconType} alt="status icon" width="28" height="28"/>
};