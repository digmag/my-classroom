import { LoginForm } from "@/widgets/Login"
import { Flex, Layout } from "antd"

const { Content, Header } = Layout

const LoginPage = () => {
    return (
        <Layout>
            <Header>
                Header
            </Header>
            <Content>
                <Flex align="center" justify="center">
                    <LoginForm />
                </Flex>
            </Content>
        </Layout>
    )
}

export { LoginPage }
