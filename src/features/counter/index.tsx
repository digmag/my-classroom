import { useState } from 'react';
import { Button, Space, Typography } from 'antd';
import { ViteLogo } from '@/shared/ui/ViteLogo';
import { ReactLogo } from '@/shared/ui/ReactLogo';

const { Title, Text } = Typography;

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Space direction="vertical" align="center" size="large">
        <Space>
          <ViteLogo />
          <ReactLogo />
        </Space>
        <Title level={1}>Vite + React</Title>
        <div className="card">
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Text type="secondary">
            Edit files and save to test HMR
          </Text>
        </div>
        <Text className="read-the-docs" type="secondary">
          Click on the Vite and React logos to learn more
        </Text>
      </Space>
    </>
  );
};