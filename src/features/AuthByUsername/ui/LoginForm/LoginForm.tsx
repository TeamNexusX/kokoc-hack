import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button';
import { Input } from 'shared/UI/Input';
import { useSelector } from 'react-redux';
import { ChangeEvent, FormEvent, memo, useCallback, useState } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack, VStack } from 'shared/UI/Stack';
import { Modal } from 'shared/UI/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { authByLogin } from '../../model/services/authByLogin';
import { signupUser } from '../../model/services/signUpUser';
import classes from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import {
    getAuthError,
    getAuthIsLoading,
    getAuthLogin,
    getAuthPassword,
    getCurrentSex,
    getSignupFirstname,
    getSignupLastname,
} from '../../model/selectors/userLoginSelectors';

export interface LoginFormProps {
    className?: string;
    isModalOpened: boolean;
    setIsModalOpened: (value: boolean) => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, setIsModalOpened, isModalOpened } = props;

    const { t } = useTranslation();

    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const login = useSelector(getAuthLogin);
    const password = useSelector(getAuthPassword);
    const firstname = useSelector(getSignupFirstname);
    const lastname = useSelector(getSignupLastname);
    const currentSex = useSelector(getCurrentSex);
    const isLoading = useSelector(getAuthIsLoading);
    const error = useSelector(getAuthError);

    const setLogin = useCallback(
        (value: string) => {
            dispatch(loginActions.setLogin(value));
            dispatch(loginActions.setError(''));
        },
        [dispatch],
    );
    const setPassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
            dispatch(loginActions.setError(''));
        },
        [dispatch],
    );
    const setFirstname = useCallback(
        (value: string) => {
            dispatch(loginActions.setFirstname(value));
            dispatch(loginActions.setError(''));
        },
        [dispatch],
    );
    const setLastname = useCallback(
        (value: string) => {
            dispatch(loginActions.setLastname(value));
            dispatch(loginActions.setError(''));
        },
        [dispatch],
    );
    const setSex = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setSex(e.target.value));
            dispatch(loginActions.setError(''));
        },
        [dispatch],
    );

    const handleNewAccountCreateClick = useCallback(() => {
        dispatch(loginActions.setError(''));
        setIsSignUp(true);
    }, [dispatch]);

    const handleLoginSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const result = await dispatch(
                authByLogin({
                    login,
                    password,
                }),
            );

            if (result.meta.requestStatus === 'fulfilled') {
                setIsModalOpened(false);
                setPassword('');
                setLogin('');
            }
        },
        [dispatch, login, password, setIsModalOpened, setLogin, setPassword],
    );

    const handleSignUpSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const result = await dispatch(
                signupUser({
                    login,
                    password,
                    firstname,
                    lastname,
                    sex: currentSex,
                }),
            );

            if (result.meta.requestStatus === 'fulfilled') {
                setIsSignUp(false);
                setFirstname('');
                setLastname('');
            }
        },
        [
            currentSex,
            dispatch,
            firstname,
            lastname,
            login,
            password,
            setFirstname,
            setLastname,
        ],
    );

    const handleLoginAuthClick = useCallback(() => {
        setIsSignUp(false);
    }, []);

    if (isSignUp) {
        return (
            <DynamicModuleLoader reducers={initialReducers}>
                <Modal
                    title={t('Регистрация')}
                    isOpen={isModalOpened}
                    setIsOpen={setIsModalOpened}
                    className={classNames('', {}, [className])}
                >
                    <form onSubmit={handleSignUpSubmit}>
                        <VStack maxH align="stretch" justify="start">
                            <Input
                                value={login}
                                onChange={setLogin}
                                autoFocus
                                placeholder={t('Логин')}
                            />
                            <Input
                                value={password}
                                onChange={setPassword}
                                placeholder={t('Пароль')}
                                type="password"
                            />
                            <Input
                                value={firstname}
                                onChange={setFirstname}
                                placeholder={t('Имя')}
                            />
                            <Input
                                value={lastname}
                                onChange={setLastname}
                                placeholder={t('Фамилия')}
                            />
                            <div>
                                <input
                                    onChange={setSex}
                                    type="radio"
                                    name="sex"
                                    id="male"
                                    value="male"
                                    defaultChecked
                                />
                                <label htmlFor="male">{t('Мужской')}</label>
                            </div>

                            <div>
                                <input
                                    onChange={setSex}
                                    type="radio"
                                    name="sex"
                                    id="female"
                                    value="female"
                                />
                                <label htmlFor="female">{t('Женский')}</label>
                            </div>

                            <Button
                                disabled={isLoading}
                                className={classes.submitButton}
                                type="submit"
                            >
                                {t('Зарегистрироваться')}
                            </Button>

                            {error && <div>{`Ошибка авторизации: ${error}`}</div>}
                        </VStack>
                    </form>
                    <HStack className={classes.newAccount} maxW justify="center">
                        <p>{t('Уже есть аккаунт?')}</p>
                        <Button variant="clear" onClick={handleLoginAuthClick}>
                            {t('Авторизуйтесь')}
                        </Button>
                    </HStack>
                </Modal>
            </DynamicModuleLoader>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Modal
                title={t('Авторизация')}
                isOpen={isModalOpened}
                setIsOpen={setIsModalOpened}
                className={classNames('', {}, [className])}
            >
                <form onSubmit={handleLoginSubmit}>
                    <VStack maxH align="stretch" justify="start">
                        <Input
                            value={login}
                            onChange={setLogin}
                            autoFocus
                            placeholder={t('Логин')}
                        />
                        <Input
                            value={password}
                            onChange={setPassword}
                            placeholder={t('Пароль')}
                            type="password"
                        />
                        <Button
                            disabled={isLoading}
                            className={classes.submitButton}
                            type="submit"
                        >
                            {t('Вход')}
                        </Button>

                        {error && <div>{`Ошибка авторизации: ${error}`}</div>}
                    </VStack>
                </form>
                <HStack className={classes.newAccount} maxW justify="center">
                    <p>{t('Нет аккаунта?')}</p>
                    <Button variant="clear" onClick={handleNewAccountCreateClick}>
                        {t('Зарегистрируйтесь')}
                    </Button>
                </HStack>
            </Modal>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
