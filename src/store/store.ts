import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { recipeQuery } from './recipeQuery'
import { favoriteReducer } from './favoriteSlice'
import { authReducer } from './authSlice'
import { setLocalStorage } from '@/helpers/localeStorage'

const rootReducer = combineReducers({
	[recipeQuery.reducerPath]: recipeQuery.reducer,
	favorite: favoriteReducer,
	auth: authReducer,
})


export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeQuery.middleware)
})

store.subscribe(() => {
	setLocalStorage('favorite', store.getState().favorite)
	setLocalStorage('auth', store.getState().auth)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch