import { Html5Outlined } from "@ant-design/icons";
import { Flex, Layout, Typography } from "antd";
import type { PropsWithChildren } from "react";

const { Header, Content, Sider } = Layout
const { Title } = Typography

const AuthorizedLayout = ({ children }: PropsWithChildren) => {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Flex align="center" gap="middle" style={{ color: '#fff' }}>
                    <Html5Outlined style={{ fontSize: '48px' }} />
                    <Title level={2} style={{ margin: 0, color: '#fff' }}>Мой классрум</Title>
                </Flex>
            </Header>
            <Content>
                <Layout style={{ minHeight: '100%' }}>
                    <Sider></Sider>
                    <Content style={{ height: '90vh', maxHeight: '90vh', overflowY: 'auto' }}>
                        {children}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
}

export { AuthorizedLayout }