import { IUsersState } from '@/store/authSlice'
import { ProductsState } from '@/store/favoriteSlice'

type LocalStorageData = ProductsState | IUsersState

export const getLocalStorage = (key: string) => {
	const data = localStorage.getItem(key)
	if (data !== null) return JSON.parse(data)
	return {
		user: {
			id: '',
			email: '',
			isAuth: false
		}
	}
}

export const setLocalStorage = (key: string, data: LocalStorageData) => {
	localStorage.setItem(key, JSON.stringify(data))
}