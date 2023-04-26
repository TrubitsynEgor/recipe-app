import { IUser } from '@/types';
import { createSlice } from '@reduxjs/toolkit';


interface IUsersState {
	user: IUser
}
const initialState: IUsersState = {
	user: {
		id: '',
		email: '',
		isAuth: false
	}
}

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginIn(state, action) {
			state.user = action.payload
		},
		loginOut(state) {
			state.user = {
				id: '',
				email: '',
				isAuth: false
			}
		}
	}
})


export const { loginIn, loginOut } = authSlice.actions
export const { reducer: authReducer } = authSlice