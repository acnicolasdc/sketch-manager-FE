import { validTicketServices } from 'services';
import {
  validticketRequest,
  validticketSuccess,
  validticketFailure,
} from 'redux/ducks/validTicket.duck';

export const validTicketServicesRequest = (dispatch, { number }) => {
  dispatch(validticketRequest());
  return validTicketServices
    .validTicket(number)
    .then(({ data }) => {
      dispatch(validticketSuccess(data));
      return data;
    })
    .catch(({ message }) => {
      dispatch(validticketFailure());
      return { access_granted: false, error: message };
    });
};
