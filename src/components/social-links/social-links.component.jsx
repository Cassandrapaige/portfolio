import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import {SocialIconsContainer, SocialLink} from './social-links.styles'

const LinkIcon = ({href, icon}) => (
  <SocialLink to = {href}><FontAwesomeIcon icon={icon} /></SocialLink>
)

const LINKS = [
  {
    href: '/blog',
    icon: faPencilAlt
  },
  {
    href: '/blog',
    icon: faTwitter
  },
  {
    href: '/blog',
    icon: faGithub
  },
  {
    href: '/blog',
    icon: faCodepen
  },
  {
    href: '/blog',
    icon: faLinkedin
  },
]

const SocialLinks = () => {
    return (
        <SocialIconsContainer>
          {
            LINKS.map(link => (
              <LinkIcon href = {link.href} icon = {link.icon}/>
            ))
          }
        </SocialIconsContainer>
    )
}

export default SocialLinks