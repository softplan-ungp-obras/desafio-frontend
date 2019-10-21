import mockAxios from 'axios';
import processSearchList from './processSearchList';

const mockResult = [
  {
    id: '21a200b4-0812-4343-8d60-5941407a32b4',
    numero: 'SOFT 2019/00001',
    entrada: '21/09/2018',
    interessados: ['João da Silva'],
    descricao:
      'Solicitação de licença-prêmio referente ao período 02/06/2015 - 01/06/2018',
    assunto: 'Licença'
  },
  {
    id: '70f6cfcb-099b-474f-8025-914a113d4ec7',
    numero: 'SOFT 2019/00004',
    entrada: '21/10/2019',
    interessados: ['Edmilson Cherem'],
    descricao: 'Solicitação de licença-prêmio',
    assunto: 'Licença'
  }
];

describe('Get search list from api', () => {
  it('should return a list of process', async () => {
    // given
    const searchTerm = 'licenca';
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResult
      })
    );

    // when
    const response = await processSearchList(searchTerm);

    // then
    expect(response).toEqual(mockResult);
  });
});
