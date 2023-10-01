import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useCallback, useEffect } from 'react';
import { Card } from 'shared/UI/Card';
import { Text } from 'shared/UI/Text';
import { HStack, VStack } from 'shared/UI/Stack';
import LinkIcon from 'shared/assets/icons/link.svg';
import { Button } from 'shared/UI/Button';
import { Disclosure } from 'shared/UI/Disclosure';
import { useSelector } from 'react-redux';
import { linkResult, loadLink } from 'pages/MainPage';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'shared/UI/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './ResultPage.module.scss';

interface ResultPageProps {
    className?: string;
}

const ResultPage = memo((props: ResultPageProps) => {
    const { className } = props;

    const link: string = new URLSearchParams(window.location.search).get('link') || '';
    const data = useSelector(linkResult);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!data) {
            dispatch(loadLink({ link }));
        }
    }, [data, dispatch, link]);

    if (!link) {
        navigate(RoutePath.main);
        return <div />;
    }

    const handleOriginLinkClick = useCallback(() => {
        window.open(link, '_blank');
    }, [link]);

    return (
        <Page className={classNames(classes.ResultPage, {}, [className])}>
            <VStack gap="32" maxW align="center" justify="start">
                <Card>
                    <HStack maxW justify="between" align="center">
                        <Text className={classes.title} text="Ссылка" />
                        <HStack gap="8">
                            <Text className={classes.text} text={link} />
                            <Button variant="clear" onClick={handleOriginLinkClick}>
                                <HStack>
                                    <Icon Svg={LinkIcon} className={classes.linkIcon} />
                                </HStack>
                            </Button>
                        </HStack>
                    </HStack>
                </Card>
                <Card>
                    <HStack maxW justify="between" align="center">
                        <Text className={classes.title} text="Категория" />
                        <Text className={classes.text} text={data?.category || ''} />
                    </HStack>
                </Card>
                <Card>
                    <HStack maxW justify="between" align="center">
                        <Text className={classes.title} text="Тема" />
                        <Text className={classes.text} text={data?.theme || ''} />
                    </HStack>
                </Card>
                <Card align="start">
                    <Disclosure
                        title="Краткое содержание"
                        body={<p>{data?.description || ''}</p>}
                    />
                </Card>
                <Card>
                    <HStack maxW justify="between" align="center">
                        <Text className={classes.title} text="Информация о домене" />
                        <Text className={classes.text} text={data?.domainInfo || ''} />
                    </HStack>
                </Card>

                <Button
                    className={classes.backButton}
                    onClick={() => navigate(RoutePath.main)}
                >
                    Вернуться назад
                </Button>
            </VStack>
        </Page>
    );
});

export default ResultPage;
