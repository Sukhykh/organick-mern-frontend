import { axiosBasic } from '../../axiosConfig.ts'

export const useFetchingData = async () => {
    try {
        const response = await axiosBasic.get('products')
        return response.data
    } catch (err) {
        return console.log(err)
    }
}