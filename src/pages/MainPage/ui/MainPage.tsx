import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack, VStack } from 'shared/UI/Stack';
import classes from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    const userData = useSelector(getUserAuthData);

    return (
        <Page>
            <div className={classes.greeting}>
                <h1>{`${t('Добрый день, ')}${userData?.firstname}`}</h1>
                <p>{t('Это ваш облачный диск - KrchkDrive')}</p>
            </div>
            <div className={classes.statistics}>
                <h2 className={classes.statTitle}>{t('Вот немного Вашей статистики')}</h2>
                <VStack
                    className={classes.statisticsBlock}
                    maxH
                    align="center"
                    justify="start"
                >
                    <HStack maxW justify="between" align="center" gap="16">
                        <div className={classes.cardPlaceholder} />
                        <div className={classes.cardPlaceholder} />
                        <div className={classes.cardPlaceholder} />
                    </HStack>
                    <HStack maxW justify="between" align="center" gap="16">
                        <div className={classes.cardPlaceholder} />
                        <div className={classes.cardPlaceholder} />
                        <div className={classes.cardPlaceholder} />
                    </HStack>
                </VStack>
            </div>
        </Page>
    );
};

export default MainPage;
