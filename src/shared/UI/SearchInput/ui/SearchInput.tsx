import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo, useCallback } from 'react';
import { HStack } from 'shared/UI/Stack';
import { Icon } from 'shared/UI/Icon/Icon';
import SearchIcon from 'shared/assets/icons/search-icon.svg';
import { Button } from 'shared/UI/Button/';
import classes from './SearchInput.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface SearchInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    onSearchClick?: () => void;
}

export const SearchInput = memo((props: SearchInputProps) => {
    const { className, onChange, value, placeholder, onSearchClick } = props;

    const onValueChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        },
        [onChange],
    );

    return (
        <HStack
            className={classNames(classes.wrapper, {}, [className])}
            maxW
            justify="between"
            align="center"
        >
            <input
                onChange={onValueChange}
                value={value}
                placeholder={placeholder}
                className={classes.input}
                type="text"
            />
            <Button onClick={onSearchClick} variant="clear" className={classes.button}>
                <Icon className={classes.icon} Svg={SearchIcon} />
            </Button>
        </HStack>
    );
});
