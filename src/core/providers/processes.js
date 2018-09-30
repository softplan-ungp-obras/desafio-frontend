import Api from './api'

class ProviderProcesses {
  static all(params) {
    return Api.request('/processo', { method: 'GET', params })
  }
}

export default ProviderProcesses
