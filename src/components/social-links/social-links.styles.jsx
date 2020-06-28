import styled from 'styled-components'
import {Link} from 'gatsby'
import {COLORS} from '../../constants'

export const SocialIconsContainer = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
`

export const SocialLink = styled(Link)`
padding: 0 10px;
font-size: 1.6em;
color: ${COLORS.randomColor};
-webkit-text-stroke: 1px black;
transition: all 1s ease;
`