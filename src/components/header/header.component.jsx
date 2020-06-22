import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import {LogoContainer,
        Name,
        Title,
        NavbarContainer, 
        HamburgerIconContainer, 
        HamburgerIconTop, 
        HamburgerIconBottom} 
        from './header.styles'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const ToggleIcon = styled.div`
font-size: 28px;
padding-left: 20px;
color: #f6eb72;
-webkit-text-stroke: 1px #121117;
`

const Header = ({handleClick, isDarkMode}) => (
  <header>
    <NavbarContainer>
        <LogoContainer to = '/'>
            <Name>Cassie Rossall</Name>
            <Title>Web Developer</Title>
        </LogoContainer>
        <IconContainer>
          <HamburgerIconContainer>
              <HamburgerIconTop/>
              <HamburgerIconBottom/>
          </HamburgerIconContainer>
          <ToggleIcon isDarkMode = {isDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} onClick = {handleClick}/>
          </ToggleIcon>
        </IconContainer>
    </NavbarContainer>
  </header>
)

export default Header