import styled from 'styled-components';

export const DrawerContainer = styled.div`
    display: flex;
    flex-flow: column;
    background-color: #F9F9F9;
    
`;
export const DrawerContent = styled.div`
    display: flex;
    position:relative;
    flex-flow: row;
    background-color: #F9F9F9;
    
`;

export const ContainerNav = styled.div`
    ${'' /* border: 1px solid red; */}
    

`;


export const OptionHeader = styled.div`
    height:40px; 
    width:100%; 
    background-Color:#FFF; 
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: Space-Between;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 4px;

`;

export const ContainerHeader = styled.div`
    height:40px; 
    background-Color:#FFF; 
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
`;

export const LabelStyle = styled.label`
    height:40px;
    min-width:400px;
    display: flex;
    align-items:center;
    Justify-content:flex-start;
    padding-left: 15px;
    
`;

