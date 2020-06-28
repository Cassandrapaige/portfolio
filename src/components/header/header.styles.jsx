import styled from 'styled-components'
import {Link} from 'gatsby'

export const LogoContainer = styled(Link)`
line-height: 30px;
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
flex-direction: column;
text-decoration: none;
`

export const Name = styled.h2`
font-weight: 800;
color: ${({theme}) => theme.text};
`

export const Title = styled.span`
font-weight: 200;
color: ${({theme}) => theme.text};
`

export const NavbarContainer = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
justify-content: space-between;
padding: 20px 50px;
box-shadow: var(--shadow);
position: sticky;
top: 0;
z-index: 1000;

@media(max-width: 700px) {
    padding: 20px;
}
`

export const IconContainer = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
align-items: center;
`

export const ToggleIcon = styled.div`
padding-left: 20px;
color: #f6eb72;
-webkit-text-stroke: 1px #121117;
font-size: 28px;
`