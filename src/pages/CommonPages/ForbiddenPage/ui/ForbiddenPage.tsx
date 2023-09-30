import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useEffect } from 'react';
import classes from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation('forbidden');

    useEffect(() => {
        document.title = '403 | Нет прав';
    }, []);

    return (
        <Page className={classNames(classes.ForbiddenPage, {}, [className])}>
            {t('У вас нет прав')}
        </Page>
    );
};
