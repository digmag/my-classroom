import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from '@/app/providers/AppProviders';
import { AppLayout } from '@/app/layouts/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProviders>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </AppProviders>
    </QueryClientProvider>
  );
}

export default App;