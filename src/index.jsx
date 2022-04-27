import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { Provider as ProviderTheme } from 'components/Theme';
import { Provider as ProviderStore } from 'components/Store';
import { Provider as ProviderLoader } from 'components/Loader';
import { Provider as ProviderSnackbar } from 'components/Snackbar';
import { Provider as ProviderAuth } from 'components/Auth';
import PageHome from 'pages/Home';
import PageSignIn from 'pages/SignIn';
import GlobalStyles from './globalStyles.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<ProviderStore>
		<ProviderTheme>
			<BrowserRouter>
				<ProviderLoader>
					<ProviderSnackbar>
						<ProviderAuth>
							<Routes>
								<Route 
									index
									path="*"
									element={<PageHome />} />
								<Route 
									path={process.env.URL_PAGE_SIGN_IN}
									element={<PageSignIn />} />
							</Routes>
						</ProviderAuth>
					</ProviderSnackbar>
				</ProviderLoader>
			</BrowserRouter>
		</ProviderTheme>
		<GlobalStyles />
	</ProviderStore>
);
