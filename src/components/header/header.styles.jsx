import styled from 'styled-components'
import {Link} from 'gatsby'

export const LogoContainer = styled(Link)`
line-height: 30px;
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
display: flex;
justify-content: space-between;
padding: 20px 50px;
box-shadow: var(--shadow);
position: sticky;
top: 0;
z-index: 1000;
`

export const HamburgerIconContainer = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
position: relative;
`

export const HamburgerIconTop = styled.span`
position: absolute;
width: 70%;
height: 3px;
background: ${({theme}) => theme.text};
left: 50%;
transform: translateX(-50%);
top: 35%;
`

export const HamburgerIconBottom = styled(HamburgerIconTop)`
top: unset;
bottom: 35%;
`

export const IconContainer = styled.div`
display: flex;
align-items: center;
`

export const ToggleIcon = styled.div`
padding-left: 20px;
color: #f6eb72;
-webkit-text-stroke: 1px #121117;
font-size: 28px;
`