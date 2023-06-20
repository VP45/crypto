import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl= 'https://api.coingecko.com/api/v3';

const createRequest = (url) => ({ url })

export const gekoApi = createApi({
    reducerPath: 'gekoApi',
    baseQuery: fetchBaseQuery({  baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => createRequest('/exchanges?per_page=10&page=1')
        })
    })
})

export const {
    useGetExchangesQuery
} = gekoApi