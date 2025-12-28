import { setupWorker } from 'msw/browser'
import { loginHandler } from './loginHandler';

// Define your API mocks here
const handlers = [
  loginHandler,
];

// Create worker instance
export const worker = setupWorker(...handlers);

// Export handlers for server-side usage if needed
export { handlers };