import React from "react"
import styled from 'styled-components'

import {PROJECT_DATA} from '../constants'

import Layout from "../components/layout"
import SEO from "../components/seo"

import ColorfulTitle from '../components/colorful-title/colorful-title.component'
import SocialLinks from "../components/social-links/social-links.component"
import ProjectsContainer from "../components/projects-container/projects-container.component"
import TechStackContainer from "../components/tech-container/tech-container.component"
import AboutContainer from "../components/about-container/about-container.component"
import RangeSliders from "../components/range-sliders/range-sliders.component"
import ContactForm from "../components/contact-form/contact-form.component"

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    @media(max-width: 900px) {
        padding: 0px;
      }
`

export const Title = styled.h2`
    text-align: center;
    padding: 15px 10px 25px 10px;
    font-size: 1.9em;

    @media(max-width: 700px) {
        font-size: 1.4em;
    }
`

export default () => {
    const tech = PROJECT_DATA.map(project => project.tech);
    const techArr = tech.reduce((a, b) => a.concat(b))
                    .reduce((unique, item) => 
                    unique.includes(item) ? unique : [...unique, item], [])
    
  return (
  <Layout>
    <SEO title="Home" />
    <HeaderContainer>
        <ColorfulTitle title = "Hi, my name's Cassie"/>
        <Title>&& I like making things with code.</Title>
        <SocialLinks />
    </HeaderContainer>
    <RangeSliders />
    <AboutContainer/>
    <ColorfulTitle title = "My Projects"/>
    <Title>Check out some of my most recent creations</Title>
    <TechStackContainer isCentered TECH = {techArr} />
    <ProjectsContainer PROJECTS = {PROJECT_DATA}/>
  </Layout>
)}
