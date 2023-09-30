import { StateSchema } from 'app/providers/StoreProvider';

export const isLinkLoading = (state: StateSchema) => state.mainPage?.isLoading;
export const linkError = (state: StateSchema) => state.mainPage?.error;
export const linkResult = (state: StateSchema) => state.mainPage?.data;
