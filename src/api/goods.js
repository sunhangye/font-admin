import http from 'api/public'

export const login = (params) => {
  http.fetchPost('url', params)
}
