import { Button, Flex, Form, Input, Typography } from "antd"
import type { FormValues } from "../model"
import { useCallback } from "react"
import { useLogin } from "@/entities/Login"
import { storageUtils } from "@/shared/lib"
import { PATHS, STORAGE_KEYS } from "@/shared/constants"
import { useNavigate } from "react-router-dom"

const { Text } = Typography

const LoginForm = () => {
    const { mutateAsync, isPending } = useLogin();
    const navigate = useNavigate();
    const onFinish = useCallback(async (values: FormValues) => {
        const tokens = await mutateAsync(values)
        storageUtils.setItem(STORAGE_KEYS.TOKENS, tokens)
        navigate(PATHS.COURSE_LIST)
    }, [navigate, mutateAsync])
    const toRegistration = useCallback(() => navigate(PATHS.REGISTRATION), [])
    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
        >
            <Form.Item<FormValues>
                label="Логин"
                name="login"
                rules={[{ required: true, message: 'Введите логин' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль' }]}
            >
                <Input.Password />
            </Form.Item>
            <Flex vertical gap="small">
                <Flex align="center" justify="end">
                    <Text>В первый раз?</Text>
                    <Button htmlType="button" type="link" onClick={toRegistration}>
                        Регистрация
                    </Button>
                </Flex>
                <Flex gap="small" align="center" justify="end">
                    <Button htmlType="reset">Сбросить</Button>
                    <Button htmlType="submit" type="primary" loading={isPending}>Войти</Button>
                </Flex>
            </Flex>
        </Form>
    )
}

export { LoginForm }
