import React, {useState, useEffect} from "react"
import {Link} from 'gatsby'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import soundfile from '../assets/toggle_sound.wav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import ClientOnly from '../components/client-only/client-only.component'

import Header from "../components/header/header.component"
import SocialLinks from '../components/social-links/social-links.component'
import {COLORS} from '../constants'

import "./layout.css"

const ContactButton = styled(Link)`
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid ${COLORS.randomColor};
position: fixed;
right: 30px;
bottom: 30px;
color: ${({theme}) => theme.text};
font-size: 25px;
text-decoration: none;
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
color: ${({theme}) => theme.text};

  @media(max-width: 700px) {
    flex-direction: column;
  }
`

const Container = styled.div`
margin: 0 auto;
max-width: 1020px;
padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const localTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme'); 
  const [theme, setTheme] = useState(localTheme ? COLORS[localTheme] : COLORS['dark']);
  const [isDarkMode, setIsDarkMode] = useState(localTheme === 'dark' || theme === COLORS['dark']);
  const audio = typeof Audio !== 'undefined' && new Audio(soundfile);
 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleTheme = () => {
    if(localTheme === 'dark') {
      typeof window !== 'undefined' && window.localStorage.setItem('theme', 'light');
      setTheme(COLORS['light'])
      setIsDarkMode(false);
    } else {
      typeof window !== 'undefined' && window.localStorage.setItem('theme', 'dark');
      setTheme(COLORS['dark'])
      setIsDarkMode(true)
    }
    audio.play();
  }

  useEffect(() => {
    localTheme && setTheme(COLORS[localTheme])
  }, [])

  return (
  <ClientOnly>
    <ThemeProvider theme = {theme}>
      <GlobalStyle theme = {theme}/>
      <Header
        theme = {theme}
        isDarkMode = {isDarkMode}
        handleClick = {toggleTheme} 
        siteTitle={data.site.siteMetadata.title} />

        <Container>
        <main>{children}</main>
        {
          typeof window !== 'undefined' && window.location.pathname !== '/contact' &&
          <ContactButton to = '/contact'><FontAwesomeIcon icon={faEnvelope} /></ContactButton>
        }
        <Footer theme = {theme}>
          <SocialLinks />
          <div className="copyright">
              © {new Date().getFullYear()}, Made with love by Cassie Rossall
          </div>
        </Footer>
      </Container>
    </ThemeProvider>
    </ClientOnly>
    )
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 200;
  }

  :root {
    --saturation: 88%;
    --lightness: 70%;
    --shadow: -3px 0px 10px -2px rgba(0,0,0,0.14);
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.background};
  }

  main {
    padding: 50px 0;
  }

  a {
    color: ${({theme}) => theme.text};
    text-decoration: none;
  }
`
