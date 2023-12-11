
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import {
  RecoilRoot,
} from 'recoil';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </RecoilRoot>,
)
