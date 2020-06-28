import styled from 'styled-components'
import {COLORS, HUES} from '../../constants'

export const ContactSection = styled.section`
border: 1px solid ${COLORS.randomColor()};
padding: 50px;
border-radius: 10px;
box-shadow: var(--shadow);
background: ${props => props.theme.complimentary};

@media(max-width: 700px) {
    padding: 20px;
}
`

export const FormGroup = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
flex-direction: column;
margin: 5px 0;

input[type='text'] {
    padding: 4px 0;
    border: none;
    color: ${props => props.theme.text};
    border-bottom: ${props => `1px solid ${props.theme.text}`};
    font-size: 18px;
    background: transparent;
    outline: none;
    border-radius: 0;
}

input[type='text']:focus {
    outline: none;
}
`

export const Label = styled.label`
margin-top: 10px;
font-size: 18px;
`

export const TextArea = styled.textarea`
background: ${props => props.theme.complimentary};
border: ${props => `1px solid ${props.theme.text}`};
min-height: 150px;
min-width: 100%;
max-width: 100%;
color: ${props => props.theme.text};
outline: none;
margin-top: 10px;
padding: 10px;
font-size: 18px;
border-radius: 0;
`

export const IntroParagraph = styled.p`
text-align: center;
font-size: 20px;
padding: 15px;

@media(max-width: 700px) {
    padding: 15px 0px;
    font-size: 16px;
}
`

export const SubmitButton = styled.button`
padding: 15px;
background: ${COLORS.randomColor()};
font-size: 18px;
font-weight: 300;
border: none;
margin-top: 20px;
width: 100%;
cursor: pointer;
outline: none;
`

export const CheckboxContainer = styled.div`
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
align-items: center;

input[type='checkbox'] {
appearance: none;
display: none;
}
`

export const ConfirmationMessage = styled.p`
font-family: 'Nothing You Could Do', cursive;
font-size: 23px;
padding: 10px;

@media(max-width: 700px) {
    font-size: 16px;
}

`

export const CustomCheckbox = styled.div`
width: 25px;
height: 25px;
position: relative;
display: -webkit-box;   
display: -moz-box; 
display: -ms-flexbox; 
display: -webkit-flex; 
display: flex;   
justify-content: center;
align-items: center;
border: 1px solid ${props => props.theme.text};

&:before {
position: absolute;
content: '';
width: 25%;
height: 70%;
border-right: 2px solid ${props => props.theme.text};
border-bottom: 2px solid ${props => props.theme.text};
-webkit-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
}
`