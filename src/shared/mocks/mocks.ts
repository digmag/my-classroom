import { HttpResponse, http } from 'msw';
import { setupWorker } from 'msw/browser'

// Define your API mocks here
const handlers = [
  // Example API endpoint mock
  http.get('/api/example', () => {
    return HttpResponse.json({
        message: 'This is a mocked response',
        data: {
          id: 1,
          name: 'Example Item'
        }
      }
    );
  }),
];

// Create worker instance
export const worker = setupWorker(...handlers);

// Export handlers for server-side usage if needed
export { handlers };