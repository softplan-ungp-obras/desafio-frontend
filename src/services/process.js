import axios from 'axios';

export default {
  getProcesses: ({ page = 0 }) =>
    axios.get('/vehicles/table', { params: { page } }),  
};
