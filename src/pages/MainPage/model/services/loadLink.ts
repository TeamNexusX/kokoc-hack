import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { AxiosError } from 'axios';
import { RespondType } from '../types/RespondType';

interface LoadLinkInfoProps {
    link: string;
}

export const loadLink = createAsyncThunk<
    RespondType,
    LoadLinkInfoProps,
    ThunkConfig<string>
>('mainPage/loadLink', async (link, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<RespondType>('/check_domain', {
            url: link.link,
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return rejectWithValue(axiosError.response?.data);
    }
});
