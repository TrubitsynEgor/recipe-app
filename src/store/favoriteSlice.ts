import { getRecipeById } from '@/services/recipeAPI';
import { IRecipeData } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFavoriteLocalStorage } from '@/helpers/localeStorage';





export const addProductToFavorite = createAsyncThunk(
	'favorite/addProductToFavorite',
	async (id: number) => {
		const data = getRecipeById(id)

		return data
	}
)




export interface ProductsState {
	recipes: IRecipeData[]
	count: number
}
const initialState: ProductsState = getFavoriteLocalStorage('favorite')



export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		deleteFavorite(state, action) {
			state.recipes = state.recipes.filter(el => el.id !== action.payload)
			state.count -= 1
		}
	},

	extraReducers: (builder) => {
		builder.addCase(addProductToFavorite.fulfilled, (state, action) => {
			if (state.recipes.length === 0) {
				state.recipes.push({ ...action.payload, isFavorite: true })
				state.count += 1
			}
			if (!state.recipes.some(el => el.id === action.payload.id)) {
				state.recipes.push({ ...action.payload, isFavorite: true })
				state.count += 1
			}
		});

	}
})

export const { deleteFavorite } = favoriteSlice.actions

export const { reducer: favoriteReducer } = favoriteSlice