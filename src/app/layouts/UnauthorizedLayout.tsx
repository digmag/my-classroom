import { Html5Outlined } from "@ant-design/icons";
import { Flex, Layout, Typography } from "antd";
import type { PropsWithChildren } from "react";

const { Header, Content } = Layout
const { Title } = Typography

const UnauthorizedLayout = ({ children }: PropsWithChildren) => (
    <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Flex align="center" gap="middle" style={{ color: '#fff' }}>
                <Html5Outlined style={{ fontSize: '48px' }} />
                <Title level={2} style={{ margin: 0, color: '#fff' }}>Мой классрум</Title>
            </Flex>
        </Header>
        <Content>
            <Flex align="center" justify="center">
                {children}
            </Flex>
        </Content>
    </Layout>
)

export { UnauthorizedLayout }