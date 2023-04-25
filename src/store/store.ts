import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { recipeQuery } from './recipeQuery'
import { favoriteReducer } from './favoriteSlice'

const rootReducer = combineReducers({
	[recipeQuery.reducerPath]: recipeQuery.reducer,
	favorite: favoriteReducer
})


export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeQuery.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch