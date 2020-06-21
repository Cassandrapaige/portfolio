import React from 'react'

import {TechContainer, TechType} from './tech-container.styles'

const TechStackContainer = ({TECH, children, ...props}) => {

    return (
    <TechContainer {...props}>
        {children}
    {
        TECH.map((el, index) =>
            <TechType key = {index} {...props}>{el}</TechType>
        )
    }
    </TechContainer>
    )
}

export default TechStackContainer