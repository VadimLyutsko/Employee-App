import React from 'react';
import {Form, Input} from 'antd';

type CustomInputPropsType = {
    name: string
    placeholder: string
    type?: string
}

export const CustomInput: React.FC<CustomInputPropsType> = ({name, placeholder, type = 'text'}) => {
    return (
        <Form.Item name={name} rules={[{required:true,message:'Обязательное поле'}]} shouldUpdate={true}>
            <Input placeholder={placeholder} type={type} size={'large'}/>
        </Form.Item>
    );
};

