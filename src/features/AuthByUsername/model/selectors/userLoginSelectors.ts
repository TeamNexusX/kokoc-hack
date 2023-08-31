import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthIsLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
export const getAuthPassword = (state: StateSchema) => state?.loginForm?.password || '';
export const getSignupFirstname = (state: StateSchema) =>
    state?.loginForm?.firstname || '';
export const getSignupLastname = (state: StateSchema) => state?.loginForm?.lastname || '';
export const getCurrentSex = (state: StateSchema) => state?.loginForm?.sex || 'male';
export const getAuthLogin = (state: StateSchema) => state?.loginForm?.login || '';
export const getAuthError = (state: StateSchema) => state?.loginForm?.error || '';
