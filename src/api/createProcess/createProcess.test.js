import mockAxios from 'axios';
import createProcess from './createProcess';
import BASE_URL from '../config';

const mockResult = '201';
const mockBadRequestResult = '400';

describe('Post a process on api', () => {
  it('should return a success status', async () => {
    // given
    const process = {
      descricao: 'Solicitação de licença-prêmio b',
      assunto: 'Licença',
      interessados: ['Edmilson Cherem']
    };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: mockResult
      })
    );
    const config = {
      'Content-Type': 'application/json'
    };

    // when
    const response = await createProcess(process);

    // then
    expect(response).toEqual(mockResult);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(
      BASE_URL,
      { ...process },
      config
    );
  });
  it('should return a failure status', async () => {
    // given
    const process = {
      descricao: 'Solicitação de licença-prêmio b'
    };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: mockBadRequestResult
      })
    );
    const config = {
      'Content-Type': 'application/json'
    };

    // when
    const response = await createProcess(process);

    // then
    expect(response).toEqual(mockBadRequestResult);
    expect(mockAxios.post).toHaveBeenCalledTimes(2);
    expect(mockAxios.post).toHaveBeenCalledWith(
      BASE_URL,
      { ...process },
      config
    );
  });
});
