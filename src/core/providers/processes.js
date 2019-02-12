import Api from './api'

class ProviderProcesses {
  static all(params) {
    return Api.request('/processo', { method: 'GET', params })
  }

  static process(id) {
    return Api.request(`/processo/${id}`, { method: 'GET' })
  }

  static create(data) {
    return Api.request('/processo', { method: 'POST', data })
  }

  static delete(id) {
    return Api.request(`/processo/${id}`, { method: 'DELETE' })
  }
}

export default ProviderProcesses
