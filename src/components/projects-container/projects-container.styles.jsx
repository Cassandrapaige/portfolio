import styled from 'styled-components'

export const ProjectContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
padding: 100px 0px;

@media(max-width: 700px) {
    grid-template-columns: 1fr;
}
`