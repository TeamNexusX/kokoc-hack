import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { VStack } from 'shared/UI/Stack';
import { FlexAlign } from 'shared/UI/Stack/Flex/Flex';
import classes from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
    align?: FlexAlign;
}

export const Card = memo((props: CardProps) => {
    const { className, children, align = 'center' } = props;

    return (
        <VStack
            maxW
            align={align}
            justify="start"
            className={classNames(classes.Card, {}, [className])}
        >
            {children}
        </VStack>
    );
});
