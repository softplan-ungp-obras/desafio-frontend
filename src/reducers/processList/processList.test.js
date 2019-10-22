import processList from './processList';
import { GET_PROCESS_LIST } from '../../actions/getProcessList';

const mockProcessList = [
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

describe('Process list reducer', () => {
  it('should return the initial state', () => {
    // given
    const expectedResult = { data: [] };

    // then
    expect(processList(undefined, {})).toEqual(expectedResult);
  });

  it('should return receive the process list', () => {
    // given
    const getProcessList = data => {
      return {
        type: GET_PROCESS_LIST,
        data
      };
    };
    const expectedResult = { data: mockProcessList };

    // then
    expect(processList({}, getProcessList(mockProcessList))).toEqual(
      expectedResult
    );
  });
});
