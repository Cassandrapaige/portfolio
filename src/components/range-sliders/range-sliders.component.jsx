import React, {useState, useEffect} from 'react'

import {FormGroup} from './range-sliders.styles'

const RangeSliders = () => {
    const [saturation, setSaturation] = useState(null)
    const [lightness, setLightness] = useState(null)

    const setColorProperties = () => {
        const style = typeof window !== 'undefined' && window.getComputedStyle(document.body);
        setSaturation(style.getPropertyValue('--saturation'));
        setLightness(style.getPropertyValue('--lightness'));
    }

    useEffect(() => {
        setColorProperties()
    }, [saturation, lightness])

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        document.documentElement.style.setProperty(`--${name}`, `${value}%`);
        setColorProperties()
    }

    return (
    <div className="controls">
        <FormGroup>
            <input 
                type="range" 
                name='saturation' 
                min = '1' 
                max='100' 
                onChange = {handleChange}
                value = {saturation !== null ? saturation.replace('%', '').trim() : ''}
                />
        </FormGroup>

        <FormGroup>
            <input 
                type="range" 
                name='lightness' 
                min = '1' 
                max='100' 
                onChange = {handleChange}
                value = {lightness !== null ? lightness.replace('%', '').trim() : ''}
                />
        </FormGroup>
    </div>
    )
}

export default RangeSliders