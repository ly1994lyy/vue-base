import type { loginDto } from '@/types/auth'
import request from '@/utils/http'

export function loginApi(data: loginDto) {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}
