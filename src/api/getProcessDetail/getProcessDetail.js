import axios from 'axios';

import BASE_URL from '../config';

const getProcessDetail = async processId => {
  const response = await axios.get(`${BASE_URL}/${processId}`);

  return response.data;
};

export default getProcessDetail;
