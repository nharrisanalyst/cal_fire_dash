import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GoatCounterTracker from './utilis/GoatCounterTracker.tsx'
import store from './store/store'

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client} >
    <Provider store={store}>
      <BrowserRouter>
        <GoatCounterTracker />
        <App />
      </BrowserRouter>
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
