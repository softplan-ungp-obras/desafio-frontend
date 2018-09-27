import Api from './api'

class HistoricProvider {
  static all() {
    return Api.request('historic', { method: 'GET' })
  }
}

export default HistoricProvider
