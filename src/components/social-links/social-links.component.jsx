import React from 'react'

import {SocialIconsContainer, SocialLink} from './social-links.styles'

const LinkIcon = ({href, icon}) => (
  <SocialLink to = {href}><i className={icon}></i></SocialLink>
)

const LINKS = [
  {
    href: '/blog',
    icon: 'fas fa-pencil-alt'
  },
  {
    href: '/blog',
    icon: 'fab fa-twitter'
  },
  {
    href: '/blog',
    icon: 'fab fa-github'
  },
  {
    href: '/blog',
    icon: 'fab fa-codepen'
  },
  {
    href: '/blog',
    icon: 'fab fa-linkedin'
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