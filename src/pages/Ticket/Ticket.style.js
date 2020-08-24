import styled from 'styled-components';




export const TicketSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding:  50px 30px 50px 30px;
  min-height: calc(100vh - 200px);
  
  

.ticket__container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: auto;
  color: black;
  min-height: 150px;
  max-width: 300px;
  
}`;

export const Title = styled.h5`
margin-bottom:15px;
font-family: UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
max-width: 300px;
font-size: 15px;
color: black;
letter-spacing:0.5px;
font-weight: bold;
`;
