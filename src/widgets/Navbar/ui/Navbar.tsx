import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from 'shared/UI/Stack';
import LogoIcon from 'shared/assets/icons/main-logo.svg';
import { Icon } from 'shared/UI/Icon/Icon';
import classes from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => (
    <HStack
        maxW
        justify="between"
        align="center"
        className={classNames(classes.Navbar, {}, [className])}
    >
        <Icon Svg={LogoIcon} />
    </HStack>
));
