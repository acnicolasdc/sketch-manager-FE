import React from 'react';
<<<<<<< HEAD
import Ticket from '../../modules/Ticket';
=======
import Ticket from '../../modules/Ticket/';
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
import Layout from '../../components/Layout'
import { TicketSection } from './Ticket.style';


const TicketPage = () => {
    return (
            <TicketSection>
                <Layout children = {<Ticket/>}/>
            </TicketSection>
    )
}

export default TicketPage
