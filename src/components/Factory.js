import React, { cloneElement } from 'react';
import { componentMap } from '../componentMap';

const Factory = ({ components }) => {


    return (
        <>
            {components.map ((component, index) => {
                return cloneElement(componentMap[component.name], {...component.props, key: index})
            })}
        </>    
    )
}

export default Factory;