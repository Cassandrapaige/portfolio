import styled from 'styled-components'
import {Link} from 'gatsby'

export const LogoContainer = styled(Link)`
    line-height: 30px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: ${props => props.theme.text};
`

export const Name = styled.h2`
    font-weight: 800;
`

export const Title = styled.span`
    font-weight: 200;
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 50px;
box-shadow: var(--shadow);
position: sticky;
top: 0;
background: ${props => props.theme.secondary};
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
background: ${props => props.theme.text};
left: 50%;
transform: translateX(-50%);
top: 35%;
`

export const HamburgerIconBottom = styled(HamburgerIconTop)`
top: unset;
bottom: 35%;
`

