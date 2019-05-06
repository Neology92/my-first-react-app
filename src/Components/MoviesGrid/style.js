import styled from 'styled-components';


const MoviesGrid = styled.div`
    margin: 20px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;

    @media (max-width: 930px)
    {   
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 736px)
    {   
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 562px)
    {   
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 388px)
    {   
        grid-template-columns: repeat(1, 1fr);
    }
`;


export default MoviesGrid;
