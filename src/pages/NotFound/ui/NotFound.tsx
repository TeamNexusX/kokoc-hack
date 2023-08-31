import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useEffect } from 'react';
import classes from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation('notFound');

    useEffect(() => {
        document.title = '404 | Не найдено';
    }, []);

    return (
        <Page className={classNames(classes.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};
