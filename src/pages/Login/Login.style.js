import styled from 'styled-components';


export const GeneralSection = styled.div`
  margin: 0;
  font-family: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items:center;
  min-height: 100vh; 
a {
  color: white;
  cursor: pointer;
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
}
`;



