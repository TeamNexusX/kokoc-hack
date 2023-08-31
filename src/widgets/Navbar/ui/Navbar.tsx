import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { AppLink } from 'shared/UI/AppLink';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/UI/AppLink/ui/AppLink';
import { HStack } from 'shared/UI/Stack';
import { Button } from 'shared/UI/Button';
import { LoginFormLazy } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import classes from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    const dispatch = useAppDispatch();
    const userLoginData = useSelector(getUserAuthData);

    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    const handleLoginButtonClick = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    const handleLogoutButtonClick = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!userLoginData) {
        return (
            <HStack
                maxW
                justify="between"
                align="center"
                className={classNames(classes.Navbar, {}, [className])}
            >
                <Button onClick={handleLoginButtonClick} variant="inverted">
                    {t('Войти')}
                </Button>

                <LoginFormLazy
                    isModalOpened={isModalOpened}
                    setIsModalOpened={setIsModalOpened}
                />
            </HStack>
        );
    }

    return (
        <HStack
            maxW
            justify="between"
            align="center"
            className={classNames(classes.Navbar, {}, [className])}
        >
            <HStack maxW justify="start" className={classes.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.main}>
                    {t('Мой диск')}
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.drive}>
                    {t('Мои файлы')}
                </AppLink>
            </HStack>

            <Button onClick={handleLogoutButtonClick} variant="inverted">
                {t('Выйти')}
            </Button>
        </HStack>
    );
});
