import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NubelAiContextProvider } from './Context/NubelAi-Context/NubelAiContext.jsx'


createRoot(document.getElementById('root')).render(
  <NubelAiContextProvider>
    <App />
  </NubelAiContextProvider>,
)
