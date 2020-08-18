import styled from 'styled-components';


export const GeneralSection = styled.div`

  margin: 0;
  font-family: "Muli", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;  



a {
  color: white;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}
`;
export const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 30px;
  min-height: calc(100vh - 200px);

.login__container{
  font-family: "Muli", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 200px);
  justify-content: space-around;
  padding: auto;
  color: black;
  min-height: 150px;
  width: 300px;
}
`;

export const LayoutStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100vh - 300px);
  margin-top:90px;
  

  .image__container img{
    -webkit-box-shadow: 10px 10px 34px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 34px -9px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 34px -9px rgba(0,0,0,0.75);
    
  }
`;

export const FormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100vh - 300px);
  margin-top:auto;
`; 