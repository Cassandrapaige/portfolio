import React, {useState} from "react"

import ColorfulTitle from '../colorful-title/colorful-title.component'

import {ContactSection,
        FormGroup,
        Label,
        TextArea,
        IntroParagraph,
        SubmitButton,
        CheckboxContainer,
        ConfirmationMessage,
        CustomCheckbox
    } from './contact-form.styles'

export const ContactForm = () => {
    const [name, setName] = useState('');

    const handleChange = event => {
        event.preventDefault();
        setName(event.target.value);
    }

    return (
        <ContactSection id="contact">
        <div class="form_header">
            <ColorfulTitle title = 'Say Hello.'></ColorfulTitle>
            <IntroParagraph>I'm currently looking for job opportunities in Canada or abroad. If you'd like to know more about me or get a copy of my resume, send me a message! Otherwise, say hi on Twitter! I promise I'm nice.</IntroParagraph>
        </div>
        <form class ="contact_form" name="contact" method="POST" netlify netlify-honeypot="bot-field">
        <div className = "contact_form_info">
            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange = {event => handleChange(event)}
                    required
                    />
            </FormGroup>
           <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    required
                    />
           </FormGroup>
           <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <input 
                    type="text" 
                    name = "subject" 
                    id="email" 
                    required
                    />
            </FormGroup>
        </div>
        <FormGroup>
            <Label htmlFor="message">Message.</Label>
            <TextArea name= "message" id="message" required></TextArea>
        </FormGroup>

        <CheckboxContainer>
            <input type="checkbox" checked = "true" required/>
            <CustomCheckbox/>
            <ConfirmationMessage>I{name && `, ${name},`} promise to only send nice messages.</ConfirmationMessage>
        </CheckboxContainer>
        <SubmitButton type= "submit">Send Message</SubmitButton>
    </form> 
    </ContactSection>
    )
}

export default ContactForm