import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipeQuery = createApi({
	reducerPath: 'recipeQuery',
	baseQuery: fetchBaseQuery({ baseUrl: `https://api.spoonacular.com/recipes/` }),
	endpoints: (build) => ({
		getRandom: build.query({
			query: () => `random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`
		})
	})
})


export const { useGetRandomQuery } = recipeQuery