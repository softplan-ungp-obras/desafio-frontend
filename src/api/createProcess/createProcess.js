import axios from 'axios';

import BASE_URL from '../config';

const createProcess = async process => {
  const config = {
    'Content-Type': 'application/json'
  };
  const response = await axios.post(BASE_URL, { ...process }, config);

  return response.status;
};

export default createProcess;
