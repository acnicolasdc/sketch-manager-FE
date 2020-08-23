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
    position: fixed;
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
`;