import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signupUser } from '../services/signUpUser';
import { LoginSchema } from '../types/loginSchema';
import { authByLogin } from '../services/authByLogin';

const initialState: LoginSchema = {
    login: '',
    password: '',
    firstname: '',
    lastname: '',
    sex: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setFirstname: (state, action: PayloadAction<string>) => {
            state.firstname = action.payload;
        },
        setLastname: (state, action: PayloadAction<string>) => {
            state.lastname = action.payload;
        },
        setSex: (state, action: PayloadAction<string>) => {
            state.sex = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByLogin.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(authByLogin.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByLogin.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload.message;
            })

            .addCase(signupUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload.message;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
