import axios from 'axios';
const BASE_URL = 'https://sketch-manager-be.herokuapp.com';
const CONTENT_TYPE = 'application/json';

class ServicesManager {
  constructor() {
    this.init();    
  }

  init() {
    this.setHeader();    
    this.setAuthorization();
  }
  api(url = BASE_URL) {
    this.setBaseUrl(url);
    return axios;
  }
  create(properties = {}) {
    return axios.create(properties);
  }
  setBaseUrl(url = BASE_URL) {
    axios.defaults.baseURL = url;
  }

  setHeader(contentType = CONTENT_TYPE) {
    axios.defaults.headers.post['Content-Type'] = contentType;
  }
  setAuthorization(token) {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `${token}`;
    }
  }
  deleteInterceptor(interceptor) {
    axios.interceptors.request.eject(interceptor);
  }
}

export default new ServicesManager();
