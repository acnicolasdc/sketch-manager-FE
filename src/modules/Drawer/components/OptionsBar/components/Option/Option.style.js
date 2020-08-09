import styled from 'styled-components';

export const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    width:80px;
    padding:5px;
    background-color:'#FFF';
    :hover{
        background-color:${props => props.theme.colors.buttonMinimalHover}
    }
`;

export const OptionLabel = styled.label`
    margin-top:3px;
    color:${props => props.theme.colors.mono500};
`;