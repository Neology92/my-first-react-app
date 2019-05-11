import styled from 'styled-components';
import {fontColor} from 'Utils';


export const MovieWrapper = styled.div`

    padding-top: 50vh;
    margin-bottom: 20vh;
    position: relative;
    background: url( ${ props => props.backdrop } ) no-repeat;
    background-size: cover;
    background-position-x: center;

    @media (max-width: 545px)
    {
        padding: 0;
        margin-top: 10vh;
        background: transparent;
    }
`;

export const MovieInfo = styled.div`

    position: absolute;
    text-align: left;
    color: ${fontColor};
    padding: 2rem 10%;
    display: flex;

    >div{
        margin-left: 20px;
    }

    >img{
        margin-top: -5rem;
    }

    @media (max-width: 545px)
    {        
        position: static;
        flex-direction: column;   
        text-align: center;
        >img
        {
            margin-top: .2rem;
            align-self: center;
        }
    }
`;
