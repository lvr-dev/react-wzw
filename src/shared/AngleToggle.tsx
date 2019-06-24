import React, { FunctionComponent} from 'react';
import { Icon } from "semantic-ui-react";

export const AngleToggle:FunctionComponent<{open:boolean, angleClass:string}> = ({open, angleClass}) => {
    let spanIcon;

    spanIcon = open
        ? <span className={angleClass}><Icon fitted name='angle up'/></span>
        : <span className={angleClass}><Icon fitted name='angle down'/></span>
    ;

    return (
        spanIcon
    );
};