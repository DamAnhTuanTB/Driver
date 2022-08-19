import { App } from 'app';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './i18n/config';

export function bootstrap() {
    const queryClient = new QueryClient();

    ReactDOM.render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>,
        document.getElementById('app')
    );
}
