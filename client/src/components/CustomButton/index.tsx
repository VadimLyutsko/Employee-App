import React from 'react';
import {Button, Form} from 'antd';

type CustomButtonPropsType = {
    children: React.ReactNode
    htmlType?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
    type: "default" | "link" | "text" | "ghost" | "primary" | "dashed" | undefined
    danger?: boolean
    loading?: boolean
    shape?: 'default' | 'circle' | 'round' | undefined
    icon?: React.ReactNode
}

export const CustomButton: React.FC<CustomButtonPropsType> = ({
                                                                  children,
                                                                  htmlType = 'button',
                                                                  type,
                                                                  danger,
                                                                  loading,
                                                                  shape,
                                                                  icon
                                                              }) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
            >
                {children}
            </Button>
        </Form.Item>
    );
};

