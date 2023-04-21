import { configureStore } from '@reduxjs/toolkit'
import { recipeQuery } from './recipeQuery'

export const store = configureStore({
	reducer: {
		[recipeQuery.reducerPath]: recipeQuery.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeQuery.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch