import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store.types'


const useAppSelector = useSelector.withTypes<RootState>()
const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export { useAppDispatch, useAppSelector }
