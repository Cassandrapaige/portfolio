import styled from 'styled-components'

export const ProjectContainer = styled.div`
display: grid;
-ms-grid-template-columns: 1fr 1fr;
grid-template-columns: repeat(2, 1fr);
padding: 100px 0px;
margin-right: 1rem;
margin-bottom: 1rem;

  @supports (grid-gap: 1rem) {
      grid-gap: 1rem;
      margin-right: 0;
      margin-bottom: 0;
  }

@media(max-width: 700px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    padding: 50px 0;
}
`