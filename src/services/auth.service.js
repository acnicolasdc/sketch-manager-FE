export default function (axiosInstance) {
  return {
    login: (username, password) => {
      return axiosInstance.post('/sessions/login', {
        username,
        password
      });
    },
  };
}
