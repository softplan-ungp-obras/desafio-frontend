import processList from './processList';
import {
  GET_PROCESS_LIST,
  ADD_PROCESS,
  DELETE_PROCESS
} from '../../actions/getProcessList/getProcessList';

const mockProcessList = [
  {
    id: '21a200b4-0812-4343-8d60-5941407a32b4',
    numero: 'SOFT 2019/00001',
    entrada: '21/09/2018',
    interessados: ['João da Silva'],
    descricao:
      'Solicitação de licença-prêmio referente ao período 02/06/2015 - 01/06/2018',
    assunto: 'Licença'
  }
];

describe('Process list reducer', () => {
  it('should return the initial state', () => {
    // given
    const expectedResult = {
      data: [
        {
          descricao: '',
          assunto: '',
          interessados: ['']
        }
      ],
      isProcessQueryLoading: null
    };

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

  it('should add a process on the process list', () => {
    // given
    const addProcessOnList = process => {
      return {
        type: ADD_PROCESS,
        process
      };
    };

    const newProcess = {
      id: '8c44c62f-927a-42e3-976b-8685be15ac74',
      numero: 'SOFT 2019/00005',
      entrada: '22/10/2019',
      interessados: ['marcio costa'],
      descricao: 'teste',
      assunto: 'Licença'
    };

    const expectedResult = { data: [...mockProcessList, newProcess] };

    // then
    expect(
      processList({ data: mockProcessList }, addProcessOnList(newProcess))
    ).toEqual(expectedResult);
  });

  it('should delete an item of process list', () => {
    // given
    const deleteProcessAction = process => {
      return {
        type: DELETE_PROCESS,
        process
      };
    };
    const processToDelete = {
      id: '8c44c62f-927a-42e3-976b-8685be15ac74',
      numero: 'SOFT 2019/00005',
      entrada: '22/10/2019',
      interessados: ['marcio costa'],
      descricao: 'teste',
      assunto: 'Licença'
    };
    const mockState = {
      data: [...mockProcessList, processToDelete],
      isProcessQueryLoading: null
    };

    const expectedResult = {
      data: [...mockProcessList],
      isProcessQueryLoading: null
    };

    // then
    expect(
      processList(mockState, deleteProcessAction(processToDelete))
    ).toEqual(expectedResult);
  });
});
