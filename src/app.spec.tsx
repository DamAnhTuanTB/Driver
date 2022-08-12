import { screen } from '@testing-library/react';
import { App } from './app';
import { renderWithQueryClient } from './lib/test-helper';
import { mockServer } from './services/mocks';

beforeAll(() =>
  mockServer.listen({
    onUnhandledRequest: 'error',
  })
);
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

// the following is how to mock a remote modules if the code is not published
/* jest.mock(
  '@setel/webcommon/exposes/ajax',
  () => {
    return {
      __esModule: true,
      ajax: {
        get: function () {
          return new Promise((fulfill) =>
            fulfill({
              data: [
                {
                  name: 'pikachu',
                },
              ],
            })
          );
        },
      },
    };
  },
  { virtual: true }
); */

test('<App /> can render', async () => {
  renderWithQueryClient(<App />);
  expect(await screen.findByText(/Bulbasaur/)).toBeVisible();
});
