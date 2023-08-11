import create from 'zustand'
import { persist } from 'zustand/middleware'

import { useFetchingData } from '../hooks/useFetchingData' 
import { Product } from '../types/product'

interface State {
    products: Array<Product>
}

interface Action {
    setProducts: () => void
    findProductById: (id: Product['_id']) => Product | null;
}

export const useProductStore = create<State & Action>()(
    persist(
        (set, get) => ({
            products: [],
            setProducts: async () => { 
                try {
                    const data = await useFetchingData()
                    if (!data) return console.log('No data from server')
                    set({ products: data })
                }
                catch (error: any) {
                    throw new Error('Error fetching data: ' + error.message);
                }
            },
            findProductById: (id) => {
                const productArr = [...get().products]
                const curentProduct = productArr.find(el => el._id.toString() === id.toString())
                return curentProduct || null
            }
        }),
        {
            name: 'products',
            getStorage: () => sessionStorage,
        }
    )
)