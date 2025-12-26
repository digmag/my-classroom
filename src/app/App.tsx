import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from '@/app/providers/AppProviders';
import { AppLayout } from '@/app/layouts/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppLayout />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;