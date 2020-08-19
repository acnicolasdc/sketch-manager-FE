import React from 'react'
import {GeneralSection} from './Ticket.style';
import {LoginSection} from './Ticket.style';
import Ticket from '../../modules/Ticket/components/index'


const index = () => {
    return (
            <LoginSection> 
                <Ticket/>
            </LoginSection>
    )
}

export default index
