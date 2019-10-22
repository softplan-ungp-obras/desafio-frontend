import processSearchList from '../api/processSearchList/processSearchList';

export const GET_PROCESS_LIST = 'GET_PROCESS_LIST';

const getProcessList = data => {
  return {
    type: GET_PROCESS_LIST,
    data
  };
};

export const handleGetProcessList = searchTerm => {
  return async dispatch => {
    const response = await processSearchList(searchTerm);
    return dispatch(getProcessList(response));
  };
};
