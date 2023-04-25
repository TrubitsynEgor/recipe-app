import { getRecipeById } from '@/services/recipeAPI';
import { IRecipeData, IShortRecipeData } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';






export const addProductToFavorite = createAsyncThunk(
	'products/addProductToFavorite',
	async (id: number) => {
		const data = getRecipeById(id)

		return data
	}
)




interface ProductsState {
	recipes: IRecipeData[]
	count: number
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
	recipes: [],
	count: 0,
	loading: 'idle',
} as ProductsState


export const favoriteSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		deleteFavorite(state, action) {
			state.recipes = state.recipes.filter(el => el.id !== action.payload)
		}
	},

	extraReducers: (builder) => {
		builder.addCase(addProductToFavorite.fulfilled, (state, action) => {
			if (state.recipes.length === 0) state.recipes.push(action.payload)
			if (state.recipes.some(el => el.id !== action.payload.id)) {
				state.recipes.push(action.payload)
			}
		});

	}
})

export const { deleteFavorite } = favoriteSlice.actions

export const { reducer: favoriteReducer } = favoriteSlice