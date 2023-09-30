import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RespondType } from '../types/RespondType';
import { loadLink } from '../services/loadLink';
import { MainPageSchema } from '../types/MainPageSchema';

const initialState: MainPageSchema = {
    isLoading: false,
};

export const MainPageSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadLink.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loadLink.fulfilled, (state, action: PayloadAction<RespondType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(loadLink.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                if (!action?.payload?.message) {
                    // @ts-ignore
                    state.error = action.payload.message;
                } else state.error = 'Непредвиденная ошибка: не пришло сообщение сервера';
            });
    },
});

export const { actions: mainPageActions } = MainPageSlice;
export const { reducer: mainPageReducer } = MainPageSlice;
