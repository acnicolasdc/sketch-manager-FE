import React from 'react';
import Ticket from '../../modules/Ticket';
import Layout from '../../components/Layout'
import { TicketSection } from './Ticket.style';
import {Title} from './Ticket.style'
import Header from '../../components/Header/index';

const TicketPage = () => {
    return (
            <TicketSection>
                <Header/>
                <Layout>
                        <Title>Please enter your job ticket number</Title>
                    <Ticket/>
                </Layout>
            </TicketSection>
    )
}

export default TicketPage
