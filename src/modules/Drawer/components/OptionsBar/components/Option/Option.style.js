import styled from 'styled-components';

export const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    width:80px;
    padding:5px;
    :hover{
        background-color:#0793D0
    }
`;

export const OptionLabel = styled.label`
    margin-top:3px;
    color:${props => props.theme.colors.white};
`;