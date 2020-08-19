import styled from 'styled-components';


export const GeneralSection = styled.div`

  margin: 0;
  font-family: "Muli", sans-serif;
  background: linear-gradient(#FFF, #219bd5) fixed;
  display: flex;
  flex-direction: column;
  min-height: 100vh;  
  border: 1px solid red;


a {
  color: white;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}
`;


export const TicketSection = styled.section`
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
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: space-around;
  padding: auto;
  color: black;
  min-height: 150px;
  width: 300px;
}

`;

export const FormSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;