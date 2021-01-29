import axios from 'axios';

import BASE_URL from '../config';

const deleteProcess = async processId => {
  const response = await axios.delete(`${BASE_URL}/${processId}`);

  return response.data;
};

export default deleteProcess;
