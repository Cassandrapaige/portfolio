import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';

import {LogoContainer,
        Name,
        Title,
        NavbarContainer, 
        ToggleIcon} 
        from './header.styles'

const Header = ({handleClick, isDarkMode}) => (
  <header>
    <NavbarContainer>
        <LogoContainer to = '/'>
            <Name>Cassie Rossall</Name>
            <Title>Web Developer</Title>
        </LogoContainer>
          <ToggleIcon>
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} onClick = {() => handleClick()} width='0'/>
          </ToggleIcon>
    </NavbarContainer>
  </header>
)

export default Header
