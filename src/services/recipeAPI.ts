

export const getPopular = async () => {
	const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`)
	const data = await response.json()
	console.log(data);
}