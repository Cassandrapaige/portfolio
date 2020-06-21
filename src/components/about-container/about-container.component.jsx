import React from 'react'
import image from '../../images/me.png'

import {AboutMeContainer, 
        ImageContainer, 
        Bio, 
        Title,
        Paragraph} 
        from './about-container.styles'

const AboutContainer = () => {
    return (
    <AboutMeContainer>
        <ImageContainer>
            <img src={image} alt=""/>
        </ImageContainer>
        <Bio>
            <Title>About Me</Title>
            <Paragraph>I’m a naturally curious person. I experimented with a variety of different courses at George Brown College before learning how to code — acting, cooking, baking, photography, wine.. you name it, I probably took a course in it.</Paragraph>
            <Paragraph>It wasn't until I discovered the world of tech that I found something I genuinely love. I'll never forget how excited I was the first time I wrote '99 bottles of beer on the wall' with only 3 lines of code. Like magic.</Paragraph>
            <Paragraph>I spend most of my waking hours in front of the computer, tinkering away at my latest side project or picking up a new skill. I hope to use this passion to contrubute to something truly meaningful one day!</Paragraph>
            <Paragraph>Other than coding, I love being outside in nature. I'm always up for an adventure or doing something that terrifies me (like bungee jumping). I've travelled independently to 29 countries and I really like sandwiches.</Paragraph>
        </Bio>
    </AboutMeContainer>
    )
}

export default AboutContainer