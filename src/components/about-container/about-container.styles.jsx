import styled from 'styled-components'
import {COLORS} from '../../constants'

export const AboutMeContainer = styled.div`
display: grid;
grid-template-columns: 40% 60%;
padding: 50px 0;

@media(max-width: 600px) {
    grid-template-columns: 1fr;
}
`

export const ImageContainer = styled.div`
height: 100%;

img {
    width: 100%;
    background: ${COLORS.randomColor()};
    padding: 20px;
}
`

export const Title = styled.h4`
font-size: 2em; 
font-weight: 500; 
padding-bottom: 10px; 
text-decoration: underline; 
text-decoration-style: wavy; 
text-decoration-color: ${COLORS.randomColor()};
`

export const Bio = styled.div`
padding: 0 10px 0 40px;

@media(max-width: 600px) {
    padding: 10px;
}
`

export const Paragraph = styled.p`
padding-bottom: 15px;
font-size: 1.2em;
font-weight: 300;
font-family: 'Lato', sans-serif;
line-height: 26px;
`