import axios from 'axios'

const DOMAIN = 'https://www.dnd5eapi.co/api'

export enum ENDPOINTS {
  MONSTERS_ENDPOINT = '/monsters',
}

async function makeRequest(
  url: string,
  method: 'get' | 'post' | 'delete' | 'put',
  additionalHeaders: Record<string, unknown> = {},
  requestBody: Record<string, unknown> = {}
) {
  const response = await axios({
    method,
    url: DOMAIN + url,
    headers: {
      ...additionalHeaders,
    },
    data: requestBody,
    validateStatus: (status) => status >= 200 && status < 400, // NOTE: Adding this since axios is handling 304 as error responses, ref: https://github.com/axios/axios/issues/703
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ResponsePromise = Promise<any>

export function get(endpoint: ENDPOINTS, subRoute: string = ''): ResponsePromise {
  return makeRequest(endpoint + subRoute, 'get')
}

export function post(
  endpoint: ENDPOINTS,
  requestBody: Record<string, unknown>,
  additionalHeaders: Record<string, unknown> = {},
  subRoute: string = ''
): ResponsePromise {
  return makeRequest(endpoint + subRoute, 'post', additionalHeaders, requestBody)
}
export function del(
  endpoint: ENDPOINTS,
  additionalHeaders: Record<string, unknown> = {},
  subRoute: string = ''
): ResponsePromise {
  return makeRequest(endpoint + subRoute, 'delete', additionalHeaders)
}
export function put(
  endpoint: ENDPOINTS,
  requestBody: Record<string, unknown>,
  additionalHeaders: Record<string, unknown> = {},
  subRoute: string = ''
): ResponsePromise {
  return makeRequest(endpoint + subRoute, 'put', additionalHeaders, requestBody)
}
