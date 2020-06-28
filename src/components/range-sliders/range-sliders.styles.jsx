  import styled from 'styled-components'
import { COLORS } from '../../constants'

  export const FormGroup = styled.div`
  width: 100%;
  overflow: hidden;
  
  input[type=range] {
    -webkit-appearance: none;
    position: relative;
    width: 100%;
    display: -webkit-box;   
    display: -moz-box; 
    display: -ms-flexbox; 
    display: -webkit-flex; 
    display: flex;   
    margin: 10px 0;
    background: none;
  }

  input[type=range]:focus {
      outline: none;
  }

  input[type=range]::-moz-focus-outer {
    border: 0;
  }
  
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 15px;
    border: none;
    border-radius: 3px;
    background: ${({theme}) => theme.contrast};
  }
  
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 25px;
    width: 25px;
    background: ${COLORS.randomColor()};
    margin-top: -5px;
    cursor: pointer;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 15px;
    border: none;
    border-radius: 3px;
    background: ${({theme}) => theme.contrast};
  }
  
  input[type=range]::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    background: ${COLORS.randomColor()};
    margin-top: -5px;
    cursor: pointer;
    border-radius: 0;
  }
  `


