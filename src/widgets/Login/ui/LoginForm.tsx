import { Button, Flex, Form, Input } from "antd"
import type { FormValues } from "../model"
import { useCallback } from "react"
import { useLogin } from "@/entities/Login"
import { storageUtils } from "@/shared/lib"
import { STORAGE_KEYS } from "@/shared/constants"

const LoginForm = () => {
    const { mutateAsync, isPending } = useLogin();
    const onFinish = useCallback(async (values: FormValues) => {
        const tokens = await mutateAsync(values)
        storageUtils.setItem(STORAGE_KEYS.TOKENS, tokens)
    }, [])
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
            <Flex gap="small" align="center" justify="end">
                <Button htmlType="reset">Сбросить</Button>
                <Button htmlType="submit" type="primary" loading={isPending}>Войти</Button>
            </Flex>
        </Form>
    )
}

export { LoginForm }
