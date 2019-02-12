import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import getConfig from './config'
import { validateRequest, onResponseError } from '../interceptor'

const config = getConfig()
const BaseApi = axios.create(config)

BaseApi.interceptors.request.use(validateRequest)
BaseApi.interceptors.response.use(null, onResponseError)

BaseApi.request = (path, options) => {
  const mergedOptions = defaultsDeep(options, getConfig())

  return BaseApi(path, mergedOptions).then(resp => resp.data)
}

export default BaseApi
