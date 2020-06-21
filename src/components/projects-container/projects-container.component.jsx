import React from 'react'

import ProjectItem from '../project-item/project-item.component'

import {ProjectContainer} from './projects-container.styles'

const ProjectsContainer = ({PROJECTS}) => {
    return (
        <ProjectContainer>
            {
                PROJECTS.map(project => (
                    <ProjectItem item = {project} key = {project.id}/>
                ))
            }
        </ProjectContainer>
    )
}

export default ProjectsContainer
