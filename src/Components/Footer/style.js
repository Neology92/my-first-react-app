import styled from 'styled-components';

const FooterWrap = styled.div`
{
    margin-top: 7rem;
    height: 100px;
    width: 100%;
    background-color: #1c1e20;
    border-top: 1px solid rgb(119, 119, 119);
    color: rgb(119, 119, 119);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1rem;

    >div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
}
`;

export default FooterWrap;