import axios from 'axios';

import BASE_URL from '../config';

const processSearchList = async searchTerm => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: searchTerm
    }
  });

  return response.data;
};

export default processSearchList;
