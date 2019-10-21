export const GET_PROCESS_LIST = 'GET_PROCESS_LIST';

export function getAllCategoriesPosts(processList) {
  return {
    type: GET_PROCESS_LIST,
    processList
  };
}
