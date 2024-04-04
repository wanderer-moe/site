import { createApiClient } from './openapi'
import xior from 'xior'

export const APIClient = createApiClient((method, url, params) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        credentials: 'include',
    }

    const options: RequestInit = { method, headers }

    if (params) {
        if (method === 'post' || method === 'put') {
            options.body = JSON.stringify(params.body)
        }
    }

    if (params?.path) {
        Object.entries(params.path).forEach(([key, value]) => {
            if (typeof value === 'string') {
                url = url.replace(`{${key}}`, value)
            }
        })
    }

    if (params?.query) {
        const queryParams = Object.entries(params.query)
            .map(([key, value]) => {
                const stringValue =
                    typeof value === 'string' ? value : String(value)
                return `${encodeURIComponent(key)}=${encodeURIComponent(stringValue)}`
            })
            .join('&')
        if (queryParams) {
            url += `?${queryParams}`
        }
    }

    const xiorInstance = xior.create()
    return xiorInstance
        .request({
            method,
            url,
            data: params,
            headers,
        })
        .then((res) => res.data)
})
