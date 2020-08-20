import React from 'react';
import Ticket from '../../modules/Ticket';
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
