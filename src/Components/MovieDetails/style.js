import styled from 'styled-components';


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
    color: white;
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



// .movieDetails
// {
//     min-height: 70vh;
//     color: white;
//     padding-top: 50px;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }

// p{
//     width: 60vw;
//     justify-content: center;
//     margin: 20px auto;
// }

// .fullscreen{
//     position: absolute;
//     top: 0;
//     left: 50vw;
//     transform: translatex(-50%);
//     pointer-events: none;

//     opacity: 0;
//     width: 0;
// }

// .smaller{
//     opacity: 1;
//     width: 154px;
// }

// @media (min-width: 560px)
// {
//     .fullscreen{
//         opacity: 0.2;
//         width: 1280px;
//     }
//     .smaller{
//         opacity: 0;
//         width: 0;
//     }
// }