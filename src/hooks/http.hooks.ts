import { useCallback, useState } from "react"

type RequestType = {
    url: string,
    method?: string, 
    body?: any, 
    headers?: { [x: string]: string },
}

type ErrorMapType = {
    param: string,
    msg: string,
}

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async({ url, method = 'GET', body, headers = {} }: RequestType) => {
        setLoading(true)

        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, { method, body, headers })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Error Error!')
            }

            return data
        } catch (e: any) {
            setError(e.message)
            throw e
        } finally {
            setLoading(false)
        }
    }, [])

    const clearError = useCallback(() => {
        setError(null)
    }, [])
    
    return { loading, setLoading, request, error, clearError }
}
