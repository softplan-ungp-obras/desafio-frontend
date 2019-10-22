import processSearchList from '../api/processSearchList/processSearchList';
import createProcess from '../api/createProcess/createProcess';

export const GET_PROCESS_LIST = 'GET_PROCESS_LIST';
export const ADD_PROCESS = 'ADD_PROCESS';

const getProcessList = data => {
  return {
    type: GET_PROCESS_LIST,
    data
  };
};

const addProcessOnList = process => {
  return {
    type: ADD_PROCESS,
    process
  };
};

export const handleAddProcessList = process => {
  return async dispatch => {
    const response = await createProcess(process);
    // eslint-disable-next-line no-console
    if (response !== 201) return console.log('there is an error on api');
    return dispatch(addProcessOnList(process));
  };
};

export const handleGetProcessList = searchTerm => {
  return async dispatch => {
    const response = await processSearchList(searchTerm);
    return dispatch(getProcessList(response));
  };
};
