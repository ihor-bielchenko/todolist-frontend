import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { Provider as ProviderTheme } from 'components/Theme';
import { Provider as ProviderStore } from 'components/Store';
import { Provider as ProviderLoader } from 'components/Loader';
import PageHome from 'pages/Home';
import GlobalStyles from './globalStyles.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<ProviderStore>
		<ProviderTheme>
			<BrowserRouter>
				<ProviderLoader>
					<Routes>
						<Route 
							index
							path=""
							element={<PageHome />} />
					</Routes>
				</ProviderLoader>
			</BrowserRouter>
		</ProviderTheme>
		<GlobalStyles />
	</ProviderStore>
);
