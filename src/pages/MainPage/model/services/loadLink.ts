import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { AxiosError } from 'axios';

interface LoadLinkInfoProps {
    link: string;
}

export const loadLink = createAsyncThunk<
    ResponseType,
    LoadLinkInfoProps,
    ThunkConfig<string>
>('mainPage/loadLink', async (link, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<ResponseType>('/api/load_link', link);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return rejectWithValue(axiosError.response?.data);
    }
});
