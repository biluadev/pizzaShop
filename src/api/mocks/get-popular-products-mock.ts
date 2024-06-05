import { http, HttpResponse } from 'msw'
import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
    never,
    never,
    GetPopularProductsResponse
>('/metrics/popular-products', () => {
    return HttpResponse.json([
        { product: 'pizza 01', amount: 5 },
        { product: 'pizza 02', amount: 15 },
        { product: 'pizza 03', amount: 25 },
        { product: 'pizza 04', amount: 35 },
        { product: 'pizza 05', amount: 45 },
    ])
})

