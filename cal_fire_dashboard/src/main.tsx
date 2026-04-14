import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import GoatCounterTracker from './utilis/GoatCounterTracker.tsx'
import store from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GoatCounterTracker />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
