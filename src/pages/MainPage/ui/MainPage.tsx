import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/UI/Stack';
import { SearchInput } from 'shared/UI/SearchInput';
import { useCallback, useEffect, useState } from 'react';
import { Notification } from 'shared/UI/Notification';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/UI/Loader';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams';
import { Button } from 'shared/UI/Button';
import { mainPageActions } from '../model/slice/MainPageSlice';
import classes from './MainPage.module.scss';
import { loadLink } from '../model/services/loadLink';
import { isLinkLoading, linkError } from '../model/selectors/getPageInfo';

const MainPage = () => {
    const [value, setValue] = useState<string>('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector(isLinkLoading);
    const error = useSelector(linkError);

    const handleValueChange = useCallback((value: string) => {
        setValue(value);
    }, []);

    const handleFindLink = useCallback(async () => {
        if (!value) {
            toast('Вы не ввели ссылку!', {
                type: 'error',
            });
        } else if (/^https?:\/\//.test(value)) {
            const result = await dispatch(loadLink({ link: value }));

            if (result.meta.requestStatus === 'fulfilled') {
                navigate(RoutePath.result);
                addQueryParams({ link: value });
            }
        } else {
            toast('Это не ссылка ;(', {
                type: 'error',
            });
        }
    }, [dispatch, navigate, value]);

    useEffect(() => {
        const keyDownHandler = async (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'v') {
                const text = await navigator.clipboard.readText();
                if (/^https?:\/\//.test(text)) {
                    setValue(text);
                    toast('Успешно!', { type: 'success' });
                } else {
                    toast('Ссылки должны начинаться с http или https', { type: 'error' });
                }
            } else if (event.ctrlKey && event.key === 'м') {
                const text = await navigator.clipboard.readText();
                if (/^https?:\/\//.test(text)) {
                    setValue(text);
                    toast(
                        'У Вас включена русская раскладка. Но ссылку мы все равно вставили',
                        { type: 'info' },
                    );
                } else {
                    toast('Ссылки должны начинаться с http или https', {
                        type: 'error',
                    });
                }
                return;
            }

            if (event.key === 'Enter') {
                await handleFindLink();
            }
        };
        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [handleFindLink]);

    const clearError = useCallback(() => {
        dispatch(mainPageActions.setError(''));
        setValue('');
    }, [dispatch]);

    if (error) {
        return (
            <Page className={classes.errorPage}>
                <h1 className={classes.error}>
                    На сервере произошла ошибка. Попробуйте другую ссылку
                </h1>
                <Button onClick={clearError}>Назад</Button>
            </Page>
        );
    }

    return (
        <Page>
            <VStack maxH maxW align="center"
justify="center">
                <Notification />

                {isLoading ? (
                    <Loader />
                ) : (
                    <SearchInput
                        className={classes.input}
                        value={value}
                        onChange={handleValueChange}
                        onSearchClick={handleFindLink}
                        placeholder="Введите ссылку или просто нажмите CTRL+V в любом месте страницы..."
                    />
                )}

                <img
                    className={classes.pict}
                    src="assets/images/main-pict.webp"
                    alt="Тут должна быть картинка..."
                />
            </VStack>
        </Page>
    );
};

export default MainPage;
