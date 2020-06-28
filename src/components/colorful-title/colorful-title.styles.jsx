import styled from 'styled-components'
import {COLORS} from '../../constants'

export const Title = styled.h1`
height: 100%;
display: inline-block;
display: -webkit-flex; 
display: flex;   
flex-wrap: wrap;
white-space: pre;
justify-content: center;
padding: 0 5px;
min-height: 74px;
`

export const Letter = styled.span`
color: ${COLORS.randomColor};
transition: all 1s ease;
font-size: 60px;
font-weight: 800;
line-height: 74px;
opacity: 0;
-webkit-transform: translateY(-50px);
-ms-transform: translateY(-50px);
transform: translateY(-50px);
-webkit-animation: 1s slide-down ease forwards;
animation: 1s slide-down ease forwards;
animation-delay: calc(.1s * var(--char-index));
-webkit-text-stroke: 1px black;
display: block;

@media(max-width: 700px) {
    font-size: 55px;
    line-height: 65px;
}
`