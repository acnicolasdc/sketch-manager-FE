import styled from 'styled-components';


export const GeneralSection = styled.section`

  margin: 0;
  font-family: "Muli", sans-serif;
  min-height: 100vh; 
  min-width: 100vh;
a {
  color: white;
  cursor: pointer;
  text-decoration: none;
}
`;

export const LogoContainer = styled.section`
    background-color: white;
    padding:0;
    object-fit: cover;
    height: 70px;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 4px;    
`;

export const ImgStyle = styled.img`
    padding:0px 5px;
    height: 50px;
    object-fit:scale-down;
    width:225px;
    height: 39px;
`;

export const ContainerPage = styled.section`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    height: calc(100vh - 70px);
    padding: auto 0;
`;

export const LeftDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width: 500px;
    height: inherit;
    margin-left:20px;
    padding: 10px;
h1{
    line-height: 44px;
    font-weight: 500;
    font-size: 36px;
    font-family: UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    display:b
}
h3{
    padding: 30px 0;
    line-height: 24px;
    font-weight: normal;
    font-size: 16px;
    font-family: UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
`;

export const RigthDiv = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 700px;
    height: inherit;
    padding: auto;

`;

export const ImgNotFound = styled.img`
    padding:0px 30px;
    height: inherit;
    object-fit:scale-down;
`;