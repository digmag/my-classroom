import { Button, Flex, Form, Input } from "antd"
import type { FormValues } from "../model"
import { useCallback } from "react"
import { useRegistration } from "@/entities/Registration"
import { storageUtils } from "@/shared/lib"
import { PATHS, STORAGE_KEYS } from "@/shared/constants"
import { useNavigate } from "react-router-dom"

const RegistrationForm = () => {
    const { mutateAsync, isPending } = useRegistration();
    const navigate = useNavigate()
    const onFinish = useCallback(async (formValues: FormValues) => {
        const tokens = await mutateAsync(formValues)

        storageUtils.setItem(STORAGE_KEYS.TOKENS, tokens)

        navigate(PATHS.COURSE_LIST)
    }, [navigate, mutateAsync])
    return (
        <Form<FormValues>
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
        >
            <Form.Item<FormValues>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Обязательно для заполнения' }]}
            >
                <Input type="email" />
            </Form.Item>
            <Form.Item<FormValues>
                label="Логин"
                name="login"
                rules={[{ required: true, message: 'Обязательно для заполнения' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item<FormValues>
                label="ФИО"
                name="fullName"
                rules={[{ required: true, message: 'Обязательно для заполнения' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item<FormValues>
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Обязательно для заполнения' }]}
            >
                <Input.Password />
            </Form.Item>
            <Flex align="center" justify="end" gap="small">
                <Form.Item label={null}>
                    <Button htmlType="reset">
                        Сбросить
                    </Button>
                </Form.Item>
                <Form.Item label={null}>
                    <Button htmlType="submit" type="primary" loading={isPending}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Flex>
        </Form>
    )
}

export { RegistrationForm }