import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'
const cryptoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "a862968d1dmshaca3ffda322cd9ap168591jsn7faa54eade39",
}


const baseURL = "https://coinranking1.p.rapidapi.com/stats"

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/stats",
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "a862968d1dmshaca3ffda322cd9ap168591jsn7faa54eade39",
//   },
// };

const createRequest = (url)

export const cryptoApi =  createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl = baseURL,
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => '/exchanges'
        })
    })
    })
})