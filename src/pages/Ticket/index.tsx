import React from 'react';
import Ticket from '../../modules/Ticket';
import Layout from '../../components/Layout'
import { TicketSection } from './Ticket.style';
import {Title} from './Ticket.style'


const TicketPage = () => {
    return (
            <TicketSection>
                <Layout>
                        <Title>Please introduce your job ticket number</Title>
                    <Ticket/>
                </Layout>
            </TicketSection>
    )
}

export default TicketPage
