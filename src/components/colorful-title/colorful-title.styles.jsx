import styled from 'styled-components'
import {COLORS} from '../../constants'

export const Title = styled.h1`
height: 100%;
display: inline-block;
display: flex;
flex-wrap: wrap;
white-space: pre;
justify-content: center;
padding: 0 5px;
`

export const Letter = styled.span`
color: ${COLORS.randomColor};
transition: all 1s ease;
font-size: 60px;
font-weight: 800;
line-height: 90px;
opacity: 0;
transform: translateY(-50px);
animation: 1s slide-down ease forwards;
animation-delay: calc(.1s * var(--char-index));
-webkit-text-stroke: 1px black;
display: block;

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

@media(max-width: 750px) {
    font-size: 40px;
    line-height: 45px;
}

@media(max-width: 500px) {
    font-size: 30px;
    line-height: 40px;
}
`