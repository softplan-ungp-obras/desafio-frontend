import Api from './api'

class ProviderProcesses {
  static all() {
    return Api.request('/processo', { method: 'GET' })
  }
}

export default ProviderProcesses
