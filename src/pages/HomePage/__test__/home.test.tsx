import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from '../Home';

describe('Test able to render', () => {
    test('able to render Home', async () => {
        setUp();
        expect(screen.queryByTestId('welcome-test')).not.toBeNull();
    });
    test('snap home', () => {
        const { asFragment } = setUp();

        expect(asFragment()).toMatchSnapshot();
    });

});

const setUp = () => {
    return render(
        <QueryClientProvider client={new QueryClient()}>
            <Home />
        </QueryClientProvider>
    );
};
