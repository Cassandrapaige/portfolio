import styled from 'styled-components'
import {COLORS} from '../../constants'

export const TechContainer = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
flex-wrap: wrap;
justify-content: ${props => props.isCentered ? 'center' : 'unset'};
align-items: center;
`

export const TechType = styled.span`
border-style: solid;
border-color: ${COLORS.randomColor};
border-width: ${({smallText}) => smallText ? '1px' : '2px'};
border-radius: 10px;
margin: 3px;
font-size: ${props => props.smallText ? '.9em' : '1.2em'};
padding: 5px 10px;
font-weight: 500;
background: ${props => props.theme.complimentary};

@media(max-width: 700px) {
    font-size: ${props => props.smallText ? '.8em' : '.9em'};
}
`