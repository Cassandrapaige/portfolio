import styled from 'styled-components'
import { COLORS } from '../../constants'

export const ProjectContainer = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
flex-direction: column;
padding: 15px;
border-radius: 10px;
box-shadow: var(--shadow);
background: ${props => props.theme.complimentary};
border: 1px solid ${COLORS.randomColor()};
`

export const ImageContainer = styled.div`
img {
    width: 100%;
    object-fit: contain;
    box-shadow: var(--shadow);
}
`

export const ProjectTitle = styled.h2`
font-weight: 500;
padding-top: 10px;
`

export const ProjectDescription = styled.p`
padding: 10px 0;
font-size: 1.2em;
font-weight: 300;
font-family: 'Lato', sans-serif;
line-height: 26px;
`

export const ProjectInfo = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
flex-direction: column;
height: 100%;
`

export const LinksContainer = styled.div`
padding: 20px 0;
`

export const ProjectLink = styled.a`
text-decoration: underline; 
text-decoration-style: wavy; 
text-decoration-color: ${COLORS.randomColor()}; 
padding-right: 15px; 
font-size: 1.2em; 
font-weight: 500;
color: ${props => props.theme.text};
`