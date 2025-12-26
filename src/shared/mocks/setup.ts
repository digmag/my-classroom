import { worker } from './mocks';

// Setup API mocking
async function setupMocks() {
  if (typeof window === 'undefined') {
    // Server-side environment, do nothing
    return;
  }

  if (typeof __API_MOCKING__ === 'undefined' || __API_MOCKING__) {
    // Enable API mocking only in development environment
    await worker.start({
      serviceWorker: {
        // Use the relative public URL for the worker
        url: './mockServiceWorker.js',
      },
      quiet: false, // Set to true to suppress MSW logs
      onUnhandledRequest: 'bypass', // Log unhandled requests
    });
  }
}

export { setupMocks };