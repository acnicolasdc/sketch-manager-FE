export default function (axiosInstance) {
  return {
    validTicket: number => {
      return axiosInstance.post('/tickets/validTicket', { number });
    },
  };
}
