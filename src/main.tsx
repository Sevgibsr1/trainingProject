import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

// Google One Tap'i devre dışı bırak
if (window.google?.accounts) {
  window.google.accounts.id.cancel()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider 
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      onScriptLoadSuccess={() => {
        // Google One Tap özelliğini kapat
        window.google?.accounts.id.cancel()
      }}
    >
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
