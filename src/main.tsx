import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { createClient, Provider } from 'urql';
import 'react-toastify/dist/ReactToastify.css';
//  
const client = createClient({
  url: import.meta.env.VITE_API_URL || 'https://graphql-ymec.onrender.com/',
  exchanges: []
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
      <Provider value={client}>
        <App />
      </Provider>
    <ToastContainer />
  </React.StrictMode>,
)
