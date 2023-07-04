import { FC } from 'react';
import { Input, InputProps  } from 'antd';
import {
    Controller, FieldValues, UseControllerProps,
} from 'react-hook-form';

interface RHFTextFieldProps {
    status?: string;
}

export const useRHFTextField = <T extends FieldValues>() => {
    const RHFTextField: FC<InputProps & RHFTextFieldProps & UseControllerProps<T>> = (props) => {
        const {
        control,
        name,
        defaultValue,
        placeholder,
        status = '',
        ...rest
        } = props;


        return (
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <Input {...field} status={status} placeholder={placeholder} {...rest} />
                )}
            />
        )
    };

    return RHFTextField;
};
