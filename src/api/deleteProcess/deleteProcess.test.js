import mockAxios from 'axios';
import deleteProcess from './deleteProcess';

import BASE_URL from '../config';

const mockResult = {
  id: 'c6b01d83-5eb3-4472-9f42-a9ee7245e490',
  numero: 'SOFT 2019/00001',
  entrada: '25/09/2018',
  interessados: ['João da Silva'],
  descricao:
    'Solicitação de licença-prêmio referente ao período 02/06/2015 - 01/06/2018',
  assunto: 'Licença'
};

describe('Delete process from api', () => {
  it('should return the deleted process', async () => {
    // given
    const processId = 'c6b01d83-5eb3-4472-9f42-a9ee7245e490';
    mockAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResult
      })
    );

    // when
    const response = await deleteProcess(processId);

    // then
    expect(response).toEqual(mockResult);
    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(mockAxios.delete).toHaveBeenCalledWith(`${BASE_URL}/${processId}`);
  });
});
