import axios from 'axios';

const BASE_URL = 'http://localhost:3002/processo';

const processSearchList = async searchTerm => {
  const response = await axios.get(BASE_URL, {
    params: {
      query: searchTerm
    }
  });

  return response.data;
};

export default processSearchList;
