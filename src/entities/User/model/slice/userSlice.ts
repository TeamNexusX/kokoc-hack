import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_Cookie_KEY } from 'shared/const';
import Cookie from 'js-cookie';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            // при авторизации записать данные в стейт и в локал сторадж
            state.authData = action.payload;
            window.location.replace(RoutePath.main);
        },
        initAuthData: (state) => {
            // проверить, авторизован ли пользователь (после закрытия и открытия приложения)
            const user = Cookie.get(USER_Cookie_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            // выход
            Cookie.remove(USER_Cookie_KEY);
            window.location.replace(RoutePath.unauthorized);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
