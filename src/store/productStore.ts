import create from 'zustand'
import { persist } from 'zustand/middleware'

import { useFetchingData } from '../hooks/useFetchingData.ts' 
import { Product } from '../types/product.ts'

interface State {
    products: Array<Product>
    productsToShow: Array<Product>
    curentProduct: string
    slicer: number | null
}

interface Action {
    setSlicertoNumber: () => void
    setSlicertoNull: () => void
    setProducts: () => void
    setProductsToShow: () => void
    setCurentProduct: (id: string) => void
    findProductById: (id: Product['_id']) => Product | null;
}

export const useProductStore = create<State & Action>()(
    persist(
        (set, get) => ({
            products: [],
            productsToShow: [],
            slicer: 8,
            curentProduct: '',
            setProducts: async () => { 
                try {
                    await useFetchingData()
                    .then(response => set({ products: response }))
                    .then(() => get().setProductsToShow())
                }
                catch (error: any) {
                    throw new Error('Error fetching data: ' + error.message);
                }
            },
            setProductsToShow: () => {
                const productsData = get().products
                const lastIndex = get().slicer
                const productsToShow = lastIndex ? 
                    productsData?.sort((a:Product, b:Product) => b.discount - a.discount).slice(0, lastIndex) :
                    productsData?.sort((a:Product, b:Product) => b.discount - a.discount)
                set({ productsToShow: productsToShow })
            },
            setCurentProduct: (id) => {
                if (id) {
                    const curent =  get().findProductById(id)
                    const curentId = curent?._id
                    set({ curentProduct: curentId })
                } else {
                    set({ curentProduct: '' })
                }
            },
            findProductById: (id) => {
                const productArr = [...get().products]
                const curentProduct = productArr.find(el => el._id.toString() === id.toString())
                return curentProduct || null
            },
            setSlicertoNull: () => {
                set({ slicer: null })
            },
            setSlicertoNumber: () => {
                set({ slicer: 8 })
            }
        }),
        {
            name: 'products',
            getStorage: () => sessionStorage,
        }
    )
)