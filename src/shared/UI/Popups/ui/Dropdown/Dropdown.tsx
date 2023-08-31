import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBoxDirections } from 'shared/types/ui';
// eslint-disable-next-line fsd-path-checker-keyready/path-checker-fsd
import { AppLink } from 'shared/UI/AppLink';
import { directionsMapper } from '../../styles/consts';
import popupClasses from '../../styles/popups.module.scss';
import classes from './Dropdown.module.scss';

export interface DropdownItems {
    content?: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItems[];
    direction?: ListBoxDirections;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, trigger, items, direction = 'top left' } = props;

    const menuClasses = [directionsMapper[direction]];

    return (
        <Menu as="div" className={classNames(popupClasses.popup, {}, [className])}>
            <Menu.Button className={popupClasses.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(classes.items, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            className={classNames(classes.item, {
                                [popupClasses.active]: active,
                            })}
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                className={classes.link}
                                key={item.content}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={item.content}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
