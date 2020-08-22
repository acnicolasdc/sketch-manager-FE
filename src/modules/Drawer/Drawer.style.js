import styled from 'styled-components';

export const DrawerContainer = styled.div`
    display: flex;
    flex-flow: column;
    background-color: #F9F9F9;
`;
export const DrawerContent = styled.div`
    display: flex;
    flex-flow: row;
    background-color: #F9F9F9;
`;

export const OptionHeader = styled.div`
    height:40px; 
    width:100%; 
    background-Color:#FFF; 
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: Space-Between;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 16px;
`;

export const ContainerHeader = styled.div`
    height:40px; 
    width:100%; 
    background-Color:#FFF; 
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 16px;
`;

export const LabelStyle = styled.label`
    height:40px;
    width:300px;
    border: 1px solid blue;
`;