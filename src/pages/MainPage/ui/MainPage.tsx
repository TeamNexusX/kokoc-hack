import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack, VStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import { SearchInput } from 'shared/UI/SearchInput';
import { useEffect, useState } from 'react';
import { Notification } from 'shared/UI/Notification';
import { Button } from 'shared/UI/Button';
import { toast } from 'react-toastify';
import classes from './MainPage.module.scss';

const MainPage = () => {
    const [value, setValue] = useState<string>('');

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

    return (
        <Page>
            <VStack maxH maxW align="center" justify="center">
                <Notification />

                <SearchInput
                    className={classes.input}
                    value={value}
                    onChange={setValue}
                    placeholder="Введите ссылку или просто нажмите CTRL+V в любом месте страницы..."
                />

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
