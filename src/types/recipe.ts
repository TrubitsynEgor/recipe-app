export interface IRecipeData {
	id: number
	title: string
	instructions: string
	extendedIngredients?: Ingredients[]
	image: string
	vegan: boolean
	vegetarian: boolean
	glutenFree: boolean
}

interface Ingredients {
	id: number
	name: string
	image: string
	original: string
}