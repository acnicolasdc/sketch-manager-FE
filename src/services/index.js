import servicesManager from '../utils/servicesManager';
import Auth from './auth.service';

const axios = servicesManager.api();

export const auth = new Auth(axios);
