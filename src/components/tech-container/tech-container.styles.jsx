import styled from 'styled-components'
import {COLORS} from '../../constants'

export const TechContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: ${props => props.isCentered ? 'center' : 'unset'};
align-items: center;
`

export const TechType = styled.span`
border: ${props => props.smallText ? 
     `1px solid ${COLORS.randomColor()}` 
    : `2px solid ${COLORS.randomColor()}`}; 
border-radius: 10px;
margin: 3px;
font-size: ${props => props.smallText ? '.9em' : '1.2em'};
padding: 5px 10px;
font-weight: 500;
background: ${props => props.theme.complimentary};
`