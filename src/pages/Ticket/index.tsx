import React from 'react';
import Ticket from '../../modules/Ticket/components/index';
import Layout from 'modules/Layout/components';
import { TicketSection } from 'pages/Ticket/Ticket.style';


const TicketPage = () => {
    return (
            <TicketSection>
                <Layout children = {<Ticket/>}/>
            </TicketSection>
    )
}

export default TicketPage
