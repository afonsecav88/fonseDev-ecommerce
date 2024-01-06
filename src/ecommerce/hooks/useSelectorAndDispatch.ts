import { RootState } from '../store/store'
import { useAppDispatch, useAppSelector } from './useConfigSelectorAndDispatch'

export const useSelectorAndDispatch = () => {
    const products = useAppSelector((state: RootState) => state.products)
    const dispatch = useAppDispatch()

    return {
        products,
        dispatch,
    }
}
