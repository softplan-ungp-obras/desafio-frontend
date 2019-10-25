import processDetail from './processDetail';
import { GET_PROCESS_DETAIL } from '../../actions/getProcessDetail/getProcessDetail';

const mockProcessDetail = {
  id: 'c6b01d83-5eb3-4472-9f42-a9ee7245e490',
  numero: 'SOFT 2019/00001',
  entrada: '25/09/2018',
  interessados: ['João da Silva'],
  descricao:
    'Solicitação de licença-prêmio referente ao período 02/06/2015 - 01/06/2018',
  assunto: 'Licença'
};

describe('Process detail reducer', () => {
  it('should return the initial state', () => {
    // given
    const expectedResult = {
      data: {
        id: '',
        numero: '',
        entrada: '',
        interessados: [],
        descricao: '',
        assunto: ''
      }
    };

    // then
    expect(processDetail(undefined, {})).toEqual(expectedResult);
  });

  it('should return the process detail', () => {
    // given
    const getProcessDetail = data => {
      return {
        type: GET_PROCESS_DETAIL,
        data
      };
    };

    const expectedResult = { data: mockProcessDetail };

    // then
    expect(processDetail({}, getProcessDetail(mockProcessDetail))).toEqual(
      expectedResult
    );
  });
});
