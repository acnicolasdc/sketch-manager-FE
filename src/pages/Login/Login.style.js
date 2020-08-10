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

// export const HeaderSection = styled.header`
//   align-items: center;
//   color: white;
//   display: flex;
//   height: 100px;
//   justify-content: space-between;
//   top: 0px;
//   bottom: 0px;
//   width: 100%;

// .header__img {
// margin-left: 30px;
// width: 200px;
// }
// `;

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

.login__container--form-input::placeholder{
    color:white;
}

  .login__container--form-input {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid white;
  font-size: 16px;
  font-family: "Muli", sans-serif;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background: none;
  width: 100%;
  margin-bottom: 35px;
  height: 50px;
}

 .button{
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid white;
  border-radius: 25px;
  color: white;
  font-family: "Muli", sans-serif;
  font-size: 16px;
  height: 50px;
  margin-bottom: 20px;
  outline: none;
  padding: 0px 20px;
  width: 70%;
  margin: auto 25px;
  letter-spacing: 1px;
}

.button__container--details{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}


.login__container--image:hover{
  animation-name: pulse;
  animation-duration: 0.6s;
}


.button:hover {
  cursor: pointer;
  background-color: transparent;
  border-color: #fff;
  transition: all .1s ease-in-out;
}
`;

// export const FooterSection = styled.footer`
    
//   display: flex;
//   align-items: center;
//   Justify-content: flex-start;
//   height: 100px;
//   width: 100%;
//   ${'' /* padding-left: 25px; */}


//  a {
//   color: white;
//   cursor: pointer;
//   font-size: 14px;
//   padding-left: 30px;
//   text-decoration: none;
// }

//  a:hover {
//   text-decoration: underline;
// }
// `;