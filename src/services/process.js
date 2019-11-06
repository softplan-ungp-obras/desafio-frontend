import api from 'services/api';
import { toast } from 'react-toastify';

const PROCESS_BASE_URL = '/processo';

const isResponseStatusOk = response =>
  response && (response.status === 200 || response.status === 201);

export default {
  getProcesses: searchText =>
    api.get(PROCESS_BASE_URL, { params: { q: searchText } }),
  getProcessById: processId => api.get(`${PROCESS_BASE_URL}/${processId}`),
  saveProcess: async _process_ => {
    const response = await api.post(PROCESS_BASE_URL, _process_);
    if (isResponseStatusOk(response)) {
      toast.success('Processo salvo com sucesso!');
    }
    return response;
  },
  deleteProcess: async processId => {
    const response = await api.delete(`${PROCESS_BASE_URL}/${processId}`);
    if (isResponseStatusOk(response)) {
      toast.success('Processo deletado com sucesso!');
    }
    return response;
  },
};
