import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo, ReactNode } from 'react';
import { Disclosure as HDisclosure, Transition } from '@headlessui/react';
import { Button } from 'shared/UI/Button';
import ArrowIcon from 'shared/assets/icons/expand_arrow.svg';
import { Icon } from 'shared/UI/Icon/Icon';
import { HStack } from 'shared/UI/Stack';
import classes from './Disclosure.module.scss';

interface DisclosureProps {
    className?: string;
    title: string;
    body: ReactNode;
}

export const Disclosure = memo((props: DisclosureProps) => {
    const { className, title, body } = props;

    return (
        <HDisclosure>
            {({ open }) => (
                <>
                    <HDisclosure.Button as={Fragment}>
                        <Button className={classes.button} variant="clear">
                            <HStack maxW align="center" justify="between">
                                <p>{title}</p>
                                <Icon
                                    Svg={ArrowIcon}
                                    className={classNames(
                                        classes.icon,
                                        { [classes.open]: open },
                                        [],
                                    )}
                                />
                            </HStack>
                        </Button>
                    </HDisclosure.Button>
                    <Transition
                        enter={classes.enter}
                        enterFrom={classes.enterFrom}
                        enterTo={classes.enterTo}
                        leave={classes.leave}
                        leaveFrom={classes.leaveFrom}
                        leaveTo={classes.leaveTo}
                    >
                        <HDisclosure.Panel className={classes.panel}>
                            {body}
                        </HDisclosure.Panel>
                    </Transition>
                </>
            )}
        </HDisclosure>
    );
});
