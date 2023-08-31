import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { UnauthorizedPage } from 'pages/UnauthorizedPage';
import { DiskPage } from 'pages/DiskPage';

import { UserRoles } from 'entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRoles[];
};

export enum AppRoutes {
    MAIN = 'main',
    DRIVE = 'drive',
    // last
    NOT_FOUND = 'not_found',
    FORBIDDEN = 'forbidden',
    UNAUTHORIZED = 'unauthorized',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DRIVE]: '/mydrive',

    // last
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.UNAUTHORIZED]: '/unauthorized',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.DRIVE]: {
        path: RoutePath.drive,
        element: <DiskPage />,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
    },
    [AppRoutes.UNAUTHORIZED]: {
        path: RoutePath.unauthorized,
        element: <UnauthorizedPage />,
    },
};
