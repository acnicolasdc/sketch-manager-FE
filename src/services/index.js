import servicesManager from '../utils/servicesManager';
import Auth from './auth.service';
import ValidTicket from './ticket.service';

const axios = servicesManager.api();

export const auth = new Auth(axios);
export const validTicketServices = new ValidTicket(axios);
