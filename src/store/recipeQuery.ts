import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipeQuery = createApi({
	reducerPath: 'recipeQuery',
	baseQuery: fetchBaseQuery({ baseUrl: `https://api.spoonacular.com/recipes/` }),
	endpoints: (build) => ({
		getRandom: build.query({
			query: (num) => `random?apiKey=2389d97e9dad4363a7a43ae096c1ed08&number=${num}`
		}),
		getByCountryName: build.query({
			query: (name) => `complexSearch?apiKey=2389d97e9dad4363a7a43ae096c1ed08&cuisine=${name}&number=20`
		}),
		getBySearchValue: build.query({
			query: (name) => `complexSearch?apiKey=2389d97e9dad4363a7a43ae096c1ed08&query=${name}&number=20`
		}),
		getById: build.query({
			query: (id) => `${id}/information?apiKey=2389d97e9dad4363a7a43ae096c1ed08&number=1`
		}),
		getByDiet: build.query({
			query: (name) => `complexSearch?apiKey=2389d97e9dad4363a7a43ae096c1ed08&diet=${name}&number=20`
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