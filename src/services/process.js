import api from "services/api";

const PROCESS_BASE_URL = "/processo";

export default {
  getProcesses: searchText =>
    api.get(PROCESS_BASE_URL, { params: { q: searchText } }),
  getProcessById: processId => api.get(`${PROCESS_BASE_URL}/${processId}`),
  saveProcess: _process_ => api.post(PROCESS_BASE_URL, _process_),
  deleteProcess: processId => api.delete(`${PROCESS_BASE_URL}/${processId}`)
};
