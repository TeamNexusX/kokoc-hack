import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import {
    alignsMapper,
    headerTagMapper,
    sizeMapper,
    variantsMapper,
} from '../types/TextMappers';
import { TextAlign, TextSize, TextVariant } from '../types/Text.types';
import classes from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    align?: TextAlign;
    size?: TextSize;
    variant?: TextVariant;
    bold?: boolean;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = 'left',
        size = 'large',
        variant = 'primary',
        bold = false,
    } = props;

    const variantsClasses = variantsMapper[variant];
    const alignsClasses = alignsMapper[align];
    const sizeClasses = sizeMapper[size];
    const HeaderTag = headerTagMapper[size];

    const add = [className, variantsClasses, alignsClasses, sizeClasses];

    return (
        <div className={classNames(classes.Text, {}, add)}>
            {title && (
                <HeaderTag
                    className={classNames(
                        classes.title,
                        {
                            [classes.bold]: bold,
                        },
                        [],
                    )}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={classNames(
                        classes.text,
                        {
                            [classes.bold]: bold,
                        },
                        [],
                    )}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
