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

export const getFavoriteLocalStorage = (key: string) => {
	const data = localStorage.getItem(key)
	if (data !== null) return JSON.parse(data)
	return {
		recipes: [],
		count: 0
	}
}

export const setLocalStorage = (key: string, data: LocalStorageData) => {
	localStorage.setItem(key, JSON.stringify(data))
}


export const getProfileStorage = (key: string) => {
	const storage = localStorage.getItem(key)
	if (storage !== null) {
		const data = JSON.parse(storage)
		return data
	}
	return ''
}