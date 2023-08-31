import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { USER_Cookie_KEY } from 'shared/const';
import Cookie from 'js-cookie';
import { AxiosError } from 'axios';

interface LoginByUsernameProps {
    login: string;
    password: string;
}

export const authByLogin = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByLogin', async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<User>('/api/login', authData);

        if (!response.data) {
            throw new Error();
        }

        Cookie.set(USER_Cookie_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return rejectWithValue(axiosError.response?.data);
    }
});
