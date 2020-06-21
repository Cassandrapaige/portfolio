import React from 'react'

import {Title, Letter} from './colorful-title.styles'

const ColorfulTitle = ({title,isFullWord, ...props}) => {
    return (
          <Title>
            {
                title.split(' ').map(words => (
                    <Title>
                        {
                            words.split('').map((word, index) => (
                                <Letter
                                    {...props}
                                    key = {index}
                                    data-char={index} 
                                    style = {{'--char-index': index}}>
                                        {word}
                                </Letter>
                            ))
                        }
                    </Title>
                ))
            }
        </Title>
    )
}

export default ColorfulTitle;
