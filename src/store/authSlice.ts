import { getLocalStorage } from '@/helpers/localeStorage';
import { IUser } from '@/types';
import { createSlice } from '@reduxjs/toolkit';


export interface IUsersState {
	user: IUser
}
const initialState: IUsersState = getLocalStorage('auth')

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