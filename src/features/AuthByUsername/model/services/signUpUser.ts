import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { AxiosError } from 'axios';

interface SignUpUserProps {
    login: string;
    password: string;
    firstname: string;
    lastname: string;
    sex: string;
}

export const signupUser = createAsyncThunk<User, SignUpUserProps, ThunkConfig<string>>(
    'login/signupUser',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/api/signup', authData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            return rejectWithValue(axiosError.response?.data);
        }
    },
);
