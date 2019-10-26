import processSearchList from '../../api/processSearchList/processSearchList';
import createProcess from '../../api/createProcess/createProcess';

export const GET_PROCESS_LIST = 'GET_PROCESS_LIST';
export const ADD_PROCESS = 'ADD_PROCESS';
export const LOADING_PROCESS = 'LOADING_PROCESS';

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

const isProcessQueryLoading = (isLoading = false) => {
  return {
    type: LOADING_PROCESS,
    isLoading
  };
};

export const handleAddProcessList = process => {
  return async dispatch => {
    return createProcess(process)
      .then(() => {
        dispatch(addProcessOnList(process));
      })
      .catch(err => console.log(`there is an error on api: ${err}`));
  };
};

export const handleGetProcessList = searchTerm => {
  return async dispatch => {
    dispatch(isProcessQueryLoading(true));
    return processSearchList(searchTerm).then(result => {
      dispatch(getProcessList(result));
      dispatch(isProcessQueryLoading(false));
    });
  };
};
