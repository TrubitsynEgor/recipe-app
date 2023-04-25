

export const getRecipeById = async (id: number) => {
	const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}&number=1`)
	const data = await response.json()
	return data
}