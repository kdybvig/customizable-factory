import React, { cloneElement } from 'react';
import { componentMap } from '../componentMap';

const Factory = ({ components }) => {


    return (
        <>
            {components.map ((component, index) => {
                const Component = componentMap[component.name]
                return <Component {...component.props} />
            })}
        </>    
    )
}

export default Factory;