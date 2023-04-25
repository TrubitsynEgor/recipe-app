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
		}),
		getBySearchValue: build.query({
			query: (name) => `complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}&number=20`
		}),
		getById: build.query({
			query: (id) => `${id}/information?apiKey=${import.meta.env.VITE_API_KEY}&number=20`
		}),
		getByDiet: build.query({
			query: (name) => `complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&diet=${name}&number=20`
		}),


	})
})


export const {
	useGetRandomQuery,
	useGetByCountryNameQuery,
	useGetBySearchValueQuery,
	useGetByIdQuery,
	useGetByDietQuery
} = recipeQuery