import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/UI/Stack';
import { SearchInput } from 'shared/UI/SearchInput';
import { useCallback, useEffect, useState } from 'react';
import { Notification } from 'shared/UI/Notification';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/UI/Loader';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { mainPageReducer } from '../model/slice/MainPageSlice';
import classes from './MainPage.module.scss';
import { loadLink } from '../model/services/loadLink';
import { isLinkLoading, linkError, linkResult } from '../model/selectors/getPageInfo';

const reducers: ReducersList = {
    mainPage: mainPageReducer,
};

const MainPage = () => {
    const [value, setValue] = useState<string>('');

    const dispatch = useAppDispatch();

    const isLoading = useSelector(isLinkLoading);
    const error = useSelector(linkError);

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
            }
        };
        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    const handleFindLink = useCallback(() => {
        dispatch(loadLink({ link: value }));
    }, [dispatch, value]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <VStack maxH maxW align="center" justify="center">
                    <Notification />

                    {isLoading ? (
                        <Loader />
                    ) : (
                        <SearchInput
                            className={classes.input}
                            value={value}
                            onChange={setValue}
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
        </DynamicModuleLoader>
    );
};

export default MainPage;
