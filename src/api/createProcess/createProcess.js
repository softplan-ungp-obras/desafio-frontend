import axios from 'axios';

import BASE_URL from '../config';

const createProcess = async process => {
  const headers = {
    'Content-Type': 'application/json'
  };
  const response = await axios.post(BASE_URL, { ...process }, headers);

  return response.status;
};

export default createProcess;
