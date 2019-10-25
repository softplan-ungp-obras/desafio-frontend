import getProcessDetail from '../../api/getProcessDetail/getProcessDetail';

export const GET_PROCESS_DETAIL = 'GET_PROCESS_DETAIL';

const getProcessDetailAction = data => {
  return {
    type: GET_PROCESS_DETAIL,
    data
  };
};

export const handleGetProcessDetail = processId => {
  return async dispatch => {
    return getProcessDetail(processId).then(result => {
      dispatch(getProcessDetailAction(result));
    });
  };
};
