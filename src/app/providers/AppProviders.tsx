import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider
      layout={{ style: { minHeight: '100vh' } }}
      theme={{
        token: {
          // Optional: customize theme here
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};