import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useEffect } from 'react';
import classes from './UnauthorizedPage.module.scss';

interface UnauthorizedPageProps {
    className?: string;
}

export const UnauthorizedPage = ({ className }: UnauthorizedPageProps) => {
    const { t } = useTranslation('unauthorized');

    useEffect(() => {
        document.title = 'Авторизуйтесь';
    }, []);

    return (
        <Page className={classNames(classes.UnauthorizedPage, {}, [className])}>
            {t('Сначала нужно авторизоваться')}
        </Page>
    );
};
