import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './GlobalContext'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <BrowserRouter>
  <React.StrictMode>
    <GlobalState>
    <App />
    </GlobalState>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
)
