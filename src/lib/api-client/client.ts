import { createApiClient } from './openapi'
import xior from 'xior'

export const APIClient = createApiClient((method, url, params) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    const options: RequestInit = { method, headers }

    // add body to the request if it exists
    if (params) {
        if (method === 'post' || method === 'put') {
            options.body = JSON.stringify(params.body)
        }
    }

    // replace path parameters in the URL, e.g {id} => 390fbd24
    if (params?.path) {
        Object.entries(params.path).forEach(([key, value]) => {
            if (typeof value === 'string') {
                url = url.replace(`{${key}}`, value)
            }
        })
    }

    // append query parameters to the URL
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

    // xior because it actually has edge runtime support unlike axios & is lightweight
    // plus fetch was being a pain and complaining when path prameters existed in the URL
    // they follow a pretty similar API as-well
    const xiorInstance = xior.create()

    return xiorInstance
        .request({
            method,
            url,
            data: params,
            headers,
        })
        .then((res) => res.data)
        .catch((err) => {
            console.error('fetch error' + err)
        })
})

export const AuthAPIClient = createApiClient((method, url, params) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    const options: RequestInit = { method, headers }

    // add body to the request if it exists
    if (params) {
        if (method === 'post' || method === 'put') {
            options.body = JSON.stringify(params.body)
        }
    }

    // replace path parameters in the URL, e.g {id} => 390fbd24
    if (params?.path) {
        Object.entries(params.path).forEach(([key, value]) => {
            if (typeof value === 'string') {
                url = url.replace(`{${key}}`, value)
            }
        })
    }

    // append query parameters to the URL
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

    // xior because it actually has edge runtime support unlike axios & is lightweight
    // plus fetch was being a pain and complaining when path prameters existed in the URL
    // they follow a pretty similar API as-well
    const xiorInstance = xior.create()

    return xiorInstance
        .request({
            method,
            url,
            data: params,
            credentials: 'include',
            headers,
        })
        .then((res) => res.data)
        .catch((err) => {
            console.error('fetch error' + err)
        })
})
