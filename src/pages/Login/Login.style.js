import styled from 'styled-components';


export const GeneralSection = styled.div`

  margin: 0;
  font-family: "Muli", sans-serif;
  background: linear-gradient(#FFF, #219bd5) fixed;
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

export const TitleSection = styled.section`
    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -6px;

.title__text{
    text-shadow:1px 1px 2px #fff;
    color: #219bd5;
    font-size: 60px;
    margin: 50px 0;
    ${'' /* top: 50%; */}
    opacity: 0.5;
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
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: space-around;
  padding: auto;
  color: black;
  min-height: 150px;
  width: 300px;
}
.login__container--title{
  margin: 0;
  padding:0;
}
`;

export const FormSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;