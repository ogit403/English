import { FC } from 'react';
import { Input, InputProps, Col } from 'antd';
import {
    Controller, FieldValues, UseControllerProps, Control
} from 'react-hook-form';

interface RHFTextFieldProps {
    status?: string;
    control: Control<Control, any>
    label?: string;
    colSpan?: number;
}

export const useRHFTextField = <T extends FieldValues>() => {
    const RHFTextField: FC<InputProps & RHFTextFieldProps & UseControllerProps<T>> = (props) => {
        const {
        control,
        name,
        placeholder,
        status = '',
        label,
        colSpan,
        ...rest
        } = props;


        return (
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Col span={colSpan}>
                        <span className="font-[600] font-main">{label}</span>
                        <Input {...field} status={status} placeholder={placeholder} {...rest} />
                    </Col>
                )}
            />
        )
    };

    return RHFTextField;
};
