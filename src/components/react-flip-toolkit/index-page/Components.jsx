import styled from 'styled-components'

export const CardGrid = styled.ul`
    dispaly: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem; 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
    > li {
        display: block;
        margin-bottom: 0;
        height: auto;
    }
`

