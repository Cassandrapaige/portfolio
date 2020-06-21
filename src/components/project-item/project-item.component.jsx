import React from 'react'

import {ProjectContainer, 
        ProjectTitle, 
        ProjectDescription, 
        LinksContainer,
        ImageContainer,
        ProjectInfo,
        ProjectLink} 
        from './project-item.styles'

import TechStackContainer from '../tech-container/tech-container.component'

const ProjectItem = ({item, ...props}) => {

    const {image, title, description, source, demo, tech} = item;

    return (
    <ProjectContainer {...props}>
        <ImageContainer>
            <img src={image} alt={title} />
        </ImageContainer>
        <ProjectInfo>
        <div className="info">
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription> 
            <TechStackContainer smallText TECH = {tech}>
                <h4 style ={{width: '100%', fontWeight: 500, fontSize: '1.2em', padding: '15px 0 10px 0'}}>Tech Used:</h4>
            </TechStackContainer>  
            <LinksContainer>
                <ProjectLink href = {source} {...props}>
                    <i className="fab fa-github"></i>
                    Source
                </ProjectLink>
                <ProjectLink href = {demo} {...props}>
                    <i className="fas fa-laptop-code"></i>
                    Live Demo
                </ProjectLink>
            </LinksContainer>            
        </div>  
        </ProjectInfo>
    </ProjectContainer>
    )
}

export default ProjectItem
