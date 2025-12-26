import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider
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