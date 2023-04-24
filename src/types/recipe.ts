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
export type IShortRecipeData = Pick<IRecipeData, 'id' | 'title' | 'image'>


export interface Ingredients {
	id: number
	name: string
	image: string
	original: string
	instructions: string
}