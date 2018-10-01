import axios from 'axios';

const URL = 'http://localhost:3002/processo';

/**
 * Busca todos processos que se encaixam na query informada.
 *
 * @param {String} query
 * @returns Array de Processsos
 */
export const BuscaProcesso = (query) => {
  return axios
    .get(`${URL}?q=${query}`)
    .then((res) => {
      if (res && res.data) return res.data;
      return {};
    })
    .catch((err) => {
      throw err;
    });
};

/**
 * Busca detalhes do Processo informado,
 * se o processoId for null ou undefined
 *
 * @param {String} processoId
 * @returns Processos
 */
export const DetalheProcesso = (processoId) => {
  return axios
    .get(`${URL}/${processoId ? processoId : ''}`)
    .then((res) => {
      if (res && res.data) return res.data;
      return [];
    })
    .catch((err) => {
      throw err;
    });
};

/**
 * Salva as alterações do processo
 *
 * @param {Object} processo
 * @returns boolean
 */
export const SalvaProcesso = (processo) => {
  return axios
    .post(URL, JSON.stringify(processo), {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    })
    .then((res) => {
      if (res) return true;
      return false;
    })
    .catch((err) => {
      throw err;
    });
};

/**
 * @param {String} processoId
 * @returns boolean
 */
export const ApagaProcesso = (processoId) => {
  return axios
    .delete(`${URL}/${processoId}`)
    .then((res) => {
      if (res) return true;
      return false;
    })
    .catch((err) => {
      throw err;
    });
};
