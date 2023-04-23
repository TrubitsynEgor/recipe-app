import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipeQuery = createApi({
	reducerPath: 'recipeQuery',
	baseQuery: fetchBaseQuery({ baseUrl: `https://api.spoonacular.com/recipes/` }),
	endpoints: (build) => ({
		getRandom: build.query({
			query: () => `random?apiKey=${import.meta.env.VITE_API_KEY}&number=12`
		}),
		getByCountryName: build.query({
			query: (name) => `complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}&number=20`
		})

	})
})


export const { useGetRandomQuery, useGetByCountryNameQuery } = recipeQuery